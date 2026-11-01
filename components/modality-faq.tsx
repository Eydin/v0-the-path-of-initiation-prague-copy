"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "./scroll-reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

export type FaqItem = { q: string; a: string }

// ── FAQ accordion for a modality page ────────────────────────────────────
export function ModalityFaq({ items }: { items: FaqItem[] }) {
  const t = useTranslations("HealingSession")

  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-primary">{t("faqEyebrow")}</p>
            <h2 className="font-serif text-3xl tracking-wide text-primary md:text-4xl">{t("faqHeading")}</h2>
          </div>
          <Accordion type="single" collapsible className="rounded-lg border border-primary/20 bg-muted/60 px-6 backdrop-blur-sm md:px-8">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-primary/20">
                <AccordionTrigger className="font-serif text-lg tracking-wide text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground">{t("disclaimer")}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
