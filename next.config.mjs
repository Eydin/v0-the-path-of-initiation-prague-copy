import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

// Local dev server only (`next dev`); the production build on Vercel is unaffected.
const isDev = process.env.NODE_ENV !== "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't keep Turbopack's compiled output on disk between dev-server restarts: the saved
  // cache kept serving stale CSS after globals.css or new Tailwind classes changed.
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Localized URLs for the static Samhain page: /cs|de|ro/samhain-weekend.html serve the same
  // file; the page picks its language from the URL prefix (same scheme as the rest of the site).
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/:locale(cs|de|ro)/samhain-weekend.html", destination: "/samhain-weekend.html" },
      ],
    }
  },
  async headers() {
    // In local development nothing may be cached by the browser (pages, CSS, images,
    // redirects), so every reload shows the current code.
    if (isDev) {
      return [{ source: "/:path*", headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }] }]
    }
    return ["/samhain-weekend.html", "/:locale(cs|de|ro)/samhain-weekend.html", "/wa-video.html"].map((source) => ({
      source,
      headers: [{ key: "Cache-Control", value: "no-cache, must-revalidate" }],
    }))
  },
}

export default withNextIntl(nextConfig)
