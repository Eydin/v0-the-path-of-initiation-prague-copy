"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "./scroll-reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

export function FAQSection() {
  const t = useTranslations("FAQ")
  const items = [0, 1, 2, 3, 4].map((i) => ({
    q: t(`items.${i}.q`),
    a: t(`items.${i}.a`),
  }))

  return (
    <section className="relative py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-3 font-serif text-sm tracking-[0.3em] text-primary uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
              {t("heading")}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="border border-border bg-card px-6 md:px-8">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-serif text-lg tracking-wide text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
