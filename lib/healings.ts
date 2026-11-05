import { getLocale, getTranslations } from "next-intl/server"
import { BRAND } from "@/lib/brand-names"
import { MMS_UK_CALENDAR_URL } from "@/components/modality"
import type { Healing } from "@/components/healing-grid"

export const LIFE_ACTIVATION_STRIPE = "https://buy.stripe.com/14AdR2gmbeEuaZf2FZg360j"
const FULL_SPIRIT_ACTIVATION_STRIPE = "https://buy.stripe.com/cNi5kwb1RdAq3wN94ng360t"
const AURA_HEALING_STRIPE = "https://buy.stripe.com/8x29AM0ndbsic3j94ng360y"

// Every healing on the /healings page, grouped as the page shows them, with prices and
// links. The homepage healing teaser picks from the same list, so the two never drift apart.
export async function getHealingGroups(locale?: string) {
  const t = await getTranslations({ locale: locale ?? (await getLocale()), namespace: "Healings" })

  const activations: Healing[] = [
    {
      name: BRAND.lifeActivation,
      tag: t("groups.activations.items.0.tag"),
      description: t("groups.activations.items.0.description"),
      price: "8.500 CZK",
      bookHref: LIFE_ACTIVATION_STRIPE,
      detailsHref: "/life-activation",
    },
    {
      name: BRAND.fullSpiritActivation,
      description: t("groups.activations.items.1.description"),
      price: "8.500 CZK",
      bookHref: FULL_SPIRIT_ACTIVATION_STRIPE,
      detailsHref: "/full-spirit-activation",
    },
    {
      name: t("groups.activations.items.2.name"),
      description: t("groups.activations.items.2.description"),
      externalHref: MMS_UK_CALENDAR_URL,
    },
  ]

  const auraEnergy: Healing[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => ({
    name: i === 0 ? t("groups.auraEnergy.items.0.name", { brand: BRAND.sacredGeometry }) : t(`groups.auraEnergy.items.${i}.name`),
    description: t(`groups.auraEnergy.items.${i}.description`),
    ...(i === 0
      ? { price: "4.800 CZK", bookHref: AURA_HEALING_STRIPE, detailsHref: "/aura-healing" }
      : {}),
    ...(i === 4 ? { price: "4.900 CZK", detailsHref: "/ensofic-reiki" } : {}),
    ...(i === 5 ? { price: "4.900 CZK", detailsHref: "/treating-negative-habits" } : {}),
    ...(i === 6 ? { price: "3.669 CZK", detailsHref: "/crystal-healing" } : {}),
    ...(i === 7 ? { price: "3.669 CZK", detailsHref: "/sacred-rites-healing" } : {}),
    ...(i === 8 ? { price: "6.150 CZK", detailsHref: "/soul-retrieval" } : {}),
    ...(i === 9 ? { price: "6.150 CZK", detailsHref: "/spark-of-life" } : {}),
  }))

  // The remote-capable sessions also appear in "Aura & Energy" above — same cards, so the two never drift apart.
  // (Ensofic Reiki, Treating of Negative Habits, Spark of Life)
  const remote: Healing[] = [4, 5, 9].map((i) => auraEnergy[i])

  const readings: Healing[] = [0, 1, 2].map((i) => ({
    name: t(`groups.readings.items.${i}.name`),
    description: t(`groups.readings.items.${i}.description`),
    ...(i === 0
      ? { price: "6.150 CZK", detailsHref: "/life-purpose-reading" }
      : {}),
  }))

  const bodyWork: Healing[] = [0, 1, 2, 3, 4].map((i) => ({
    name: t(`groups.bodyWork.items.${i}.name`),
    description: t(`groups.bodyWork.items.${i}.description`),
    ...(i === 0 ? { price: "350 CZK", detailsHref: "/max-meditation" } : {}),
  }))

  return { activations, auraEnergy, remote, readings, bodyWork }
}
