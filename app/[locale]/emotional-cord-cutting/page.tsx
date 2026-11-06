import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "EmotionalCordCutting",
  bg: "moonrise-friedrich.jpg",
  position: "center 40%",
  heroImage: "butterflies-lilac.jpg",
  heroPosition: "60% 50%",
  investment: "3.669 CZK",
  relatedHref: "/negative-energy-removal",
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
