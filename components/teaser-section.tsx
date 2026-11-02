"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "./scroll-reveal"
import { Shield } from "lucide-react"

export function TeaserSection() {
  const t = useTranslations("Teaser")
  const numerals = ["I", "II", "III", "IV"]
  const expectations = [0, 1, 2, 3].map((i) => ({
    title: t(`expectations.${i}.title`),
    description: t(`expectations.${i}.description`),
  }))

  return (
    <section className="relative py-24 lg:py-32">
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
      </div>

      {/* the expectations box runs wider than the text column above */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
        <ScrollReveal delay={0.35}>
          <div className="home-box home-box-wanderer border border-primary/40 px-5 py-10 shadow-2xl sm:px-10 md:py-14 lg:px-14">
            {/* inner gold hairline frame */}
            <div className="pointer-events-none absolute inset-2.5 border border-primary/20 sm:inset-3.5" />

            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/70 sm:w-16" />
              <p className="font-serif text-base tracking-[0.3em] text-primary uppercase md:text-lg">
                {t("expectedHeading")}
              </p>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary/70 sm:w-16" />
            </div>

            <ul className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {expectations.map((item, i) => (
                <li
                  key={item.title}
                  className="border border-primary/25 bg-[#14050a]/70 p-6 backdrop-blur-md transition-colors hover:border-primary/60"
                >
                  <span className="mb-3 block font-serif text-base tracking-[0.2em] text-primary">
                    {numerals[i]}
                  </span>
                  <h3 className="mb-2.5 font-serif text-xl leading-snug text-[#fffaf0]">{item.title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-[#f1e8d8]">{item.description}</p>
                </li>
              ))}
            </ul>

            <div className="my-8 flex items-center justify-center gap-3" aria-hidden>
              <span className="h-px w-16 bg-primary/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
              <span className="h-px w-16 bg-primary/40" />
            </div>

            <p className="mx-auto max-w-3xl font-serif text-lg leading-relaxed text-[#fffaf0] italic [text-shadow:0_1px_12px_rgba(0,0,0,0.75)] md:text-2xl">
              {t("expectedClosing")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
