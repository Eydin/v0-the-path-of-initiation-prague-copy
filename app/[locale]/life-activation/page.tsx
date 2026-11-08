import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import {
  Baby,
  Brain,
  Briefcase,
  Compass,
  Feather,
  GraduationCap,
  HandHeart,
  KeyRound,
  Laptop,
  Lightbulb,
  Palette,
  Sparkles,
  Sun,
} from "lucide-react"
import { Link } from "@/i18n/navigation"
import { BRAND } from "@/lib/brand-names"
import {
  ModalityShell,
  ImageHero,
  Panel,
  PanelHeading,
  Body,
  BenefitList,
  BookingBlock,
  WhatsAppButton,
  VideoEmbed,
  type CalEmbed,
} from "@/components/modality"
import { ModalityFaq, type FaqItem } from "@/components/modality-faq"
import { DiscoverCards } from "@/components/sacred-geometry-fun"
import { ForWhomTiles, NextStepCards, PhotoStory, SessionSteps } from "@/components/life-activation-fun"
import { MmsLink, withMmsLinks } from "@/components/mms-link"
import { CalcomPopupLoader } from "@/components/calcom-popup-loader"

const BOOKING_URL = "https://booking.thepathofinitiationprague.com/all/life-activation"
const CAL_NAMESPACE = "life-activation"
const CAL_EMBED: CalEmbed = { link: "all/life-activation", namespace: CAL_NAMESPACE }
const IMG = "/images/life-activation"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "LifeActivation" })
  const title = `${BRAND.lifeActivation} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/life-activation.jpg", width: 1200, height: 630 }] },
  }
}

export default async function LifeActivation({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "LifeActivation" })
  const tModality = await getTranslations({ locale, namespace: "Modality" })
  const tFaq = await getTranslations({ locale, namespace: "LifeActivationFaq" })
  const inquiry = t("inquiry", { brand: BRAND.lifeActivation })
  const procedures = t.raw("procedures") as { label: string; text: string }[]
  const gifts = t.raw("gifts") as { label: string; text: string }[]
  const forWhom = t.raw("forWhom") as { who: string; text: string }[]
  const steps = t.raw("steps") as { title: string; text: string }[]
  const faqItems = tFaq.raw("items") as FaqItem[]

  return (
    <ModalityShell bg="bethesda-bloch.jpg" position="center 18%">
      <CalcomPopupLoader namespace={CAL_NAMESPACE} />
      <ImageHero
        image="creation-of-adam.jpg"
        position="50% 45%"
        caption="The Creation of Adam · Michelangelo, 1512"
        eyebrow={withMmsLinks(t("heroEyebrow"))}
        title={BRAND.lifeActivation}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
        cta={{ href: BOOKING_URL, label: tModality("bookNow"), external: true, calEmbed: CAL_EMBED }}
      />

      {/* Booking card first, straight under the header */}
      <BookingBlock
        kind="healing"
        title={t("bookingTitle")}
        investment="8.500 CZK"
        duration={t("duration")}
        inquiry={inquiry}
        bookHref={BOOKING_URL}
        bookCalEmbed={CAL_EMBED}
        note={t("bookingNote")}
      />

      {/* what it is, in plain words, beside the DNA picture */}
      <PhotoStory
        image={`${IMG}/dna-light.jpg`}
        alt={t("awakenAlt")}
        heading={t("awakenHeading")}
        paragraphs={(t.raw("awaken") as string[]).map(withMmsLinks)}
        portrait
      />

      <DiscoverCards
        heading={t("giftsHeading")}
        intro={t("giftsIntro")}
        items={gifts}
        icons={[Lightbulb, Sun, Compass, Sparkles, Feather, Brain]}
      />

      <ForWhomTiles
        heading={t("forWhomHeading", { brand: BRAND.lifeActivation })}
        intro={t("forWhomIntro")}
        items={forWhom}
        icons={[Briefcase, Baby, GraduationCap, Palette, HandHeart, Laptop, Compass, KeyRound]}
      />

      <SessionSteps
        heading={t("stepsHeading")}
        intro={t("stepsIntro")}
        steps={steps}
        image={`${IMG}/sacred-tools.jpg`}
        alt={t("stepsAlt")}
      />

      {/* everything the session includes, for those who want the detail */}
      <Panel>
        <PanelHeading>{t("proceduresHeading")}</PanelHeading>
        <p className="text-center text-lg leading-relaxed text-foreground">{t("proceduresLead")}</p>
        <BenefitList items={procedures} />
      </Panel>

      {/* who gives it: certified hands */}
      <PhotoStory
        image={`${IMG}/crystal-tool-hands.jpg`}
        alt={t("handsAlt")}
        heading={t("handsHeading")}
        paragraphs={(t.raw("hands") as string[]).map(withMmsLinks)}
        reverse
      >
        <Link
          href="/certifications"
          className="inline-block font-serif text-sm uppercase tracking-widest text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          {t("handsLink")} →
        </Link>
      </PhotoStory>

      {/* the bigger picture, beside the circle of crystal wands */}
      <PhotoStory
        image={`${IMG}/crystal-wands.jpg`}
        alt={t("wandsAlt")}
        heading={t("exploreHeading")}
        paragraphs={[t("exploreBody1"), withMmsLinks(t("exploreBody2"))]}
      />

      {/* in their own words: two people sharing their Life Activation, then Dr. Theresa Bullard-Whyke */}
      <Panel wide>
        <div className="text-center">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-primary">{t("videosEyebrow")}</p>
          <PanelHeading>{t("videosHeading")}</PanelHeading>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { id: "R5RZj6AJi9M", label: t("videoPart1") },
            { id: "l-hmjKzpNeo", label: t("videoPart2") },
          ].map((v) => (
            <figure key={v.id} className="space-y-3">
              <VideoEmbed src={`https://www.youtube-nocookie.com/embed/${v.id}`} title={v.label} />
              <figcaption className="text-center font-serif text-lg text-foreground">{v.label}</figcaption>
            </figure>
          ))}
        </div>
        <figure className="mx-auto max-w-3xl space-y-3 pt-4">
          <VideoEmbed src="https://www.youtube-nocookie.com/embed/SYauL1N3ppI" title={t("videoAbout")} />
          <figcaption className="text-center font-serif text-lg text-foreground">{t("videoAbout")}</figcaption>
        </figure>
        <div className="flex justify-center">
          <WhatsAppButton text={inquiry} label={tModality("askQuestion")} />
        </div>
      </Panel>

      <ModalityFaq items={faqItems} />

      <NextStepCards
        heading={t("nextHeading", { brand: BRAND.lifeActivation })}
        intro={t("nextIntro", { brand: BRAND.lifeActivation })}
        cards={[
          {
            href: "/full-spirit-activation",
            title: BRAND.fullSpiritActivation,
            text: t("nextFsa", { brand: BRAND.lifeActivation }),
            cta: t("nextCta"),
          },
          {
            href: "/empower-thyself",
            title: BRAND.empowerThyself,
            text: t("nextEmpower", { brand: BRAND.lifeActivation }),
            cta: t("nextCta"),
          },
        ]}
      />

      {/* Certifications */}
      <Panel wide>
        <div className="grid items-center gap-8 md:grid-cols-3">
          <Link href="/certifications" className="transition hover:opacity-80">
            <img
              src="/images/diana-lap.jpg"
              alt="Diana — Life Activation certification, The Path of Initiation Prague"
              loading="lazy"
              className="h-auto w-full rounded border border-primary/20"
            />
          </Link>
          <div className="space-y-4 text-center">
            <h3 className="font-serif text-2xl tracking-wide text-primary">{t("certTitle", { brand: BRAND.lifeActivation })}</h3>
            <Body>
              <span>
                {t.rich("certBody", {
                  i: (chunks) => <i>{chunks}</i>,
                  mms: (chunks) => <MmsLink>{chunks}</MmsLink>,
                  bold: (chunks) => <span className="font-semibold text-foreground">{chunks}</span>,
                })}
              </span>
            </Body>
          </div>
          <Link href="/certifications" className="transition hover:opacity-80">
            <img
              src="/images/radu-lap.jpg"
              alt="Radu — Life Activation certification, The Path of Initiation Prague"
              loading="lazy"
              className="h-auto w-full rounded border border-primary/20"
            />
          </Link>
        </div>
      </Panel>
    </ModalityShell>
  )
}
