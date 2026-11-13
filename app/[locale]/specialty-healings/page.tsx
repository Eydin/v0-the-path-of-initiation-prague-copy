import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SpecialtyHealings" })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/sheba-Salomon-temple.jpg", width: 1200, height: 630 }] },
  }
}

export default async function SpecialtyHealings({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SpecialtyHealings" })
  const inquiry = t("inquiry")

  // each card links to its own page (no set price yet, so no price on the card)
  const kshmHref = ["/starseed-healing", "/unified-chakra-healing", "/kshm-auric-region"]
  const kshmSessions: Healing[] = kshmHref.map((detailsHref, i) => ({
    name: t(`kshmSessions.${i}.name`),
    tag: t.has(`kshmSessions.${i}.tag`) ? t(`kshmSessions.${i}.tag`) : undefined,
    description: t(`kshmSessions.${i}.description`),
    detailsHref,
  }))

  // Space Realignment (8) and Chronos Reading (10) have no page yet: their cards keep the "inquire" link.
  const specialtyHref: (string | undefined)[] = [
    "/advanced-ensofic-ray-healing",
    "/fire-soul-infusion",
    "/core-will-infusion",
    "/archangel-michael-tube-of-light",
    "/hermetic-rebalancing",
    "/etheric-reconstruction",
    "/celestial-code-etheric-reconstruction",
    "/compassion-summoning",
    undefined,
    "/baby-blessing",
    undefined,
  ]

  const specialtySessions: Healing[] = Array.from({ length: 11 }, (_, i) => ({
    name: t(`specialtySessions.${i}.name`),
    tag: t.has(`specialtySessions.${i}.tag`) ? t(`specialtySessions.${i}.tag`) : undefined,
    description: t(`specialtySessions.${i}.description`),
    ...(specialtyHref[i] ? { detailsHref: specialtyHref[i] } : {}),
    ...(i === 0 ? { price: "11.900 CZK" } : {}),
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
