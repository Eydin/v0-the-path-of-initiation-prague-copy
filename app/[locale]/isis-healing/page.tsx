import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

// Sources: modernmysteryschoolint.com (Isis Healing handing down) and MMS NorCal's session page.
// Only Radu performs it (a certified Guide holding the Isis Healing crystal), so the Cal.com event checks only his calendar.
const config = {
  namespace: "IsisHealing",
  bg: "temple-pylon-karnak.jpg",
  position: "center 40%",
  heroImage: "isis-leading-nefertari.jpg",
  heroPosition: "center 22%",
  heroCaption: "Isis leads Queen Nefertari · facsimile by Charles K. Wilkinson, The Met (CC0)",
  investment: "6.150 CZK",
  hosts: "radu" as const,
  calEmbed: { link: "all/isis-healing", namespace: "isis-healing" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
