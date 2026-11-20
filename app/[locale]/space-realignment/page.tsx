import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

// No official MMS page describes a "Space Realignment"; the copy follows Radu's own description of the session.
// It is for the person, not a home or building: finding your place and living comfortably at the centre of your
// own space, life and universe. Only Radu performs it, in person at Ruská 12 (Vršovice), so the Cal.com event
// checks only his calendar.
const config = {
  namespace: "SpaceRealignment",
  bg: "pantheon-panini.jpg",
  position: "center 35%",
  heroImage: "caspar-david-friedrich-wanderer-above-the-sea-of-fog.jpg",
  heroPosition: "center 30%",
  heroCaption: "Wanderer above the Sea of Fog · Caspar David Friedrich, c. 1818 (public domain)",
  investment: "4.900 CZK",
  hosts: "radu" as const,
  calEmbed: { link: "all/space-realignment", namespace: "space-realignment" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
