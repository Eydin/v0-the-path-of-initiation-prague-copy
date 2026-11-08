import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "SacredRitesHealing",
  bg: "the-elements-alchemical-and-rosicrucian-compendium-c-1760.jpg",
  position: "center 30%",
  heroImage: "healing-stones.jpg",
  heroPosition: "center 50%",
  heroCaption: "Healing stones · photo by Dan Farrell, Unsplash",
  investment: "3.669 CZK",
  relatedHref: "/crystal-healing",
  calEmbed: { link: "all/sacred-rites-healing", namespace: "sacred-rites-healing" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
