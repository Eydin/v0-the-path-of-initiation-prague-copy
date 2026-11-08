import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { CloudRain, Compass, Ear, Eye, Heart, Scale, ShieldCheck, Sparkles, Sun, Users, Waves } from "lucide-react"
import {
  ModalityShell,
  ModalityHero,
  Panel,
  PanelHeading,
  Lead,
  Body,
  BenefitList,
  BookingBlock,
  type CalEmbed,
} from "@/components/modality"
import { CalcomPopupLoader } from "@/components/calcom-popup-loader"
import { BookLink } from "@/components/book-link"
import { ModalityFaq, type FaqItem } from "@/components/modality-faq"
import { DiscoverCards } from "@/components/sacred-geometry-fun"
import { DidYouKnow } from "@/components/did-you-know"
import { ForWhomTiles, HostsBox } from "@/components/life-activation-fun"

const BOOKING_URL = "https://booking.thepathofinitiationprague.com/all/spiritual-intuition"
const CAL_NAMESPACE = "spiritual-intuition"
const CAL_EMBED: CalEmbed = { link: "all/spiritual-intuition", namespace: CAL_NAMESPACE }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SpiritualIntuitionPage" })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/spiritual-intuition-spiral-og.jpg", width: 1200, height: 630 }] },
  }
}

export default async function SpiritualIntuition({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SpiritualIntuitionPage" })
  const inquiry = t("inquiry")
  const tShared = await getTranslations({ locale, namespace: "HealingSession" })
  const benefits = t.raw("benefits") as { label: string; text: string }[]
  const senses = t.raw("senses") as { label: string; text: string }[]
  const why = t.raw("why") as { who: string; text: string }[]
  const expect = (t.raw("expect") as string[]).map((text) => ({ text }))
  const faq = t.raw("faq") as FaqItem[]

  return (
    <ModalityShell bg="spiritual-intuition-spiral.jpg" position="center 52%">
      <CalcomPopupLoader namespace={CAL_NAMESPACE} />
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
        calEmbed={CAL_EMBED}
      />

      <BookingBlock
        slug="spiritual-intuition"
        title={t("bookingTitle")}
        investment="1.333 CZK"
        duration={t("duration")}
        inquiry={inquiry}
        note={t("bookingNote")}
        bookHref={BOOKING_URL}
        bookCalEmbed={CAL_EMBED}
      />

      {/* who is leading you: smiling faces before anything else */}
      <HostsBox eyebrow={tShared("hostsEyebrow")} heading={tShared("hostsHeading")} body={tShared("hostsBody")} />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>{t("introBody2")}</Body>
      </Panel>

      {/* a bit of playful science, in its own colours */}
      <DidYouKnow
        heading={t("didYouKnowHeading")}
        intro={t("didYouKnowIntro")}
        items={t.raw("didYouKnow") as { title: string; text: string }[]}
        note={t("didYouKnowNote")}
      />

      {/* "why do I need this?": real moments from everyday life */}
      <ForWhomTiles
        heading={t("whyHeading")}
        intro={t("whyIntro")}
        items={why}
        icons={[Scale, Users, Waves, CloudRain]}
      />

      {/* the heart of the class: the three spiritual senses */}
      <DiscoverCards
        heading={t("sensesHeading")}
        intro={t("sensesIntro")}
        items={senses}
        icons={[Eye, Ear, Heart]}
      />

      {/* "what will I get?" */}
      <DiscoverCards
        heading={t("learnHeading")}
        intro={t("learnIntro")}
        items={benefits}
        icons={[Sparkles, Compass, Sun, ShieldCheck]}
        fourUp
      />

      {/* the practical side: how long, where, with whom */}
      <Panel>
        <PanelHeading>{t("expectHeading")}</PanelHeading>
        <BenefitList items={expect} />
      </Panel>

      <ModalityFaq items={faq} disclaimer={false} />

      {/* one clear way to join */}
      <Panel className="text-center">
        <PanelHeading>{t("ctaHeading")}</PanelHeading>
        <Body>{t("ctaBody")}</Body>
        <div className="pt-2">
          <BookLink
            slug="spiritual-intuition"
            className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
          >
            {t("reserveYourPlace")} →
          </BookLink>
        </div>
      </Panel>
    </ModalityShell>
  )
}
