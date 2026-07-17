"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "./scroll-reveal"
import { Shield } from "lucide-react"

export function TeaserSection() {
  const t = useTranslations("Teaser")
  const expectations = [0, 1, 2, 3].map((i) => t(`expectations.${i}`))

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/40" />
      <div className="absolute inset-0 stage-citrinitas" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <Shield className="mx-auto mb-8 h-10 w-10 text-primary" />
          <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="mb-8 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
            {t("heading")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            {t("body1")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="mb-8 text-lg leading-relaxed text-foreground">
            {t.rich("body2", {
              emphasis: (chunks) => <span className="font-serif text-primary italic">{chunks}</span>,
            })}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="mx-auto flex max-w-md flex-col gap-4 border border-primary/30 bg-card p-8">
            <p className="font-serif text-sm tracking-wider text-primary uppercase">
              {t("expectedHeading")}
            </p>
            <ul className="flex flex-col gap-3 text-left text-sm text-muted-foreground">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
