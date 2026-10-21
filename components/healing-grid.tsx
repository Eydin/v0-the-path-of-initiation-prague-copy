"use client"

import { ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { ScrollReveal } from "./scroll-reveal"
import { waLink } from "./modality"

export type Healing = {
  name: string
  description: string
  /** Optional small tag, e.g. "Foundation", "Advanced" */
  tag?: string
  /** When any of these are set, the card shows a price and/or Book Now /
   *  See Details buttons instead of the default single "inquire" link. */
  price?: string
  bookHref?: string
  detailsHref?: string
}

// ── A single healing card — either a priced/linked card (price and/or Book
// Now / See Details buttons), or the default card with a single "inquire"
// link ──────────────────────────────────────────────────────────────────
function HealingCard({ healing }: { healing: Healing }) {
  const t = useTranslations("HealingGrid")

  if (healing.price || healing.bookHref || healing.detailsHref) {
    return (
      <div className="flex h-full flex-col rounded-lg border border-primary/15 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/45 hover:bg-card/75">
        {healing.tag && (
          <span className="mb-3 inline-block w-fit rounded-full border border-primary/25 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-primary/80">
            {healing.tag}
          </span>
        )}
        <h3 className="font-serif text-lg leading-tight tracking-wide text-primary">{healing.name}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{healing.description}</p>
        {healing.price && (
          <p className="mt-4 font-serif text-base tracking-wide text-foreground">{healing.price}</p>
        )}
        {(healing.bookHref || healing.detailsHref) && (
          <div className="mt-4 flex flex-wrap gap-2.5">
            {healing.bookHref && (
              <a
                href={healing.bookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded border border-primary bg-primary px-4 py-2 text-xs uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
              >
                {t("bookNow")}
              </a>
            )}
            {healing.detailsHref && (
              <Link
                href={healing.detailsHref}
                className="inline-flex items-center justify-center gap-1 rounded border border-primary/40 px-4 py-2 text-xs uppercase tracking-wider text-primary transition-all hover:border-primary hover:bg-primary/10"
              >
                {t("details")}
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <a
      href={waLink(t("inquiryTemplate", { name: healing.name }))}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-lg border border-primary/15 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-card/75 hover:shadow-[0_10px_30px_-14px_rgba(212,175,55,0.4)]"
    >
      {healing.tag && (
        <span className="mb-3 inline-block w-fit rounded-full border border-primary/25 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-primary/80">
          {healing.tag}
        </span>
      )}
      <h3 className="font-serif text-lg leading-tight tracking-wide text-primary">{healing.name}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{healing.description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm tracking-wide text-primary/80 transition-colors group-hover:text-gold-light">
        {t("inquire")}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  )
}

// ── A titled group of healings ───────────────────────────────────────────
export function HealingGroup({
  title,
  blurb,
  items,
}: {
  title: string
  blurb?: string
  items: Healing[]
}) {
  return (
    <section className="relative py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-baseline gap-4">
              <h2 className="font-serif text-2xl tracking-wide text-primary md:text-3xl">{title}</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {items.length}
              </span>
            </div>
            {blurb && <p className="mb-8 max-w-3xl text-muted-foreground">{blurb}</p>}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((h) => (
                <HealingCard key={h.name} healing={h} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
