import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "CrystalHealing",
  bg: "the-elements-alchemical-and-rosicrucian-compendium-c-1760.jpg",
  position: "center 30%",
  heroImage: "amethyst-geode.jpg",
  heroPosition: "center 50%",
  heroCaption: "Amethyst geode · photo by Calvin Chai, Unsplash",
  investment: "3.669 CZK",
  relatedHref: "/sacred-rites-healing",
  calEmbed: { link: "all/crystal-healing", namespace: "crystal-healing" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
