import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "ChakraAwakening",
  bg: "francisco-camilo-ascension-google-art-project.jpg",
  position: "center 30%",
  relatedHref: "/tree-of-life-awakening",
  investment: "1.333 CZK",
  calEmbed: { link: "all/chakra-awakening", namespace: "chakra-awakening" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
