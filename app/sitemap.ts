import type { MetadataRoute } from "next"
import { getPublishedPosts } from "@/lib/blog/posts"
import { routing } from "@/i18n/routing"

export const dynamic = "force-dynamic"

const SITE = "https://www.thepathofinitiationprague.com"

const CORE_ROUTES = [
  "",
  "/lineage",
  "/community",
  "/calendar",
  "/testimonials",
  "/certifications",
  "/empower-thyself",
  "/life-activation",
  "/full-spirit-activation",
  "/healers-academy",
  "/ritual-master",
  "/healings",
  "/specialty-healings",
  "/aura-healing",
  "/sacred-geometry",
  "/astral-travel",
  "/spiritual-intuition",
  "/seven-mystery-schools",
  "/stress-management",
  "/blog",
]

function localizedUrl(locale: string, route: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`
  return `${SITE}${prefix}${route}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Core chrome routes get one entry per locale, each carrying the full
  // hreflang alternates map.
  const coreEntries: MetadataRoute.Sitemap = CORE_ROUTES.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, route),
      changeFrequency: (route === "/blog" ? "weekly" : "monthly") as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, localizedUrl(l, route)])),
      },
    })),
  )

  // Blog post bodies aren't translated yet, so posts stay English-only and
  // unprefixed — no locale variants, to avoid indexing near-duplicate content.
  const postEntries: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: post.releaseDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...coreEntries, ...postEntries]
}
