"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Globe, Clock, Users, Quote, ExternalLink } from "lucide-react"

const stats = [
  {
    icon: Clock,
    number: "3,000+",
    label: "Years of Unbroken Lineage",
  },
  {
    icon: Globe,
    number: "60+",
    label: "Countries Worldwide",
  },
  {
    icon: Users,
    number: "Thousands",
    label: "Of Lives Transformed",
  },
]

const testimonials = [
  {
    quote:
      "The initiation ceremony was beyond my imagination. I felt genuinely welcome and it truly feels like I've found a community that I'm super happy to belong to.",
    author: "Maria from Czech Republic",
    link: "/testimonials#maria-testimonial",
  },
  {
    quote:
      "Radu didn't tell me what to do and what not to do. He really helps me to hear my own truth, my own clarity.",
    author: "Ana from Czech Republic",
    link: "/testimonials#ana-testimonial",
  },
  {
    quote:
      "I came seeking answers and found a whole new dimension of life. The tools I received are beyond anything I imagined.",
    author: "Sophie from Canada",
    link: "/testimonials",
  },
]

export function FactsSection() {
  return (
    <section id="facts" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
              A Legacy That Speaks for Itself
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
              Follow the Journey of Our Students
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="aspect-video border border-border bg-card overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/D9ZjXcB7F8M?list=PLSD4KZaT2V28fsaxAMPFaa3d26y0KAiEv"
                  title="Living in Full Empowerment Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-full-screen"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="aspect-video border border-border bg-card overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/6ExvXGtInoc?list=PLSD4KZaT2V28fsaxAMPFaa3d26y0KAiEv&index=10"
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
              Wall of Love
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <a href={t.link} className="border border-border bg-card p-6 block rounded hover:bg-card/80 transition-colors">
                    <Quote className="mb-4 h-5 w-5 text-primary/50" />
                    <p className="mb-4 text-sm leading-relaxed text-foreground italic">
                      {`"${t.quote}"`}
                    </p>
                    <p className="text-xs tracking-wider text-primary uppercase">
                      {t.author}
                    </p>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
