"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "./scroll-reveal"
import { ArrowRight, Sparkles } from "lucide-react"

const LIFE_ACTIVATION_STRIPE = "https://buy.stripe.com/14AdR2gmbeEuaZf2FZg360j"

export function CTASection() {
  const t = useTranslations("CTA")
  return (
    <section id="apply" className="relative py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <div className="border border-primary/50 bg-card p-12 md:p-16">
            <div className="mx-auto mb-8 h-px w-16 bg-primary/60" />
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
              {t("heading")}
            </h2>
            <p className="mb-10 text-muted-foreground leading-relaxed">
              {t("body")}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href={LIFE_ACTIVATION_STRIPE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm tracking-widest text-primary-foreground transition-all hover:bg-primary/90 uppercase"
              >
                <Sparkles className="h-4 w-4" />
                {t("bookLifeActivation")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
