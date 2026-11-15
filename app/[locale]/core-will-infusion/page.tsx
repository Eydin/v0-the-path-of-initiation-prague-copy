import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "CoreWillInfusion",
  bg: "accolade-leighton.jpg",
  position: "center 20%",
  relatedHref: "/fire-soul-infusion",
  investment: "6.150 CZK",
  calEmbed: { link: "all/core-will-infusion", namespace: "core-will-infusion" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
