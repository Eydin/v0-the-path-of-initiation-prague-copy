import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "NegativeHabits",
  bg: "ancient-of-days-blake.jpg",
  position: "center 30%",
  heroImage: "path-into-sunrise.jpg",
  heroPosition: "50% 35%",
  heroCaption: "A path into the sunrise · photo by Dave Hoefler, Unsplash",
  investment: "4.900 CZK",
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
