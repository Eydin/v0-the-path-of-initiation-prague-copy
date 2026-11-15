import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

// Described from Radu & Diana's own price list ("Cronos Reading"): no MMS source uses this name.
const config = {
  namespace: "ChronosReading",
  bg: "ancient-versus-eternal-sounion.jpg",
  position: "center 40%",
  kind: "reading" as const,
  relatedHref: "/life-activation",
  investment: "6.150 CZK",
  calEmbed: { link: "all/chronos-reading", namespace: "chronos-reading" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
