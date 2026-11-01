import { useTranslations } from "next-intl"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CalendarWidgetSection } from "@/components/calendar-widget-section"
import { HealingsWidgetSection } from "@/components/healings-widget-section"
import { FactsSection } from "@/components/facts-section"
import { PillarsSection } from "@/components/pillars-section"
import { TeaserSection } from "@/components/teaser-section"
import { CTASection } from "@/components/cta-section"
import { GuideSection } from "@/components/guide-section"
import { ClassesSection } from "@/components/classes-section"
import { FAQSection } from "@/components/faq-section"
import { EndingSection } from "@/components/ending-section"
import { Footer } from "@/components/footer"
import { HallOfInitiates } from "@/components/hall-of-initiates"
import { QuoteBreaker } from "@/components/quote-breaker"
import { NewsletterSection } from "@/components/newsletter-section"

// The calendar teaser lists the next events relative to today, so this page re-renders
// at least hourly instead of being frozen at build time.
export const revalidate = 3600

export default function Home() {
  const t = useTranslations("HomeQuotes")
  return (
    <div className="home-cream overflow-x-hidden">
      <Header />
      <main className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 magnum-opus-gradient" />
        <HeroSection />
        <CalendarWidgetSection />
        <HealingsWidgetSection />
        <FactsSection />
        <PillarsSection />
        <FAQSection />

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
