"use client"

import { ScrollReveal } from "./scroll-reveal"
import { KenBurns } from "./ken-burns"

export function GuideSection() {
  return (
    <section id="guide" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* ================= RADU COMAN SECTION ================= */}
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              Your Guide
            </p>
            <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl">
              Radu Coman
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="relative mx-auto w-full max-w-md">
              {/* soft gold aura behind the portrait */}
              <div className="absolute -inset-3 -z-10 rounded-sm bg-primary/15 blur-2xl" aria-hidden />
              <KenBurns
                src="/images/Radu2.jpg"
                alt="Radu Coman — Guide and Teacher in the Lineage of King Salomon"
                position="center 25%"
                sizes="(max-width: 1024px) 90vw, 28rem"
                className="aspect-[3/4] w-full rounded-sm border border-primary/40 shadow-2xl shadow-black/60 ring-1 ring-primary/10"
              />
              {/* gradient lift + name plate */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-4 left-5 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                Radu Coman
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Radu Coman is a Guide and Teacher in the lineage of King Salomon,
                certified by the <a href="https://www.modernmysteryschoolint.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline">Modern Mystery School</a>. With years of dedicated training and a
                deep passion for empowering others, Radu has made it his mission
                to bring the ancient teachings to the heart of Europe.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Having previously served the community through his work at{" "}
                <a
                  href="https://universitateapentrusuflet.ro/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors underline"
                >
                  universitateapentrusuflet.ro
                </a>
                , Radu has now transitioned to serving the people in the area of Prague by 
                making the path of initiation available to those in the region. He is providing
                an immersive experience for those
                who are truly ready for transformation.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                His approach combines the timeless precision of the ancient
                mystery school teachings with a modern, grounded understanding of
                what it means to live as an awakened being in today&apos;s world.
              </p>
              <div className="mt-4 h-px w-16 bg-primary/40" />
              <p className="font-serif text-sm tracking-wide text-primary italic">
                {`"My purpose is to guide you home and help you express your truest self."`}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ================= DIANA CINPOERU SECTION ================= */}
        <ScrollReveal>
          <div className="mt-24 lg:mt-32 mb-12 text-center">
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              Teacher | Healer
            </p>
            <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl">
              Diana Cinpoeru
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Column (Now First) */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Diana Cinpoeru is a dedicated Teacher and Healer assisting Radu in his mission. Driven by a lifelong quest to truly understand human nature and consciousness, her journey led her through art, symbolism, astrology, and various healing modalities.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Her search for direct experience ended when she discovered the <a href="https://www.modernmysteryschoolint.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline">Modern Mystery School</a>. Through practical tools like Astral Travel, she learned that awareness extends far beyond the physical body, unlocking answers that lie past our ordinary senses.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Today, Diana shares these ancient, transformative practices to help others bridge the gap between theory and reality, shifting from simple curiosity to profound personal mastery.
              </p>
              <div className="mt-4 h-px w-16 bg-primary/40" />
              <p className="font-serif text-sm tracking-wide text-primary italic">
                {`"There is a difference between hearing that something is possible and experiencing it yourself. The second changes everything."`}
              </p>
            </div>
          </ScrollReveal>

          {/* Image Column (Now Second) */}
          <ScrollReveal direction="right">
            <div className="relative mx-auto w-full max-w-md">
              {/* soft gold aura behind the portrait */}
              <div className="absolute -inset-3 -z-10 rounded-sm bg-primary/15 blur-2xl" aria-hidden />
              <KenBurns
                src="/images/diana-cinpoeru.jpeg"
                alt="Diana Cinpoeru — Teacher and Healer"
                position="center 25%"
                sizes="(max-width: 1024px) 90vw, 28rem"
                className="aspect-[3/4] w-full rounded-sm border border-primary/40 shadow-2xl shadow-black/60 ring-1 ring-primary/10"
              />
              {/* gradient lift + name plate */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-4 left-5 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                Diana Cinpoeru
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}