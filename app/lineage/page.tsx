import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"
import { KenBurns } from "@/components/ken-burns"
import { QuoteBreaker } from "@/components/quote-breaker"
import { ArrowRight, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "The Lineage of King Salomon | The Path of Initiation Prague",
  description:
    "Over 3,000 years of unbroken written lineage. Discover the Modern Mystery School, the King Salomon Lineage, and the three Lineage Holders of the Third Order — Gudni Gudnason, Hideto Nakagome, and Dave Lanyon.",
}

const WHATSAPP =
  "https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Lineage%20and%20the%20Path%20of%20Initiation."

const holders = [
  {
    name: "Gudni GED Gudnason",
    title: "Sovereign Ipsissimus & Hierophant",
    role: "Founder of the Modern Mystery School",
    image: "gudni-gudnason.jpg",
    bio: "Born in Iceland and raised steeped in the mysteries, Gudni travelled widely to receive teachings and initiations across a myriad of traditions. His teaching career spans over forty years — Kabbalah, Alchemy, Metaphysics, Quantum Physics and far beyond. A master metaphorical teacher, he imparts esoteric principle through analogy, allegory and parable. In 1997 he brought the Modern Mystery School publicly to the world.",
  },
  {
    name: "Hideto REI Nakagome",
    title: "Sovereign Ipsissimus",
    role: "Member of the Third Order",
    image: "hideto-nakagome.jpg",
    bio: "A lineage holder and administrator of the Third Order, anchoring the lineage and its teachings in the East. Together with his brothers of the Third Order, he safeguards the purity of the tradition and keeps the door of the Mystery School open to those who seek the Light.",
  },
  {
    name: "Dave THOR Lanyon",
    title: "Sovereign Ipsissimus",
    role: "Member of the Third Order",
    image: "dave-lanyon.jpg",
    bio: "A lineage holder and administrator of the Third Order. In union with his fellow key holders he administers and attends to the maintenance of the lineage, ensuring the teachings are passed on with integrity from teacher to student through the holy process of initiation.",
  },
]

export default function LineagePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
          <ParallaxImage
            src="/images/art/ascent-blessed-bosch.jpg"
            alt=""
            position="center 35%"
            strength={90}
            priority
          />
          <div className="absolute inset-0 bg-background/75" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
            <ScrollReveal>
              <div className="mx-auto mb-6 h-px w-24 bg-primary/60" />
              <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">
                The Modern Mystery School
              </p>
              <h1 className="mb-8 font-serif text-4xl leading-tight tracking-wide text-foreground md:text-6xl lg:text-7xl text-balance">
                The Lineage of <span className="text-primary">King Salomon</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Over 3,000 years of written history. An unbroken chain of teacher to student,
                affirmed by the holy process of initiation — preserving the keys to true
                spiritual power since the beginning of time.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── What is Lineage ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="relative z-10 mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <p className="mb-3 text-center font-serif text-sm uppercase tracking-[0.3em] text-primary">
                What is Lineage?
              </p>
              <h2 className="mb-10 text-center font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                The measure of an authentic Mystery School
              </h2>
              <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Lineage is a key and important factor in determining the legitimacy, integrity
                  and authority that an authentic Mystery School holds. By definition, lineage
                  means a lineal descent from an ancestor — an ancestry, a pedigree.
                </p>
                <p>
                  The Modern Mystery School has persisted through time an ancient tradition of
                  sharing knowledge from teacher to student, affirmed by the holy process of
                  initiation. This direct transfer of information has preserved the virtue and
                  honour of the mystery school tradition, which has held the secrets of God, the
                  universe, and the keys to true spiritual power since the beginning of time.
                </p>
                <p className="font-serif text-xl italic text-foreground">
                  This wisdom and power is available to all who truly seek it and are willing to
                  honour its sacred nature by walking the Path of Initiation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Quote breaker ── */}
        <QuoteBreaker
          image="hermes-trismegistus-siena.jpg"
          quote={
            <>
              &ldquo;As above, <em className="text-primary">so below</em>.&rdquo;
            </>
          }
          attribution="Hermes Trismegistus"
          caption="Hermes Trismegistus · Floor of Siena Cathedral, c. 1488"
          position="center 30%"
        />

        {/* ── The King Salomon Lineage ── */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <p className="mb-3 text-center font-serif text-sm uppercase tracking-[0.3em] text-primary">
                Over 3,000 Years
              </p>
              <h2 className="mb-10 text-center font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                The King Salomon Lineage
              </h2>
              <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  The lineage of the Modern Mystery School dates back to the time of King Salomon
                  and therefore carries over 3,000 years of written history and lineage. While the
                  mystery school tradition is far older, the lineage of the MMS and its teachings
                  can be verified and traced directly to the teachings of King Salomon himself.
                </p>
                <p>
                  The oral tradition reaches back more than 8,000 years to the time of Hermes —
                  Hermes Trismegistus. Initiation, combined with this unbroken lineage, empowers
                  the Adept to engage in the Great Work: creating a better world and living in
                  accordance with their true potential and life purpose.
                </p>
                <p>
                  The great masters have all walked upon the Path of Initiation in the mystery
                  school tradition — the very path that led them to fulfill their promise to God
                  while here on this earth.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── The Third Order — Three Lineage Holders ── */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <ParallaxImage src="/images/art/pantheon-panini.jpg" alt="" position="center" strength={70} />
          <div className="absolute inset-0 bg-background/90" />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                  The Third Order
                </p>
                <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                  The Three Lineage Holders
                </h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  All lineages have main key holders — individuals who hold and anchor the lineage
                  on the planet, with the authority to keep the door of the Mystery School open to
                  those who seek the Light. In this lineage they are titled the Third Order, and in
                  union they maintain the purity of the lineage and its teachings.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-10 md:grid-cols-3">
              {holders.map((h, i) => (
                <ScrollReveal key={h.name} delay={i * 0.12}>
                  <article className="group flex h-full flex-col border border-primary/20 bg-card/60 backdrop-blur-sm">
                    <KenBurns
                      src={`/images/art/${h.image}`}
                      alt={`${h.title} ${h.name}`}
                      position="center 20%"
                      sizes="(max-width: 768px) 90vw, 22rem"
                      className="aspect-[4/5] w-full"
                    />
                    <div className="flex flex-1 flex-col gap-3 p-7">
                      <p className="font-serif text-xs uppercase tracking-[0.25em] text-primary">
                        {h.title}
                      </p>
                      <h3 className="font-serif text-2xl tracking-wide text-foreground">{h.name}</h3>
                      <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                        {h.role}
                      </p>
                      <div className="my-2 h-px w-12 bg-primary/40" />
                      <p className="text-base leading-relaxed text-muted-foreground">{h.bio}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <p className="mx-auto mt-16 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
                Today, these three lineage holders carry the great responsibility of maintaining
                the purity of the teachings — working in collaboration with the Council of Twelve
                women and the wider leadership, stewarding the lineage of King Salomon into the
                modern age.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
            <ScrollReveal>
              <div className="mx-auto mb-6 h-px w-16 bg-primary/60" />
              <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                Walk the Path
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Being part of the Modern Mystery School lineage is being part of a family — a global
                tribe dedicated to the empowerment and betterment of humanity. The door is open to
                those who feel the call.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                Begin Your Journey
                <ArrowRight className="h-4 w-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
