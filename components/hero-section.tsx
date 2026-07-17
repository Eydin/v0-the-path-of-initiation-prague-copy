"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export function HeroSection() {
  const isMobile = useIsMobile()
  const t = useTranslations("Hero")
  return (
    <section
      id="story"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <video
        src="/videos/Dragon-v3.mp4"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: isMobile ? '75% center' : 'center' }}
        onLoadedMetadata={(event) => {
          event.currentTarget.loop = false
        }}
        onEnded={() => {
          setTimeout(() => {
            const video = document.querySelector('video[src="/videos/Dragon-v3.mp4"]') as HTMLVideoElement | null
            if (video) {
              video.currentTime = 0
              video.play().catch(() => undefined)
            }
          }, 30000)
        }}
      />
      {/* veil — keeps the cinematic dark mood and the light headline legible over the bright sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/88 via-background/78 to-background/94" />
      <div className="absolute inset-0 stage-nigredo" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-8"
        >
          <div className="mx-auto mb-6 h-px w-24 bg-primary/60" />
          <p className="mb-4 font-serif text-sm tracking-[0.4em] text-primary uppercase">
            {t("location")}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-8 font-serif text-4xl leading-tight tracking-wide text-foreground md:text-6xl lg:text-7xl text-balance"
        >
          {t("titleLine1")}
          <br />
          <span className="text-primary">{t("titleLine2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {t("intro1")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-foreground"
        >
          {t.rich("intro2", {
            emphasis: (chunks) => <span className="text-primary font-serif italic">{chunks}</span>,
          })}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="mb-4 text-sm tracking-wide text-muted-foreground uppercase">
            {t("ctaLabel")}
          </p>
          <a
            href="https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Path%20of%20Initiation."
            className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm tracking-widest text-primary-foreground transition-all hover:bg-primary/90 uppercase"
          >
            <MessageCircle className="h-4 w-4" />
            {t("whatsapp")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-primary" />
      </motion.div>
    </section>
  )
}
