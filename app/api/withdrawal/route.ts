import { NextResponse } from "next/server"
import { checkBotId } from "botid/server"
import { Resend } from "resend"
import { z } from "zod"
import { routing } from "@/i18n/routing"
import { HONEYPOT_FIELD, checkFormGuard } from "@/lib/form-guard"
import { customerConfirmationEmail, ownerNotificationEmail } from "@/lib/email/withdrawal-templates"

const FROM_ADDRESS = process.env.RESEND_FROM_EMAIL || "The Path of Initiation Prague <onboarding@resend.dev>"

const schema = z.object({
  services: z.string().trim().min(1).max(2000),
  orderDate: z.string().trim().max(100),
  orderNumber: z.string().trim().max(200),
  name: z.string().trim().min(1).max(200),
  address: z.string().trim().min(1).max(500),
  bankAccount: z.string().trim().min(1).max(200),
  email: z.string().trim().email(),
  locale: z.enum(routing.locales as unknown as [string, ...string[]]),
  [HONEYPOT_FIELD]: z.string().max(1000).optional(),
  elapsedMs: z.number(),
})

export async function POST(req: Request) {
  // Vercel BotID (see instrumentation-client.ts). A plain error rather than a
  // fake success, so a real person wrongly flagged sees the "try again / email
  // us" message instead of losing their message silently.
  const { isBot } = await checkBotId()
  if (isBot) {
    console.warn("[withdrawal] blocked a request that failed the bot check")
    return NextResponse.json({ error: "access_denied" }, { status: 403 })
  }

  let parsedBody: z.infer<typeof schema>
  try {
    const body = await req.json()
    parsedBody = schema.parse(body)
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 })
  }

  const { [HONEYPOT_FIELD]: honeypot, elapsedMs, ...data } = parsedBody
  const verdict = checkFormGuard({ honeypot, elapsedMs })
  if (verdict === "honeypot") {
    console.warn("[withdrawal] dropped a bot submission (hidden field filled in); nothing sent")
    return NextResponse.json({ success: true })
  }
  if (verdict === "too_fast") {
    console.warn(`[withdrawal] rejected a submission sent ${elapsedMs}ms after the form appeared`)
    return NextResponse.json({ error: "too_fast" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[withdrawal] RESEND_API_KEY is not configured")
    return NextResponse.json({ error: "email_not_configured" }, { status: 500 })
  }

  const resend = new Resend(apiKey)
  const parsed = { ...data, locale: data.locale as (typeof routing.locales)[number] }

  try {
    const owner = ownerNotificationEmail(parsed)
    const confirmation = customerConfirmationEmail(parsed)

    const [ownerResult, confirmationResult] = await Promise.allSettled([
      resend.emails.send({ from: FROM_ADDRESS, ...owner }),
      resend.emails.send({ from: FROM_ADDRESS, ...confirmation }),
    ])

    if (ownerResult.status === "rejected") {
      console.error("[withdrawal] failed to notify owner:", ownerResult.reason)
      return NextResponse.json({ error: "send_failed" }, { status: 502 })
    }
    if (confirmationResult.status === "rejected") {
      // The owner was notified, which is the legally-required part; the
      // customer confirmation is best-effort (e.g. sandbox sender restrictions).
      console.error("[withdrawal] failed to confirm to customer:", confirmationResult.reason)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[withdrawal] unexpected error:", err)
    return NextResponse.json({ error: "send_failed" }, { status: 500 })
  }
}
