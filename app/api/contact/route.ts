import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"
import { routing } from "@/i18n/routing"
import { customerConfirmationEmail, ownerNotificationEmail } from "@/lib/email/contact-templates"

const FROM_ADDRESS = process.env.RESEND_FROM_EMAIL || "The Path of Initiation Prague <onboarding@resend.dev>"

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email(),
  message: z.string().trim().min(1).max(4000),
  context: z.string().trim().max(300).optional().default(""),
  locale: z.enum(routing.locales as unknown as [string, ...string[]]),
})

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured")
    return NextResponse.json({ error: "email_not_configured" }, { status: 500 })
  }

  let data: z.infer<typeof schema>
  try {
    const body = await req.json()
    data = schema.parse(body)
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 })
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
      console.error("[contact] failed to notify owner:", ownerResult.reason)
      return NextResponse.json({ error: "send_failed" }, { status: 502 })
    }
    if (confirmationResult.status === "rejected") {
      console.error("[contact] failed to confirm to sender:", confirmationResult.reason)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[contact] unexpected error:", err)
    return NextResponse.json({ error: "send_failed" }, { status: 500 })
  }
}
