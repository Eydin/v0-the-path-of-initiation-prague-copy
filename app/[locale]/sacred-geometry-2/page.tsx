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

export default function SacredGeometryTwo() {
  const t = useTranslations("SacredGeometry2Page")
  const inquiry = t("inquiry")
  const benefits = [0, 1, 2].map((i) => ({ label: t(`benefits.${i}.label`), text: t(`benefits.${i}.text`) }))

  return (
    <ModalityShell bg="flammarion.jpg" position="center 35%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title="Sacred Geometry II"
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

      <SacredGeometrySeriesLinks current="sacred-geometry-2" />

      <BookingBlock
        slug="sacred-geometry-2"
        title={t("bookingTitle")}
        duration={t("duration")}
        inquiry={inquiry}
        note={t("bookingNote")}
      />
    </ModalityShell>
  )
}
