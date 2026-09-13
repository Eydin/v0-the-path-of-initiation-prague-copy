"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

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

// Extracted from community/page.tsx so that page can be a server component
// (and export generateMetadata) — this is the only piece of that page that
// genuinely needs client-side state.
export function CommunityCarousel() {
  const t = useTranslations("CommunityPage")
  const [currentSlide, setCurrentSlide] = useState(0)

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

  return (
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
  )
}
