import { getTranslations } from "next-intl/server"
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { BRAND } from "@/lib/brand-names"
import { ScrollReveal } from "./scroll-reveal"
import { BookLink } from "./book-link"

// "Your first step": the path in three plain steps for newcomers — what the Life Activation
// actually is (how it works, how it feels), then Empower Thyself, then everything
// after. Step 1 is highlighted as the place to start, and can be booked straight from here.
export async function FirstStepsSection() {
  const t = await getTranslations("FirstSteps")
  const tCta = await getTranslations("CTA")
  const tHero = await getTranslations("Hero")

  const steps = [
    {
      title: BRAND.lifeActivation,
      meta: t("step1.meta"),
      body: t("step1.body"),
      feel: t("step1.feel"),
      href: "/life-activation",
      link: t("learnMore"),
    },
    {
      title: BRAND.empowerThyself,
      meta: t("step2.meta"),
      body: t("step2.body"),
      href: "/empower-thyself",
      link: t("learnMore"),
    },
    {
      title: t("step3.title"),
      meta: t("step3.meta"),
      body: t("step3.body"),
      href: "/calendar",
      link: t("step3.link"),
    },
  ]

  return (
    <section id="first-steps" className="relative scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">{t("eyebrow")}</p>
            <h2 className="font-serif text-3xl tracking-wide text-foreground text-balance md:text-4xl lg:text-5xl">
              {t("heading")}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("intro")}</p>
          </div>
        </ScrollReveal>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-3 lg:gap-6">
          {/* the path joining the three steps (wide screens only) */}
          <span
            aria-hidden
            className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-primary/70 via-primary/40 to-primary/15 lg:block"
          />
          {steps.map((step, i) => {
            const first = i === 0
            return (
              <li key={step.href} className="relative flex flex-col items-center">
                <ScrollReveal delay={0.1 + i * 0.12} className="flex w-full flex-1 flex-col items-center">
                  <span
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border font-serif text-xl ${
                      first
                        ? "border-primary bg-primary text-primary-foreground shadow-lg"
                        : "border-primary/50 bg-background text-primary"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div
                    className={`group relative mt-5 flex w-full flex-1 cursor-pointer flex-col rounded-lg border p-7 text-left transition-all duration-300 hover:-translate-y-1 ${
                      first
                        ? "home-box home-box-espresso border-primary/40 shadow-2xl hover:border-primary/70"
                        : "border-primary/20 bg-card shadow-sm hover:border-primary/50 hover:shadow-lg"
                    }`}
                  >
                    {first && (
                      <span className="mb-3 inline-block w-fit rounded-full border border-primary/50 px-3 py-0.5 text-[0.65rem] tracking-[0.2em] text-primary uppercase">
                        {t("startHere")}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl tracking-wide text-foreground">{step.title}</h3>
                    <p className="mt-2 text-xs font-medium tracking-wider text-primary uppercase">{step.meta}</p>
                    <p className="mt-4 leading-relaxed text-foreground/90">{step.body}</p>
                    {step.feel && (
                      <p className="mt-3 font-serif leading-relaxed text-foreground/90 italic">{step.feel}</p>
                    )}
                    <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-6">
                      {first && (
                        <BookLink
                          slug="life-activation"
                          className="relative z-10 inline-flex items-center gap-2 rounded border border-primary bg-primary px-5 py-3 font-serif text-sm tracking-widest text-primary-foreground uppercase transition-all hover:bg-primary/90"
                        >
                          <Sparkles className="h-4 w-4" />
                          {tCta("bookLifeActivation")}
                        </BookLink>
                      )}
                      {/* the link stretches over the whole card (after:inset-0), so the card is clickable;
                          the booking button sits above it (z-10) and keeps its own destination */}
                      <Link
                        href={step.href}
                        className="inline-flex w-fit items-center gap-1.5 text-sm tracking-wider text-primary uppercase transition-colors after:absolute after:inset-0 after:rounded-lg after:content-[''] group-hover:text-gold-light"
                      >
                        {step.link}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            )
          })}
        </ol>

        <a
          href={`https://wa.me/420792908296?text=${encodeURIComponent(tHero("inquiry"))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-12 block max-w-xs text-center text-sm font-semibold text-[#25D366] underline-offset-4 transition-colors hover:text-[#1ebe5b] hover:underline sm:max-w-none"
        >
          <MessageCircle className="mr-2 inline h-4 w-4 align-[-3px]" />
          {t("askLink")}
        </a>
      </div>
    </section>
  )
}
