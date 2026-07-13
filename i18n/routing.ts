import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "cs", "de", "ro"],
  defaultLocale: "en",
  // English stays unprefixed at existing URLs (/life-activation, /calendar, ...);
  // cs/de/ro get prefixed (/cs/..., /de/..., /ro/...) to protect existing SEO/backlinks.
  localePrefix: "as-needed",
})

export type Locale = (typeof routing.locales)[number]
