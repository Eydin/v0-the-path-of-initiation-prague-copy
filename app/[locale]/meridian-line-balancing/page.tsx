import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "MeridianLineBalancing",
  bg: "joseph-wright-of-derby-dovedale-by-moonlight-google-art-project.jpg",
  position: "center 50%",
  relatedHref: "/laser-light-healing",
  investment: "1.850 CZK",
  calEmbed: { link: "all/meridian-line-balancing", namespace: "meridian-line-balancing" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
