import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

// Cal.com books the first of the ten sessions at the full programme price (same pattern as Advanced Ensofic Ray).
const config = {
  namespace: "KshmAuricRegion",
  bg: "poynter-sir-edward-john-the-visit-of-the-queen-of-sheba-to-king-solomo.jpg",
  position: "center 40%",
  relatedHref: "/starseed-healing",
  investment: "85.500 CZK",
  calEmbed: { link: "all/kshm-auric-region", namespace: "kshm-auric-region" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
