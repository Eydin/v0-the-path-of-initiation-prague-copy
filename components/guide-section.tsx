"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "./scroll-reveal"
import { KenBurns } from "./ken-burns"

const mmsLink = (chunks: React.ReactNode) => (
  <a
    href="https://www.modernmysteryschoolint.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground hover:text-primary transition-colors underline"
  >
    {chunks}
  </a>
)

export function GuideSection() {
  const t = useTranslations("Guide")
  return (
    <section id="guide" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/40" />
      <div className="absolute inset-0 stage-citrinitas" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ================= RADU COMAN SECTION ================= */}
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              {t("eyebrow")}
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
                {t.rich("body1", { mms: mmsLink })}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {t.rich("body2", {
                  usuflet: (chunks) => (
                    <a
                      href="https://universitateapentrusuflet.ro/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors underline"
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {t("body3")}
              </p>
              <div className="mt-4 h-px w-16 bg-primary/40" />
              <p className="font-serif text-sm tracking-wide text-primary italic">
                {`"${t("quote")}"`}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ================= DIANA CINPOERU SECTION ================= */}
        <ScrollReveal>
          <div className="mt-24 lg:mt-32 mb-12 text-center">
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              {t("dianaRole")}
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
                {t("dianaBody1")}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {t.rich("dianaBody2", { mms: mmsLink })}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {t("dianaBody3")}
              </p>
              <div className="mt-4 h-px w-16 bg-primary/40" />
              <p className="font-serif text-sm tracking-wide text-primary italic">
                {`"${t("dianaQuote")}"`}
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
