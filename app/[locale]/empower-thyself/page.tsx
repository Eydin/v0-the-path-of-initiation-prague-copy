import type { Metadata } from "next"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { BRAND } from "@/lib/brand-names"
import { CalcomPopupLoader } from "@/components/calcom-popup-loader"
import {
  ModalityShell,
  ImageHero,
  Panel,
  PanelHeading,
  Body,
  BenefitList,
  BookingBlock,
  VideoEmbed,
  type CalEmbed,
} from "@/components/modality"

const BOOKING_URL = "https://booking.thepathofinitiationprague.com/all/empower-thyself"
const CAL_NAMESPACE = "empower-thyself"
const CAL_EMBED: CalEmbed = {
  link: "all/empower-thyself",
  namespace: CAL_NAMESPACE,
  config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
}

const bold = (chunks: React.ReactNode) => <span className="font-semibold text-primary">{chunks}</span>

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "EmpowerThyself" })
  const title = `${t("heroTitle", { brand: BRAND.empowerThyself })} | The Path of Initiation Prague`
  const description = t("heroSubtitle")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/accolade-leighton.jpg", width: 1200, height: 630 }] },
  }
}

export default async function EmpowerThyself({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "EmpowerThyself" })
  const tModality = await getTranslations({ locale, namespace: "Modality" })
  const inquiry = t("inquiry", { brand: BRAND.empowerThyself })
  const whatBenefits = [0, 1, 2].map((i) => ({ text: t(`whatWillYouDo.benefits.${i}`) }))
  const curriculum = t.raw("curriculum.items") as string[]
  const nextSteps = Array.from({ length: 5 }, (_, i) => i)

  return (
    <ModalityShell bg="accolade-leighton.jpg" position="center 20%" veil={false}>
      <CalcomPopupLoader namespace={CAL_NAMESPACE} />
      <ImageHero
        image="empower-thyself-altar.jpg"
        position="62% 40%"
        caption="The altar, prepared · lineage tools, held with care"
        eyebrow={t("heroEyebrow")}
        title={BRAND.empowerThyself}
        subtitle={t("heroSubtitle")}
        cta={{ href: BOOKING_URL, label: tModality("bookNow"), external: true, calEmbed: CAL_EMBED }}
      />

      {/* Booking card first, straight under the header */}
      <BookingBlock
        slug="empower-thyself"
        title={t("bookingTitle")}
        investment="36.500 CZK"
        duration={t("duration")}
        inquiry={inquiry}
        bookHref={BOOKING_URL}
        bookCalEmbed={CAL_EMBED}
        note={t("bookingNote")}
      >
        <div className="mx-auto max-w-2xl space-y-3 text-foreground">
          <p className="leading-relaxed">{t("bookingExtra.included")}</p>
          <p className="font-semibold text-primary">{t("bookingExtra.processLabel")}</p>
          <p className="leading-relaxed">{t("bookingExtra.deposit")}</p>
          <p className="leading-relaxed">{t("bookingExtra.remainder")}</p>
        </div>
      </BookingBlock>

      {/* Invitation + key image */}
      <Panel wide>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            {/* said openly up front: this class talks about God */}
            <h3 className="pb-2 font-serif text-3xl italic leading-snug tracking-wide text-primary md:text-4xl">
              {t("invitation.god")}
            </h3>
            <p className="text-lg leading-relaxed text-foreground">{t("invitation.body1", { brand: BRAND.empowerThyself })}</p>
            <p className="text-lg leading-relaxed text-foreground">{t("invitation.body2")}</p>
            <p className="text-lg leading-relaxed text-foreground">{t("invitation.body3")}</p>
            <p className="text-lg leading-relaxed text-foreground">
              {t("invitation.body4")}
              <br />
              {t("invitation.body6")}
            </p>
            <p className="pt-2 font-serif text-xl font-semibold text-primary">{t("invitation.callToAction")}</p>
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

    </ModalityShell>
  )
}
