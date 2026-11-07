"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { UpcomingDates } from "@/components/upcoming-dates"
import { EmailContactButton } from "@/components/email-contact-button"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"

// ── Shared contact details ──────────────────────────────────────────────
/** Official MMS UK calendar — where prices and sign-up live for programs we do not run locally. */
export const MMS_UK_CALENDAR_URL = "https://modernmysteryschooluk.com/calendar/"
export const WHATSAPP_NUMBER = "420792908296"
export const CONTACT_EMAIL = "radu@thepathofinitiationprague.com"

// ── Cal.com booking popup ───────────────────────────────────────────────
export const CAL_ORIGIN = "https://booking.thepathofinitiationprague.com"

/** Wires a button/link up to Cal.com's "pop up via element click" embed
 *  (see CalcomPopupLoader) instead of navigating - pass to a `cta`/`bookCalEmbed`
 *  prop alongside the normal href, which stays as a right-click/no-JS fallback. */
export type CalEmbed = {
  /** e.g. "all/empower-thyself" */
  link: string
  namespace: string
  config?: Record<string, string>
}

function calEmbedAttrs(calEmbed?: CalEmbed) {
  if (!calEmbed) return {}
  return {
    // Cal's own click listener (bound on document) opens the modal but never
    // calls preventDefault, so a plain click would also navigate/open a new
    // tab via href unless we stop that ourselves.
    onClick: (e: React.MouseEvent) => e.preventDefault(),
    "data-cal-link": calEmbed.link,
    "data-cal-namespace": calEmbed.namespace,
    "data-cal-origin": CAL_ORIGIN,
    "data-cal-config": JSON.stringify(calEmbed.config ?? { layout: "month_view" }),
  }
}

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

// The page's painting, shared with ModalityHero so its header shows the same artwork.
const ShellArt = createContext<{ bg: string; position: string } | null>(null)

// ── Page shell: fixed dark-veiled painting background + header/footer ─────
// `cream` (the default, site-wide) gives the page the homepage look: the .home-cream
// colours (see globals.css), a light veil over the painting, the starry header/footer,
// and the booking boxes in the gift voucher's espresso brown with a double gold frame
// (.boxes-espresso). `cream={false}` keeps the original dark look; `veil={false}` shows
// the painting at full strength behind the cream page.
export function ModalityShell({
  bg,
  position = "center",
  cream = true,
  veil = true,
  children,
}: {
  bg: string
  position?: string
  cream?: boolean
  veil?: boolean
  children: ReactNode
}) {
  if (cream) {
    return (
      // isolate: the fixed painting (-z-10) stays above this wrapper's cream background
      <div className="home-cream boxes-espresso isolate overflow-x-hidden">
        <Header />
        <main className="relative min-h-screen pt-20">
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
            {veil && (
              <div className="absolute inset-0 bg-gradient-to-b from-background/[0.86] to-background/[0.94]" />
            )}
          </div>
          <div className="relative z-10">
            <ShellArt.Provider value={{ bg, position }}>{children}</ShellArt.Provider>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
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

// ── Hero ──────────────────────────────────────────────────────────────────
// Inside a cream ModalityShell this is the painting header (ImageHero, as on Life Activation)
// with the page's own painting; its Book Now button scrolls to the page's booking box, when
// there is one. Elsewhere it falls back to the original title card.
export function ModalityHero({
  eyebrow,
  title,
  subtitle,
  tagline,
  image,
  position,
  caption,
}: {
  eyebrow?: string
  title: string
  subtitle: string
  tagline?: string
  /** a header picture other than the page's background painting (file in /public/images/art) */
  image?: string
  position?: string
  caption?: string
}) {
  const art = useContext(ShellArt)
  const t = useTranslations("Modality")
  const [bookingId, setBookingId] = useState<string | null>(null)
  useEffect(() => {
    // booking boxes (BookingBlock) are the dark boxes inside a section with an id
    const box = document.querySelector("main section[id] .home-box")
    setBookingId(box?.closest("section")?.id ?? null)
  }, [])

  if (art) {
    return (
      <ImageHero
        image={image ?? art.bg}
        position={image ? (position ?? "center") : art.position}
        caption={caption}
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        tagline={tagline}
        accent="gold"
        cta={bookingId ? { href: `#${bookingId}`, label: t("bookNow") } : undefined}
      />
    )
  }

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <div className="home-box space-y-8 rounded-lg border border-primary/20 bg-muted/30 p-12 text-center backdrop-blur-sm md:p-16">
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

// Tight dark halo for the small lines of the class/session headers (accent "gold"), whose
// paintings are often busy (engravings, starry skies) — the title is large enough without it.
const haloOnBusyArt = "[text-shadow:0_1px_3px_rgba(20,6,10,0.9),0_2px_14px_rgba(20,6,10,0.65)]"

// ── Painting hero: full-width artwork under a burgundy wash that fades into the cream page,
// with a left-aligned title block (gold label, tall condensed capitals, serif lines, button)
// and the painting's credit running down the right edge. Same layout as Diana's Hestia site.
export function ImageHero({
  image,
  position = "center",
  caption,
  eyebrow,
  title,
  subtitle,
  tagline,
  cta,
  secondary,
  accent = "deep-gold",
}: {
  /** file in /public/images/art */
  image: string
  position?: string
  /** artwork credit, e.g. "The Creation of Adam · Michelangelo, 1512" */
  caption?: string
  /** may contain a link, e.g. to the Modern Mystery School */
  eyebrow?: ReactNode
  title: string
  subtitle?: string
  tagline?: string
  /** colour of the small label above the title (and of the tagline, for "cream"):
   *  "deep-gold" reads on pale artwork (Life Activation's ceiling), "gold" (Hestia's bright gold)
   *  on darker paintings, "cream" on golden artwork (Vitruvian Man) where gold vanishes */
  accent?: "deep-gold" | "gold" | "cream"
  cta?: { href: string; label: string; external?: boolean; calEmbed?: CalEmbed }
  /** quiet text link beside the button, e.g. "ask a question first" */
  secondary?: { href: string; label: string; external?: boolean }
}) {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden md:h-[82vh] md:max-h-[700px]">
      <Image
        src={`/images/art/${image}`}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: position }}
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(48, 14, 22, 0.34), rgba(48, 14, 22, 0.06) 35%, rgba(48, 14, 22, 0.16) 55%, rgba(48, 14, 22, 0.86) 85%, var(--background) 100%)",
        }}
      />
      {caption && (
        <p
          className="absolute top-1/2 right-4 hidden -translate-y-1/2 font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.26em] text-[#efe7d7]/60 [writing-mode:vertical-rl] sm:block"
        >
          {caption}
        </p>
      )}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-20 md:px-12 md:pb-24 [text-shadow:0_2px_18px_rgba(30,8,14,0.55)]">
        <ScrollReveal>
          <div className="max-w-4xl">
            {eyebrow && (
              <p
                className={`mb-4 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.3em] ${
                  accent === "cream"
                    ? "text-[#f4ecdb]"
                    : accent === "gold"
                      ? `text-[#e7c667] ${haloOnBusyArt}`
                      : // the site's deeper gold (cream-page headings): stays gold yet reads on pale artwork
                        "text-[#7a5c0f] [text-shadow:0_0_14px_rgba(255,250,240,0.7)]"
                }`}
              >
                {eyebrow}
              </p>
            )}
            <h1 className="font-[family-name:var(--font-display)] text-6xl leading-[0.95] font-bold uppercase tracking-wide text-[#f4ecdb] md:text-7xl lg:text-[5.25rem]">
              {title}
            </h1>
            {subtitle && (
              <p
                className={`mt-6 max-w-2xl font-serif text-lg font-light text-[#efe7d7]/90 md:text-xl ${
                  accent === "gold" ? haloOnBusyArt : ""
                }`}
              >
                {subtitle}
              </p>
            )}
            {tagline && (
              <p
                className={`mt-3 max-w-xl font-serif text-base leading-relaxed italic md:text-lg ${
                  accent === "cream" ? "text-[#f4ecdb]" : "text-[#e7c667]"
                } ${accent === "gold" ? haloOnBusyArt : ""}`}
              >
                {tagline}
              </p>
            )}
            {(cta || secondary) && (
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                {cta && (
                  <a
                    href={cta.href}
                    {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...calEmbedAttrs(cta.calEmbed)}
                    className="inline-flex items-center gap-2 rounded-sm bg-[#6e1426] px-7 py-3.5 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.16em] text-[#fbf6ec] transition-colors [text-shadow:none] hover:bg-[#85192f]"
                  >
                    {cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
                {secondary && (
                  <a
                    href={secondary.href}
                    {...(secondary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.14em] text-[#f4ecdb] underline decoration-[#f4ecdb]/40 underline-offset-4 transition-colors hover:decoration-[#f4ecdb]"
                  >
                    {secondary.label}
                  </a>
                )}
              </div>
            )}
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

// ── Embedded YouTube video ───────────────────────────────────────────────
export function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border border-primary/20">
      <iframe
        className="h-full w-full"
        src={src}
        title={title}
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

// ── Buttons ───────────────────────────────────────────────────────────────
export function WhatsAppButton({ text, label }: { text: string; label?: string }) {
  const t = useTranslations("Modality")
  return (
    <a
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
    >
      <MessageCircle className="h-4 w-4" />
      {label ?? t("whatsapp")}
      <ArrowRight className="h-4 w-4" />
    </a>
  )
}

export function EmailButton({ subject }: { subject: string }) {
  const t = useTranslations("Modality")
  return (
    <EmailContactButton
      context={subject}
      className="inline-flex items-center justify-center gap-3 rounded border border-primary px-10 py-4 font-serif text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
    >
      <Mail className="h-4 w-4" />
      {t("email")}
      <ArrowRight className="h-4 w-4" />
    </EmailContactButton>
  )
}

// ── Booking / CTA block ─────────────────────────────────────────────────
export function BookingBlock({
  title,
  investment,
  duration,
  inquiry,
  slug,
  id,
  bookHref,
  bookLabel,
  bookCalEmbed,
  children,
  note,
  kind,
}: {
  title?: string
  investment?: string
  duration?: string
  inquiry: string
  /** When set, shows the next two upcoming dates for this class. */
  slug?: string
  /** Optional id for URL anchoring. If not provided, extracts from slug (the part after #). */
  id?: string
  /** Optional direct checkout (Stripe) link — renders a prominent Book Now button. */
  bookHref?: string
  bookLabel?: string
  /** Wires the Book Now button to open the Cal.com booking popup instead of navigating. bookHref stays as the plain-navigation fallback. */
  bookCalEmbed?: CalEmbed
  /** Optional extra detail (e.g. deposit breakdown) shown above the buttons. */
  children?: ReactNode
  note?: string
  /** Shows a "Healing Session" / "Reading Session" badge above the title. */
  kind?: "healing" | "reading"
}) {
  const t = useTranslations("Modality")
  // Extract id from slug if not provided (e.g., "community#prayer-evening" -> "prayer-evening")
  const sectionId =
    id || (slug?.includes("#") ? slug.split("#")[1] : "inscriere-eveniment")
  return (
    <section id={sectionId} className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <div className="home-box rounded-lg border border-primary/20 bg-muted/60 p-8 backdrop-blur-sm md:p-12">
              <div className="space-y-12 text-center">
                <div>
                  {kind && (
                    <p className="mb-4 inline-block rounded-full border border-primary/30 px-4 py-1 text-xs uppercase tracking-[0.25em] text-primary">
                      {kind === "reading" ? t("readingSession") : t("healingSession")}
                    </p>
                  )}
                  {title && (
                    <h2 className="mb-8 font-serif text-3xl tracking-wide text-primary md:text-4xl">{title}</h2>
                  )}
                  <div className="mx-auto h-px w-16 bg-border" />
                </div>

                {slug && (
                  <div className="mx-auto max-w-xl">
                    <UpcomingDates slug={slug} />
                  </div>
                )}

                {children && <div className="text-left">{children}</div>}

                <p className="text-lg font-semibold text-foreground">{note ?? t("defaultNote")}</p>

                {/* price and duration sit right above the Book Now button, so the number and the action read together */}
                {(investment || duration) && (
                  <div className="grid gap-12 py-2 md:grid-cols-2">
                    {investment && (
                      <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                          {t("investment")}
                        </p>
                        <p className="font-serif text-3xl text-primary">{investment}</p>
                      </div>
                    )}
                    {duration && (
                      <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                          {t("duration")}
                        </p>
                        <p className="font-serif text-3xl text-primary">{duration}</p>
                      </div>
                    )}
                  </div>
                )}

                {bookHref && (
                  <a
                    href={bookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...calEmbedAttrs(bookCalEmbed)}
                    className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-12 py-4 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    {bookLabel ?? t("bookNow")}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}

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
