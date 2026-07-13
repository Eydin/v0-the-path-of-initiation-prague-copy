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

export default function HealersAcademy() {
  const t = useTranslations("HealersAcademy")
  const inquiry = t("inquiry", { brand: BRAND.healersAcademy })
  const learn = [0, 1, 2, 3, 4].map((i) => ({ label: t(`learn.${i}.label`), text: t(`learn.${i}.text`) }))

  return (
    <ModalityShell bg="bethesda-bloch.jpg" position="center 25%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={BRAND.healersAcademy}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead", { brand: BRAND.empowerThyself })}</Lead>
        <Body>{t("introBody1", { brand: BRAND.healersAcademy })}</Body>
        <Body>{t("introBody2")}</Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label={t("applyNow")} />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("learnHeading")}</PanelHeading>
        <BenefitList items={learn} />
      </Panel>

      <QuoteBreaker
        image="ascent-blessed-bosch.jpg"
        quote={
          <>
            &ldquo;{t("quote.text")} <em className="text-primary">{t("quote.emphasis")}</em>.&rdquo;
          </>
        }
        attribution={t("quote.attribution")}
        caption={t("quote.caption")}
        position="center 42%"
      />

      <Panel>
        <PanelHeading>{t("whoHeading")}</PanelHeading>
        <Body>{t("whoBody1", { brand: BRAND.healersAcademy })}</Body>
        <Body>{t("whoBody2")}</Body>
      </Panel>

      <BookingBlock
        slug="healers-academy"
        title={t("bookingTitle")}
        duration={t("duration")}
        inquiry={inquiry}
        note={t("bookingNote")}
      />
    </ModalityShell>
  )
}
