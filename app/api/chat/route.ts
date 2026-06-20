import { streamText } from "ai"
import { SYSTEM_PROMPT } from "@/lib/chatbot/knowledge"
import { CHAT_MODEL } from "@/lib/chatbot/config"

// Runs as a Vercel Function. The model is reached through the Vercel AI Gateway
// (provider/model string), which authenticates automatically on Vercel via the
// deployment's OIDC token — no API key env var is required in production. For a
// pinned key (or local dev) set AI_GATEWAY_API_KEY.
export const maxDuration = 30

type ChatMessage = { role: "user" | "assistant"; content: string }

function sanitize(messages: unknown): ChatMessage[] {
  if (!Array.isArray(messages)) return []
  return messages
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        typeof m === "object" &&
        (m as ChatMessage).role !== undefined &&
        ((m as ChatMessage).role === "user" || (m as ChatMessage).role === "assistant") &&
        typeof (m as ChatMessage).content === "string" &&
        (m as ChatMessage).content.trim().length > 0,
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))
    .slice(-12) // keep the last few turns only
}

export async function POST(req: Request) {
  let messages: ChatMessage[]
  try {
    const body = await req.json()
    messages = sanitize(body?.messages)
  } catch {
    return new Response("Invalid request", { status: 400 })
  }

  if (messages.length === 0) {
    return new Response("No message provided", { status: 400 })
  }

  try {
    const result = streamText({
      model: CHAT_MODEL,
      system: SYSTEM_PROMPT,
      messages,
      maxOutputTokens: 800,
      temperature: 0.4,
    })

    return result.toTextStreamResponse()
  } catch (err) {
    console.error("[chat] streamText failed:", err)
    // The widget detects a non-OK response and surfaces the WhatsApp handoff.
    return new Response("The assistant is unavailable right now.", { status: 503 })
  }
}
