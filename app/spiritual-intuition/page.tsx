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

export default function SpiritualIntuition() {
  const inquiry = "Hello Radu, I would like to learn more about the Spiritual Intuition workshop."
  return (
    <ModalityShell bg="wanderer-friedrich.jpg" position="center 22%">
      <ModalityHero
        eyebrow="A Workshop of the Mystery School"
        title="Spiritual Intuition"
        subtitle="Beyond the five senses"
        tagline="Awaken the perception you were always meant to have"
      />

      <Panel>
        <Lead>Your intuition is not a gift for the few — it is a sense for everyone</Lead>
        <Body>
          We are taught to trust only what we can see, hear and touch. Yet every one of us carries a quieter set of
          senses &mdash; the ability to perceive energy, to know without being told, to feel the truth of a person or a
          situation. These abilities are natural, and like any sense, they grow stronger with practice.
        </Body>
        <Body>
          Through simple, practical exercises, this workshop helps you recognise and develop your own intuitive and
          extrasensory perception &mdash; and, just as importantly, to tell the difference between intuition and the
          noise of the thinking mind.
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label="Reserve Your Place" />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>What You Will Learn</PanelHeading>
        <BenefitList
          items={[
            { label: "Sense energy:", text: "Practical exercises to feel and read the subtle energy around you." },
            { label: "Trust the signal:", text: "Distinguish genuine intuition from fear, projection and mental chatter." },
            { label: "Strengthen perception:", text: "Develop your inner sight, hearing and knowing through daily practice." },
            { label: "Apply it in life:", text: "Use your intuition for clearer decisions, relationships and direction." },
          ]}
        />
      </Panel>

      <BookingBlock
        slug="spiritual-intuition"
        title="Trust What You Already Know"
        duration="Workshop"
        inquiry={inquiry}
        note="Workshops run in small groups. Reach out for the next scheduled date in Prague."
      />
    </ModalityShell>
  )
}
