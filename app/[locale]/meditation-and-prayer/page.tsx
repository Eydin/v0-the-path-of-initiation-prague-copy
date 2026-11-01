import type { Metadata } from "next"
import { getFormatter, getTranslations } from "next-intl/server"
import { SCHEDULE, getUpcomingDates, parseLocalDate } from "@/lib/schedule"
import { ModalityShell, ModalityHero, Panel, Lead, Body, WhatsAppButton, EmailButton } from "@/components/modality"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ClassCard } from "@/components/class-card"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "MeditationPrayer" })
  const title = `${t("heroTitle")} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/moonrise-friedrich.jpg", width: 1200, height: 630 }] },
  }
}

export default async function MeditationAndPrayer({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "MeditationPrayer" })
  const tShared = await getTranslations({ locale, namespace: "Workshops" })
  const tCommunity = await getTranslations({ locale, namespace: "CommunityPage" })
  const tSanctuary = await getTranslations({ locale, namespace: "SanctuarySessionPage" })
  const tMax = await getTranslations({ locale, namespace: "MaxMeditationPage" })
  const tHealings = await getTranslations({ locale, namespace: "Healings" })
  const format = await getFormatter({ locale })

  const formatDate = (date?: string) =>
    date
      ? `${format.dateTime(parseLocalDate(date), { weekday: "short", timeZone: "UTC" })} · ${format.dateTime(parseLocalDate(date), { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}`
      : tShared("noDate")
  const nextOf = (slug: string) => getUpcomingDates(slug, 1)[0]
  const locationOf = (slug: string) => SCHEDULE.find((c) => c.slug === slug)?.location

  // The community evenings card shows whichever of the three evenings comes first.
  const communitySlugs = ["community#prayer-evening", "community#meditation-evening", "community#socialization-evening"]
  const nextCommunity = communitySlugs.map(nextOf).filter(Boolean).sort()[0]

  const labels = { price: tShared("price"), nextDate: tShared("nextDate"), cta: tShared("viewDetails") }
  const inquiry = t("inquiry")

  return (
    <ModalityShell bg="moonrise-friedrich.jpg" position="center 40%">
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

      <section className="relative py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex items-baseline gap-4">
                <h2 className="font-serif text-2xl tracking-wide text-primary md:text-3xl">{t("sectionTitle")}</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
              </div>
              <p className="mb-8 max-w-3xl text-muted-foreground">{t("sectionBlurb")}</p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <ClassCard
                  name={tMax("heroTitle")}
                  description={tHealings("groups.bodyWork.items.0.description")}
                  tag={tMax("duration")}
                  price="350 CZK"
                  nextDate={formatDate(nextOf("community#meditation-evening"))}
                  location={locationOf("community#meditation-evening")}
                  href="/max-meditation"
                  labels={labels}
                />
                <ClassCard
                  name={tCommunity("prayerEvening.title")}
                  description={tCommunity("prayerEvening.description")}
                  tag={tCommunity("twoHours")}
                  price={tCommunity("freeOfCharge")}
                  nextDate={formatDate(nextOf("community#prayer-evening"))}
                  location={locationOf("community#prayer-evening")}
                  href="/community#prayer-evening"
                  labels={labels}
                />
                <ClassCard
                  name={tSanctuary("heroTitle")}
                  description={t("sanctuaryDescription")}
                  tag={tSanctuary("duration")}
                  price="350 CZK"
                  nextDate={formatDate(nextOf("sanctuary-meditation-session"))}
                  location={locationOf("sanctuary-meditation-session")}
                  href="/sanctuary-meditation-session"
                  labels={labels}
                />
                <ClassCard
                  name={tCommunity("gatheringsHeading1")}
                  description={t("communityDescription")}
                  nextDate={formatDate(nextCommunity)}
                  location={locationOf("community#prayer-evening")}
                  href="/community"
                  labels={labels}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
