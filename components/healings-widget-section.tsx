import { getTranslations } from "next-intl/server"
import { HeartHandshake, ArrowRight, Check } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { getHealingGroups } from "@/lib/healings"
import { ScrollReveal } from "./scroll-reveal"
import { SparkleTrail } from "./sparkle-trail"
import { HealingsWidgetCards, HealingsWidgetAsk, type WidgetHealing } from "./healings-widget-cards"

// Homepage healing teaser: three random healing sessions from the /healings page, each
// linking to its own page (prices live there, not here), plus a link to all healings and a WhatsApp
// "help me choose" button. Only healings that have their own page are picked.
export async function HealingsWidgetSection() {
  const t = await getTranslations("HealingsWidget")
  const { activations, auraEnergy, readings, bodyWork } = await getHealingGroups()

  const pool: WidgetHealing[] = [...activations, ...auraEnergy, ...readings, ...bodyWork].flatMap((h) =>
    h.detailsHref ? [{ name: h.name, description: h.description, href: h.detailsHref }] : [],
  )
  const perks = t.raw("perks") as string[]

  return (
    <section id="healing" className="relative scroll-mt-20 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="home-box home-box-heart relative rounded-lg border border-primary/30 px-5 py-10 shadow-2xl sm:px-8 md:px-12 md:py-12">
            <SparkleTrail variant="orbs" />
            <div className="relative z-10">
              <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                <HeartHandshake className="mb-4 h-9 w-9 text-primary" />
                <p className="mb-3 font-serif text-xs tracking-[0.3em] text-primary uppercase sm:text-sm">
                  {t("eyebrow")}
                </p>
                <h3 className="font-serif text-3xl leading-tight tracking-wide text-foreground text-balance md:text-4xl lg:text-5xl">
                  {t("heading")}
                </h3>
                <p className="mt-4 leading-relaxed text-[#f6eedf] [text-shadow:0_1px_10px_rgba(0,0,0,0.6)] md:text-lg">
                  {t("body")}
                </p>
              </div>

              <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/25 px-4 py-1.5 text-sm text-foreground backdrop-blur-sm"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {perk}
                  </li>
                ))}
              </ul>

              <HealingsWidgetCards items={pool} />

              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/healings"
                  className="inline-flex items-center justify-center gap-2 rounded border border-primary bg-primary px-7 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
                >
                  {t("button")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <HealingsWidgetAsk text={t("inquiry")} label={t("askButton")} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
