import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { BRAND } from "@/lib/brand-names"
import {
  ModalityShell,
  ImageHero,
  Panel,
  PanelHeading,
  Lead,
  Body,
  BenefitList,
  BookingBlock,
  type CalEmbed,
} from "@/components/modality"
import { ModalityFaq, type FaqItem } from "@/components/modality-faq"
import { QuoteBreaker } from "@/components/quote-breaker"
import { CalcomPopupLoader } from "@/components/calcom-popup-loader"
import { BookLink } from "@/components/book-link"

const BOOKING_URL = "https://booking.thepathofinitiationprague.com/all/full-spirit-activation"
const CAL_NAMESPACE = "full-spirit-activation"
const CAL_EMBED: CalEmbed = { link: "all/full-spirit-activation", namespace: CAL_NAMESPACE }

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
  const tModality = await getTranslations({ locale, namespace: "Modality" })
  const tFaq = await getTranslations({ locale, namespace: "FullSpiritFaq" })
  const faqItems = tFaq.raw("items") as FaqItem[]
  const aspects = [0, 1, 2].map((i) => ({ label: t(`aspects.${i}.label`), text: t(`aspects.${i}.text`) }))
  const procedures = [0, 1, 2].map((i) => ({ label: t(`procedures.${i}.label`), text: t(`procedures.${i}.text`) }))

  return (
    <ModalityShell bg="plains-of-heaven.jpg" position="center 30%">
      <CalcomPopupLoader namespace={CAL_NAMESPACE} />
      <ImageHero
        image="vitruvian-man.jpg"
        position="50% 22%"
        caption="Vitruvian Man · Leonardo da Vinci, c. 1490"
        accent="cream"
        eyebrow={t("heroEyebrow")}
        title={BRAND.fullSpiritActivation}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
        cta={{ href: BOOKING_URL, label: tModality("bookNow"), external: true, calEmbed: CAL_EMBED }}
      />

      <Panel>
        <Lead>{t("introLead", { brand: BRAND.fullSpiritActivation })}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>{t("introBody2")}</Body>
        <div className="border-t border-primary/20 pt-6 text-center">
          <BookLink
            slug="full-spirit-activation"
            className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
          >
            {t("bookNow")} →
          </BookLink>
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
        kind="healing"
        title={t("bookingTitle")}
        investment="8500 CZK"
        duration={t("duration")}
        inquiry={inquiry}
        bookHref={BOOKING_URL}
        bookCalEmbed={CAL_EMBED}
      />

      <ModalityFaq items={faqItems} />

    </ModalityShell>
  )
}
