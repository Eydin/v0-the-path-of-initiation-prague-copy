import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import {
  ModalityShell,
  ModalityHero,
  Panel,
  PanelHeading,
  Lead,
  Body,
  BenefitList,
  WhatsAppButton,
  BookingBlock,
  type CalEmbed,
} from "@/components/modality"
import { CalcomPopupLoader } from "@/components/calcom-popup-loader"

const BOOKING_URL = "https://booking.thepathofinitiationprague.com/all/sanctuary-meditation"
const CAL_NAMESPACE = "sanctuary-meditation"
const CAL_EMBED: CalEmbed = { link: "all/sanctuary-meditation", namespace: CAL_NAMESPACE }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SanctuaryMeditationPage" })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/moonrise-friedrich.jpg", width: 1200, height: 630 }] },
  }
}

export default async function SanctuaryMeditation({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SanctuaryMeditationPage" })
  const inquiry = t("inquiry")
  const benefits = (t.raw("benefits") as string[]).map((text) => ({ text }))

  return (
    <ModalityShell bg="moonrise-friedrich.jpg" position="center 40%">
      <CalcomPopupLoader namespace={CAL_NAMESPACE} />
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
        calEmbed={CAL_EMBED}
      />

      <BookingBlock
        slug="sanctuary-meditation"
        title={t("bookingTitle")}
        investment="1.333 CZK"
        duration={t("duration")}
        inquiry={inquiry}
        note={t("bookingNote")}
        bookHref={BOOKING_URL}
        bookCalEmbed={CAL_EMBED}
      />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>{t("introBody2")}</Body>
        <div className="border-t border-primary/20 pt-6 text-center">
          <WhatsAppButton text={inquiry} />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("higherSelfHeading")}</PanelHeading>
        <Body>{t("higherSelfBody")}</Body>
      </Panel>

      <Panel>
        <PanelHeading>{t("benefitsHeading")}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>

      <Panel>
        <PanelHeading>{t("nextHeading")}</PanelHeading>
        <Body>{t("nextBody")}</Body>
      </Panel>
    </ModalityShell>
  )
}
