import { getFormatter, getTranslations } from "next-intl/server"
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { getAllUpcomingEvents, parseLocalDate } from "@/lib/schedule"
import { ScrollReveal } from "./scroll-reveal"
import { SparkleTrail } from "./sparkle-trail"

// Homepage calendar teaser: the next three events straight from lib/schedule.ts.
// The list is derived from today's date on every (re)render, so it moves on by
// itself as dates pass — the homepage sets `revalidate` so it is never frozen
// at build time. The whole block links to /calendar.
export async function CalendarWidgetSection() {
  const t = await getTranslations("CalendarWidget")
  const tCategories = await getTranslations("CalendarPage")
  const format = await getFormatter()
  const events = getAllUpcomingEvents().slice(0, 3)

  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <Link
            href="/calendar"
            className="home-box home-box-stars group block rounded-lg border border-primary/30 bg-card p-8 transition-all hover:border-primary/60"
          >
            <span aria-hidden className="shooting-star shooting-star--a" />
            <span aria-hidden className="shooting-star shooting-star--b" />
            <span aria-hidden className="shooting-star shooting-star--c" />
            <span aria-hidden className="stars-flicker stars-flicker--a" />
            <span aria-hidden className="stars-flicker stars-flicker--b" />
            <SparkleTrail />
            <div className="flex flex-col items-center gap-4 text-center">
              <CalendarDays className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <h3 className="font-serif text-2xl tracking-wide text-foreground md:text-3xl">{t("heading")}</h3>
                <p className="mt-2 text-muted-foreground">{t("body")}</p>
              </div>
            </div>

            {events.length > 0 && (
              <ul className="mt-8 grid gap-4 md:grid-cols-3">
                {events.map((ev) => {
                  const date = parseLocalDate(ev.date)
                  return (
                    <li
                      key={`${ev.slug}-${ev.date}`}
                      className="flex h-full flex-col gap-3 home-mini-card rounded-lg border border-primary/15 p-5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex w-16 flex-shrink-0 flex-col items-center justify-center rounded-md border border-primary/30 bg-background/50 py-2.5">
                          <span className="font-serif text-3xl leading-none text-primary">
                            {format.dateTime(date, { day: "2-digit", timeZone: "UTC" })}
                          </span>
                          <span className="mt-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                            {format.dateTime(date, { month: "short", timeZone: "UTC" })}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-serif text-[0.7rem] uppercase tracking-[0.25em] text-primary/70">
                            {tCategories(`categories.${ev.category}`)}
                          </p>
                          <h4 className="font-serif text-lg leading-tight tracking-wide text-foreground">{ev.title}</h4>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5 text-primary/70" />
                          {format.dateTime(date, { weekday: "long", timeZone: "UTC" })}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary/70" />
                          {ev.time}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-primary/70" />
                          {ev.location}
                        </span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}

            <div className="mt-8 text-center">
              <span className="inline-flex items-center gap-2 rounded border border-primary bg-primary px-6 py-3 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all group-hover:bg-primary/90">
                {t("button")}
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
