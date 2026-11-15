import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Exclude /api, Next internals, Vercel BotID's challenge/proxy paths (the
  // 149e9513-... prefix, rewritten by withBotId in next.config.mjs) and any
  // request for a file with an extension (images, sitemap.xml, robots.txt,
  // favicon, etc.) from locale routing.
  matcher: ["/((?!api|_next|_vercel|149e9513-01fa-4fb0-aad4-566afd725d1b|.*\\..*).*)"],
}
