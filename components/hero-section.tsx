"use client"

import { motion } from "framer-motion"
import { ChevronDown, HeartHandshake, MessageCircle, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"
import { waLink } from "@/components/modality"

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
      {/* veil — two layers so the dragon stays visible: a light wash over the whole video, plus a soft
          glow right behind the text block (strong in the middle, fading to clear at the edges) that keeps
          the headline and paragraphs readable. */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/15 to-background/55" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 58% 62% at 50% 50%, color-mix(in oklab, var(--background) 88%, transparent) 0%, color-mix(in oklab, var(--background) 74%, transparent) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-24 text-center">
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
          className="mb-6 font-serif text-4xl leading-tight tracking-wide text-foreground md:text-6xl lg:text-7xl text-balance"
        >
          {t("titleLine1")}
          <br />
          <span className="text-primary">{t("titleLine2")}</span>
        </motion.h1>

        {/* plain one-line answer to "what is this?" */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto mb-8 max-w-3xl font-serif text-xl leading-snug text-foreground text-balance md:text-2xl"
        >
          {t("subtitle")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground/85"
        >
          {t("intro")}
        </motion.p>

        {/* two doors: the two reasons people arrive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="#healing"
              className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-8 py-4 font-serif text-sm tracking-widest text-primary-foreground uppercase transition-all hover:bg-primary/90"
            >
              <HeartHandshake className="h-4 w-4" />
              {t("doorHealing")}
            </a>
            <a
              href="#first-steps"
              className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-background/60 px-8 py-4 font-serif text-sm tracking-widest text-primary uppercase backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Sparkles className="h-4 w-4" />
              {t("doorLearn")}
            </a>
          </div>
          <a
            href={waLink(t("inquiry"))}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-6 block max-w-xs text-center text-sm font-semibold text-[#25D366] underline-offset-4 transition-colors hover:text-[#1ebe5b] hover:underline sm:max-w-none"
          >
            <MessageCircle className="mr-2 inline h-4 w-4 align-[-3px]" />
            {t("askLink")}
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
