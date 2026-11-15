import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "UnifiedChakraHealing",
  bg: "constellations-ceiling.jpg",
  position: "50% 45%",
  relatedHref: "/starseed-healing",
  investment: "4.900 CZK",
  calEmbed: { link: "all/unified-chakra-healing", namespace: "unified-chakra-healing" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
