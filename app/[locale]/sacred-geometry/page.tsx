import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { BRAND } from "@/lib/brand-names"
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
import { SacredGeometrySeriesLinks } from "@/components/sacred-geometry-series-links"

const STRIPE = "https://buy.stripe.com/aFa00c4Dt0NE8R780jg360s"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SacredGeometryPage" })
  const title = `${BRAND.sacredGeometry} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/flammarion.jpg", width: 1200, height: 630 }] },
  }
}

export default async function SacredGeometry({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SacredGeometryPage" })
  const inquiry = t("inquiry", { brand: BRAND.sacredGeometry })
  const benefits = [0, 1, 2, 3].map((i) => ({ label: t(`benefits.${i}.label`), text: t(`benefits.${i}.text`) }))

  return (
    <ModalityShell bg="flammarion.jpg" position="center 30%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={BRAND.sacredGeometry}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>{t("introBody2")}</Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label={t("reserveYourPlace")} />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("learnHeading")}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>

      <SacredGeometrySeriesLinks current="sacred-geometry" />

      <BookingBlock
        slug="sacred-geometry"
        title={t("bookingTitle")}
        investment="4.200 CZK"
        duration={t("duration")}
        inquiry={inquiry}
        note={t("bookingNote")}
        bookHref={STRIPE}
      />
    </ModalityShell>
  )
}
