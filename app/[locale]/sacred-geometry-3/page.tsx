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
import { SacredGeometrySeriesLinks } from "@/components/sacred-geometry-series-links"

export default function SacredGeometryThree() {
  const t = useTranslations("SacredGeometry3Page")
  const inquiry = t("inquiry")
  const benefits = [0, 1, 2].map((i) => ({ label: t(`benefits.${i}.label`), text: t(`benefits.${i}.text`) }))

  return (
    <ModalityShell bg="flammarion.jpg" position="center 45%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title="Sacred Geometry III"
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>
          {t.rich("introBody2", { strong: (chunks) => <strong className="text-primary">{chunks}</strong> })}
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label={t("askLabel")} />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("learnHeading")}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>

      <SacredGeometrySeriesLinks current="sacred-geometry-3" />

      <BookingBlock
        slug="sacred-geometry-3"
        title={t("bookingTitle")}
        duration={t("duration")}
        inquiry={inquiry}
        note={t("bookingNote")}
      />
    </ModalityShell>
  )
}
