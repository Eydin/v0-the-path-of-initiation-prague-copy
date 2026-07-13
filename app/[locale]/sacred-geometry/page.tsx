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

export default function SacredGeometry() {
  const t = useTranslations("SacredGeometryPage")
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

      <BookingBlock
        slug="sacred-geometry"
        title={t("bookingTitle")}
        duration={t("duration")}
        inquiry={inquiry}
        note={t("bookingNote")}
      />
    </ModalityShell>
  )
}
