"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { BRAND } from "@/lib/brand-names"
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

export default function Healings() {
  const t = useTranslations("Healings")

  const activations: Healing[] = [
    { name: BRAND.lifeActivation, tag: t("groups.activations.items.0.tag"), description: t("groups.activations.items.0.description") },
    { name: BRAND.fullSpiritActivation, description: t("groups.activations.items.1.description") },
    { name: t("groups.activations.items.2.name"), description: t("groups.activations.items.2.description") },
    { name: t("groups.activations.items.3.name"), description: t("groups.activations.items.3.description") },
  ]

  const auraEnergy: Healing[] = [0, 1, 2, 3, 4, 5].map((i) => ({
    name: i === 0 ? t("groups.auraEnergy.items.0.name", { brand: BRAND.sacredGeometry }) : t(`groups.auraEnergy.items.${i}.name`),
    description: t(`groups.auraEnergy.items.${i}.description`),
  }))

  const readings: Healing[] = [0, 1, 2].map((i) => ({
    name: t(`groups.readings.items.${i}.name`),
    description: t(`groups.readings.items.${i}.description`),
  }))

  const bodyWork: Healing[] = [0, 1, 2, 3, 4].map((i) => ({
    name: t(`groups.bodyWork.items.${i}.name`),
    description: t(`groups.bodyWork.items.${i}.description`),
  }))

  const inquiry = t("inquiry")

  return (
    <ModalityShell bg="bethesda-bloch.jpg" position="center 25%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody")}</Body>
        <Body>
          {t("specialtyLead")}{" "}
          <Link href="/specialty-healings" className="text-primary underline transition-colors hover:text-gold-light">
            {t("specialtyLinkLabel", { brand: BRAND.sacredGeometry })}
          </Link>
        </Body>
      </Panel>

      <HealingGroup
        title={t("groups.activations.title")}
        blurb={t("groups.activations.blurb")}
        items={activations}
      />
      <HealingGroup
        title={t("groups.auraEnergy.title")}
        blurb={t("groups.auraEnergy.blurb")}
        items={auraEnergy}
      />
      <HealingGroup
        title={t("groups.readings.title")}
        blurb={t("groups.readings.blurb")}
        items={readings}
      />
      <HealingGroup
        title={t("groups.bodyWork.title")}
        blurb={t("groups.bodyWork.blurb")}
        items={bodyWork}
      />

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
