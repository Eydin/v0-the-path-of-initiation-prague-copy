import type { Metadata } from "next"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CommunityCarousel } from "@/components/community-carousel"
import { getAllUpcomingEvents, getUpcomingDates, parseLocalDate } from "@/lib/schedule"
import {
  ArrowRight,
  CalendarDays,
  Check,
  Coffee,
  Gift,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Shirt,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react"

// The "next gathering" bar and the dates on the cards are relative to today.
export const revalidate = 3600

const PHONE = "420792908296"
const wa = (text: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`
const WHATSAPP_GENERAL = wa("Hello, I would like to learn more about your community and upcoming events.")
const STRIPE_MEDITATION_EVENING = "https://buy.stripe.com/9B6cMYgmb8g6ffv80jg360x"

const DATE_LOCALE: Record<string, string> = { en: "en-GB", cs: "cs-CZ", de: "de-DE", ro: "ro-RO" }

// The three local evenings, in the order shown on the page. Dates and times come from lib/schedule.ts.
const EVENINGS = [
  {
    slug: "community#prayer-evening",
    id: "prayer-evening",
    ns: "prayerEvening",
    short: "prayerShort",
    gets: "prayerGets",
    frequency: "monthly",
    duration: "twoHoursShort",
    free: true,
  },
  {
    slug: "community#meditation-evening",
    id: "meditation-evening",
    ns: "meditationEvening",
    short: "meditationShort",
    gets: "meditationGets",
    frequency: "biweekly",
    duration: "oneAndHalfHours",
    free: false,
    price: "350 CZK",
    bookHref: STRIPE_MEDITATION_EVENING,
    // pack of 4 evenings (1.200 CZK); no Stripe link yet, so it's arranged over WhatsApp
    pack: true,
  },
  {
    slug: "community#socialization-evening",
    id: "socialization-evening",
    ns: "socializationEvening",
    short: "socialShort",
    gets: "socialGets",
    frequency: "monthly",
    duration: "threeHours",
    free: false,
    // 222 CZK booked ahead (so people commit), 300 CZK at the door; tea and snacks included
    price: "222 CZK",
    doorPrice: "300 CZK",
    tea: true,
    // Socialization Evenings are for guests we have already met (Prayer and Meditation are open to all)
    returning: true,
  },
] as const

type Evening = (typeof EVENINGS)[number]

const FLOW_ICONS: LucideIcon[] = [Coffee, MessagesSquare, Sparkles, Users]
const GOOD_TO_KNOW_ICONS: LucideIcon[] = [MapPin, Shirt, MessageCircle, Users, Gift]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "CommunityPage" })
  const title = `${t("heroHeading")} | The Path of Initiation Prague`
  const description = t("heroBody")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/community/10.jpg", width: 1200, height: 630 }] },
  }
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "CommunityPage" })

  // "Free of Charge", "350 CZK", or "222 CZK if you book ahead · 300 CZK at the door"
  const priceText = (ev: Evening) =>
    ev.free
      ? t("freeOfCharge")
      : "doorPrice" in ev
        ? `${t("priceAdvance", { price: ev.price })} · ${t("priceDoor", { price: ev.doorPrice })}`
        : ev.price

  const formatDate = (date: string, long = true) =>
    parseLocalDate(date).toLocaleDateString(DATE_LOCALE[locale] ?? "en-GB", {
      weekday: long ? "long" : "short",
      day: "numeric",
      month: long ? "long" : "short",
      timeZone: "UTC",
    })

  // the very next local community evening, whichever kind it is
  const next = getAllUpcomingEvents().find((e) => e.category === "Community")
  const nextEvening = next ? EVENINGS.find((e) => e.slug === next.slug) : undefined
  const nextTitle = nextEvening ? t(`${nextEvening.ns}.title`) : ""
  const nextHref = nextEvening
    ? "bookHref" in nextEvening
      ? nextEvening.bookHref
      : wa(t(`${nextEvening.ns}.inquiry`))
    : WHATSAPP_GENERAL

  const flow = t.raw("flow") as { title: string; text: string }[]
  const forYou = t.raw("forYou") as string[]
  const goodToKnow = t.raw("goodToKnow") as string[]

  return (
    <div className="home-cream isolate overflow-x-hidden">
      <Header />
      <main className="pt-20">
        {/* ── Hero: daylight, the hosts smiling, what this is in one sentence ── */}
        <section className="relative py-14 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.15fr_0.85fr]">
            <ScrollReveal>
              <p className="mb-4 font-serif text-sm uppercase tracking-[0.3em] text-primary">{t("eyebrow")}</p>
              <h1 className="mb-6 font-serif text-4xl leading-tight tracking-wide text-foreground md:text-5xl text-balance">
                {t("heroHeading")}
              </h1>
              <p className="mb-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{t("heroBody")}</p>
              <div className="mb-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-4 py-1.5 text-sm text-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  {t("badgeInPerson")}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-4 py-1.5 text-sm text-foreground">
                  <Gift className="h-4 w-4 text-primary" />
                  {t("badgeFree")}
                </span>
              </div>
              <a
                href="#next"
                className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-8 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              >
                {t("heroCta")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </ScrollReveal>

            {/* on phones the hosts come first, so the first thing you see is who welcomes you */}
            <ScrollReveal delay={0.15} className="order-first md:order-none">
              <div className="mx-auto grid max-w-sm grid-cols-2 gap-4 md:max-w-none">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-primary/20">
                  <Image
                    src="/images/diana-smiling.jpg"
                    alt="Diana Coman"
                    fill
                    priority
                    sizes="(max-width: 768px) 45vw, 22rem"
                    className="object-cover object-[50%_45%]"
                  />
                </div>
                <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl border border-primary/20">
                  <Image
                    src="/images/Radu2.jpg"
                    alt="Radu Coman"
                    fill
                    priority
                    sizes="(max-width: 768px) 45vw, 22rem"
                    className="object-cover object-[50%_35%]"
                  />
                </div>
              </div>
              <p className="mt-5 text-center text-sm uppercase tracking-[0.2em] text-primary">{t("hostsCaption")}</p>
              <p className="mt-2 text-center font-serif text-lg italic text-foreground">&ldquo;{t("hostsQuote")}&rdquo;</p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Next gathering: the one thing to act on ── */}
        <section id="next" className="relative scroll-mt-24 pb-14">
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <div className="flex flex-col gap-5 rounded-2xl border-2 border-primary/50 bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CalendarDays className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.25em] text-primary">{t("nextEyebrow")}</p>
                    {next && nextEvening ? (
                      <>
                        <p className="font-serif text-2xl text-foreground">{nextTitle}</p>
                        <p className="mt-1 text-lg text-foreground">
                          {formatDate(next.date)} · {next.time}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {priceText(nextEvening)} · {t(nextEvening.duration)} ·{" "}
                          {t("badgeInPerson")}
                        </p>
                        {"returning" in nextEvening && (
                          <p className="mt-1 text-sm italic text-primary">{t("returningOnly")}</p>
                        )}
                      </>
                    ) : (
                      <p className="text-lg text-foreground">{t("nextNone")}</p>
                    )}
                  </div>
                </div>
                <a
                  href={nextHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded border border-primary bg-primary px-7 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
                >
                  {next ? t("nextCta") : t("askButton")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </ScrollReveal>

            {/* how to join: Prayer and Meditation are open to all; Socialization opens up after a first visit */}
            <ScrollReveal delay={0.08}>
              <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-primary/20 bg-card/70 p-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="leading-relaxed text-foreground">
                    <span className="font-serif text-lg">{t("newHereHeading")}</span> {t("newHereBody")}
                  </p>
                </div>
                <a
                  href="#evenings"
                  className="inline-flex shrink-0 items-center gap-2 text-sm text-primary underline underline-offset-4 hover:opacity-80"
                >
                  {t("newHereCta")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── What happens on an evening ── */}
        <section className="relative pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <h2 className="mb-8 text-center font-serif text-3xl tracking-wide text-foreground md:text-4xl">
                {t("flowHeading")}
              </h2>
              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {flow.map((step, i) => {
                  const Icon = FLOW_ICONS[i] ?? Sparkles
                  return (
                    <li key={step.title} className="rounded-xl border border-primary/20 bg-card p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-primary">{i + 1}</span>
                      </div>
                      <p className="font-serif text-lg text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                    </li>
                  )
                })}
              </ol>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Choose your evening: what it is, what you get, when, how much ── */}
        <section id="evenings" className="relative scroll-mt-24 pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <h2 className="mb-8 text-center font-serif text-3xl tracking-wide text-foreground md:text-4xl">
                {t("chooseHeading")}
              </h2>
            </ScrollReveal>
            <div className="grid gap-5 md:grid-cols-3">
              {EVENINGS.map((ev, i) => {
                const [date] = getUpcomingDates(ev.slug, 1)
                const gets = t.raw(ev.gets) as string[]
                const inquiryHref = wa(t(`${ev.ns}.inquiry`))
                return (
                  <ScrollReveal key={ev.id} delay={i * 0.08} className="h-full">
                    <article
                      id={ev.id}
                      className="flex h-full scroll-mt-24 flex-col rounded-2xl border border-primary/25 bg-card p-6"
                    >
                      <h3 className="font-serif text-2xl text-foreground">{t(`${ev.ns}.title`)}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {t(ev.frequency)} · {t(ev.duration)} · {priceText(ev)}
                      </p>
                      {"returning" in ev && (
                        <p className="mt-2 inline-flex w-fit rounded-full border border-primary/30 px-3 py-0.5 text-xs text-primary">
                          {t("returningOnly")}
                        </p>
                      )}
                      <p className="mt-4 leading-relaxed text-foreground">{t(ev.short)}</p>
                      {"tea" in ev && <p className="mt-2 text-sm italic text-primary">{t("teaIncluded")}</p>}
                      <p className="mt-5 text-xs uppercase tracking-[0.2em] text-primary">{t("leaveWith")}</p>
                      <ul className="mt-2 space-y-2">
                        {gets.map((g) => (
                          <li key={g} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {g}
                          </li>
                        ))}
                      </ul>
                      {"pack" in ev && (
                        <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4">
                          {/* the two ways to pay: one evening, or a pack of four */}
                          <div className="flex items-baseline justify-between gap-3">
                            <p className="font-serif text-lg text-foreground">{t("singleLabel")}</p>
                            <p className="font-serif text-lg text-primary">{ev.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{t("singleNote")}</p>
                          <div className="my-3 border-t border-primary/20" />
                          <div className="flex items-baseline justify-between gap-3">
                            <p className="font-serif text-lg text-foreground">{t("packLabel")}</p>
                            <p className="font-serif text-lg text-primary">{t("packPrice")}</p>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{t("packNote")}</p>
                          <a
                            href={wa(t("packInquiry"))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 text-sm text-primary underline underline-offset-4 hover:opacity-80"
                          >
                            {t("packButton")}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      )}
                      <div className="mt-auto pt-6">
                        <p className="mb-3 text-sm font-medium text-foreground">
                          {date ? t("nextDate", { date: formatDate(date, false) }) : t("noDate")}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {/* paying only makes sense once a date is scheduled */}
                          {"bookHref" in ev && date && (
                            <a
                              href={ev.bookHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded border border-primary bg-primary px-4 py-2.5 text-sm text-primary-foreground transition-all hover:bg-primary/90"
                            >
                              {t("payButton")}
                            </a>
                          )}
                          <a
                            href={inquiryHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded border border-primary/50 px-4 py-2.5 text-sm text-primary transition-all hover:bg-primary/5"
                          >
                            <MessageCircle className="h-4 w-4" />
                            {t("askButton")}
                          </a>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Is this for me? / Good to know ── */}
        <section className="relative pb-16">
          <div className="mx-auto grid max-w-5xl gap-5 px-6 md:grid-cols-2">
            <ScrollReveal className="h-full">
              <div className="h-full rounded-2xl border border-primary/20 bg-card p-6">
                <h2 className="mb-4 font-serif text-2xl text-foreground">{t("forYouHeading")}</h2>
                <ul className="space-y-3">
                  {forYou.map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-relaxed text-foreground">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08} className="h-full">
              <div className="h-full rounded-2xl border border-primary/20 bg-card p-6">
                <h2 className="mb-4 font-serif text-2xl text-foreground">{t("goodToKnowHeading")}</h2>
                <ul className="space-y-3">
                  {goodToKnow.map((item, i) => {
                    const Icon = GOOD_TO_KNOW_ICONS[i] ?? Check
                    return (
                      <li key={item} className="flex items-start gap-3 leading-relaxed text-foreground">
                        <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Real photos from our evenings ── */}
        <CommunityCarousel />

        {/* ── Beyond Prague: the international Mystery School community ── */}
        <section className="relative py-14">
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <div className="rounded-2xl border border-primary/20 bg-card p-6 text-center md:p-8">
                <h2 className="mb-3 font-serif text-2xl text-foreground">{t("international.title")}</h2>
                <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">{t("international.description")}</p>
                <a
                  href="https://modernmysteryschooluk.com/calendar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-primary underline underline-offset-4 hover:opacity-80"
                >
                  {t("international.scheduleLinkLabel")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="relative pb-20 pt-6">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-primary">{t("ctaEyebrow")}</p>
              <h2 className="mb-5 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                {t("ctaHeading")}
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t("ctaBody")}</p>
              <a
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                {t("ctaButton")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
