import { useTranslations } from "next-intl"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CalendarWidgetSection } from "@/components/calendar-widget-section"
import { LookingForSection } from "@/components/looking-for-section"
import { WelcomeStrip } from "@/components/welcome-strip"
import { HealingsWidgetSection } from "@/components/healings-widget-section"
import { FactsSection } from "@/components/facts-section"
import { PillarsSection } from "@/components/pillars-section"
import { TeaserSection } from "@/components/teaser-section"
import { CTASection } from "@/components/cta-section"
import { GuideSection } from "@/components/guide-section"
import { InitiateInvite } from "@/components/initiate-invite"
import { FirstStepsSection } from "@/components/first-steps-section"
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
        {/* "maybe I need this": tap how you feel, see where to start */}
        <LookingForSection />
        {/* smiling faces early: who will welcome you */}
        <WelcomeStrip />
        <HealingsWidgetSection />
        <FirstStepsSection />
        <InitiateInvite />
        <GuideSection />
        {/* answer the doubts, then offer the booking while they're answered */}
        <FAQSection />
        <CTASection />
        <FactsSection />
        <PillarsSection />
        <TeaserSection />

        <QuoteBreaker
          image="ancient-versus-eternal-sounion.jpg"
          tone="dark"
          keepSides
          quote={
            <>
              &ldquo;{t("quote1.text")} <em className="text-primary">{t("quote1.emphasis")}</em>.&rdquo;
            </>
          }
          attribution={t("quote1.attribution")}
          caption={t("quote1.caption")}
          position="center 62%"
        />

        <HallOfInitiates />

        <ClassesSection />

        <NewsletterSection />

        <EndingSection />
      </main>
      <Footer />
    </div>
  )
}
