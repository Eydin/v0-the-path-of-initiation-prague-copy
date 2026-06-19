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

export default function SacredGeometry() {
  const inquiry = "Hello Radu, I would like to learn more about the Sacred Geometry workshop."
  return (
    <ModalityShell bg="flammarion.jpg" position="center 30%">
      <ModalityHero
        eyebrow="A Workshop of the Mystery School"
        title="Sacred Geometry"
        subtitle="The language in which creation is written"
        tagline="Learn to work with the building blocks of the universe"
      />

      <Panel>
        <Lead>The hidden architecture of all things</Lead>
        <Body>
          From the spiral of a shell to the orbit of the planets, the same patterns repeat at every scale of
          existence. Sacred geometry is the study of those patterns &mdash; the forms through which spirit takes shape
          in matter. For the initiates of old, it was nothing less than the language of the Divine.
        </Body>
        <Body>
          In this workshop you learn to recognise these forms, to work with them consciously, and to use the primary
          keys of sacred geometry to create clear, protected and sacred space &mdash; in your home, your practice, and
          within yourself.
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label="Reserve Your Place" />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>What You Will Learn</PanelHeading>
        <BenefitList
          items={[
            { label: "The primary forms:", text: "The foundational shapes of creation and the qualities each one carries." },
            { label: "Creating sacred space:", text: "Use the keys of sacred geometry to clear, protect and consecrate a space." },
            { label: "Geometry as a tool:", text: "Apply these forms for focus, meditation, manifestation and healing." },
            { label: "Living the pattern:", text: "See the order beneath everyday life and align yourself with it." },
          ]}
        />
      </Panel>

      <BookingBlock
        slug="sacred-geometry"
        title="Read the Language of Creation"
        duration="Workshop"
        inquiry={inquiry}
        note="Workshops run in small groups. Reach out for the next scheduled date in Prague."
      />
    </ModalityShell>
  )
}
