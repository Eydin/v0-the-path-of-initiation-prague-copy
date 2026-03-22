"use client"

import { ScrollReveal } from "./scroll-reveal"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"

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
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="mailto:radu@pathofinitiationprague.com"
                className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm tracking-widest text-primary-foreground transition-all hover:bg-primary/90 uppercase"
              >
                <Mail className="h-4 w-4" />
                Email
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Path%20of%20Initiation."
                className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm tracking-widest text-primary-foreground transition-all hover:bg-primary/90 uppercase"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}