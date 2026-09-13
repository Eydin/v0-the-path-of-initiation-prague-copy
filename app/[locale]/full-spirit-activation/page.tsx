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
import { QuoteBreaker } from "@/components/quote-breaker"

const STRIPE = "https://buy.stripe.com/cNi5kwb1RdAq3wN94ng360t"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "FullSpiritActivation" })
  const title = `${BRAND.fullSpiritActivation} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/plains-of-heaven.jpg", width: 1200, height: 630 }] },
  }
}

export default async function FullSpiritActivation({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "FullSpiritActivation" })
  const inquiry = t("inquiry", { brand: BRAND.fullSpiritActivation })
  const aspects = [0, 1, 2].map((i) => ({ label: t(`aspects.${i}.label`), text: t(`aspects.${i}.text`) }))
  const procedures = [0, 1, 2].map((i) => ({ label: t(`procedures.${i}.label`), text: t(`procedures.${i}.text`) }))

  return (
    <ModalityShell bg="plains-of-heaven.jpg" position="center 30%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={BRAND.fullSpiritActivation}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead", { brand: BRAND.fullSpiritActivation })}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>{t("introBody2")}</Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label={t("bookNow")} />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("soulHeading")}</PanelHeading>
        <Body>{t("soulBody1")}</Body>
        <Body>{t("soulBody2")}</Body>
      </Panel>

      <QuoteBreaker
        image="angels-bouguereau.jpg"
        quote={
          <>
            &ldquo;{t("quote.text")} <em className="text-primary">{t("quote.emphasis")}</em>.&rdquo;
          </>
        }
        attribution={t("quote.attribution")}
        caption={t("quote.caption")}
      />

      <Panel>
        <PanelHeading>{t("aspectsHeading")}</PanelHeading>
        <BenefitList items={aspects} />
      </Panel>

      <Panel>
        <PanelHeading>{t("proceduresHeading")}</PanelHeading>
        <BenefitList items={procedures} />
        <Body>{t("proceduresClosing")}</Body>
      </Panel>

      <BookingBlock
        slug="full-spirit-activation"
        title={t("bookingTitle")}
        investment="8500 CZK"
        duration={t("duration")}
        inquiry={inquiry}
        bookHref={STRIPE}
      />
    </ModalityShell>
  )
}
