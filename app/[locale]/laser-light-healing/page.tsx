import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "LaserLightHealing",
  bg: "giovanni-paolo-panini-interior-of-the-pantheon-rome-c-1734-nga-165.jpg",
  position: "center 30%",
  relatedHref: "/meridian-line-balancing",
  investment: "1.850 CZK",
  calEmbed: { link: "all/laser-light-healing", namespace: "laser-light-healing" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
