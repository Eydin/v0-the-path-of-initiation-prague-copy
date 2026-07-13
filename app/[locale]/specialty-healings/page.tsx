"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import {
  ModalityShell,
  ModalityHero,
  Panel,
  Lead,
  Body,
  WhatsAppButton,
  EmailButton,
} from "@/components/modality"
import { HealingGroup, type Healing } from "@/components/healing-grid"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function SpecialtyHealings() {
  const t = useTranslations("SpecialtyHealings")
  const inquiry = t("inquiry")

  const kshmSessions: Healing[] = [0, 1, 2].map((i) => ({
    name: t(`kshmSessions.${i}.name`),
    tag: t.has(`kshmSessions.${i}.tag`) ? t(`kshmSessions.${i}.tag`) : undefined,
    description: t(`kshmSessions.${i}.description`),
  }))

  const specialtySessions: Healing[] = Array.from({ length: 10 }, (_, i) => ({
    name: t(`specialtySessions.${i}.name`),
    tag: t.has(`specialtySessions.${i}.tag`) ? t(`specialtySessions.${i}.tag`) : undefined,
    description: t(`specialtySessions.${i}.description`),
  }))

  return (
    <ModalityShell bg="sheba-Salomon-temple.jpg" position="center 30%">
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
      </Panel>

      <HealingGroup
        title={t("kshmGroupTitle")}
        blurb={t("kshmGroupBlurb")}
        items={kshmSessions}
      />

      <HealingGroup
        title={t("specialtyGroupTitle")}
        blurb={t("specialtyGroupBlurb")}
        items={specialtySessions}
      />

      {/* link to the wider menu */}
      <section className="relative py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <p className="text-muted-foreground">
              {t("seeAllLead")}{" "}
              <Link href="/healings" className="text-primary underline transition-colors hover:text-gold-light">
                {t("seeAllLinkLabel")}
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* inquire CTA */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="rounded-lg border border-primary/20 bg-muted/60 p-8 text-center backdrop-blur-sm md:p-12">
              <h2 className="mb-8 font-serif text-3xl tracking-wide text-primary md:text-4xl">
                {t("ctaHeading")}
              </h2>
              <div className="mx-auto mb-8 h-px w-16 bg-border" />
              <p className="mb-10 text-lg text-foreground">
                {t("ctaBody")}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <EmailButton subject={inquiry} />
                <WhatsAppButton text={inquiry} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ModalityShell>
  )
}
