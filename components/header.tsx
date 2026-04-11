"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"  // or your preferred icon library
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/#story", label: "The Story" },
    { href: "/#pillars", label: "Pillars" },
    { href: "/#guide", label: "Your Guide" },
    { href: "/#classes", label: "Classes" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/certifications", label: "Certifications" },
  ]

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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#apply"
            className="border border-primary bg-primary/10 px-5 py-2 font-serif text-sm tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Begin Your Journey
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6 text-primary" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-border/40 bg-background/95 px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#apply"
              className="mt-2 border border-primary bg-primary/10 px-5 py-2 font-serif text-sm tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground inline-block"
            >
              Begin Your Journey
            </Link>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}
