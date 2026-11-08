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
  type CalEmbed,
} from "@/components/modality"
import { CalcomPopupLoader } from "@/components/calcom-popup-loader"
import { BookLink } from "@/components/book-link"

const BOOKING_URL = "https://booking.thepathofinitiationprague.com/all/stress-management"
const CAL_NAMESPACE = "stress-management"
const CAL_EMBED: CalEmbed = { link: "all/stress-management", namespace: CAL_NAMESPACE }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "StressManagementPage" })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/moonrise-friedrich.jpg", width: 1200, height: 630 }] },
  }
}

export default async function StressManagement({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "StressManagementPage" })
  const inquiry = t("inquiry")
  const benefits = [0, 1, 2, 3].map((i) => ({ label: t(`benefits.${i}.label`), text: t(`benefits.${i}.text`) }))

  return (
    <ModalityShell bg="moonrise-friedrich.jpg" position="center 35%">
      <CalcomPopupLoader namespace={CAL_NAMESPACE} />
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
        calEmbed={CAL_EMBED}
      />

      <BookingBlock
        slug="stress-management"
        title={t("bookingTitle")}
        investment="3.500 CZK"
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
          <BookLink
            slug="stress-management"
            className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
          >
            {t("enquireNow")} →
          </BookLink>
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("takeawayHeading")}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>

    </ModalityShell>
  )
}
