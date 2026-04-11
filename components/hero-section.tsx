"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="story"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-8"
        >
          <div className="mx-auto mb-6 h-px w-24 bg-primary/60" />
          <p className="mb-4 font-serif text-sm tracking-[0.4em] text-primary uppercase">
            Prague, Czech Republic
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-8 font-serif text-4xl leading-tight tracking-wide text-foreground md:text-6xl lg:text-7xl text-balance"
        >
          The Path of Initiation:
          <br />
          <span className="text-primary">A 3,000-Year-Old Lineage</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          For millennia, this sacred lineage was guarded in silence. 
          Recognizable figures &mdash; Leonardo da Vinci, Nikola Tesla, Isaac Newton
          &mdash; have walked this very path to understand the physical and spiritual
          worlds, but the mystery schools themselves were hidden, nearly impossible to find, and
          would not accept just anyone into their sacred halls.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-foreground"
        >
          Today though, the doors of one mystery school are open to the public.
          We are privileged to live in an era where{" "}
          <span className="text-primary font-serif italic">anyone</span> who
          feels the call can choose to study the mysteries and awaken to their
          true potential. This is a school where {" "}
          <span className="text-primary font-serif italic">magick</span> is a
          core part of existence, where the {" "}
          <span className="text-primary font-serif italic">soul</span> is developed and healed, 
          and where the {" "}
          <span className="text-primary font-serif italic">divine purpose</span> of each person is discovered and fulfilled.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="mb-4 text-sm tracking-wide text-muted-foreground uppercase">
            Discover if this Path is for you
          </p>
          <a
            href="https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Path%20of%20Initiation."
            className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm tracking-widest text-primary-foreground transition-all hover:bg-primary/90 uppercase"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
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
