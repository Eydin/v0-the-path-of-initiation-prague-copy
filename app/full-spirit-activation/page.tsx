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

export default function FullSpiritActivation() {
  const inquiry = "Hello Radu, I would like to learn more about the Full Spirit Activation."
  return (
    <ModalityShell bg="albion-rose.jpg" position="center 30%">
      <ModalityHero
        eyebrow="The Mystery Tradition · Lineage of King Salomon"
        title="Full Spirit Activation"
        subtitle="Awaken and anchor the soul and spirit into the body"
        tagline="Open your soul to miracles"
      />

      <Panel>
        <Lead>Full Spirit Activation — received after the Life Activation</Lead>
        <Body>
          Beneath the veil of our physical existence lies a vast and complex world of consciousness that, once
          awakened and activated, can radically transform the way we perceive and experience reality. Full Spirit
          Activation is a powerful process that brings light and clarity to our entire being, opening us to deeper
          levels of awareness and reconnecting us with our divine essence.
        </Body>
        <Body>
          While the Life Activation connects you to your original blueprint and Higher Self, the Full Spirit
          Activation acts as a portal to your true essence &mdash; awakening and anchoring the soul and the spirit
          into the physical body, creating a powerful bridge between the divine and the human experience.
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label="Book Now" />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>A Practice That Works at the Level of the Soul</PanelHeading>
        <Body>
          Similar to the Life Activation, which works on the physical level, the Full Spirit Activation operates at
          the level of the soul &mdash; opening the gates to higher dimensions of consciousness and being. It works
          deeply within different areas of the brain and reconnects them to specific points in the physical body,
          which are then linked to the subtle energy bodies, amplifying the flow of spiritual energy throughout your
          entire system.
        </Body>
        <Body>
          In a more tangible sense, it unlocks the channels of consciousness within the body, revitalizing the
          nervous and sensory systems. This allows us to connect more deeply to our physical sensations &mdash; free
          from the emotional and mental blocks that may have limited us in the past &mdash; filling us with a radiant
          vitality and an overwhelming joy for life.
        </Body>
      </Panel>

      <QuoteBreaker
        image="angels-bouguereau.jpg"
        quote={
          <>
            &ldquo;You are meant to express <em className="text-primary">beauty and good</em>.&rdquo;
          </>
        }
        attribution="The teaching of the lineage"
        caption="Song of the Angels · W.-A. Bouguereau, 1881"
      />

      <Panel>
        <PanelHeading>A Process That Works on Multiple Aspects of Your Being</PanelHeading>
        <BenefitList
          items={[
            {
              label: "The Mind Region:",
              text: "This activation works across all levels of the mind, from our physical needs to the connection with the divine source of knowledge.",
            },
            {
              label: "The Will Center:",
              text: "Every aspect of the will center is explored and revitalized, from everyday decisions to deep spiritual choices.",
            },
            {
              label: "Intuition, Memory & Access Points:",
              text: "Intuitive channels and deep memory are opened and activated, unlocking the gateways to divine knowledge.",
            },
          ]}
        />
      </Panel>

      <Panel>
        <PanelHeading>Additional Procedures for Balancing &amp; Transformation</PanelHeading>
        <BenefitList
          items={[
            { label: "Chakra Awakening:", text: "Awakening and harmonizing the body's energy centers." },
            { label: "Tree of Life Awakening:", text: "Aligning you with the living map of creation within." },
            {
              label: "Purificado & Crystalis:",
              text: "A magical homeopathic remedy created to support the process and gentle detoxification.",
            },
          ]}
        />
        <Body>
          After such an intense session, it is recommended to allow yourself time to fully integrate the
          transformations. To maximise the benefits, complete the Life Activation first &mdash; ideally between three
          weeks and three months beforehand.
        </Body>
      </Panel>

      <BookingBlock
        slug="full-spirit-activation"
        title="Discover Your Potential to Be a Divine Being"
        investment="8500 CZK"
        duration="2 Hours"
        inquiry={inquiry}
      />
    </ModalityShell>
  )
}
