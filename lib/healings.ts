import { getLocale, getTranslations } from "next-intl/server"
import { BRAND } from "@/lib/brand-names"
import { MMS_UK_CALENDAR_URL } from "@/components/modality"
import type { Healing } from "@/components/healing-grid"

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
      bookSlug: "life-activation",
      detailsHref: "/life-activation",
      format: "inPerson",
    },
    {
      name: BRAND.fullSpiritActivation,
      description: t("groups.activations.items.1.description"),
      price: "8.500 CZK",
      bookSlug: "full-spirit-activation",
      detailsHref: "/full-spirit-activation",
      format: "inPerson",
    },
    {
      name: t("groups.activations.items.2.name"),
      description: t("groups.activations.items.2.description"),
      externalHref: MMS_UK_CALENDAR_URL,
      detailsHref: "/galactic-activation",
    },
  ]

  // where each one takes place
  const auraFormat: Healing["format"][] = ["inPerson", "inPerson", "inPerson", "inPerson", "both", "both", "inPerson", "inPerson", "inPerson", "remote", "inPerson"]

  const auraEnergy: Healing[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
    name: i === 0 ? t("groups.auraEnergy.items.0.name", { brand: BRAND.sacredGeometry }) : t(`groups.auraEnergy.items.${i}.name`),
    description: t(`groups.auraEnergy.items.${i}.description`),
    format: auraFormat[i],
    ...(i === 0
      ? { price: "4.800 CZK", bookSlug: "aura-healing", detailsHref: "/aura-healing" }
      : {}),
    ...(i === 1 ? { price: "3.669 CZK", bookSlug: "negative-energy-removal", detailsHref: "/negative-energy-removal" } : {}),
    ...(i === 2 ? { price: "3.669 CZK", bookSlug: "emotional-cord-cutting", detailsHref: "/emotional-cord-cutting" } : {}),
    ...(i === 3 ? { price: "3.669 CZK", bookSlug: "shamanic-aura-clearing", detailsHref: "/shamanic-aura-clearing" } : {}),
    ...(i === 4
      ? {
          price: "4.900 CZK",
          bookOptions: [
            { slug: "ensofic-reiki-in-person", labelKey: "bookInPerson" as const },
            { slug: "ensofic-reiki-remote", labelKey: "bookRemote" as const },
          ],
          detailsHref: "/ensofic-reiki",
        }
      : {}),
    ...(i === 5
      ? {
          price: "4.900 CZK",
          bookOptions: [
            { slug: "treating-negative-habits-in-person", labelKey: "bookInPerson" as const },
            { slug: "treating-negative-habits-remote", labelKey: "bookRemote" as const },
          ],
          detailsHref: "/treating-negative-habits",
        }
      : {}),
    ...(i === 6 ? { price: "3.669 CZK", bookSlug: "crystal-healing", detailsHref: "/crystal-healing" } : {}),
    ...(i === 7 ? { price: "3.669 CZK", bookSlug: "sacred-rites-healing", detailsHref: "/sacred-rites-healing" } : {}),
    ...(i === 8 ? { price: "6.150 CZK", bookSlug: "soul-retrieval", detailsHref: "/soul-retrieval" } : {}),
    ...(i === 9 ? { price: "6.150 CZK", bookSlug: "spark-of-life", detailsHref: "/spark-of-life" } : {}),
    ...(i === 10 ? { price: "6.150 CZK", bookSlug: "isis-healing", detailsHref: "/isis-healing" } : {}),
  }))

  // The remote-capable sessions also appear in "Aura & Energy" above — same cards, so the two never drift apart.
  // (Ensofic Reiki, Treating of Negative Habits, Spark of Life)
  const remote: Healing[] = [4, 5, 9].map((i) => auraEnergy[i])

  const readings: Healing[] = [0, 1, 2].map((i) => ({
    name: t(`groups.readings.items.${i}.name`),
    description: t(`groups.readings.items.${i}.description`),
    ...(i === 0
      ? { price: "6.150 CZK", bookSlug: "life-purpose-reading", detailsHref: "/life-purpose-reading", format: "inPerson" as const }
      : {}),
    ...(i === 1 ? { price: "3.669 CZK", bookSlug: "intuitive-crystal-reading", detailsHref: "/intuitive-crystal-reading", format: "inPerson" as const } : {}),
    ...(i === 2 ? { price: "6.150 CZK", bookSlug: "chronos-reading", detailsHref: "/chronos-reading", format: "inPerson" as const } : {}),
  }))

  // (Max Meditation lives on the Meditation & Prayer page, not here.)
  const bodyWorkCards = [
    { bookSlug: "laser-light-healing", detailsHref: "/laser-light-healing", price: "1.850 CZK" },
    { bookSlug: "meridian-line-balancing", detailsHref: "/meridian-line-balancing", price: "1.850 CZK" },
    { bookSlug: "tree-of-life-awakening", detailsHref: "/tree-of-life-awakening", price: "1.333 CZK" },
    { bookSlug: "chakra-awakening", detailsHref: "/chakra-awakening", price: "1.333 CZK" },
  ]
  const bodyWork: Healing[] = bodyWorkCards.map((card, i) => ({
    name: t(`groups.bodyWork.items.${i}.name`),
    description: t(`groups.bodyWork.items.${i}.description`),
    ...card,
    format: "inPerson" as const,
  }))

  return { activations, auraEnergy, remote, readings, bodyWork }
}
