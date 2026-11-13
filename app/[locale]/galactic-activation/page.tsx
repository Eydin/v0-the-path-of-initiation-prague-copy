// A referral/informational page, not a locally-run session: the Galactic Activation is a
// series of group workshops held by the Modern Mystery School UK (London), not by Radu and
// Diana in Prague. The booking box links out to MMS UK for dates, prices and sign-up, and
// offers a WhatsApp/email question to Radu and Diana.
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
  BookingBlock,
} from "@/components/modality"
import { ModalityFaq, type FaqItem } from "@/components/modality-faq"

const MMS_UK_GALACTIC_URL = "https://modernmysteryschooluk.com/galactic-activation/"
const BG = "vincent-van-gogh-starry-night.jpg"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "GalacticActivationPage" })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: `/images/art/${BG}`, width: 1200, height: 630 }] },
  }
}

export default async function GalacticActivation({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "GalacticActivationPage" })
  const covers = (t.raw("covers") as string[]).map((text) => ({ text }))
  const series = t.raw("series") as { label: string; text: string }[]
  const faq = t.raw("faq") as FaqItem[]

  return (
    <ModalityShell bg={BG} position="center 40%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>{t("introBody2")}</Body>
      </Panel>

      <Panel>
        <PanelHeading>{t("coversHeading")}</PanelHeading>
        <BenefitList items={covers} />
      </Panel>

      <Panel>
        <PanelHeading>{t("seriesHeading")}</PanelHeading>
        <BenefitList items={series} />
      </Panel>

      <Panel>
        <PanelHeading>{t("whoHeading")}</PanelHeading>
        <Body>{t("whoBody")}</Body>
      </Panel>

      <BookingBlock
        id="dates"
        title={t("bookingTitle")}
        inquiry={t("inquiry")}
        note={t("bookingNote")}
        bookHref={MMS_UK_GALACTIC_URL}
        bookLabel={t("bookLabel")}
      />

      <ModalityFaq items={faq} disclaimer={false} />
    </ModalityShell>
  )
}
