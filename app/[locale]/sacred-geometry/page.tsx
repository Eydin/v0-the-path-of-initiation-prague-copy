import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { BRAND } from "@/lib/brand-names"
import {
  ModalityShell,
  ModalityHero,
  Panel,
  PanelHeading,
  Lead,
  Body,
  BenefitList,
  BookingBlock,
  type CalEmbed,
} from "@/components/modality"
import { SacredGeometrySeriesLinks } from "@/components/sacred-geometry-series-links"
import { ModalityFaq, type FaqItem } from "@/components/modality-faq"
import { DiscoverCards, MastersStrip, WorkshopGallery } from "@/components/sacred-geometry-fun"
import { CalcomPopupLoader } from "@/components/calcom-popup-loader"
import { BookLink } from "@/components/book-link"

const BOOKING_URL = "https://booking.thepathofinitiationprague.com/all/sacred-geometry-1-class"
const CAL_NAMESPACE = "sacred-geometry-1-class"
const CAL_EMBED: CalEmbed = { link: "all/sacred-geometry-1-class", namespace: CAL_NAMESPACE }

// Real photos from our Sacred Geometry workshops in Prague (captions in messages: SacredGeometryPage.gallery)
const PHOTOS = [
  { src: "/images/sacred-geometry/sg1-teaching.jpg" },
  { src: "/images/sacred-geometry/sg1-cutting-shapes.jpg", portrait: true },
  { src: "/images/sacred-geometry/sg1-triangles.jpg" },
  { src: "/images/sacred-geometry/sg1-guidance.jpg", portrait: true },
  { src: "/images/sacred-geometry/sg1-altar.jpg", portrait: true },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SacredGeometryPage" })
  const title = `${BRAND.sacredGeometryI} | The Path of Initiation Prague`
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/flammarion.jpg", width: 1200, height: 630 }] },
  }
}

export default async function SacredGeometry({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SacredGeometryPage" })
  const inquiry = t("inquiry", { brand: BRAND.sacredGeometryI })
  const benefits = t.raw("benefits") as { label: string; text: string }[]
  const uses = (t.raw("uses") as string[]).map((text) => ({ text }))
  const faq = t.raw("faq") as FaqItem[]
  const why = (t.raw("why") as string[]).map((text) => ({ text }))
  const expect = (t.raw("expect") as string[]).map((text) => ({ text }))
  const masters = t.raw("masters") as { name: string; era: string; text: string }[]
  const captions = t.raw("gallery") as string[]
  const photos = PHOTOS.map((p, i) => ({ ...p, alt: captions[i] }))

  return (
    <ModalityShell bg="flammarion.jpg" position="center 30%">
      <CalcomPopupLoader namespace={CAL_NAMESPACE} />
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title={BRAND.sacredGeometryI}
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <BookingBlock
        slug="sacred-geometry"
        title={t("bookingTitle")}
        investment="4.200 CZK"
        duration={t("duration")}
        inquiry={inquiry}
        note={t("bookingNote")}
        bookHref={BOOKING_URL}
        bookCalEmbed={CAL_EMBED}
      />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>{t("introBody1")}</Body>
        <Body>{t("introBody2")}</Body>
        <div className="border-t border-primary/20 pt-6 text-center">
          <BookLink
            slug="sacred-geometry-1-class"
            className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
          >
            {t("reserveYourPlace")} →
          </BookLink>
        </div>
      </Panel>

      {/* real photos from our workshops: who you'll be with, what it looks like */}
      <WorkshopGallery heading={t("galleryHeading")} intro={t("galleryIntro")} photos={photos} />

      {/* why it matters in daily life: "create sacred space — why do I need this?" */}
      <Panel>
        <PanelHeading>{t("whyHeading")}</PanelHeading>
        <BenefitList items={why} />
      </Panel>

      <DiscoverCards heading={t("learnHeading")} items={benefits} />

      {/* real life: how people use what they learn */}
      <Panel>
        <PanelHeading>{t("usesHeading")}</PanelHeading>
        <BenefitList items={uses} />
      </Panel>

      <MastersStrip heading={t("mastersHeading")} intro={t("mastersIntro")} masters={masters} />

      {/* the practical side: how long, with whom, what happens */}
      <Panel>
        <PanelHeading>{t("expectHeading")}</PanelHeading>
        <BenefitList items={expect} />
      </Panel>

      <ModalityFaq items={faq} disclaimer={false} />

      <SacredGeometrySeriesLinks current="sacred-geometry" />
    </ModalityShell>
  )
}
