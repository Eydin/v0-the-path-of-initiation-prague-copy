import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { getHealingGroups } from "@/lib/healings"
import {
  ModalityShell,
  ModalityHero,
  Panel,
  Lead,
  Body,
  WhatsAppButton,
  EmailButton,
} from "@/components/modality"
import { HealingGroup } from "@/components/healing-grid"
import { ScrollReveal } from "@/components/scroll-reveal"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Healings" })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/bethesda-bloch.jpg", width: 1200, height: 630 }] },
  }
}

export default async function Healings({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Healings" })

  const { activations, auraEnergy, remote, readings, bodyWork } = await getHealingGroups(locale)

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
            {t("specialtyLinkLabel")}
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
        title={t("groups.remote.title")}
        blurb={t("groups.remote.blurb")}
        items={remote}
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
            <div className="home-box rounded-lg border border-primary/20 bg-muted/60 p-8 text-center backdrop-blur-sm md:p-12">
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
