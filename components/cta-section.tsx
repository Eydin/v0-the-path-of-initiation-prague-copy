"use client"

import { ScrollReveal } from "./scroll-reveal"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="apply" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <div className="border border-primary/50 bg-card p-12 md:p-16">
            <div className="mx-auto mb-8 h-px w-16 bg-primary/60" />
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              Your Invitation
            </p>
            <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
              Are You Ready to Walk the Path?
            </h2>
            <p className="mb-10 text-muted-foreground leading-relaxed">
              The door is open, but only you can choose to step through it. If
              you feel the call, take the first step and apply for a personal
              consultation with Radu Coman.
            </p>
            <a
              href="mailto:radu@pathofinitiationprague.com"
              className="inline-flex items-center gap-3 border border-primary bg-primary px-10 py-4 font-serif text-sm tracking-widest text-primary-foreground transition-all hover:bg-primary/90 uppercase"
            >
              Begin Your Journey
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
