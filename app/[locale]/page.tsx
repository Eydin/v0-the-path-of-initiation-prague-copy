import { useTranslations } from "next-intl"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FactsSection } from "@/components/facts-section"
import { PillarsSection } from "@/components/pillars-section"
import { TeaserSection } from "@/components/teaser-section"
import { CTASection } from "@/components/cta-section"
import { GuideSection } from "@/components/guide-section"
import { ClassesSection } from "@/components/classes-section"
import { EndingSection } from "@/components/ending-section"
import { Footer } from "@/components/footer"
import { HallOfInitiates } from "@/components/hall-of-initiates"
import { QuoteBreaker } from "@/components/quote-breaker"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Home() {
  const t = useTranslations("HomeQuotes")
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 magnum-opus-gradient" />
        <HeroSection />
        <FactsSection />
        <PillarsSection />

        <QuoteBreaker
          image="ascent-blessed-bosch.jpg"
          quote={
            <>
              &ldquo;{t("quote1.text")} <em className="text-primary">{t("quote1.emphasis")}</em>.&rdquo;
            </>
          }
          attribution={t("quote1.attribution")}
          caption={t("quote1.caption")}
          position="center 42%"
        />

        <HallOfInitiates />

        <TeaserSection />
        <CTASection />
        <GuideSection />
        <ClassesSection />

        <QuoteBreaker
          image="sheba-Salomon-temple.jpg"
          quote={
            <>
              &ldquo;{t("quote2.text")} <em className="text-primary">{t("quote2.emphasis")}</em>.&rdquo;
            </>
          }
          attribution={t("quote2.attribution")}
          caption={t("quote2.caption")}
          position="center 22%"
        />

        <NewsletterSection />

        <EndingSection />
      </main>
      <Footer />
    </div>
  )
}
