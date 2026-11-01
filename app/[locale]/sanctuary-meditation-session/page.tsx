import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
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
  const t = await getTranslations({ locale, namespace: "SanctuarySessionPage" })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/moonrise-friedrich.jpg", width: 1200, height: 630 }] },
  }
}

export default async function SanctuaryMeditationSession({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SanctuarySessionPage" })
  const inquiry = t("inquiry")
  const who = (t.raw("who") as string[]).map((text) => ({ text }))
  const benefits = (t.raw("benefits") as string[]).map((text) => ({ text }))

  return (
    <ModalityShell bg="moonrise-friedrich.jpg" position="center 40%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <BookingBlock
        slug="sanctuary-meditation-session"
        title={t("bookingTitle")}
        investment="350 CZK"
        duration={t("duration")}
        inquiry={inquiry}
        note={t("bookingNote")}
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
        <PanelHeading>{t("whoHeading")}</PanelHeading>
        <BenefitList items={who} />
        <div className="border-t border-primary/20 pt-6 text-center">
          <p className="mb-2 font-serif text-lg text-primary">{t("newHeading")}</p>
          <Body>{t("newBody")}</Body>
          <Link
            href="/sanctuary-meditation"
            className="mt-5 inline-flex items-center justify-center rounded border border-primary/40 px-6 py-2.5 text-sm uppercase tracking-wider text-primary transition-all hover:border-primary hover:bg-primary/10"
          >
            {t("newButton")}
          </Link>
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("benefitsHeading")}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>
    </ModalityShell>
  )
}
