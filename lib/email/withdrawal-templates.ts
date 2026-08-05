import type { Locale } from "@/i18n/routing"

export interface WithdrawalRequest {
  services: string
  orderDate: string
  orderNumber: string
  name: string
  address: string
  bankAccount: string
  email: string
  locale: Locale
}

const CONTACT_EMAIL = "radu@thepathofinitiationprague.com"

export function ownerNotificationEmail(data: WithdrawalRequest) {
  const rows: [string, string][] = [
    ["Services", data.services],
    ["Order date", data.orderDate],
    ["Order number", data.orderNumber || "—"],
    ["Name", data.name],
    ["Address", data.address],
    ["Bank account for refund", data.bankAccount],
    ["Customer e-mail", data.email],
    ["Locale", data.locale],
  ]
  const text = [
    "New withdrawal notice submitted via the website.",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n")

  const html = `
    <h2 style="font-family:sans-serif">New Withdrawal Notice</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top">${label}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
  `

  return {
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject: `Withdrawal Notice — ${data.name}`,
    text,
    html,
  }
}

const CONFIRMATION_COPY: Record<Locale, { subject: string; body: string; signoff: string }> = {
  en: {
    subject: "We've received your withdrawal notice",
    body: "This confirms that we have received your notice of withdrawal from the contract for the following Services:",
    signoff: "We will process the refund in accordance with our General Terms and Conditions. If you have any questions, simply reply to this e-mail.",
  },
  cs: {
    subject: "Obdrželi jsme vaše odstoupení od smlouvy",
    body: "Potvrzujeme, že jsme obdrželi vaše odstoupení od smlouvy o poskytnutí těchto Služeb:",
    signoff: "Vrácení peněžních prostředků zpracujeme v souladu s našimi Všeobecnými obchodními podmínkami. Máte-li jakékoli dotazy, stačí odpovědět na tento e-mail.",
  },
  de: {
    subject: "Wir haben Ihre Widerrufserklärung erhalten",
    body: "Hiermit bestätigen wir den Erhalt Ihrer Widerrufserklärung für folgende Leistungen:",
    signoff: "Wir werden die Rückerstattung gemäß unseren Allgemeinen Geschäftsbedingungen bearbeiten. Bei Fragen antworten Sie einfach auf diese E-Mail.",
  },
  ro: {
    subject: "Am primit notificarea dumneavoastră de retragere",
    body: "Prin prezenta confirmăm că am primit notificarea dumneavoastră de retragere din contractul pentru următoarele Servicii:",
    signoff: "Vom procesa rambursarea în conformitate cu Termenii și Condițiile noastre Generale. Dacă aveți întrebări, răspundeți la acest e-mail.",
  },
}

export function customerConfirmationEmail(data: WithdrawalRequest) {
  const copy = CONFIRMATION_COPY[data.locale] ?? CONFIRMATION_COPY.en
  const text = [copy.body, "", data.services, "", copy.signoff].join("\n")
  const html = `
    <p style="font-family:sans-serif">${escapeHtml(copy.body)}</p>
    <p style="font-family:sans-serif;font-style:italic">${escapeHtml(data.services)}</p>
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
