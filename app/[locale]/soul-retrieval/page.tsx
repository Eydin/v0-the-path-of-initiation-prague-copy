import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "SoulRetrieval",
  bg: "ascent-blessed-bosch.jpg",
  position: "center 30%",
  heroImage: "sunlight-misty-trees.jpg",
  heroPosition: "40% 55%",
  heroCaption: "Morning light · photo by Andrew Tom, Unsplash",
  investment: "6.150 CZK",
  calEmbed: { link: "all/soul-retrieval", namespace: "soul-retrieval" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
