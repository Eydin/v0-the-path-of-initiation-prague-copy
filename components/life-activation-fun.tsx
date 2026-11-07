import Image from "next/image"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { ScrollReveal } from "./scroll-reveal"

// Livelier building blocks for the Life Activation page: a photo beside text, the aura before/after,
// "is it for you" tiles, the session as numbered steps, and where to go next.

/** A real photo beside a few paragraphs; `reverse` puts the photo on the right. */
export function PhotoStory({
  image,
  alt,
  heading,
  paragraphs,
  reverse = false,
  portrait = false,
  children,
}: {
  image: string
  alt: string
  heading: string
  paragraphs: React.ReactNode[]
  reverse?: boolean
  portrait?: boolean
  children?: React.ReactNode
}) {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
          <ScrollReveal>
            <div
              className={`relative mx-auto w-full overflow-hidden rounded-2xl border border-primary/20 shadow-sm ${
                portrait ? "aspect-[4/5] max-w-md" : "aspect-[3/2]"
              }`}
            >
              <Image src={image} alt={alt} fill sizes="(max-width: 768px) 90vw, 45vw" className="object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="space-y-4">
              <h2 className="font-serif text-3xl tracking-wide text-primary md:text-4xl">{heading}</h2>
              {paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-foreground">
                  {p}
                </p>
              ))}
              {children}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/** "Is it for you?": a grid of small tiles, one per kind of person, each with an icon. */
export function ForWhomTiles({
  heading,
  intro,
  items,
  icons,
}: {
  heading: string
  intro: string
  items: { who: string; text: string }[]
  icons: LucideIcon[]
}) {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl tracking-wide text-primary md:text-4xl">{heading}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{intro}</p>
          </div>
        </ScrollReveal>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li key={it.who}>
                <ScrollReveal delay={i * 0.04} className="h-full">
                  <div className="group flex h-full gap-4 rounded-2xl border border-primary/20 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 lg:flex-col lg:gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-serif text-lg leading-snug text-foreground">{it.who}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/** The session as numbered steps on a gold line, with a photo of the tools beside it. */
export function SessionSteps({
  heading,
  intro,
  steps,
  image,
  alt,
}: {
  heading: string
  intro: string
  steps: { title: string; text: string }[]
  image: string
  alt: string
}) {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl tracking-wide text-primary md:text-4xl">{heading}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{intro}</p>
          </div>
        </ScrollReveal>
        <div className="grid items-start gap-10 md:grid-cols-[1fr_minmax(0,0.8fr)]">
          <ol className="relative space-y-6 border-l-2 border-primary/30 pl-8">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <ScrollReveal delay={i * 0.06}>
                  <span className="absolute top-0 -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-background font-serif text-lg text-primary">
                    {i + 1}
                  </span>
                  <p className="font-serif text-xl leading-snug text-foreground">{s.title}</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{s.text}</p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
          <ScrollReveal delay={0.1}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-primary/20 shadow-sm">
              <Image src={image} alt={alt} fill sizes="(max-width: 768px) 90vw, 30vw" className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/** Where to go after: two cards that link on to the next steps. */
export function NextStepCards({
  heading,
  intro,
  cards,
}: {
  heading: string
  intro: string
  cards: { href: string; title: string; text: string; cta: string }[]
}) {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl tracking-wide text-primary md:text-4xl">{heading}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{intro}</p>
          </div>
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((c, i) => (
            <ScrollReveal key={c.href} delay={i * 0.08} className="h-full">
              <Link
                href={c.href}
                className="group flex h-full flex-col rounded-2xl border border-primary/20 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_12px_30px_-14px_rgba(122,92,15,0.45)]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{`0${i + 1}`}</p>
                <p className="mt-2 font-serif text-2xl text-foreground">{c.title}</p>
                <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{c.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-serif text-sm uppercase tracking-widest text-primary">
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
