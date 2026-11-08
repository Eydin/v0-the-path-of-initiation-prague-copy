import { Atom, Brain, Lightbulb, Orbit, Rainbow, type LucideIcon } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

// A playful "Did you know?" box in its own colours (aqua to lilac), set apart from the cream and espresso boxes.
// The colours are fixed on purpose, so the page theme doesn't turn it back into cream.

const ICONS: LucideIcon[] = [Rainbow, Orbit, Atom, Brain]

export function DidYouKnow({
  heading,
  intro,
  items,
  note,
}: {
  heading: string
  intro: string
  items: { title: string; text: string }[]
  note: string
}) {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="rounded-3xl border border-[#b9a9e8] bg-gradient-to-br from-[#d9f3ef] via-[#e4e6fa] to-[#ecdcf8] p-6 shadow-sm md:p-10">
            <div className="mb-8 text-center">
              <span className="mx-auto mb-3 flex h-14 w-14 -rotate-6 items-center justify-center rounded-full bg-[#4b2fa0] text-white">
                <Lightbulb className="h-7 w-7" />
              </span>
              <h2 className="font-serif text-3xl tracking-wide text-[#34217a] md:text-4xl">{heading}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-[#3d3560]">{intro}</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {items.map((it, i) => {
                const Icon = ICONS[i % ICONS.length]
                return (
                  <li
                    key={it.title}
                    className="group rounded-2xl bg-white/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:rotate-[-0.5deg] hover:bg-white"
                  >
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#147a78] text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="font-serif text-xl leading-snug text-[#34217a]">{it.title}</p>
                    <p className="mt-2 leading-relaxed text-[#3d3560]">{it.text}</p>
                  </li>
                )
              })}
            </ul>
            <p className="mx-auto mt-8 max-w-2xl text-center font-serif text-lg italic leading-relaxed text-[#34217a]">
              {note}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
