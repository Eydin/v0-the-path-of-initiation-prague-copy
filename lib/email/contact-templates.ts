import type { Locale } from "@/i18n/routing"

export interface ContactRequest {
  name: string
  email: string
  message: string
  context: string
  locale: Locale
}

const CONTACT_EMAIL = "radu@thepathofinitiationprague.com"

export function ownerNotificationEmail(data: ContactRequest) {
  const rows: [string, string][] = [
    ["From", `${data.name} <${data.email}>`],
    ["Context", data.context || "General inquiry"],
    ["Locale", data.locale],
  ]
  const text = [
    "New message submitted via the website contact form.",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    data.message,
  ].join("\n")

  const html = `
    <h2 style="font-family:sans-serif">New Website Inquiry</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top">${label}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
    <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(data.message)}</p>
  `

  return {
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject: `Website inquiry — ${data.name}`,
    text,
    html,
  }
}

const CONFIRMATION_COPY: Record<Locale, { subject: string; body: string; signoff: string }> = {
  en: {
    subject: "We've received your message",
    body: "Thank you for reaching out — this confirms we've received your message:",
    signoff: "Radu will get back to you personally as soon as possible. If anything is urgent, feel free to reach out on WhatsApp too.",
  },
  cs: {
    subject: "Obdrželi jsme vaši zprávu",
    body: "Děkujeme, že jste nás kontaktovali — potvrzujeme, že jsme obdrželi vaši zprávu:",
    signoff: "Radu se vám osobně ozve co nejdříve. Pokud je to naléhavé, neváhejte nás kontaktovat také přes WhatsApp.",
  },
  de: {
    subject: "Wir haben Ihre Nachricht erhalten",
    body: "Vielen Dank für Ihre Nachricht — hiermit bestätigen wir den Erhalt:",
    signoff: "Radu meldet sich so schnell wie möglich persönlich bei Ihnen. Bei Dringlichkeit erreichen Sie uns auch gerne über WhatsApp.",
  },
  ro: {
    subject: "Am primit mesajul dumneavoastră",
    body: "Vă mulțumim că ne-ați contactat — confirmăm că am primit mesajul dumneavoastră:",
    signoff: "Radu vă va răspunde personal cât mai curând posibil. Dacă este ceva urgent, nu ezitați să ne contactați și pe WhatsApp.",
  },
}

export function customerConfirmationEmail(data: ContactRequest) {
  const copy = CONFIRMATION_COPY[data.locale] ?? CONFIRMATION_COPY.en
  const text = [copy.body, "", data.message, "", copy.signoff].join("\n")
  const html = `
    <p style="font-family:sans-serif">${escapeHtml(copy.body)}</p>
    <p style="font-family:sans-serif;font-style:italic;white-space:pre-wrap">${escapeHtml(data.message)}</p>
    <p style="font-family:sans-serif">${escapeHtml(copy.signoff)}</p>
  `
  return {
    to: data.email,
    subject: copy.subject,
    text,
    html,
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
