import type { Metadata } from "next"
import { getFormatter, getTranslations } from "next-intl/server"
import { BRAND } from "@/lib/brand-names"
import { SCHEDULE, getUpcomingDates, parseLocalDate } from "@/lib/schedule"
import { ModalityShell, ModalityHero, Panel, Lead, Body, WhatsAppButton, EmailButton } from "@/components/modality"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ClassCard as ClassCardView } from "@/components/class-card"

type ClassCard = {
  /** Route slug — also the key into SCHEDULE */
  slug: string
  /** Root namespace of the class's own page (for its tagline + duration) */
  ns: string
  name: string
  /** Hardcoded like on the class pages; omit when the page shows none ("On enquiry") */
  price?: string
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Workshops" })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/starry-rhone-gogh.jpg", width: 1200, height: 630 }] },
  }
}

export default async function Workshops({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Workshops" })
  const tNav = await getTranslations({ locale, namespace: "Header" })
  const format = await getFormatter({ locale })

  const workshops: ClassCard[] = [
    { slug: "sacred-geometry", ns: "SacredGeometryPage", name: BRAND.sacredGeometryI, price: "4.200 CZK" },
    { slug: "sacred-geometry-2", ns: "SacredGeometry2Page", name: `${BRAND.sacredGeometry} II`, price: t("priceTbd") },
    { slug: "sacred-geometry-3", ns: "SacredGeometry3Page", name: `${BRAND.sacredGeometry} III`, price: t("priceTbd") },
    { slug: "sacred-geometry-4", ns: "SacredGeometry4Page", name: `${BRAND.sacredGeometry} IV`, price: t("priceTbd") },
    { slug: "astral-travel", ns: "AstralTravelPage", name: tNav("nav.astralTravel"), price: "4.200 CZK" },
    { slug: "spiritual-intuition", ns: "SpiritualIntuitionPage", name: tNav("nav.spiritualIntuition"), price: "1.333 CZK" },
    { slug: "sanctuary-meditation", ns: "SanctuaryMeditationPage", name: "Sanctuary Meditation Class", price: "1.333 CZK" },
    { slug: "seven-mystery-schools", ns: "SevenMysterySchoolsPage", name: tNav("nav.sevenMysterySchools"), price: "1.333 CZK" },
    { slug: "stress-management", ns: "StressManagementPage", name: tNav("nav.stressManagement"), price: "3.500 CZK" },
  ]
  const programs: ClassCard[] = [
    { slug: "empower-thyself", ns: "EmpowerThyself", name: BRAND.empowerThyself, price: "36.500 CZK" },
    { slug: "healers-academy", ns: "HealersAcademy", name: BRAND.healersAcademy, price: t("seeMmsUk") },
    { slug: "ritual-master", ns: "RitualMaster", name: BRAND.ritualMaster, price: t("seeMmsUk") },
  ]

  async function resolve(card: ClassCard) {
    const tc = await getTranslations({ locale, namespace: card.ns })
    const sched = SCHEDULE.find((c) => c.slug === card.slug)
    const next = getUpcomingDates(card.slug, 1)[0]
    return {
      ...card,
      description: tc.has("heroTagline") ? tc("heroTagline") : tc("heroSubtitle"),
      duration: tc.has("duration") ? tc("duration") : undefined,
      location: sched?.location,
      nextDate: next
        ? `${format.dateTime(parseLocalDate(next), { weekday: "short", timeZone: "UTC" })} · ${format.dateTime(parseLocalDate(next), { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}`
        : undefined,
    }
  }

  const [workshopCards, programCards] = await Promise.all([
    Promise.all(workshops.map(resolve)),
    Promise.all(programs.map(resolve)),
  ])

  const inquiry = t("inquiry")

  const renderGroup = (title: string, blurb: string, cards: Awaited<ReturnType<typeof resolve>>[]) => (
    <section className="relative py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-baseline gap-4">
              <h2 className="font-serif text-2xl tracking-wide text-primary md:text-3xl">{title}</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-muted-foreground">{cards.length}</span>
            </div>
            <p className="mb-8 max-w-3xl text-muted-foreground">{blurb}</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((c) => (
                <ClassCardView
                  key={c.slug}
                  name={c.name}
                  description={c.description}
                  tag={c.duration}
                  price={c.price ?? t("onEnquiry")}
                  nextDate={c.nextDate ?? t("noDate")}
                  location={c.location}
                  href={`/${c.slug}`}
                  labels={{ price: t("price"), nextDate: t("nextDate"), cta: t("viewDetails") }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )

  return (
    <ModalityShell bg="starry-rhone-gogh.jpg" position="center 30%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody")}</Body>
      </Panel>

      {renderGroup(t("workshopsTitle"), t("workshopsBlurb"), workshopCards)}
      {renderGroup(t("programsTitle"), t("programsBlurb"), programCards)}

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="rounded-lg border border-primary/20 bg-muted/60 p-8 text-center backdrop-blur-sm md:p-12">
              <h2 className="mb-8 font-serif text-3xl tracking-wide text-primary md:text-4xl">{t("ctaHeading")}</h2>
              <div className="mx-auto mb-8 h-px w-16 bg-border" />
              <p className="mb-10 text-lg text-foreground">{t("ctaBody")}</p>
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
