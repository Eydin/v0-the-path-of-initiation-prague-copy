import { getFormatter, getTranslations } from "next-intl/server"
import { ArrowRight, Clock, MapPin, Sparkles } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { getAllUpcomingEvents, parseLocalDate, type ClassEvent } from "@/lib/schedule"
import { CalendarCarousel } from "./calendar-carousel"
import { ScrollReveal } from "./scroll-reveal"
import { SparkleTrail } from "./sparkle-trail"

const DAY_MS = 24 * 60 * 60 * 1000

/** YYYY-MM-DD of today + `offset` days (calendar dates, anchored at UTC like the schedule). */
function dayKey(offset: number): string {
  const now = new Date()
  const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) + offset * DAY_MS)
  return d.toISOString().slice(0, 10)
}

/** Where an event's card links: its own page (community evenings jump to their card). */
function hrefFor(ev: ClassEvent): string {
  return `/${ev.slug}`
}

// Homepage "Coming up in Prague": a 7-day strip (today first, a dot on every day with something on)
// and a scrollable carousel with a card for every upcoming event, each with a playful one-liner per
// kind of event. Everything comes from lib/schedule.ts and is recomputed on every (re)render, so it
// moves on by itself (the homepage sets `revalidate`).
export async function CalendarWidgetSection() {
  const t = await getTranslations("CalendarWidget")
  const tCategories = await getTranslations("CalendarPage")
  const format = await getFormatter()

  const days = Array.from({ length: 7 }, (_, i) => dayKey(i))
  const upcoming = getAllUpcomingEvents()
  const busyDays = new Set(upcoming.filter((ev) => ev.date <= days[6]).map((ev) => ev.date))

  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="home-box home-box-stars relative rounded-lg border border-primary/30 bg-card p-6 sm:p-8">
            <span aria-hidden className="shooting-star shooting-star--a" />
            <span aria-hidden className="shooting-star shooting-star--b" />
            <span aria-hidden className="shooting-star shooting-star--c" />
            <span aria-hidden className="stars-flicker stars-flicker--a" />
            <span aria-hidden className="stars-flicker stars-flicker--b" />
            <SparkleTrail />

            <div className="relative z-10 text-center">
              <p className="mb-2 font-serif text-xs uppercase tracking-[0.3em] text-primary sm:text-sm">{t("eyebrow")}</p>
              <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl">{t("headingNext")}</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t("bodyAll")}</p>
            </div>

            {/* the week at a glance: today first, a glowing dot where something is on */}
            <ol className="relative z-10 mx-auto mt-7 grid max-w-2xl grid-cols-7 gap-1.5 sm:gap-2" aria-label={t("weekLabel")}>
              {days.map((d, i) => {
                const date = parseLocalDate(d)
                const busy = busyDays.has(d)
                return (
                  <li
                    key={d}
                    className={`flex flex-col items-center rounded-md border py-2 ${
                      i === 0 ? "border-[#e3c36e]/70 bg-[#6e1426] shadow-[0_0_14px_rgba(133,25,47,0.7)]" : "border-primary/20 bg-background/30"
                    }`}
                  >
                    <span className={`text-[0.6rem] uppercase tracking-[0.15em] sm:text-[0.65rem] ${i === 0 ? "text-[#f2dc9a]" : "text-muted-foreground"}`}>
                      {i === 0 ? t("today") : format.dateTime(date, { weekday: "short", timeZone: "UTC" })}
                    </span>
                    <span className={`font-serif text-lg leading-tight sm:text-xl ${i === 0 ? "text-[#f2dc9a]" : "text-foreground"}`}>
                      {format.dateTime(date, { day: "numeric", timeZone: "UTC" })}
                    </span>
                    <span
                      aria-hidden
                      className={`mt-1 h-1.5 w-1.5 rounded-full ${busy ? "bg-primary shadow-[0_0_8px_2px_rgba(227,195,110,0.7)]" : "bg-transparent"}`}
                    />
                  </li>
                )
              })}
            </ol>

            {upcoming.length > 0 ? (
              <div className="relative z-10">
              <CalendarCarousel prevLabel={t("prev")} nextLabel={t("next")}>
                {upcoming.map((ev) => {
                  const date = parseLocalDate(ev.date)
                  const isToday = ev.date === days[0]
                  return (
                    <li key={`${ev.slug}-${ev.date}`} className="w-[17rem] shrink-0 snap-start sm:w-72">
                      <Link
                        href={hrefFor(ev)}
                        className="home-mini-card group flex h-full flex-col gap-2 rounded-lg border border-primary/20 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/60"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-serif text-[0.7rem] uppercase tracking-[0.25em] text-primary/80">
                            {tCategories(`categories.${ev.category}`)}
                          </span>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[0.7rem] ${
                              isToday ? "bg-primary text-primary-foreground" : "border border-primary/30 text-primary"
                            }`}
                          >
                            {isToday
                              ? t("today")
                              : format.dateTime(date, { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" })}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl leading-tight tracking-wide text-foreground">{ev.title}</h3>
                        <p className="text-sm italic leading-relaxed text-primary">{t(`vibe.${ev.category}`)}</p>
                        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-2 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-primary/70" />
                            {ev.time}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-primary/70" />
                            {ev.location}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm text-primary">
                          {t("join")}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </CalendarCarousel>
              </div>
            ) : (
              <p className="relative z-10 mt-7 text-center text-muted-foreground">{t("empty")}</p>
            )}

            <div className="relative z-10 mt-8 flex flex-col items-center gap-3">
              <Link
                href="/calendar"
                className="inline-flex items-center gap-2 rounded border border-primary bg-primary px-6 py-3 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              >
                {t("button")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                {t("footnote")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
