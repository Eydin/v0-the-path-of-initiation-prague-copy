"use client"

import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"

// MailerLite hosted newsletter form — collects the email straight into MailerLite.
const NEWSLETTER_URL = "https://landing.mailerlite.com/webforms/landing/o1u2r8"

/**
 * Newsletter call-to-action.
 * The button opens the MailerLite hosted form in a new tab, where the
 * visitor's email is captured directly into the MailerLite account.
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

          {/* Opens the MailerLite hosted form — email is captured into MailerLite */}
          <a
            href={NEWSLETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto inline-flex h-14 items-center justify-center gap-3 rounded-sm border border-primary bg-primary px-10 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
          >
            Subscribe to the Newsletter
            <ArrowRight className="h-4 w-4" />
          </a>

          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
            No noise. Unsubscribe anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
