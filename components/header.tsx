"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, ChevronDown } from "lucide-react"
import { useState } from "react"

const WHATSAPP =
  "https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Path%20of%20Initiation."

const activations = [
  { href: "/life-activation", label: "Life Activation" },
  { href: "/full-spirit-activation", label: "Full Spirit Activation" },
  { href: "/empower-thyself", label: "Empower Thyself" },
  { href: "/healers-academy", label: "Healers Academy" },
  { href: "/ritual-master", label: "Ritual Master" },
]

const healing = [
  { href: "/aura-healing", label: "Sacred Geometry Aura Healing" },
  { href: "/sacred-geometry", label: "Sacred Geometry" },
  { href: "/astral-travel", label: "Astral Travel" },
  { href: "/spiritual-intuition", label: "Spiritual Intuition" },
  { href: "/seven-mystery-schools", label: "The 7 Mystery Schools" },
  { href: "/stress-management", label: "Stress Rescue" },
  { href: "/packages", label: "Packages Full of Light" },
]

const simpleLinks = [
  { href: "/#guide", label: "Your Guide" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/certifications", label: "Certifications" },
]

function DropdownLink({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary">
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      {/* hover bridge + panel */}
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="w-64 border border-border/60 bg-background/95 p-2 shadow-2xl backdrop-blur-md">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm tracking-wide text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xs tracking-[0.3em] text-primary">THE</span>
          <span className="font-serif text-sm tracking-[0.2em] text-primary">PATH OF</span>
          <span className="font-serif text-xs tracking-[0.3em] text-brown-light">INITIATION</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          <DropdownLink label="Activations & Initiations" items={activations} />
          <DropdownLink label="Healing & Workshops" items={healing} />
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary bg-primary/10 px-5 py-2 font-serif text-sm tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Begin Your Journey
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
          <Menu className="h-6 w-6 text-primary" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="max-h-[80vh] overflow-y-auto border-t border-border/40 bg-background/95 px-6 py-5 lg:hidden"
        >
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 font-serif text-xs uppercase tracking-[0.3em] text-primary">Activations & Initiations</p>
              <div className="flex flex-col gap-2.5 pl-1">
                {activations.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 font-serif text-xs uppercase tracking-[0.3em] text-primary">Healing & Workshops</p>
              <div className="flex flex-col gap-2.5 pl-1">
                {healing.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2.5 border-t border-border/40 pt-4">
              {simpleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block border border-primary bg-primary/10 px-5 py-2 text-center font-serif text-sm tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Begin Your Journey
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}
