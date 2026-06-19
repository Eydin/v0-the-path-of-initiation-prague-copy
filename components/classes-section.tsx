"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Calendar, ArrowRight } from "lucide-react"

const classes = [
  {
    title: "Life Activation",
    description:
      "Awaken your divine blueprint and ignite the full potential encoded within your DNA. This is the foundational session of the mystery school lineage.",
    tag: "Foundation",
    link: "/life-activation"
  },
  {
    title: "Empower Thyself",
    description:
      "A 2-day initiation program where you receive the sacred tools and teachings to take command of your life and step onto the path as an Initiate.",
    tag: "Initiation",
    link: "/empower-thyself"
  },
  {
    title: "Sacred Geometry",
    description:
      "Study the divine patterns that underpin all of creation. Learn to work with the fundamental building blocks of the universe.",
    tag: "Advanced Study",
    link: "/sacred-geometry"
  },
]

export function ClassesSection() {
  return (
    <section id="classes" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              Upcoming Events
            </p>
            <h2 className="mb-4 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
              Upcoming Classes in Prague
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
              Each class is a stepping stone on the path of initiation. Begin
              with the Life Activation and progress through the sacred
              curriculum.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {classes.map((cls, i) => (
            <ScrollReveal key={cls.title} delay={i * 0.12}>
              <div className="group flex h-full flex-col border border-border bg-card p-8 transition-colors hover:border-primary/40">
                <div className="mb-4 flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-xs tracking-wider text-primary uppercase">
                    {cls.tag}
                  </span>
                </div>
                <h3 className="mb-3 font-serif text-xl tracking-wide text-foreground">
                  {cls.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cls.description}
                </p>
                <a
                  href={cls.link}
                  className="inline-flex items-center gap-2 text-sm tracking-wide text-primary transition-colors hover:text-gold-light"
                >
                  Learn More
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
