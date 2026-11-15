import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

// The booking buttons ("bookLabel" text) open a free 1-hour consultation, online (Zoom) or in person;
// the family pays for the blessing only after that talk. The ceremony has no fixed length, so no duration is shown.
const config = {
  namespace: "BabyBlessing",
  bg: "misty-lake-dawn.jpg",
  position: "50% 50%",
  kind: "none" as const,
  relatedHref: "/life-activation",
  investment: "53.888 CZK",
  calEmbed: { link: "all/baby-blessing-consultation", namespace: "baby-blessing-consultation" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
