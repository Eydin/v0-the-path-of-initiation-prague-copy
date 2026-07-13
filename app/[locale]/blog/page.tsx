import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { KenBurns } from "@/components/ken-burns"
import { getPublishedPosts, formatPostDate, isPreviewMode, isReleased } from "@/lib/blog/posts"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Blog | The Path of Initiation Prague",
  description:
    "Articles on King Salomon, Magick, Alchemy, Spagyrics and the living Modern Mystery School lineage — written to inform, uplift and bring hope.",
  keywords: [
    "Modern Mystery School blog",
    "King Salomon",
    "Magick",
    "Alchemy",
    "Spagyrics",
    "spiritual initiation Prague",
    "Lineage of King Salomon",
  ],
  openGraph: {
    title: "Blog | The Path of Initiation Prague",
    description:
      "Articles on King Salomon, Magick, Alchemy, Spagyrics and the living Modern Mystery School lineage.",
    url: "https://www.thepathofinitiationprague.com/blog",
    type: "website",
  },
}

export default function BlogIndexPage() {
  const posts = getPublishedPosts()
  const preview = isPreviewMode()

  return (
    <>
      <Header />
      {preview && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-black">
          Preview Mode — showing all posts, including those not yet scheduled and those you
          haven't marked ready. Visitors only ever see posts that are both released and
          approved.
        </div>
      )}
      <main className={`relative min-h-screen bg-[url('/images/art/starry-rhone-gogh.jpg')] bg-cover bg-fixed bg-center pt-20 ${preview ? "mt-9" : ""}`}>
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-black/70 via-black/85 to-black/95" />

        <div className="relative z-10">
          {/* ── Hero ──────────────────────────────────────────────── */}
          <section className="relative py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6">
              <ScrollReveal>
                <div className="mx-auto max-w-3xl text-center">
                  <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">
                    Wisdom For The Path
                  </p>
                  <h1 className="mb-6 font-serif text-4xl tracking-wide text-foreground md:text-5xl lg:text-6xl">
                    The Blog
                  </h1>
                  <div className="mx-auto mb-6 flex items-center justify-center gap-4">
                    <span className="h-px w-10 bg-primary/50" />
                    <span className="font-serif text-sm uppercase tracking-[0.25em] text-primary/90">
                      King Salomon · Magick · Alchemy
                    </span>
                    <span className="h-px w-10 bg-primary/50" />
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Reflections on lineage, practical magick and the alchemical tradition — written
                    to inform and to bring hope. New articles are released regularly; check back
                    often.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* ── Posts ─────────────────────────────────────────────── */}
          <section className="relative pb-24 lg:pb-32">
            <div className="mx-auto max-w-6xl px-6">
              {posts.length === 0 && (
                <ScrollReveal>
                  <p className="text-center text-lg text-muted-foreground">
                    The first article is being prepared. Please check back soon.
                  </p>
                </ScrollReveal>
              )}

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => (
                  <ScrollReveal key={post.slug} delay={(i % 3) * 0.1}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-lg border border-primary/15 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_8px_30px_-12px_rgba(212,175,55,0.35)]"
                    >
                      <KenBurns
                        src={`/images/art/${post.coverImage}`}
                        alt={post.title}
                        position="center 30%"
                        sizes="(max-width: 768px) 90vw, 30rem"
                        className="aspect-[16/10] w-full"
                      />
                      <div className="flex flex-1 flex-col gap-3 p-6">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-serif text-[0.7rem] uppercase tracking-[0.25em] text-primary/80">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                        <h2 className="font-serif text-xl leading-snug tracking-wide text-foreground transition-colors group-hover:text-primary">
                          {post.title}
                        </h2>
                        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <div className="mt-2 flex items-center justify-between border-t border-primary/10 pt-4">
                          <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                            {formatPostDate(post.releaseDate)}
                            {!isReleased(post) && post.readyToPost && (
                              <span className="rounded-full border border-amber-500/60 px-2 py-0.5 text-[0.6rem] tracking-wider text-amber-400">
                                Scheduled
                              </span>
                            )}
                            {!post.readyToPost && (
                              <span className="rounded-full border border-red-500/60 px-2 py-0.5 text-[0.6rem] tracking-wider text-red-400">
                                Needs Review
                              </span>
                            )}
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-primary/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
