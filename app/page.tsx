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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FactsSection />
        <PillarsSection />
        <TeaserSection />
        <CTASection />
        <GuideSection />
        <ClassesSection />
        <EndingSection />
      </main>
      <Footer />
    </>
  )
}
