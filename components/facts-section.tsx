"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "./scroll-reveal"
import { Link } from "@/i18n/navigation"
import { Globe, Clock, Users, Quote } from "lucide-react"

const STAT_ICONS = [Clock, Globe, Users]
const TESTIMONIAL_LINKS = ["/testimonials#maria-testimonial", "/testimonials#ana-testimonial", "/testimonials"]

export function FactsSection() {
  const t = useTranslations("Facts")

  const stats = [0, 1, 2].map((i) => ({
    icon: STAT_ICONS[i],
    number: t(`stats.${i}.number`),
    label: t(`stats.${i}.label`),
  }))

  const testimonials = [0, 1, 2].map((i) => ({
    quote: t(`testimonials.${i}.quote`),
    author: t(`testimonials.${i}.author`),
    link: TESTIMONIAL_LINKS[i],
  }))

  return (
    <section id="facts" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/40" />
      <div className="absolute inset-0 stage-nigredo" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
              {t("heading")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15}>
              <div className="flex flex-col items-center gap-4 border border-border bg-card p-8 text-center">
                <stat.icon className="h-8 w-8 text-primary" />
                <span className="font-serif text-4xl tracking-wide text-primary">
                  {stat.number}
                </span>
                <span className="text-sm tracking-wider text-muted-foreground uppercase">
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Video Embeds */}
        <ScrollReveal>
          <div className="mb-20">
            <h3 className="mb-8 text-center font-serif text-2xl tracking-wide text-foreground">
              {t("videosHeading")}
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="aspect-video border border-border bg-card overflow-hidden">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/D9ZjXcB7F8M?list=PLSD4KZaT2V28fsaxAMPFaa3d26y0KAiEv"
                  title="Living in Full Empowerment Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-full-screen"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="aspect-video border border-border bg-card overflow-hidden">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/6ExvXGtInoc?list=PLSD4KZaT2V28fsaxAMPFaa3d26y0KAiEv&index=10"
                  title="The Path to Purpose"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-full-screen"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Wall of Love */}
        <ScrollReveal>
          <div>
            <h3 className="mb-8 text-center font-serif text-2xl tracking-wide text-foreground">
              {t("wallOfLove")}
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Link href={testimonial.link} className="border border-border bg-card p-6 block rounded hover:bg-card/80 transition-colors">
                    <Quote className="mb-4 h-5 w-5 text-primary/50" />
                    <p className="mb-4 text-sm leading-relaxed text-foreground italic">
                      {`"${testimonial.quote}"`}
                    </p>
                    <p className="text-xs tracking-wider text-primary uppercase">
                      {testimonial.author}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
