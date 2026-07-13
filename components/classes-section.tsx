"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Calendar, ArrowRight } from "lucide-react"

const classes = [
  {
    title: "Life Activation",
    description:
      "Awaken your divine blueprint and ignite the full potential encoded within your DNA. This is the foundational session of the mystery school lineage.",
    tag: "Foundation",
    link: "/life-activation",
    image: "/images/life-activation-bg.jpg"
  },
  {
    title: "Empower Thyself",
    description:
      "A 2-day initiation program where you receive the sacred tools and teachings to take command of your life and step onto the path as an Initiate.",
    tag: "Initiation",
    link: "/empower-thyself",
    image: "/images/empower-thyself-bg.jpg"
  },
  {
    title: "View Full Calendar",
    description:
      "Study the divine patterns that underpin all of creation, how to astral travel, communicate with your higher self and more.",
    tag: "Advanced Study",
    link: "/calendar",
    linkLabel: "View Full Calendar",
    image: "/images/art/starry-rhone-gogh.jpg"
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
              <a
                href={cls.link}
                className="group relative flex h-full flex-col overflow-hidden border border-border p-8 transition-colors hover:border-primary/40"
              >
                <div
                  className="absolute inset-0 -z-10 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${cls.image}')` }}
                  aria-hidden
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/90 to-background/60" />

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
                <span className="inline-flex items-center gap-2 text-sm tracking-wide text-primary transition-colors group-hover:text-gold-light">
                  {cls.linkLabel ?? "Learn More"}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
