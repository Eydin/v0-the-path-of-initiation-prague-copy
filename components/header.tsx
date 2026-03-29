"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xs tracking-[0.3em] text-primary">
            THE
          </span>
          <span className="font-serif text-sm tracking-[0.2em] text-primary">
            PATH OF
          </span>
          <span className="font-serif text-xs tracking-[0.3em] text-brown-light">
            INITIATION
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#story"
            className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            The Story
          </Link>
          <Link
            href="/#pillars"
            className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            Pillars
          </Link>
          <Link
            href="/#guide"
            className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            Your Guide
          </Link>
          <Link
            href="/#classes"
            className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            Classes
          </Link>
          <Link
            href="/testimonials"
            className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="/certifications"
            className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            Certifications
          </Link>
          <Link
            href="/#apply"
            className="border border-primary bg-primary/10 px-5 py-2 font-serif text-sm tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Begin Your Journey
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}
