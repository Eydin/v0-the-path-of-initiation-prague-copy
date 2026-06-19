"use client"

import { ArrowRight, Mail } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"

/**
 * Newsletter call-to-action.
 * NOTE: the form is intentionally inert for now — the button leads nowhere
 * until an email provider is connected. No submission, no fake success.
 */
export function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "clamp(460px, 60vh, 600px)" }}
    >
      <ParallaxImage src="/images/art/flammarion.jpg" alt="" position="center 30%" strength={60} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/90" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <div className="mx-auto mb-6 h-px w-24 bg-primary/60" />
          <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">
            Letters from the Path
          </p>
          <h2 className="mb-5 font-serif text-3xl leading-tight tracking-wide text-foreground md:text-4xl lg:text-5xl text-balance">
            Receive the Teachings
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Occasional letters on initiation, sacred geometry, and the work of the soul —
            sent only when there is something worth saying.
          </p>

          {/* Inert form — wired to nowhere until an email provider is connected */}
          <form
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/60" />
              <input
                type="email"
                inputMode="email"
                placeholder="Your email"
                aria-label="Your email address"
                className="h-14 w-full rounded-sm border border-border bg-background/60 pl-11 pr-4 text-base text-foreground placeholder:text-muted-foreground/70 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="button"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-sm border border-primary bg-primary px-8 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
            No noise. Unsubscribe anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
