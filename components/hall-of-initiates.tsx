"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "@/components/scroll-reveal"

// Historical figures said to have walked the path of initiation through the ages.
// Portraits are public-domain artworks & photographs (Wikimedia Commons).
// Names are proper nouns (untranslated); the epithet ("role") is translated —
// see the "HallOfInitiates.initiates" message namespace, indexed in this order.
const initiates: { name: string; file: string }[] = [
  { name: "Hermes Trismegistus", file: "hermes-trismegistus.jpg" },
  { name: "Hatshepsut", file: "hatshepsut.jpg" },
  { name: "Nefertiti", file: "nefertiti.jpg" },
  { name: "King David", file: "king-david.jpg" },
  { name: "King Salomon", file: "king-salomon.jpg" },
  { name: "Queen of Sheba", file: "queen-of-sheba.jpg" },
  { name: "Pythagoras", file: "pythagoras.jpg" },
  { name: "King Leonidas", file: "king-leonidas.jpg" },
  { name: "Gautama Buddha", file: "buddha.jpg" },
  { name: "Socrates", file: "socrates.jpg" },
  { name: "Aristotle", file: "aristotle.jpg" },
  { name: "Alexander the Great", file: "alexander-the-great.jpg" },
  { name: "Julius Caesar", file: "julius-caesar.jpg" },
  { name: "Cleopatra", file: "cleopatra.jpg" },
  { name: "Jesus", file: "jesus.jpg" },
  { name: "Tomoe Gozen", file: "tomoe-gozen.jpg" },
  { name: "Joan of Arc", file: "joan-of-arc.jpg" },
  { name: "Leonardo da Vinci", file: "leonardo-da-vinci.png" },
  { name: "Michelangelo", file: "michelangelo.jpg" },
  { name: "Nostradamus", file: "nostradamus.jpg" },
  { name: "William Shakespeare", file: "william-shakespeare.jpg" },
  { name: "Miyamoto Musashi", file: "miyamoto-musashi.jpg" },
  { name: "Isaac Newton", file: "isaac-newton.jpg" },
  { name: "Comte de Saint-Germain", file: "saint-germain.jpg" },
  { name: "Abraham Lincoln", file: "abraham-lincoln.jpg" },
  { name: "Nikola Tesla", file: "nikola-tesla.jpg" },
  { name: "Rudolf Steiner", file: "rudolf-steiner.jpg" },
  { name: "Grigori Rasputin", file: "grigori-rasputin.jpg" },
]

export function HallOfInitiates() {
  const t = useTranslations("HallOfInitiates")
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* -z-10 (not z-index:auto) so this sits behind every content block below,
          not just the first one that happens to be marked relative z-10 */}
      <div className="absolute inset-0 -z-10 stage-citrinitas" aria-hidden />
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">{t("eyebrow")}</p>
            <h2 className="text-balance font-serif text-3xl tracking-wide text-foreground md:text-4xl lg:text-5xl">
              {t.rich("heading", { emphasis: (chunks) => <span className="text-primary">{chunks}</span> })}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t("intro")}
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="flex snap-x gap-6 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {initiates.map((p, i) => (
            <figure key={p.name} className="group w-[200px] flex-none snap-center md:w-[230px]">
              <div className="aspect-[3/4] overflow-hidden rounded-b-md rounded-t-[100px] border border-primary/20 bg-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/initiates/${p.file}`}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-[center_12%] grayscale-[0.35] sepia-[0.2] transition duration-700 group-hover:grayscale-0 group-hover:sepia-0"
                />
              </div>
              <figcaption className="mt-4 text-center">
                <p className="font-serif text-lg tracking-wide text-primary">{p.name}</p>
                <p className="text-sm italic text-muted-foreground">{t(`initiates.${i}.role`)}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </ScrollReveal>

      <div className="mx-auto mt-8 max-w-7xl px-6">
        <ScrollReveal>
          <p className="max-w-2xl text-pretty font-serif text-xl italic leading-snug text-foreground md:text-2xl">
            {t.rich("closing", { emphasis: (chunks) => <span className="not-italic text-primary">{chunks}</span> })}
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            {t("portraitsCredit")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
