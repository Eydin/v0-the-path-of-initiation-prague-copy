"use client"

// Cross-links between the 4 Sacred Geometry workshop pages.
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const SERIES = [
  { slug: "sacred-geometry", title: "Sacred Geometry I" },
  { slug: "sacred-geometry-2", title: "Sacred Geometry II" },
  { slug: "sacred-geometry-3", title: "Sacred Geometry III" },
  { slug: "sacred-geometry-4", title: "Sacred Geometry IV" },
] as const

export function SacredGeometrySeriesLinks({ current }: { current: (typeof SERIES)[number]["slug"] }) {
  const t = useTranslations("SacredGeometrySeriesLinks")
  const others = SERIES.map((s, i) => ({ ...s, blurb: t(`blurbs.${i}`) })).filter((s) => s.slug !== current)

  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-center font-serif text-sm uppercase tracking-[0.3em] text-primary">
              {t("heading")}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group flex h-full flex-col justify-between gap-3 rounded-lg border border-primary/15 bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-primary/50"
                >
                  <div>
                    <h3 className="mb-1.5 font-serif text-lg tracking-wide text-foreground transition-colors group-hover:text-primary">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm tracking-wide text-primary transition-colors group-hover:text-gold-light">
                    {t("learnMore")}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
