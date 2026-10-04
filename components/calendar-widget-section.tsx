"use client"

import { useTranslations } from "next-intl"
import { CalendarDays, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { ScrollReveal } from "./scroll-reveal"

export function CalendarWidgetSection() {
  const t = useTranslations("CalendarWidget")

  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <Link
            href="/calendar"
            className="group flex flex-col items-center justify-between gap-6 rounded-lg border border-primary/30 bg-card/60 p-8 text-center backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-card/80 sm:flex-row sm:text-left"
          >
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <CalendarDays className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <h3 className="font-serif text-xl tracking-wide text-foreground">
                  {t("heading")}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("body")}
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded border border-primary bg-primary px-6 py-3 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all group-hover:bg-primary/90">
              {t("button")}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
