"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BookingBlock } from "@/components/modality"
import {
  ArrowRight,
  MessageCircle,
  Users,
  ChevronLeft,
  ChevronRight,
  Smile
} from "lucide-react"

const WHATSAPP =
  "https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20community%20and%20upcoming%20events."

const CAROUSEL_IMAGES = [
  "/images/community/2.jpg",
  "/images/community/3.jpg",
  "/images/community/5.jpg",
  "/images/community/6.jpg",
  "/images/community/7.jpg",
  "/images/community/8.jpg",
  "/images/community/9.jpg",
  "/images/community/10.jpg",
  "/images/community/12.jpg",
  "/images/community/20.jpg",
  "/images/community/IMG-20260512-WA0008.jpg",
  "/images/community/IMG-20260514-WA0002.jpg",
  "/images/community/IMG_20260621_100319150.jpg",
  "/images/community/Messenger_creation_1003F14A-1C77-4E40-B700-D318B91FBB89.jpeg",
]

export default function CommunityPage() {
  const t = useTranslations("CommunityPage")
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
  }

  const ties = [0, 1, 2, 3, 4].map((i) => t(`ties.${i}`))

  return (
    <>
      <Header />
      <main style={{ backgroundImage: "url('/images/empower-thyself-bg.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-cover">
          <div className="absolute inset-0 bg-background/20" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
            <ScrollReveal>
              <div className="mx-auto mb-6 h-px w-24 bg-primary/60" />
              <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">
                {t("eyebrow")}
              </p>
              <h1 className="mb-8 font-serif text-4xl leading-tight tracking-wide text-foreground md:text-6xl lg:text-7xl text-balance">
                {t.rich("heroHeading", { emphasis: (chunks) => <span className="text-primary">{chunks}</span> })}
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("heroBody")}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Values / Connection Section */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-background/20" />
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              <ScrollReveal direction="left" className="h-full">
                <div className="h-full rounded border border-primary/20 bg-background/60 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm">
                  <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                    {t("beyondClassroomEyebrow")}
                  </p>
                  <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                    {t("beyondClassroomHeading")}
                  </h2>
                  <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      {t.rich("beyondClassroomBody1", { bold: (chunks) => <strong>{chunks}</strong> })}
                    </p>
                    <div className="flex items-start gap-3 border-t border-border/40 pt-4 font-medium text-foreground">
                      <Smile className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <p>{t("beyondClassroomBody2")}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" className="h-full">
                <div className="flex h-full flex-col justify-center rounded border border-border/60 bg-background/60 p-8 backdrop-blur-sm">
                  <div className="mb-6 flex h-19.5 w-19.5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl tracking-wide text-foreground">
                    {t("tiesHeading")}
                  </h3>
                  <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    {ties.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Dynamic Image Carousel Section */}
        <section className="relative py-12 overflow-hidden bg-background/60">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl border border-border/60 bg-muted shadow-lg">
                {CAROUSEL_IMAGES.map((src, index) => {
                  const isActive = index === currentSlide
                  // Virtualization window check: Only mount image tag if it is current, next, or previous slide
                  const isNearVisible =
                    isActive ||
                    Math.abs(index - currentSlide) === 1 ||
                    (currentSlide === 0 && index === CAROUSEL_IMAGES.length - 1) ||
                    (currentSlide === CAROUSEL_IMAGES.length - 1 && index === 0)

                  return (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        isActive ? "opacity-100 z-10 visible" : "opacity-0 z-0 invisible"
                      }`}
                    >
                      {isNearVisible && (
                        <img
                          src={encodeURI(src)}
                          alt={t("carouselAlt", { index: index + 1 })}
                          className="h-full w-full object-cover object-center"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      )}
                    </div>
                  )
                })}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/40 p-2 text-foreground backdrop-blur-md transition-colors hover:bg-background/70"
                  aria-label={t("prevSlide")}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/40 p-2 text-foreground backdrop-blur-md transition-colors hover:bg-background/70"
                  aria-label={t("nextSlide")}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Numeric Slide Counter */}
                <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center rounded-full bg-background/60 px-4 py-1.5 font-serif text-xs uppercase tracking-widest text-foreground backdrop-blur-md border border-border/40">
                  {currentSlide + 1} / {CAROUSEL_IMAGES.length}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The 4 Big Linkable Gathering Sections */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <div className="mb-20 text-center">
                <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                  {t("gatheringsEyebrow")}
                </p>
                <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-5xl text-balance">
                  {t("gatheringsHeading1")}
                </h2>
                <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-5xl text-balance">
                  {t("gatheringsHeading2")}
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-16">
              {/* 1. Prayer Evening */}
              <BookingBlock
                slug="community#prayer-evening"
                title={t("prayerEvening.title")}
                investment={t("freeOfCharge")}
                duration={t("twoHours")}
                inquiry={t("prayerEvening.inquiry")}
                note=""
              >
                <div className="mx-auto max-w-2xl text-foreground">
                  <p className="leading-relaxed text-muted-foreground">
                    {t("prayerEvening.description")}
                  </p>
                </div>
              </BookingBlock>

              {/* 2. Meditation Evening */}
              <BookingBlock
                slug="community#meditation-evening"
                title={t("meditationEvening.title")}
                investment="350 CZK"
                duration={t("twoHours")}
                inquiry={t("meditationEvening.inquiry")}
                note=""
              >
                <div className="mx-auto max-w-2xl text-foreground">
                  <p className="leading-relaxed text-muted-foreground">
                    {t("meditationEvening.description")}
                  </p>
                </div>
              </BookingBlock>

              {/* 3. Socialization Evening */}
              <BookingBlock
                slug="community#socialization-evening"
                title={t("socializationEvening.title")}
                investment={t("freeOfCharge")}
                duration={t("twoHours")}
                inquiry={t("socializationEvening.inquiry")}
                note=""
              >
                <div className="mx-auto max-w-2xl text-foreground">
                  <p className="leading-relaxed text-muted-foreground">
                    {t("socializationEvening.description")}
                  </p>
                </div>
              </BookingBlock>

              {/* 4. International Mystery School Community */}
              <BookingBlock
                title={t("international.title")}
                inquiry={t("international.inquiry")}
                note=""
              >
                <div className="mx-auto max-w-2xl space-y-6 text-foreground">
                  <p className="leading-relaxed text-muted-foreground">
                    {t("international.description")}
                  </p>
                  <div className="pt-2 flex justify-center">
                    <a
                      href="https://modernmysteryschooluk.com/calendar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg border border-primary/20 bg-background/80 px-5 py-4 text-base font-semibold leading-relaxed text-primary transition-all hover:bg-primary/5 hover:border-primary/40"
                    >
                      {t("international.scheduleLead")}
                      <span className="block mt-1 text-sm font-normal text-muted-foreground underline">
                        {t("international.scheduleLinkLabel")}
                      </span>
                    </a>
                  </div>
                </div>
              </BookingBlock>
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section className="relative py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                {t("ctaEyebrow")}
              </p>
              <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                {t("ctaHeading")}
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("ctaBody")}
              </p>
              <a
                href={WHATSAPP}
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
    </>
  )
}
