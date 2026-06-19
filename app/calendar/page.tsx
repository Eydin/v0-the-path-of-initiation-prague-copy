"use client"

import Link from "next/link"
import { Clock, MapPin, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  getUpcomingEventsByMonth,
  getAllUpcomingEvents,
  parseLocalDate,
} from "@/lib/schedule"

export default function CalendarPage() {
  const months = getUpcomingEventsByMonth()
  const total = getAllUpcomingEvents().length

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-[url('/images/art/starry-rhone-gogh.jpg')] bg-cover bg-fixed bg-center pt-20">
        {/* lighter veil at the top so the painting reads, deepening down the page for legibility */}
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-black/70 via-black/85 to-black/95" />

        <div className="relative z-10">
          {/* ── Hero ──────────────────────────────────────────────── */}
          <section className="relative py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6">
              <ScrollReveal>
                <div className="mx-auto max-w-3xl text-center">
                  <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">
                    The Path Ahead
                  </p>
                  <h1 className="mb-6 font-serif text-4xl tracking-wide text-foreground md:text-5xl lg:text-6xl">
                    Calendar of Classes
                  </h1>
                  <div className="mx-auto mb-6 flex items-center justify-center gap-4">
                    <span className="h-px w-10 bg-primary/50" />
                    <span className="font-serif text-sm uppercase tracking-[0.25em] text-primary/90">
                      {total} Gatherings · Next 6 Months
                    </span>
                    <span className="h-px w-10 bg-primary/50" />
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Every activation, initiation and workshop held in Prague over the
                    coming season. Follow the path one step at a time.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* ── Months ────────────────────────────────────────────── */}
          <section className="relative pb-24 lg:pb-32">
            <div className="mx-auto max-w-3xl px-6">
              {months.length === 0 && (
                <ScrollReveal>
                  <p className="text-center text-lg text-muted-foreground">
                    New dates are being scheduled. Please check back soon.
                  </p>
                </ScrollReveal>
              )}

              <div className="space-y-16">
                {months.map((group) => (
                  <ScrollReveal key={group.month}>
                    <div>
                      {/* month header */}
                      <div className="mb-8 flex items-baseline gap-4">
                        <h2 className="font-serif text-2xl tracking-wide text-primary md:text-3xl">
                          {group.month}
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                        <span className="font-serif text-xs uppercase tracking-[0.25em] text-muted-foreground">
                          {group.events.length}{" "}
                          {group.events.length === 1 ? "class" : "classes"}
                        </span>
                      </div>

                      {/* the path spine + nodes */}
                      <ul className="relative space-y-5">
                        {/* vertical gold path running through the month */}
                        <span
                          aria-hidden
                          className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent"
                        />

                        {group.events.map((ev) => {
                          const date = parseLocalDate(ev.date)
                          const day = date.toLocaleDateString("en-GB", { day: "2-digit" })
                          const weekday = date.toLocaleDateString("en-GB", { weekday: "short" })
                          const isActivation = ev.category === "Activation"
                          return (
                            <li key={`${ev.slug}-${ev.date}`} className="relative pl-9">
                              {/* node on the path — filled for Activations, hollow for Healing */}
                              <span
                                aria-hidden
                                className={`absolute left-[3px] top-7 h-[11px] w-[11px] rotate-45 border border-primary transition-colors ${
                                  isActivation ? "bg-primary" : "bg-background"
                                }`}
                              />

                              <Link
                                href={`/${ev.slug}`}
                                className="group flex items-stretch gap-4 rounded-lg border border-primary/15 bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card/80 hover:shadow-[0_8px_30px_-12px_rgba(212,175,55,0.35)] sm:gap-5 sm:p-5"
                              >
                                {/* illuminated date seal */}
                                <div className="relative flex w-16 flex-shrink-0 flex-col items-center justify-center rounded-md border border-primary/30 bg-background/50 py-2.5 transition-colors group-hover:border-primary/60">
                                  <span className="absolute -inset-1.5 -z-10 rounded-md bg-primary/10 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                                  <span className="font-serif text-3xl leading-none text-primary">
                                    {day}
                                  </span>
                                  <span className="mt-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                                    {weekday}
                                  </span>
                                </div>

                                {/* details */}
                                <div className="flex flex-1 flex-col justify-center gap-2">
                                  <p className="font-serif text-[0.7rem] uppercase tracking-[0.25em] text-primary/70">
                                    {ev.category === "Activation"
                                      ? "Activation & Initiation"
                                      : "Healing & Workshop"}
                                  </p>
                                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <h3 className="font-serif text-lg leading-tight tracking-wide text-foreground transition-colors group-hover:text-primary">
                                      {ev.title}
                                    </h3>
                                    {ev.duration && (
                                      <span className="rounded-full border border-primary/25 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-wider text-primary/80">
                                        {ev.duration}
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                                    <span className="inline-flex items-center gap-1.5">
                                      <Clock className="h-3.5 w-3.5 text-primary/70" />
                                      {ev.time}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                      <MapPin className="h-3.5 w-3.5 text-primary/70" />
                                      {ev.location}
                                    </span>
                                  </div>
                                </div>

                                {/* affordance */}
                                <div className="flex items-center pr-1">
                                  <ArrowUpRight className="h-4 w-4 text-primary/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                                </div>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* legend + closing CTA */}
              <ScrollReveal>
                <div className="mt-16 border-t border-primary/15 pt-10 text-center">
                  <div className="mb-8 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-[10px] w-[10px] rotate-45 bg-primary" />
                      Activation
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-[10px] w-[10px] rotate-45 border border-primary bg-background" />
                      Healing
                    </span>
                  </div>
                  <p className="mb-5 text-muted-foreground">
                    Not sure where to begin? Reach out and Radu will guide you personally.
                  </p>
                  <a
                    href="https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20ask%20about%20the%20upcoming%20classes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded border border-primary bg-primary px-8 py-3 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    Ask About a Class
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
