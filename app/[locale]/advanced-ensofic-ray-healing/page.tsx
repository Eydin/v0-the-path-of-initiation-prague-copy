import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "AdvancedEnsoficRay",
  bg: "plains-of-heaven.jpg",
  position: "center 30%",
  investment: "11.900 CZK",
  calEmbed: { link: "all/advanced-ensofic-ray-healing", namespace: "advanced-ensofic-ray-healing" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
