import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

// No official MMS page for this session; copy follows Radu's own description (Cal.com event 50) and the
// MMS teaching on clearing, sealing and gridding a home or workspace (modernmysteryschoolint.com, "Creating your sacred space").
// Only Radu performs it, at the client's address in Prague, so the Cal.com event checks only his calendar.
const config = {
  namespace: "SpaceRealignment",
  bg: "pantheon-panini.jpg",
  position: "center 35%",
  heroImage: "hammershoi-dust-motes-dancing.jpg",
  heroPosition: "center 40%",
  heroCaption: "Dust Motes Dancing in the Sunbeams · Vilhelm Hammershøi, 1900 (public domain)",
  investment: "4.900 CZK",
  hosts: "radu" as const,
  relatedHref: "/sacred-geometry",
  calEmbed: { link: "all/space-realignment", namespace: "space-realignment" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
