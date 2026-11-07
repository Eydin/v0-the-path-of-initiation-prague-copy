import Image from "next/image"
import { Circle, Eye, Flame, Square, Triangle, type LucideIcon } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

// Livelier building blocks for the Sacred Geometry I page: a photo gallery from real workshops,
// numbered "what you'll discover" cards, and a strip about the masters who studied sacred geometry.

/** Real photos from our workshops in Prague, in a light masonry layout with captions. */
export function WorkshopGallery({
  heading,
  intro,
  photos,
}: {
  heading: string
  intro: string
  photos: { src: string; alt: string; portrait?: boolean }[]
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
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((p, i) => (
            <ScrollReveal key={p.src} delay={i * 0.06}>
              <figure className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-sm">
                <div className={`relative overflow-hidden ${p.portrait ? "aspect-[9/14]" : "aspect-[16/10]"}`}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const DISCOVER_ICONS: LucideIcon[] = [Triangle, Square, Circle, Flame, Eye]

/** "What you'll discover": big numbered cards that lift and wobble a little on hover. */
export function DiscoverCards({
  heading,
  intro,
  items,
  icons = DISCOVER_ICONS,
}: {
  heading: string
  intro?: string
  items: { label: string; text: string }[]
  /** one icon per card (repeats if fewer); defaults to the sacred-geometry shapes */
  icons?: LucideIcon[]
}) {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl tracking-wide text-primary md:text-4xl">{heading}</h2>
            {intro && <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{intro}</p>}
          </div>
        </ScrollReveal>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li key={it.label} className={i === items.length - 1 && items.length % 3 === 2 ? "lg:col-span-1" : ""}>
                <ScrollReveal delay={i * 0.06} className="h-full">
                  <div className="group flex h-full flex-col rounded-2xl border border-primary/20 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:rotate-[-0.5deg] hover:border-primary/60 hover:shadow-[0_12px_30px_-14px_rgba(122,92,15,0.45)]">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-serif text-5xl leading-none text-primary/30 transition-colors group-hover:text-primary/60">
                        {i + 1}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <p className="font-serif text-xl leading-snug text-foreground">{it.label.replace(/:$/, "")}</p>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{it.text}</p>
                  </div>
                </ScrollReveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

/** The masters who studied sacred geometry: a swipeable strip on phones, a grid on desktop. */
export function MastersStrip({
  heading,
  intro,
  masters,
}: {
  heading: string
  intro: string
  masters: { name: string; era: string; text: string }[]
}) {
  const symbols = ["△", "◯", "✦", "☉"]
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl tracking-wide text-primary md:text-4xl">{heading}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{intro}</p>
          </div>
        </ScrollReveal>
        <ul className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {masters.map((m, i) => (
            <li key={m.name} className="w-[78%] shrink-0 snap-center sm:w-[45%] md:w-auto">
              <ScrollReveal delay={i * 0.06} className="h-full">
                <div className="h-full rounded-2xl border border-primary/20 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
                  {m.name.startsWith("Leonard") ? (
                    <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border border-primary/30">
                      <Image src="/images/art/vitruvian-man.jpg" alt="" fill sizes="80px" className="object-cover" />
                    </div>
                  ) : (
                    <span className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/5 font-serif text-3xl text-primary">
                      {symbols[i % symbols.length]}
                    </span>
                  )}
                  <p className="font-serif text-xl text-foreground">{m.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">{m.era}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
