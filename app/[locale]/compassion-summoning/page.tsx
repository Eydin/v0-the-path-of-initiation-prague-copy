import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"
import { CAL_ORIGIN } from "@/lib/cal"

const config = {
  namespace: "CompassionSummoning",
  bg: "angelico-visione-di-ezechiele-san-marco.jpg",
  position: "center 30%",
  relatedHref: "/archangel-michael-tube-of-light",
  investment: "2.444 CZK",
  bookOptions: [
    {
      labelKey: "bookInPerson" as const,
      href: `${CAL_ORIGIN}/all/compassion-summoning`,
      calEmbed: { link: "all/compassion-summoning", namespace: "compassion-summoning" },
    },
    {
      labelKey: "bookRemote" as const,
      href: `${CAL_ORIGIN}/all/compassion-summoning-remote`,
      calEmbed: { link: "all/compassion-summoning-remote", namespace: "compassion-summoning-remote" },
    },
  ],
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
