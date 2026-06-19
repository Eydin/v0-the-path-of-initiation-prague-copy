"use client"

import Link from "next/link"
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react"
import { getUpcomingDates, formatEventDate, SCHEDULE } from "@/lib/schedule"
import { ScrollReveal } from "./scroll-reveal"

// ── Inner card: the next two future dates for a class ─────────────────────
// Drops into a BookingBlock or any panel. No outer <section> padding.
export function UpcomingDates({
  slug,
  heading = "Next Dates in Prague",
}: {
  slug: string
  heading?: string
}) {
  const dates = getUpcomingDates(slug, 2)
  const cls = SCHEDULE.find((c) => c.slug === slug)
  if (!cls || dates.length === 0) return null

  return (
    <div className="rounded-lg border border-primary/30 bg-background/40 p-6 text-left backdrop-blur-sm md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <CalendarDays className="h-5 w-5 text-primary" />
        <p className="font-serif text-sm uppercase tracking-[0.3em] text-primary">{heading}</p>
      </div>

      <ul className="space-y-3">
        {dates.map((date) => (
          <li
            key={date}
            className="flex flex-col gap-1.5 border-b border-primary/10 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="font-serif text-lg tracking-wide text-foreground">
              {formatEventDate(date)}
            </span>
            <span className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                {cls.time}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {cls.location}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/calendar"
        className="mt-5 inline-flex items-center gap-2 text-sm tracking-wide text-primary transition-colors hover:text-gold-light"
      >
        See the full calendar
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  )
}

// ── Standalone section wrapper — for the bespoke (non-modality) pages ─────
export function UpcomingDatesSection({ slug }: { slug: string }) {
  if (getUpcomingDates(slug, 2).length === 0) return null
  return (
    <section className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <UpcomingDates slug={slug} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
