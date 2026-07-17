"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "./scroll-reveal"
import { Link } from "@/i18n/navigation"
import { BRAND } from "@/lib/brand-names"
import { Calendar, ArrowRight } from "lucide-react"

export function ClassesSection() {
  const t = useTranslations("Classes")

  const classes = [
    {
      title: BRAND.lifeActivation,
      description: t("items.0.description"),
      tag: t("items.0.tag"),
      link: "/life-activation",
      image: "/images/life-activation-bg.jpg",
    },
    {
      title: BRAND.empowerThyself,
      description: t("items.1.description"),
      tag: t("items.1.tag"),
      link: "/empower-thyself",
      image: "/images/empower-thyself-bg.jpg",
    },
    {
      title: t("items.2.title"),
      description: t("items.2.description"),
      tag: t("items.2.tag"),
      link: "/calendar",
      linkLabel: t("items.2.title"),
      image: "/images/art/starry-rhone-gogh.jpg",
    },
  ]

  return (
    <section id="classes" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 stage-citrinitas" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
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

        <div className="grid gap-6 md:grid-cols-3">
          {classes.map((cls, i) => (
            <ScrollReveal key={cls.title} delay={i * 0.12}>
              <Link
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
                  {cls.linkLabel ?? t("learnMore")}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
