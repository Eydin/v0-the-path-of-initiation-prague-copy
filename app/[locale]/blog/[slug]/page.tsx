import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"
import { BlogArticleBody } from "@/components/blog-article-body"
import { BLOG_POSTS, getPostBySlug, formatPostDate, isPreviewMode, isReleased, hasTranslation } from "@/lib/blog/posts"
import { routing, type Locale } from "@/i18n/routing"

export const dynamic = "force-dynamic"

const SITE = "https://www.thepathofinitiationprague.com"

/** e.g. localizedPostUrl("cs", "magick") -> ".../cs/blog/magick"; English stays unprefixed. */
function localizedPostUrl(locale: Locale, slug: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`
  return `${SITE}${prefix}/blog/${slug}`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getPostBySlug(slug, locale)
  if (!post) return {}

  const translated = hasTranslation(post, locale)
  const url = localizedPostUrl(locale, post.slug)
  // Untranslated posts always canonicalize to the unprefixed English URL, to
  // avoid indexing near-duplicate content under /cs, /de, /ro. Once a post is
  // translated, its own localized URL becomes canonical and gets full hreflang
  // alternates across every locale that has a translation.
  const canonical = translated ? url : localizedPostUrl(routing.defaultLocale, post.slug)
  const image = `${SITE}/images/art/${post.coverImage}`

  return {
    title: `${post.title} | The Path of Initiation Prague`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical,
      ...(translated && {
        languages: Object.fromEntries(
          routing.locales
            .filter((l) => hasTranslation(post, l))
            .map((l) => [l, localizedPostUrl(l, post.slug)]),
        ),
      }),
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.releaseDate,
      images: [{ url: image, width: 1080, height: 675, alt: post.title }],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}) {
  const { locale, slug } = await params
  const post = getPostBySlug(slug, locale)
  if (!post) notFound()

  const t = await getTranslations("BlogPostPage")

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && getPostBySlug(p.slug, locale) && p.category === post.category,
  )
    .map((p) => getPostBySlug(p.slug, locale)!)
    .slice(0, 2)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.releaseDate,
    image: `${SITE}/images/art/${post.coverImage}`,
    url: localizedPostUrl(locale, post.slug),
    keywords: post.keywords.join(", "),
    author: {
      "@type": "Person",
      name: "Radu Coman",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "The Path of Initiation Prague",
      url: SITE,
    },
  }

  const preview = isPreviewMode()
  const scheduled = !isReleased(post)
  const notReady = !post.readyToPost
  const showBanner = preview && (scheduled || notReady)

  let bannerText = ""
  if (scheduled && notReady) {
    bannerText = t("bannerScheduledAndNotReady", { date: formatPostDate(post.releaseDate) })
  } else if (scheduled) {
    bannerText = t("bannerScheduled", { date: formatPostDate(post.releaseDate) })
  } else if (notReady) {
    bannerText = t("bannerNotReady")
  }

  return (
    <>
      <Header />
      {showBanner && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-black">
          {bannerText}
        </div>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={`relative min-h-screen pt-20 ${showBanner ? "mt-9" : ""}`}>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative flex min-h-[60vh] items-end overflow-hidden">
          <ParallaxImage src={`/images/art/${post.coverImage}`} alt="" position="center 30%" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16">
            <ScrollReveal>
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {t("allArticles")}
              </Link>
              <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">
                {post.category}
              </p>
              <h1 className="mb-6 font-serif text-3xl leading-tight tracking-wide text-foreground md:text-5xl text-balance">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span>{formatPostDate(post.releaseDate)}</span>
                <span aria-hidden>·</span>
                <span>{post.readTime}</span>
                <span aria-hidden>·</span>
                <span>The Path of Initiation Prague</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────────────────── */}
        <section className="relative py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <BlogArticleBody content={post.content} />
            </ScrollReveal>
          </div>
        </section>

        {/* ── Related ───────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="relative py-12">
            <div className="mx-auto max-w-3xl border-t border-primary/15 px-6 pt-12">
              <ScrollReveal>
                <p className="mb-6 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                  {t("continueReading")}
                </p>
                <div className="flex flex-col gap-4">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group flex items-center justify-between gap-4 rounded-lg border border-primary/15 bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-primary/50"
                    >
                      <span className="font-serif text-lg tracking-wide text-foreground transition-colors group-hover:text-primary">
                        {p.title}
                      </span>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-primary/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="relative py-20 lg:py-28">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
            <ScrollReveal>
              <div className="mx-auto mb-6 h-px w-16 bg-primary/60" />
              <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                {t("ctaHeading")}
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {t("ctaBody")}
              </p>
              <a
                href="https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20read%20a%20blog%20post%20and%20would%20like%20to%20learn%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                {t("ctaButton")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
