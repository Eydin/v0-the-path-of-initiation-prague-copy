import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

const config = {
  namespace: "TreeOfLifeAwakening",
  bg: "caspar-david-friedrich-der-einsame-baum-google-art-project.jpg",
  position: "center 40%",
  relatedHref: "/chakra-awakening",
  investment: "1.333 CZK",
  calEmbed: { link: "all/tree-of-life-awakening", namespace: "tree-of-life-awakening" },
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
