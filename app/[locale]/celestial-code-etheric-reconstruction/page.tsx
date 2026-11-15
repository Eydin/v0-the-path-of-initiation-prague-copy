import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "CelestialCode",
  bg: "flammarion.jpg",
  position: "center 35%",
  relatedHref: "/etheric-reconstruction",
  investment: "9.888 CZK",
  calEmbed: { link: "all/celestial-code-etheric-reconstruction", namespace: "celestial-code-etheric-reconstruction" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
