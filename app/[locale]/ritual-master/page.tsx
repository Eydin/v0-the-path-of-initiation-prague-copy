"use client"

import { useTranslations } from "next-intl"
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

export default function RitualMaster() {
  const t = useTranslations("RitualMaster")
  const inquiry = t("inquiry", { brand: BRAND.ritualMaster })
  const steps = [0, 1, 2, 3].map((i) => ({ label: t(`steps.${i}.label`), text: t(`steps.${i}.text`) }))

  return (
    <ModalityShell bg="accolade-leighton.jpg" position="center 20%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={BRAND.ritualMaster}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead", { brand: BRAND.ritualMaster })}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>{t("introBody2", { brand: BRAND.ritualMaster })}</Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label={t("askAboutPath")} />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("masteryHeading")}</PanelHeading>
        <Body>
          {t("masteryBody1a")} <em className="text-primary">{t("masteryBody1Quote")}</em>{" "}
          {t("masteryBody1b", { brand: BRAND.ritualMaster })}
        </Body>
        <Body>
          {t("masteryBody2a")} <span className="font-semibold text-primary">{t("masteryBody2Emphasis")}</span> {t("masteryBody2b")}
        </Body>
      </Panel>

      <QuoteBreaker
        image="sheba-Salomon-temple.jpg"
        quote={
          <>
            &ldquo;{t("quote.text")} <em className="text-primary">{t("quote.emphasis")}</em>.&rdquo;
          </>
        }
        attribution={t("quote.attribution")}
        caption={t("quote.caption")}
        position="center 22%"
      />

      <Panel>
        <PanelHeading>{t("readyHeading")}</PanelHeading>
        <Body>{t("readyBody")}</Body>
        <BenefitList items={steps} />
        <Body>{t("readyClosing")}</Body>
      </Panel>

      <BookingBlock
        slug="ritual-master"
        title={t("bookingTitle")}
        inquiry={inquiry}
        note={t("bookingNote")}
      />
    </ModalityShell>
  )
}
