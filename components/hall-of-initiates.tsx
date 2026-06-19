"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

// Historical figures said to have walked the path of initiation through the ages.
// Portraits are public-domain artworks & photographs (Wikimedia Commons).
const initiates: { name: string; role: string; file: string }[] = [
  { name: "Hermes Trismegistus", role: "Father of Hermetic wisdom", file: "hermes-trismegistus.jpg" },
  { name: "Hatshepsut", role: "The pharaoh who built temples", file: "hatshepsut.jpg" },
  { name: "Nefertiti", role: "Keeper of the sacred feminine", file: "nefertiti.jpg" },
  { name: "King David", role: "Warrior-poet and psalmist", file: "king-david.jpg" },
  { name: "King Salomon", role: "Founder of the lineage", file: "king-salomon.jpg" },
  { name: "Queen of Sheba", role: "Bridge between kingdoms", file: "queen-of-sheba.jpg" },
  { name: "Pythagoras", role: "Geometry as divine language", file: "pythagoras.jpg" },
  { name: "King Leonidas", role: "Guardian-king of the few", file: "king-leonidas.jpg" },
  { name: "Gautama Buddha", role: "The awakened one", file: "buddha.jpg" },
  { name: "Socrates", role: "Father of inquiry", file: "socrates.jpg" },
  { name: "Aristotle", role: "Master of the sciences", file: "aristotle.jpg" },
  { name: "Alexander the Great", role: "Visionary world-builder", file: "alexander-the-great.jpg" },
  { name: "Julius Caesar", role: "Statesman and reformer", file: "julius-caesar.jpg" },
  { name: "Cleopatra", role: "Priestess of power", file: "cleopatra.jpg" },
  { name: "Jesus", role: "Master of transformation", file: "jesus.jpg" },
  { name: "Tomoe Gozen", role: "Warrior of devotion", file: "tomoe-gozen.jpg" },
  { name: "Joan of Arc", role: "Faith in armor", file: "joan-of-arc.jpg" },
  { name: "Leonardo da Vinci", role: "The universal initiate", file: "leonardo-da-vinci.png" },
  { name: "Michelangelo", role: "Master of stone and spirit", file: "michelangelo.jpg" },
  { name: "Nostradamus", role: "Physician and seer", file: "nostradamus.jpg" },
  { name: "William Shakespeare", role: "Poet of the soul", file: "william-shakespeare.jpg" },
  { name: "Miyamoto Musashi", role: "The sword as a path", file: "miyamoto-musashi.jpg" },
  { name: "Isaac Newton", role: "Scientist of the mysteries", file: "isaac-newton.jpg" },
  { name: "Comte de Saint-Germain", role: "The deathless adept", file: "saint-germain.jpg" },
  { name: "Abraham Lincoln", role: "Statesman of conscience", file: "abraham-lincoln.jpg" },
  { name: "Nikola Tesla", role: "Frequency and light", file: "nikola-tesla.jpg" },
  { name: "Rudolf Steiner", role: "Architect of the spirit", file: "rudolf-steiner.jpg" },
  { name: "Grigori Rasputin", role: "The mystic healer", file: "grigori-rasputin.jpg" },
]

export function HallOfInitiates() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">Hall of Initiates</p>
            <h2 className="text-balance font-serif text-3xl tracking-wide text-foreground md:text-4xl lg:text-5xl">
              You walk in <span className="text-primary">great company</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Kings and queens, artists and scientists were initiated on this same path &mdash; Leonardo da Vinci,
              Nikola Tesla, Isaac Newton among them. Their portraits hang here as witnesses.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="flex snap-x gap-6 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {initiates.map((p) => (
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
                <p className="text-sm italic text-muted-foreground">{p.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </ScrollReveal>

      <div className="mx-auto mt-8 max-w-7xl px-6">
        <ScrollReveal>
          <p className="max-w-2xl text-pretty font-serif text-xl italic leading-snug text-foreground md:text-2xl">
            What if you could access the <span className="not-italic text-primary">exact same</span> path, tools and
            power they did &mdash; what would your legacy be?
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Portraits: historical artworks &amp; photographs, Wikimedia Commons.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
