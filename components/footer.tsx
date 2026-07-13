"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { BRAND } from "@/lib/brand-names"

export function Footer() {
  const t = useTranslations("Footer")
  const tNav = useTranslations("Header")

  const activations = [
    { href: "/life-activation", label: BRAND.lifeActivation },
    { href: "/full-spirit-activation", label: BRAND.fullSpiritActivation },
    { href: "/empower-thyself", label: BRAND.empowerThyself },
    { href: "/healers-academy", label: BRAND.healersAcademy },
    { href: "/ritual-master", label: BRAND.ritualMaster },
  ]

  const healing = [
    { href: "/aura-healing", label: t("auraHealing") },
    { href: "/sacred-geometry", label: BRAND.sacredGeometry },
    { href: "/astral-travel", label: tNav("nav.astralTravel") },
    { href: "/spiritual-intuition", label: tNav("nav.spiritualIntuition") },
    { href: "/seven-mystery-schools", label: tNav("nav.sevenMysterySchools") },
    { href: "/stress-management", label: tNav("nav.stressManagement") },
  ]

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
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{t("tagline")}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{t("location")}</p>
          </div>

          {/* Activations */}
          <div>
            <p className="mb-4 font-serif text-xs uppercase tracking-[0.3em] text-primary">{tNav("activationsGroup")}</p>
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
            <p className="mb-4 font-serif text-xs uppercase tracking-[0.3em] text-primary">{tNav("healingGroup")}</p>
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
            <p className="mb-4 font-serif text-xs uppercase tracking-[0.3em] text-primary">{t("contact")}</p>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Path%20of%20Initiation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {t("whatsapp")}
              </a>
              <a
                href="https://www.facebook.com/radu.coman.338"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {t("facebook")}
              </a>
              <a
                href="mailto:info@thepathofinitiationprague.com"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                info@thepathofinitiationprague.com
              </a>
              <Link href="/certifications" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {tNav("nav.certifications")}
              </Link>
              <Link href="/testimonials" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {tNav("nav.testimonials")}
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {tNav("nav.blog")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://modernmysteryschoolint.com/certified-professionals/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-[260px] transition hover:opacity-80"
          >
            <Image
              src="/images/certified-by-mms-new.png"
              alt={t("certifiedAlt")}
              width={260}
              height={104}
              style={{ width: "100%", height: "auto" }}
            />
          </a>
        </div>

        <div className="mt-14 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
