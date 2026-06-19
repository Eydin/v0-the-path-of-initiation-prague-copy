"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"

// ── Shared contact details ──────────────────────────────────────────────
export const WHATSAPP_NUMBER = "420792908296"
export const CONTACT_EMAIL = "radu@pathofinitiationprague.com"

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

// ── Page shell: fixed dark-veiled painting background + header/footer ─────
export function ModalityShell({
  bg,
  position = "center",
  children,
}: {
  bg: string
  position?: string
  children: ReactNode
}) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen pt-20">
        {/* Fixed cinematic painting with a slow Ken Burns drift.
            Uses position:fixed + transform instead of background-attachment:fixed,
            which is broken on iOS Safari. */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Image
            src={`/images/art/${bg}`}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: position }}
            className="object-cover animate-kenburns-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/[0.82] to-black/[0.9]" />
        </div>
        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
    </>
  )
}

// ── Hero card ─────────────────────────────────────────────────────────────
export function ModalityHero({
  eyebrow,
  title,
  subtitle,
  tagline,
}: {
  eyebrow?: string
  title: string
  subtitle: string
  tagline?: string
}) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8 rounded-lg border border-primary/20 bg-muted/30 p-12 text-center backdrop-blur-sm md:p-16">
              {eyebrow && (
                <p className="font-serif text-sm uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
              )}
              <h1 className="font-serif text-4xl tracking-wide text-primary md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <div className="mx-auto h-px w-16 bg-primary" />
              <h2 className="font-serif text-2xl tracking-wide text-foreground">{subtitle}</h2>
              {tagline && (
                <p className="font-serif text-lg italic leading-relaxed text-foreground">{tagline}</p>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ── Generic content panel ───────────────────────────────────────────────
export function Panel({
  children,
  wide = false,
  className = "",
}: {
  children: ReactNode
  wide?: boolean
  className?: string
}) {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className={`mx-auto ${wide ? "max-w-5xl" : "max-w-4xl"}`}>
            <div
              className={`space-y-6 rounded-lg border border-primary/20 bg-muted/60 p-8 backdrop-blur-sm md:p-12 ${className}`}
            >
              {children}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function PanelHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-2 text-center font-serif text-3xl tracking-wide text-primary md:text-4xl">
      {children}
    </h2>
  )
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="text-center font-serif text-lg italic leading-relaxed text-primary">{children}</p>
}

export function Body({ children }: { children: ReactNode }) {
  return <p className="text-lg leading-relaxed text-foreground">{children}</p>
}

// ── Bulleted benefit list ────────────────────────────────────────────────
export function BenefitList({
  items,
}: {
  items: { label?: string; text: ReactNode }[]
}) {
  return (
    <ul className="space-y-6 text-foreground">
      {items.map((it, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex-shrink-0 font-semibold text-primary">•</span>
          <div>
            {it.label && <span className="font-semibold text-primary">{it.label} </span>}
            <span className="text-lg leading-relaxed">{it.text}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

// ── Buttons ───────────────────────────────────────────────────────────────
export function WhatsAppButton({ text, label = "WhatsApp" }: { text: string; label?: string }) {
  return (
    <a
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
    >
      <MessageCircle className="h-4 w-4" />
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  )
}

export function EmailButton({ subject }: { subject: string }) {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`}
      className="inline-flex items-center justify-center gap-3 rounded border border-primary px-10 py-4 font-serif text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
    >
      <Mail className="h-4 w-4" />
      Email
      <ArrowRight className="h-4 w-4" />
    </a>
  )
}

// ── Booking / CTA block ─────────────────────────────────────────────────
export function BookingBlock({
  title,
  investment,
  duration,
  inquiry,
  note = "After you reach out, we will contact you personally to finalize your appointment.",
}: {
  title: string
  investment?: string
  duration?: string
  inquiry: string
  note?: string
}) {
  return (
    <section id="inscriere-eveniment" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border border-primary/20 bg-muted/60 p-8 backdrop-blur-sm md:p-12">
              <div className="space-y-12 text-center">
                <div>
                  <h2 className="mb-8 font-serif text-3xl tracking-wide text-primary md:text-4xl">{title}</h2>
                  <div className="mx-auto h-px w-16 bg-border" />
                </div>

                {(investment || duration) && (
                  <div className="grid gap-12 py-2 md:grid-cols-2">
                    {investment && (
                      <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                          Investment
                        </p>
                        <p className="font-serif text-3xl text-primary">{investment}</p>
                      </div>
                    )}
                    {duration && (
                      <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                          Duration
                        </p>
                        <p className="font-serif text-3xl text-primary">{duration}</p>
                      </div>
                    )}
                  </div>
                )}

                <p className="text-lg font-semibold text-foreground">{note}</p>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <EmailButton subject={inquiry} />
                  <WhatsAppButton text={inquiry} />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
