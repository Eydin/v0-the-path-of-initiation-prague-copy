// Central chatbot configuration. Shared by the API route and the chat widget.

/** WhatsApp number for Radu (digits only, international format). */
export const WHATSAPP_NUMBER = "420792908296"

/** Build a WhatsApp deep link with a pre-filled message. */
export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

/** Default WhatsApp handoff link shown in the chat widget. */
export const WHATSAPP_HANDOFF = waLink(
  "Hello Radu, I have a question about the Path of Initiation that I'd like to ask you personally.",
)

/** Display name of the assistant in the UI. */
export const ASSISTANT_NAME = "Guide"

/**
 * Model used by the chatbot, routed through the Vercel AI Gateway
 * (provider/model string). Override per-deployment with the CHAT_MODEL env var
 * — e.g. CHAT_MODEL="anthropic/claude-haiku-4.5" for lower cost.
 */
export const CHAT_MODEL = process.env.CHAT_MODEL || "anthropic/claude-sonnet-4.5"

/** Greeting shown when the chat panel is first opened. */
export const GREETING =
  "Welcome. I'm here to help you explore the Path of Initiation in Prague — the activations, healings, classes, and the lineage behind them. What would you like to know?"
