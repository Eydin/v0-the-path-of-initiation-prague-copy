"use client"

import type { ReactNode } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface QuoteBreakerProps {
  /** filename inside /public/images/art, e.g. "ascent-blessed-bosch.jpg" */
  image: string
  quote: ReactNode
  attribution: string
  /** small credit line, bottom-right */
  caption?: string
  /** CSS background-position for the artwork, e.g. "center 42%" */
  position?: string
  /** optional call-to-action rendered under the attribution */
  cta?: ReactNode
}

export function QuoteBreaker({ image, quote, attribution, caption, position = "center", cta }: QuoteBreakerProps) {
  return (
    <figure
      className="relative m-0 flex items-center justify-center overflow-hidden bg-cover"
      style={{
        minHeight: "clamp(440px, 66vh, 660px)",
        backgroundImage: `url(/images/art/${image})`,
        backgroundPosition: position,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background/80" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <blockquote
            className="text-balance font-serif text-3xl italic leading-tight text-foreground md:text-4xl lg:text-5xl"
            style={{ textShadow: "0 2px 28px rgba(0,0,0,0.65)" }}
          >
            {quote}
          </blockquote>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.32em] text-primary">{attribution}</p>
          {cta && <div className="mt-9">{cta}</div>}
        </ScrollReveal>
      </div>

      {caption && (
        <figcaption className="absolute bottom-4 right-5 text-[11px] uppercase tracking-[0.2em] text-foreground/40">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
