"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Shield } from "lucide-react"

export function TeaserSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/40" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <Shield className="mx-auto mb-8 h-10 w-10 text-primary" />
          <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
            Commitment to Greatness
          </p>
          <h2 className="mb-8 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
            This is Not a Weekend Workshop
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Let us be clear: The Path of Initiation is a rigorous training
            program. It involves months of dedicated study, constant practice, and
            an unwavering commitment to your own transformation. This is not a
            casual seminar or a feel-good retreat.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="mb-8 text-lg leading-relaxed text-foreground">
            This is a{" "}
            <span className="font-serif text-primary italic">
              sacred commitment
            </span>{" "}
            to become the greatest version of yourself &mdash; to unlock powers
            that most people will never know exist, and to step into a lineage
            that has shaped the course of human history.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="mx-auto flex max-w-md flex-col gap-4 border border-primary/30 bg-card p-8">
            <p className="font-serif text-sm tracking-wider text-primary uppercase">
              What is expected of you
            </p>
            <ul className="flex flex-col gap-3 text-left text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Months of disciplined, progressive study
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Daily practice of the tools and techniques
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                A genuine desire for self-mastery
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Willingness to serve and uplift others
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
