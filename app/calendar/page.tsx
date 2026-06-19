"use client"

import Link from "next/link"
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  getUpcomingEventsByMonth,
  formatEventDate,
  parseLocalDate,
} from "@/lib/schedule"

export default function CalendarPage() {
  const months = getUpcomingEventsByMonth()

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-[url('/images/art/starry-rhone-gogh.jpg')] bg-cover bg-fixed bg-center pt-20">
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-black/[0.85] to-black/[0.92]" />

        <div className="relative z-10">
          {/* Hero */}
          <section className="relative py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6">
              <ScrollReveal>
                <div className="mx-auto max-w-3xl text-center">
                  <p className="mb-3 font-serif text-sm uppercase tracking-[0.4em] text-primary">
                    The Path Ahead
                  </p>
                  <h1 className="mb-6 font-serif text-4xl tracking-wide text-primary md:text-5xl lg:text-6xl">
                    Calendar of Classes
                  </h1>
                  <div className="mx-auto mb-6 h-px w-16 bg-primary" />
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Every class, activation and workshop offered in Prague over the
                    coming months. Choose your next step on the path of initiation.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Months */}
          <section className="relative pb-24 lg:pb-32">
            <div className="mx-auto max-w-4xl px-6">
              {months.length === 0 && (
                <ScrollReveal>
                  <p className="text-center text-lg text-muted-foreground">
                    New dates are being scheduled. Please check back soon.
                  </p>
                </ScrollReveal>
              )}

              <div className="space-y-14">
                {months.map((group) => (
                  <ScrollReveal key={group.month}>
                    <div>
                      <div className="mb-6 flex items-center gap-4">
                        <h2 className="font-serif text-2xl tracking-wide text-primary md:text-3xl">
                          {group.month}
                        </h2>
                        <div className="h-px flex-1 bg-primary/20" />
                      </div>

                      <ul className="space-y-4">
                        {group.events.map((ev) => {
                          const date = parseLocalDate(ev.date)
                          const day = date.toLocaleDateString("en-GB", { day: "2-digit" })
                          const weekday = date.toLocaleDateString("en-GB", { weekday: "short" })
                          return (
                            <li key={`${ev.slug}-${ev.date}`}>
                              <Link
                                href={`/${ev.slug}`}
                                className="group flex items-stretch gap-5 rounded-lg border border-primary/20 bg-muted/50 p-5 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-muted/70"
                              >
                                {/* date chip */}
                                <div className="flex w-16 flex-shrink-0 flex-col items-center justify-center rounded-md border border-primary/30 bg-background/40 py-2">
                                  <span className="font-serif text-2xl leading-none text-primary">
                                    {day}
                                  </span>
                                  <span className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                                    {weekday}
                                  </span>
                                </div>

                                {/* details */}
                                <div className="flex flex-1 flex-col justify-center gap-1.5">
                                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <h3 className="font-serif text-lg tracking-wide text-foreground transition-colors group-hover:text-primary">
                                      {ev.title}
                                    </h3>
                                    {ev.duration && (
                                      <span className="rounded-full border border-primary/30 px-2.5 py-0.5 text-xs uppercase tracking-wider text-primary">
                                        {ev.duration}
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                    <span className="inline-flex items-center gap-1.5">
                                      <CalendarDays className="h-3.5 w-3.5 text-primary" />
                                      {formatEventDate(ev.date)}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                      <Clock className="h-3.5 w-3.5 text-primary" />
                                      {ev.time}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                      <MapPin className="h-3.5 w-3.5 text-primary" />
                                      {ev.location}
                                    </span>
                                  </div>
                                </div>

                                {/* arrow */}
                                <div className="flex items-center">
                                  <ArrowRight className="h-4 w-4 text-primary/60 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
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

              {/* footer CTA */}
              <ScrollReveal>
                <div className="mt-16 text-center">
                  <p className="mb-4 text-muted-foreground">
                    Not sure where to begin? Reach out and Radu will guide you personally.
                  </p>
                  <a
                    href="https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20ask%20about%20the%20upcoming%20classes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded border border-primary bg-primary px-8 py-3 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    Ask About a Class
                    <ArrowRight className="h-4 w-4" />
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
