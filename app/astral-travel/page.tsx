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

export default function AstralTravel() {
  const inquiry = "Hello Radu, I would like to learn more about the Astral Travel workshop."
  return (
    <ModalityShell bg="starry-rhone-gogh.jpg" position="center 40%">
      <ModalityHero
        eyebrow="A Workshop of the Mystery School"
        title="Astral Travel"
        subtitle="The science of travelling beyond the physical body"
        tagline="Explore the higher planes — safely, consciously, and at will"
      />

      <Panel>
        <Lead>The art and science kept by the mystery schools for millennia</Lead>
        <Body>
          We are far more than our physical body. Within the teachings of the Modern Mystery School, astral travel is
          the conscious, deliberate projection of awareness beyond the physical &mdash; a discipline studied and
          refined across thousands of years. Far from a dream or accident, it is a skill that can be learned, practised
          and trusted.
        </Body>
        <Body>
          In this workshop you are given the keys to leave the body safely and return with clarity &mdash; to explore
          the subtle realms, meet your guides, and gain a perspective on your life that the physical senses alone can
          never reach.
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label="Reserve Your Place" />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>What You Will Learn</PanelHeading>
        <BenefitList
          items={[
            { label: "The map of the planes:", text: "Understand the structure of the subtle worlds and where consciousness travels." },
            { label: "Safe projection:", text: "Proven techniques to leave and re-enter the body consciously, with protection at every step." },
            { label: "Navigation & guidance:", text: "How to move with intention, meet your guides, and ask the right questions." },
            { label: "Grounding & integration:", text: "Return clearly and bring the wisdom of your journeys into daily life." },
          ]}
        />
      </Panel>

      <BookingBlock
        slug="astral-travel"
        title="Step Beyond the Body"
        duration="Workshop"
        inquiry={inquiry}
        note="Workshops are scheduled in small groups. Reach out for the next available date in Prague."
      />
    </ModalityShell>
  )
}
