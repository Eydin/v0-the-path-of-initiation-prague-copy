import { getTranslations } from "next-intl/server"
import { HeartHandshake, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { BRAND } from "@/lib/brand-names"
import { ScrollReveal } from "./scroll-reveal"
import { SparkleTrail } from "./sparkle-trail"
import { HealingsWidgetCards, type WidgetHealing } from "./healings-widget-cards"

type RawItem = { name?: string; description: string }

// Homepage healing teaser: three random healing sessions from the /healings
// page (foundational activations, aura & energy healings, body & meditation).
// The whole block links to /healings.
export async function HealingsWidgetSection() {
  const t = await getTranslations("HealingsWidget")
  const tH = await getTranslations("Healings")

  const raw = (key: string) => tH.raw(key) as RawItem[]

  const pool: WidgetHealing[] = [
    { name: BRAND.lifeActivation, description: tH("groups.activations.items.0.description") },
    { name: BRAND.fullSpiritActivation, description: tH("groups.activations.items.1.description") },
    { name: tH("groups.activations.items.2.name"), description: tH("groups.activations.items.2.description") },
    ...raw("groups.auraEnergy.items").map((item, i) => ({
      name: i === 0 ? tH("groups.auraEnergy.items.0.name", { brand: BRAND.sacredGeometry }) : (item.name as string),
      description: item.description,
    })),
    ...raw("groups.bodyWork.items").map((item) => ({ name: item.name as string, description: item.description })),
  ]

  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <Link
            href="/healings"
            className="home-box home-box-dna group relative block rounded-lg border border-primary/30 bg-card p-8 transition-all hover:border-primary/60"
          >
            <SparkleTrail variant="orbs" />
            <div className="flex flex-col items-center gap-4 text-center">
              <HeartHandshake className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <h3 className="font-serif text-2xl tracking-wide text-foreground md:text-3xl">{t("heading")}</h3>
                <p className="mt-2 text-muted-foreground">{t("body")}</p>
              </div>
            </div>

            <HealingsWidgetCards items={pool} />

            <div className="mt-8 text-center">
              <span className="inline-flex items-center gap-2 rounded border border-primary bg-primary px-6 py-3 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all group-hover:bg-primary/90">
                {t("button")}
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
