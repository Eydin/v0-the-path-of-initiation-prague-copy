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

export default function AuraHealing() {
  const t = useTranslations("AuraHealing")
  const inquiry = t("inquiry", { brand: BRAND.sacredGeometry })
  const benefits = [0, 1, 2, 3].map((i) => ({ label: t(`benefits.${i}.label`), text: t(`benefits.${i}.text`) }))

  return (
    <ModalityShell bg="ancient-of-days-blake.jpg" position="center 25%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle", { brand: BRAND.sacredGeometry })}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody1", { brand: BRAND.sacredGeometry })}</Body>
        <Body>{t("introBody2")}</Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label={t("bookSession")} />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("benefitsHeading")}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>

      <BookingBlock
        slug="aura-healing"
        title={t("bookingTitle")}
        duration={t("duration")}
        inquiry={inquiry}
        note={t("bookingNote")}
      />
    </ModalityShell>
  )
}
