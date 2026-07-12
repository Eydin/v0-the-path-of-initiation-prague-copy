import type { MetadataRoute } from "next"
import { getPublishedPosts } from "@/lib/blog/posts"

export const dynamic = "force-dynamic"

const SITE = "https://www.thepathofinitiationprague.com"

const STATIC_ROUTES = [
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

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE}${route}`,
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))

  const postEntries: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: post.releaseDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticEntries, ...postEntries]
}
