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
  async headers() {
    return [
      {
        source: "/samhain-weekend.html",
        headers: [{ key: "Cache-Control", value: "no-cache, must-revalidate" }],
      },
    ]
  },
}

export default withNextIntl(nextConfig)
