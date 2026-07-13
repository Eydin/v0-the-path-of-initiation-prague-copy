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

/**
 * Model used by the chatbot, routed through the Vercel AI Gateway
 * (provider/model string). Override per-deployment with the CHAT_MODEL env var
 * — e.g. CHAT_MODEL="anthropic/claude-haiku-4.5" for lower cost.
 */
export const CHAT_MODEL = process.env.CHAT_MODEL || "google/gemini-3-flash"

/** Full language name per locale, used to instruct the assistant which language to reply in. */
export const LOCALE_NAMES: Record<string, string> = {
  en: "English",
  cs: "Czech",
  de: "German",
  ro: "Romanian",
}
