"use client"

import {
  ModalityShell,
  ModalityHero,
  Panel,
  PanelHeading,
  Lead,
  Body,
  BenefitList,
  WhatsAppButton,
  BookingBlock,
} from "@/components/modality"
import { QuoteBreaker } from "@/components/quote-breaker"

export default function SevenMysterySchools() {
  const inquiry = "Hello Radu, I would like to learn more about the 7 Mystery Schools workshop."
  return (
    <ModalityShell bg="temple-pylon-karnak.jpg" position="center 30%">
      <ModalityHero
        eyebrow="A Workshop of the Mystery School"
        title="The 7 Mystery Schools"
        subtitle="The seven great streams of ancient wisdom"
        tagline="Drink from the source traditions that shaped humanity"
      />

      <Panel>
        <Lead>Seven traditions, one current of light</Lead>
        <Body>
          Throughout history, the sacred wisdom of humanity has been preserved and passed down through seven great
          mystery school traditions &mdash; each rooted in a different culture and place, yet each carrying a facet of
          the same eternal light. Together they form the lineage that the Modern Mystery School carries today.
        </Body>
        <Body>
          In this workshop you journey through all seven &mdash; learning their history, their gifts, and their place
          in the great chain of wisdom &mdash; and, through meditation and ceremony, you connect directly with the
          living energy of each one.
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label="Reserve Your Place" />
        </div>
      </Panel>

      <QuoteBreaker
        image="ancient-of-days-blake.jpg"
        quote={
          <>
            &ldquo;What you seek <em className="text-primary">is seeking you</em>.&rdquo;
          </>
        }
        attribution="Rumi · 13th Century"
        caption="The Ancient of Days · W. Blake, 1794"
        position="center 16%"
      />

      <Panel>
        <PanelHeading>What You Will Gain</PanelHeading>
        <BenefitList
          items={[
            { label: "The full lineage:", text: "Understand the seven mystery school traditions and how they connect through time." },
            { label: "Direct connection:", text: "Meet the energy of each tradition through guided meditation and ceremony." },
            { label: "Your place in the chain:", text: "See where your own path fits within this vast, living current of wisdom." },
            { label: "A deeper context:", text: "Ground your practice in the history and roots of the work you are doing." },
          ]}
        />
      </Panel>

      <BookingBlock
        title="Walk Through the Seven Gates"
        duration="Workshop"
        inquiry={inquiry}
        note="Workshops run in small groups. Reach out for the next scheduled date in Prague."
      />
    </ModalityShell>
  )
}
