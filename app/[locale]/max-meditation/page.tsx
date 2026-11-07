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
} from "@/components/modality"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "MaxMeditationPage" })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/moonrise-friedrich.jpg", width: 1200, height: 630 }] },
  }
}

export default async function MaxMeditation({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "MaxMeditationPage" })
  const inquiry = t("inquiry")
  const who = (t.raw("who") as string[]).map((text) => ({ text }))

  return (
    <ModalityShell bg="moonrise-friedrich.jpg" position="center 40%">
      <ModalityHero
        image="misty-lake-dawn.jpg"
        position="50% 50%"
        caption="A lake at dawn · photo by Sami Matias Breilin, Unsplash"
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <BookingBlock
        slug="community#meditation-evening"
        title={t("bookingTitle")}
        investment="350 CZK"
        duration={t("duration")}
        inquiry={inquiry}
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
        <PanelHeading>{t("whatHeading")}</PanelHeading>
        <Body>{t("whatBody1")}</Body>
        <Body>{t("whatBody2")}</Body>
      </Panel>

      <Panel>
        <PanelHeading>{t("whoHeading")}</PanelHeading>
        <BenefitList items={who} />
      </Panel>
    </ModalityShell>
  )
}
