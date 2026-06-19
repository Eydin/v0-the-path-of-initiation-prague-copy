"use client"

import Link from "next/link"
import Image from "next/image"

const activations = [
  { href: "/life-activation", label: "Life Activation" },
  { href: "/full-spirit-activation", label: "Full Spirit Activation" },
  { href: "/empower-thyself", label: "Empower Thyself" },
  { href: "/healers-academy", label: "Healers Academy" },
  { href: "/ritual-master", label: "Ritual Master" },
]

const healing = [
  { href: "/aura-healing", label: "Aura Healing" },
  { href: "/sacred-geometry", label: "Sacred Geometry" },
  { href: "/astral-travel", label: "Astral Travel" },
  { href: "/spiritual-intuition", label: "Spiritual Intuition" },
  { href: "/seven-mystery-schools", label: "The 7 Mystery Schools" },
  { href: "/stress-management", label: "Stress Rescue" },
  { href: "/packages", label: "Packages Full of Light" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xs tracking-[0.3em] text-primary">THE</span>
              <span className="font-serif text-sm tracking-[0.2em] text-primary">PATH OF</span>
              <span className="font-serif text-xs tracking-[0.3em] text-brown-light">INITIATION</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Healing, initiation and training in the lineage of King Salomon, with Guide Radu Coman in Prague.
            </p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Prague, Czech Republic</p>
          </div>

          {/* Activations */}
          <div>
            <p className="mb-4 font-serif text-xs uppercase tracking-[0.3em] text-primary">Activations & Initiations</p>
            <div className="flex flex-col gap-2.5">
              {activations.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Healing */}
          <div>
            <p className="mb-4 font-serif text-xs uppercase tracking-[0.3em] text-primary">Healing & Workshops</p>
            <div className="flex flex-col gap-2.5">
              {healing.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 font-serif text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Path%20of%20Initiation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                WhatsApp · +420 792 908 296
              </a>
              <a
                href="mailto:info@thepathofinitiationprague.com"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                info@thepathofinitiationprague.com
              </a>
              <Link href="/certifications" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Certifications
              </Link>
              <Link href="/testimonials" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Testimonials
              </Link>
            </div>
            <a
              href="https://modernmysteryschoolint.com/certified-professionals/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block transition hover:opacity-80"
            >
              <Image
                src="/images/certified-by-mms-new.png"
                alt="Certified by the Modern Mystery School"
                width={180}
                height={72}
                className="h-auto"
              />
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} The Path of Initiation Prague · Radu Coman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
