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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FactsSection />
        <PillarsSection />

        <QuoteBreaker
          image="ascent-blessed-bosch.jpg"
          quote={
            <>
              &ldquo;Know thyself, and thou shalt know <em className="text-primary">the universe and the gods</em>.&rdquo;
            </>
          }
          attribution="Inscribed at the Temple of Apollo · Delphi"
          caption="Ascent of the Blessed · H. Bosch, c. 1505"
          position="center 42%"
        />

        <HallOfInitiates />

        <TeaserSection />
        <CTASection />
        <GuideSection />
        <ClassesSection />

        <QuoteBreaker
          image="sheba-solomon-temple.jpg"
          quote={
            <>
              &ldquo;What you seek <em className="text-primary">is seeking you</em>.&rdquo;
            </>
          }
          attribution="Rumi · 13th Century"
          caption="The Queen of Sheba before the Temple of Salomon · S. de Bray, 1657"
          position="center 22%"
        />

        <EndingSection />
      </main>
      <Footer />
    </>
  )
}
