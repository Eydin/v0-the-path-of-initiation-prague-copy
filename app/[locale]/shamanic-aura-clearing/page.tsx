import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "ShamanicAuraClearing",
  bg: "fanny-churberg-landscape-in-moonlight-a-iii-2360-finnish-national-gall.jpg",
  position: "center 50%",
  relatedHref: "/negative-energy-removal",
  investment: "3.669 CZK",
  calEmbed: { link: "all/shamanic-aura-clearing", namespace: "shamanic-aura-clearing" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
