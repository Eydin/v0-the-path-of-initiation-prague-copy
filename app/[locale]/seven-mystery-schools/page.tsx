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
import { QuoteBreaker } from "@/components/quote-breaker"
import { CalcomPopupLoader } from "@/components/calcom-popup-loader"
import { BookLink } from "@/components/book-link"

const BOOKING_URL = "https://booking.thepathofinitiationprague.com/all/seven-mystery-schools"
const CAL_NAMESPACE = "seven-mystery-schools"
const CAL_EMBED: CalEmbed = { link: "all/seven-mystery-schools", namespace: CAL_NAMESPACE }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SevenMysterySchoolsPage" })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/temple-pylon-karnak.jpg", width: 1200, height: 630 }] },
  }
}

export default async function SevenMysterySchools({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SevenMysterySchoolsPage" })
  const inquiry = t("inquiry")
  const benefits = [0, 1, 2, 3].map((i) => ({ label: t(`benefits.${i}.label`), text: t(`benefits.${i}.text`) }))

  return (
    <ModalityShell bg="temple-pylon-karnak.jpg" position="center 30%">
      <CalcomPopupLoader namespace={CAL_NAMESPACE} />
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <BookingBlock
        slug="seven-mystery-schools"
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
          <BookLink
            slug="seven-mystery-schools"
            className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
          >
            {t("reserveYourPlace")} →
          </BookLink>
        </div>
      </Panel>

      <QuoteBreaker
        image="ancient-of-days-blake.jpg"
        quote={
          <>
            &ldquo;{t("quote.text")} <em className="text-primary">{t("quote.emphasis")}</em>.&rdquo;
          </>
        }
        attribution={t("quote.attribution")}
        caption={t("quote.caption")}
        position="center 16%"
      />

      <Panel>
        <PanelHeading>{t("gainHeading")}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>

    </ModalityShell>
  )
}
