"use client"

import { useTranslations } from "next-intl"
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

export default function StressManagement() {
  const t = useTranslations("StressManagementPage")
  const inquiry = t("inquiry")
  const benefits = [0, 1, 2, 3].map((i) => ({ label: t(`benefits.${i}.label`), text: t(`benefits.${i}.text`) }))

  return (
    <ModalityShell bg="moonrise-friedrich.jpg" position="center 35%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>{t("introBody2")}</Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label={t("enquireNow")} />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("takeawayHeading")}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>

      <BookingBlock
        slug="stress-management"
        title={t("bookingTitle")}
        inquiry={inquiry}
        note={t("bookingNote")}
      />
    </ModalityShell>
  )
}
