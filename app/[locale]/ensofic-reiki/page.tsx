import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const BOOKING_ORIGIN = "https://booking.thepathofinitiationprague.com/all"

const config = {
  namespace: "EnsoficReiki",
  bg: "plains-of-heaven.jpg",
  position: "center 30%",
  heroImage: "ensofic-light.jpg",
  heroPosition: "center 45%",
  heroCaption: "The first ray of light · photo by Liana S, Unsplash",
  investment: "4.900 CZK",
  relatedHref: "/advanced-ensofic-ray-healing",
  bookOptions: [
    {
      labelKey: "bookInPerson" as const,
      href: `${BOOKING_ORIGIN}/ensofic-reiki-in-person`,
      calEmbed: { link: "all/ensofic-reiki-in-person", namespace: "ensofic-reiki-in-person" },
    },
    {
      labelKey: "bookRemote" as const,
      href: `${BOOKING_ORIGIN}/ensofic-reiki-remote`,
      calEmbed: { link: "all/ensofic-reiki-remote", namespace: "ensofic-reiki-remote" },
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
