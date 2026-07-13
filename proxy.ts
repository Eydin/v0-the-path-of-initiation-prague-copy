import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Exclude /api, Next internals, and any request for a file with an extension
  // (images, sitemap.xml, robots.txt, favicon, etc.) from locale routing.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
