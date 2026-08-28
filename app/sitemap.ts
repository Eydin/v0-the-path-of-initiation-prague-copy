import type { MetadataRoute } from "next"
import { getPublishedPosts, hasTranslation } from "@/lib/blog/posts"
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

  // Most post bodies aren't translated, so they stay English-only and
  // unprefixed to avoid indexing near-duplicate content. Posts that do have a
  // translations field get one entry per translated locale, with hreflang
  // alternates, same as the core routes above.
  const postEntries: MetadataRoute.Sitemap = getPublishedPosts().flatMap((post) => {
    const translatedLocales = routing.locales.filter((l) => hasTranslation(post, l))
    if (translatedLocales.length <= 1) {
      // English-only: just the one canonical, unprefixed URL.
      return [
        {
          url: `${SITE}/blog/${post.slug}`,
          lastModified: post.releaseDate,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        },
      ]
    }
    return translatedLocales.map((locale) => ({
      url: localizedUrl(locale, `/blog/${post.slug}`),
      lastModified: post.releaseDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          translatedLocales.map((l) => [l, localizedUrl(l, `/blog/${post.slug}`)]),
        ),
      },
    }))
  })

  return [...coreEntries, ...postEntries]
}
