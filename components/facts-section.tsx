"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Globe, Clock, Users, Quote } from "lucide-react"

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
      "This path has completely transformed the way I see myself and the world. I have found a sense of purpose I never knew was possible.",
    author: "Student Testimonial",
  },
  {
    quote:
      "The teachings are profound, practical, and deeply empowering. I am grateful every day that I found this lineage.",
    author: "Student Testimonial",
  },
  {
    quote:
      "I came seeking answers and found a whole new dimension of life. The tools I received are beyond anything I imagined.",
    author: "Student Testimonial",
  },
]

export function FactsSection() {
  return (
    <section id="facts" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              Proof in the Numbers
            </p>
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
              Witness the Transformation
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="aspect-video border border-border bg-card">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <p className="text-sm tracking-wide">YouTube Video Embed 1</p>
                </div>
              </div>
              <div className="aspect-video border border-border bg-card">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <p className="text-sm tracking-wide">YouTube Video Embed 2</p>
                </div>
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
                  <div className="border border-border bg-card p-6">
                    <Quote className="mb-4 h-5 w-5 text-primary/50" />
                    <p className="mb-4 text-sm leading-relaxed text-foreground italic">
                      {`"${t.quote}"`}
                    </p>
                    <p className="text-xs tracking-wider text-primary uppercase">
                      {t.author}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
