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

export default function StressManagement() {
  const inquiry = "Hello Radu, I would like to learn more about Stress Rescue / Stress Management."
  return (
    <ModalityShell bg="monk-sea-friedrich.jpg" position="center 35%">
      <ModalityHero
        eyebrow="For Individuals, Teams & Organisations"
        title="Stress Rescue"
        subtitle="Practical tools to meet pressure with calm"
        tagline="Ancient wisdom, made simple for modern life"
      />

      <Panel>
        <Lead>Stress is not the enemy — losing your tools to handle it is</Lead>
        <Body>
          Modern life moves faster than our nervous systems were built for. Stress Rescue is a practical, grounded
          program that gives you a set of reliable tools &mdash; drawn from the teachings of the mystery school and
          translated into everyday language &mdash; to steady your mind, settle your body, and respond to pressure
          instead of reacting to it.
        </Body>
        <Body>
          It can be received one-to-one, or delivered to a whole team. For leaders and organisations, it is a clear,
          down-to-earth way to bring more focus, resilience and wellbeing into the working day.
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label="Enquire Now" />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>What You Take Away</PanelHeading>
        <BenefitList
          items={[
            { label: "Tools that work in the moment:", text: "Simple techniques to calm the body and mind when pressure spikes." },
            { label: "A steadier baseline:", text: "Daily practices that lower your overall stress over time." },
            { label: "Clarity & focus:", text: "Think clearly and decide well, even when the day is demanding." },
            { label: "For teams:", text: "A shared language and shared tools that make a whole group more resilient." },
          ]}
        />
      </Panel>

      <BookingBlock
        title="Bring Calm Back Into the Day"
        inquiry={inquiry}
        note="Available for individuals, leadership teams and organisations. Reach out to discuss a session or a programme for your team."
      />
    </ModalityShell>
  )
}
