import { getTranslations } from "next-intl/server"
import { ScrollReveal } from "./scroll-reveal"

// Large invitation line shown above the "Your Guide" (Radu and Diana) sections.
export async function InitiateInvite() {
  const t = await getTranslations("Facts")

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <div className="mx-auto mb-8 h-px w-24 bg-primary/60" />
          <p className="font-serif text-3xl italic leading-snug text-primary text-balance md:text-4xl lg:text-5xl">
            {t("intro")}
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-primary/60" />
        </ScrollReveal>
      </div>
    </section>
  )
}
