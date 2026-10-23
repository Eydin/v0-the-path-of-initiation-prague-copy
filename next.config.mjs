import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

/** @type {import('next').NextConfig} */
const nextConfig = {
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
    return ["/samhain-weekend.html", "/:locale(cs|de|ro)/samhain-weekend.html", "/wa-video.html"].map((source) => ({
      source,
      headers: [{ key: "Cache-Control", value: "no-cache, must-revalidate" }],
    }))
  },
}

export default withNextIntl(nextConfig)
