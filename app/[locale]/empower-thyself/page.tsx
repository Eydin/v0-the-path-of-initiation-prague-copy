"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { BRAND } from "@/lib/brand-names"
import {
  ModalityShell,
  ModalityHero,
  Panel,
  PanelHeading,
  Body,
  BenefitList,
  BookingBlock,
  VideoEmbed,
} from "@/components/modality"

const STRIPE = "https://buy.stripe.com/cNi14gd9ZdAq5EVdkDg360i"

const bold = (chunks: React.ReactNode) => <span className="font-semibold text-primary">{chunks}</span>

export default function EmpowerThyself() {
  const t = useTranslations("EmpowerThyself")
  const tModality = useTranslations("Modality")
  const inquiry = t("inquiry", { brand: BRAND.empowerThyself })
  const whatBenefits = [0, 1, 2].map((i) => ({ text: t(`whatWillYouDo.benefits.${i}`) }))
  const curriculum = Array.from({ length: 11 }, (_, i) => t(`curriculum.items.${i}`))
  const nextSteps = Array.from({ length: 5 }, (_, i) => i)

  return (
    <ModalityShell bg="accolade-leighton.jpg" position="center 20%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle", { brand: BRAND.empowerThyself })}
        subtitle={t("heroSubtitle")}
      />

      {/* Invitation + key image */}
      <Panel wide>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-wide text-primary">
              {t("invitation.question")}
            </h3>
            <p className="text-lg leading-relaxed text-foreground">{t("invitation.body1")}</p>
            <p className="text-lg leading-relaxed text-foreground">{t("invitation.body2")}</p>
            <p className="text-lg leading-relaxed text-foreground">{t("invitation.body3")}</p>
            <p className="text-lg leading-relaxed text-foreground">
              {t("invitation.body4")}
              <br />
              {t("invitation.body5")}
              <br />
              {t("invitation.body6")}
            </p>
            <p className="pt-2 font-serif text-xl font-semibold text-primary">{t("invitation.callToAction")}</p>
            <a
              href={STRIPE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
            >
              {tModality("bookNow")} →
            </a>
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-primary/20">
            <Image
              src="/images/Key.jpg"
              alt="A pair of hands handing out a magical key"
              fill
              sizes="(max-width: 768px) 90vw, 40rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Panel>

      {/* Letter */}
      <Panel>
        <p className="font-serif text-lg italic text-primary">{t("letter.greeting")}</p>
        <p className="text-lg leading-relaxed text-foreground">
          {t.rich("letter.body1", { bold })}
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          {t("letter.body2a")}
          <br />
          {t("letter.body2b")}
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          {t.rich("letter.body3", { bold, emphasis: (chunks) => <em>{chunks}</em>, brand: BRAND.empowerThyself })}
        </p>
        <p className="text-lg leading-relaxed text-foreground">{t("letter.body4")}</p>
        <p className="text-lg leading-relaxed text-foreground">{t("letter.body5")}</p>
        <div className="mt-8 border-t border-primary/20 pt-8">
          <p className="text-lg leading-relaxed text-foreground">{t("letter.closing")}</p>
          <p className="mt-4 text-lg">
            <span className="font-semibold text-primary">{t("letter.signOffRole")}</span>
            <br />
            <span className="font-semibold text-primary">Radu Coman</span>
          </p>
        </div>
      </Panel>

      {/* Program origins */}
      <Panel wide>
        <PanelHeading>{t("origins.heading", { brand: BRAND.empowerThyself })}</PanelHeading>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-primary/20">
            <Image
              src="/images/angelic-heavenly-presence-stockcake.webp"
              alt="Angelic Heavenly Presence"
              fill
              sizes="(max-width: 768px) 90vw, 40rem"
              className="object-cover"
            />
          </div>
          <div className="space-y-5">
            <Body>
              <span>{t.rich("origins.body1", { bold, brand: BRAND.empowerThyself })}</span>
            </Body>
            <Body>{t("origins.body2")}</Body>
            <Body>
              <span>{t.rich("origins.body3", { bold, brand: BRAND.empowerThyself })}</span>
            </Body>
            <p className="font-serif text-xl font-semibold text-primary">{t("origins.tagline")}</p>
          </div>
        </div>
      </Panel>

      {/* What will you do */}
      <Panel>
        <PanelHeading>{t("whatWillYouDo.heading", { brand: BRAND.empowerThyself })}</PanelHeading>
        <Body>{t("whatWillYouDo.body1")}</Body>
        <Body>{t("whatWillYouDo.body2")}</Body>
        <Body>{t("whatWillYouDo.body3")}</Body>
        <div className="border-t border-primary/20 pt-6">
          <p className="mb-6 text-lg font-semibold leading-relaxed text-primary">
            {t("whatWillYouDo.subheading")}
          </p>
          <BenefitList items={whatBenefits} />
        </div>
      </Panel>

      {/* What makes it special */}
      <Panel>
        <PanelHeading>{t("special.heading")}</PanelHeading>
        <p className="text-center font-serif text-xl font-semibold leading-relaxed text-foreground">
          {t("special.body")}
        </p>
      </Panel>

      {/* Curriculum + video */}
      <Panel>
        <PanelHeading>{t("curriculum.heading")}</PanelHeading>
        <VideoEmbed src="https://www.youtube-nocookie.com/embed/6_TzH0U9XZ0" title="Empower Thyself Initiation Introduction" />
        <ol className="ml-2 list-inside list-decimal space-y-3 text-lg font-semibold text-foreground">
          {curriculum.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
        <div className="border-t border-primary/20 pt-6">
          <Body>{t("curriculum.closing")}</Body>
        </div>
      </Panel>

      {/* Next steps */}
      <Panel>
        <PanelHeading>{t("nextSteps.heading")}</PanelHeading>
        <ol className="ml-2 list-inside list-decimal space-y-4 text-lg text-foreground">
          {nextSteps.map((i) => (
            <li key={i} className="leading-relaxed">
              {t(`nextSteps.items.${i}.main`)}
              {t.has(`nextSteps.items.${i}.sub`) && (
                <>
                  <br />
                  <span className="ml-5">{t(`nextSteps.items.${i}.sub`)}</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </Panel>

      {/* Recommendations */}
      <Panel>
        <PanelHeading>{t("recommendations.heading")}</PanelHeading>
        <Body>
          <span>{t.rich("recommendations.body1", { bold, brand: BRAND.empowerThyself })}</span>
        </Body>
        <Body>{t("recommendations.body2")}</Body>
        <Body>{t("recommendations.body3")}</Body>
        <div className="border-t border-primary/20 pt-6">
          <Body>{t("recommendations.body4")}</Body>
        </div>
      </Panel>

      <BookingBlock
        slug="empower-thyself"
        title={t("bookingTitle")}
        investment="36.500 CZK"
        duration={t("duration")}
        inquiry={inquiry}
        bookHref={STRIPE}
        note={t("bookingNote")}
      >
        <div className="mx-auto max-w-2xl space-y-3 text-foreground">
          <p className="leading-relaxed">{t("bookingExtra.included")}</p>
          <p className="font-semibold text-primary">{t("bookingExtra.processLabel")}</p>
          <p className="leading-relaxed">{t("bookingExtra.deposit")}</p>
          <p className="leading-relaxed">{t("bookingExtra.remainder")}</p>
        </div>
      </BookingBlock>
    </ModalityShell>
  )
}
