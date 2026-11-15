import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

// One Cal.com event: a booking question lets the booker pick a single session (8.600 CZK) or the series of three (22.000 CZK).
const config = {
  namespace: "HermeticRebalancing",
  bg: "hermes-trismegistus-siena.jpg",
  position: "center 30%",
  relatedHref: "/soul-retrieval",
  investment: "8.600 CZK",
  calEmbed: { link: "all/hermetic-rebalancing", namespace: "hermetic-rebalancing" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
