"use client"

// Referral/informational page, not a locally-run session: the Ascension
// Program is a long-form Modern Mystery School curriculum held mainly at MMS
// Headquarters (historically Toronto), not something Radu runs in Prague.
// Sources disagree on exact length (10 vs. 12 months) — stated as a range.
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

export default function KabbalahAscension() {
  const t = useTranslations("KabbalahAscensionPage")
  const inquiry = t("inquiry")
  const benefits = [0, 1, 2, 3].map((i) => ({ label: t(`benefits.${i}.label`), text: t(`benefits.${i}.text`) }))

  return (
    <ModalityShell bg="ascent-blessed-bosch.jpg" position="center 22%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title="Universal Hermetic Ray Kabbalah Ascension Program"
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>{t("introBody2")}</Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label={t("askLabel")} />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("learnHeading")}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>

      <Panel>
        <PanelHeading>{t("forYouHeading")}</PanelHeading>
        <Body>
          {t.rich("forYouBody1", { strong: (chunks) => <strong className="text-primary">{chunks}</strong> })}
        </Body>
        <Body>
          {t.rich("forYouBody2", {
            link: (chunks) => (
              <a
                href="https://modernmysteryschoolint.com/universal-hermetic-ray-kabbalah/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
              >
                {chunks}
              </a>
            ),
          })}
        </Body>
      </Panel>

      <BookingBlock title={t("bookingTitle")} inquiry={inquiry} note={t("bookingNote")} />
    </ModalityShell>
  )
}
