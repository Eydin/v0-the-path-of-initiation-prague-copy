import type { Metadata } from "next"
import { HealingSessionPage, healingSessionMetadata } from "@/components/healing-session-page"

// No price or Cal.com event type yet: the booking box invites a WhatsApp/email inquiry.
// When the session gets a price, add `investment` here, a "duration" text and a Cal.com `calEmbed`.
const config = {
  namespace: "MeridianLineBalancing",
  bg: "joseph-wright-of-derby-dovedale-by-moonlight-google-art-project.jpg",
  position: "center 50%",
  relatedHref: "/laser-light-healing",
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return healingSessionMetadata({ params, config })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HealingSessionPage locale={locale} config={config} />
}
