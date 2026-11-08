import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "NegativeEnergyRemoval",
  bg: "moonrise-friedrich.jpg",
  position: "center 40%",
  heroImage: "sunset-waves.jpg",
  heroPosition: "55% 40%",
  investment: "3.669 CZK",
  relatedHref: "/emotional-cord-cutting",
  calEmbed: { link: "all/negative-energy-removal", namespace: "negative-energy-removal" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
