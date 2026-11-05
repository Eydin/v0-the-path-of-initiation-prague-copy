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
import { MedicalDisclaimer, ModalityFaq, type FaqItem } from "@/components/modality-faq"
import { Link } from "@/i18n/navigation"

type SessionConfig = {
  /** Root namespace in messages/*.json */
  namespace: string
  bg: string
  position?: string
  /** a different picture for the header than the page background (file in /public/images/art) */
  heroImage?: string
  heroPosition?: string
  /** credit for the header picture, shown down its right edge */
  heroCaption?: string
  investment: string
  /** closing invitation to a related page (texts: relatedHeading / relatedBody / relatedCta) */
  relatedHref?: string
}

export async function healingSessionMetadata(
  { params, config }: { params: Promise<{ locale: string }>; config: SessionConfig },
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: config.namespace })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: `/images/art/${config.bg}`, width: 1200, height: 630 }] },
  }
}

// ── A single-session healing page (Soul Retrieval, Ensofic Ray, ...) ─────
// Optional blocks (who it's for, protocol, FAQ, price note) render only when
// the namespace defines them.
export async function HealingSessionPage({ locale, config }: { locale: string; config: SessionConfig }) {
  const t = await getTranslations({ locale, namespace: config.namespace })
  const tShared = await getTranslations({ locale, namespace: "HealingSession" })
  const has = (key: string) => t.has(key)

  const benefits = (t.raw("benefits") as string[]).map((text) => ({ text }))
  const who = has("who") ? (t.raw("who") as string[]).map((text) => ({ text })) : []
  const protocol = has("protocol") ? (t.raw("protocol") as { label: string; text: string }[]) : []
  const faq = has("faq") ? (t.raw("faq") as FaqItem[]) : []

  return (
    <ModalityShell bg={config.bg} position={config.position ?? "center 30%"}>
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
        image={config.heroImage}
        position={config.heroPosition}
        caption={config.heroCaption}
      />

      <BookingBlock
        kind="healing"
        title={has("bookingTitle") ? t("bookingTitle") : undefined}
        investment={config.investment}
        duration={t("duration")}
        inquiry={t("inquiry")}
        note={t("bookingNote")}
      >
        {has("priceNote") && <p className="text-center text-lg font-semibold text-primary">{t("priceNote")}</p>}
      </BookingBlock>

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>{t("introBody2")}</Body>
      </Panel>

      {protocol.length > 0 && (
        <Panel>
          <PanelHeading>{t("protocolHeading")}</PanelHeading>
          <BenefitList items={protocol} />
        </Panel>
      )}

      <Panel>
        <PanelHeading>{t("benefitsHeading")}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>

      {who.length > 0 && (
        <Panel>
          <PanelHeading>{tShared("whoHeading")}</PanelHeading>
          <BenefitList items={who} />
        </Panel>
      )}

      {faq.length > 0 ? <ModalityFaq items={faq} /> : <MedicalDisclaimer />}

      {config.relatedHref && has("relatedHeading") && (
        <Panel>
          <div className="text-center">
            <PanelHeading>{t("relatedHeading")}</PanelHeading>
            <Body>{t("relatedBody")}</Body>
            <Link
              href={config.relatedHref}
              className="mt-6 inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-8 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
            >
              {t("relatedCta")} →
            </Link>
          </div>
        </Panel>
      )}
    </ModalityShell>
  )
}
