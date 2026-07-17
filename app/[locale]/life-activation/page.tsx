"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { BRAND } from "@/lib/brand-names"
import {
  ModalityShell,
  ModalityHero,
  Panel,
  PanelHeading,
  Lead,
  Body,
  BenefitList,
  BookingBlock,
  WhatsAppButton,
  VideoEmbed,
} from "@/components/modality"

const STRIPE = "https://buy.stripe.com/14AdR2gmbeEuaZf2FZg360j"

export default function LifeActivation() {
  const t = useTranslations("LifeActivation")
  const tModality = useTranslations("Modality")
  const inquiry = t("inquiry", { brand: BRAND.lifeActivation })
  const benefits = [0, 1, 2, 3, 4].map((i) => ({
    label: t(`benefits.${i}.label`),
    text: t(`benefits.${i}.text`),
  }))
  const procedures = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({
    label: t(`procedures.${i}.label`),
    text: t(`procedures.${i}.text`),
  }))

  return (
    <ModalityShell bg="bethesda-bloch.jpg" position="center 18%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={BRAND.lifeActivation}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      {/* Introduction */}
      <Panel>
        <Lead>{t("introLead", { brand: BRAND.lifeActivation })}</Lead>
        <Body>{t("introBody", { brand: BRAND.lifeActivation })}</Body>
        <div className="border-t border-primary/20 pt-6 text-center">
          <a
            href={STRIPE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
          >
            {tModality("bookNow")} →
          </a>
        </div>
      </Panel>

      {/* Benefits */}
      <Panel>
        <PanelHeading>{t("benefitsHeading", { brand: BRAND.lifeActivation })}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>

      {/* Additional procedures */}
      <Panel>
        <PanelHeading>{t("proceduresHeading")}</PanelHeading>
        <Lead>{t("proceduresLead")}</Lead>
        <BenefitList items={procedures} />
      </Panel>

      {/* Explore the higher dimensions + video */}
      <Panel>
        <VideoEmbed src="https://www.youtube-nocookie.com/embed/SYauL1N3ppI" title="About the Life Activation" />
        <PanelHeading>{t("exploreHeading")}</PanelHeading>
        <Body>{t("exploreBody1")}</Body>
        <Body>{t("exploreBody2")}</Body>
        <div className="flex justify-center border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label={tModality("askQuestion")} />
        </div>
      </Panel>

      {/* Certifications */}
      <Panel wide>
        <div className="grid items-center gap-8 md:grid-cols-3">
          <Link href="/certifications" className="transition hover:opacity-80">
            <img
              src="/images/radu-lap-old.webp"
              alt="Radu — Life Activation certification"
              loading="lazy"
              className="h-auto w-full rounded border border-primary/20"
            />
          </Link>
          <div className="space-y-4 text-center">
            <h3 className="font-serif text-2xl tracking-wide text-primary">{t("certTitle", { brand: BRAND.lifeActivation })}</h3>
            <Body>
              <span>
                {t.rich("certBody", {
                  i: (chunks) => <i>{chunks}</i>,
                  bold: (chunks) => <span className="font-semibold text-foreground">{chunks}</span>,
                })}
              </span>
            </Body>
          </div>
          <Link href="/certifications" className="transition hover:opacity-80">
            <img
              src="/images/radu-lap.jpg"
              alt="Radu — Life Activation certification"
              loading="lazy"
              className="h-auto w-full rounded border border-primary/20"
            />
          </Link>
        </div>
      </Panel>

      <BookingBlock
        slug="life-activation"
        title={t("bookingTitle")}
        investment="8.500 CZK"
        duration={t("duration")}
        inquiry={inquiry}
        bookHref={STRIPE}
        note={t("bookingNote")}
      />
    </ModalityShell>
  )
}
