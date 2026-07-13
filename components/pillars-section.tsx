"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "./scroll-reveal"
import { BookOpen, Sparkles, Compass, Heart } from "lucide-react"

const PILLAR_ICONS = [BookOpen, Sparkles, Compass, Heart]

export function PillarsSection() {
  const t = useTranslations("Pillars")
  const pillars = [0, 1, 2, 3].map((i) => ({
    icon: PILLAR_ICONS[i],
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }))

  return (
    <section id="pillars" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="mb-4 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
              {t("heading")}
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
              {t("intro")}
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
