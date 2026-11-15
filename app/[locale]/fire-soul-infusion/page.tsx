import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "FireSoulInfusion",
  bg: "path-into-sunrise.jpg",
  position: "center 40%",
  relatedHref: "/core-will-infusion",
  investment: "6.150 CZK",
  calEmbed: { link: "all/fire-soul-infusion", namespace: "fire-soul-infusion" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
