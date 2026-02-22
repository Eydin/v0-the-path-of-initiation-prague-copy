"use client"

import { ScrollReveal } from "./scroll-reveal"
import { BookOpen, Sparkles, Compass, Heart } from "lucide-react"

const pillars = [
  {
    icon: BookOpen,
    title: "Spiritual Knowledge",
    description:
      "Deepen your understanding of the universe and the metaphysical laws that govern all of creation. Access teachings that have been preserved for over three millennia by an unbroken lineage of initiates.",
  },
  {
    icon: Sparkles,
    title: "Practical Magic",
    description:
      "Awaken dormant powers within yourself and learn to direct energy to create tangible, real-world outcomes. This is not theory; it is the practical application of universal principles.",
  },
  {
    icon: Compass,
    title: "Divine Purpose",
    description:
      "Develop your soul and forge a living connection with your Higher Purpose. Discover why you are here, what you are meant to create, and how to align every aspect of your life with your true calling.",
  },
  {
    icon: Heart,
    title: "Healing Modalities",
    description:
      "Learn sacred healing techniques that allow you to be of profound service to others. Become a channel for transformation and help others awaken to their own divine potential.",
  },
]

export function PillarsSection() {
  return (
    <section id="pillars" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              The Foundation
            </p>
            <h2 className="mb-4 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
              The Four Pillars of Transformation
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
              Each pillar builds upon the last, creating a complete system of
              spiritual evolution that has stood the test of time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.12}>
              <div className="group flex h-full flex-col border border-border bg-card p-8 transition-colors hover:border-primary/40">
                <pillar.icon className="mb-6 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-3 font-serif text-xl tracking-wide text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
