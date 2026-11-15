import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "EthericReconstruction",
  bg: "vitruvian-man.jpg",
  position: "50% 22%",
  relatedHref: "/celestial-code-etheric-reconstruction",
  investment: "7.777 CZK",
  calEmbed: { link: "all/etheric-reconstruction", namespace: "etheric-reconstruction" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
