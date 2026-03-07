"use client"

import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

export function EndingSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              Where All Worlds Meet
            </p>
            <h2 className="mb-4 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
              Bridging the Ancient, the Universal, and the Modern
            </h2>
          </div>
        </ScrollReveal>

        <div className="mb-16 grid gap-4 md:grid-cols-3">
          <ScrollReveal delay={0} direction="left">
            <div className="group relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="/images/hermes.webp"
                alt="Ancient magicians, priests, and temples representing the roots of the mystery school tradition"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <p className="font-serif text-lg tracking-wide text-foreground">
                  The Ancient Wisdom
                </p>
                <p className="text-xs tracking-wider text-primary uppercase">
                  Temples, Priests & Sacred Rites
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="up">
            <div className="group relative aspect-[4/3] overflow-hidden border border-primary/50">
              <Image
                src="/images/galaxy.webp"
                alt="Advanced extraterrestrial beings of light representing universal galactic science"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <p className="font-serif text-lg tracking-wide text-foreground">
                  The Universal Science
                </p>
                <p className="text-xs tracking-wider text-primary uppercase">
                  Galactic Knowledge & Light
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <div className="group relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="/images/modern-initiate-2.png"
                alt="Modern men and women empowered by the mystery school teachings"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <p className="font-serif text-lg tracking-wide text-foreground">
                  The Modern Initiate
                </p>
                <p className="text-xs tracking-wider text-primary uppercase">
                  Empowered Men & Women
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              This path bridges the{" "}
              <span className="text-foreground">ancient wisdom</span> of the
              mystery schools with the{" "}
              <span className="text-foreground">
                universal galactic science
              </span>{" "}
              that has guided civilisations across the cosmos.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              The result is a living system of knowledge that is profoundly
              applicable to the{" "}
              <span className="font-serif text-primary italic">
                modern-day men and women
              </span>{" "}
              who are ready to awaken, transform, and lead.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
