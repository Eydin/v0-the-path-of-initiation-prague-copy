import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
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
  MMS_UK_CALENDAR_URL,
} from "@/components/modality"
import { HealingGroup, type Healing } from "@/components/healing-grid"
import { ScrollReveal } from "@/components/scroll-reveal"

const LIFE_ACTIVATION_STRIPE = "https://buy.stripe.com/14AdR2gmbeEuaZf2FZg360j"
const FULL_SPIRIT_ACTIVATION_STRIPE = "https://buy.stripe.com/cNi5kwb1RdAq3wN94ng360t"
const AURA_HEALING_STRIPE = "https://buy.stripe.com/8x29AM0ndbsic3j94ng360y"

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

  const activations: Healing[] = [
    {
      name: BRAND.lifeActivation,
      tag: t("groups.activations.items.0.tag"),
      description: t("groups.activations.items.0.description"),
      price: "8.500 CZK",
      bookHref: LIFE_ACTIVATION_STRIPE,
      detailsHref: "/life-activation",
    },
    {
      name: BRAND.fullSpiritActivation,
      description: t("groups.activations.items.1.description"),
      price: "8.500 CZK",
      bookHref: FULL_SPIRIT_ACTIVATION_STRIPE,
      detailsHref: "/full-spirit-activation",
    },
    {
      name: t("groups.activations.items.2.name"),
      description: t("groups.activations.items.2.description"),
      externalHref: MMS_UK_CALENDAR_URL,
    },
  ]

  const auraEnergy: Healing[] = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
    name: i === 0 ? t("groups.auraEnergy.items.0.name", { brand: BRAND.sacredGeometry }) : t(`groups.auraEnergy.items.${i}.name`),
    description: t(`groups.auraEnergy.items.${i}.description`),
    ...(i === 0
      ? { price: "4.800 CZK", bookHref: AURA_HEALING_STRIPE, detailsHref: "/aura-healing" }
      : {}),
    ...(i === 4 ? { price: "6.150 CZK", detailsHref: "/ensofic-reiki" } : {}),
    ...(i === 5 ? { price: "6.150 CZK", detailsHref: "/treating-negative-habits" } : {}),
    ...(i === 6 ? { price: "3.669 CZK", detailsHref: "/crystal-healing" } : {}),
    ...(i === 7 ? { price: "6.150 CZK", detailsHref: "/soul-retrieval" } : {}),
    ...(i === 8 ? { price: "6.150 CZK", detailsHref: "/spark-of-life" } : {}),
  }))

  // The remote-capable sessions also appear in "Aura & Energy" above — same cards, so the two never drift apart.
  const remote: Healing[] = [4, 5, 8].map((i) => auraEnergy[i])

  const readings: Healing[] = [0, 1, 2].map((i) => ({
    name: t(`groups.readings.items.${i}.name`),
    description: t(`groups.readings.items.${i}.description`),
    ...(i === 0
      ? { price: "6.150 CZK", detailsHref: "/life-purpose-reading" }
      : {}),
  }))

  const bodyWork: Healing[] = [0, 1, 2, 3, 4].map((i) => ({
    name: t(`groups.bodyWork.items.${i}.name`),
    description: t(`groups.bodyWork.items.${i}.description`),
    ...(i === 0 ? { price: "350 CZK", detailsHref: "/max-meditation" } : {}),
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
