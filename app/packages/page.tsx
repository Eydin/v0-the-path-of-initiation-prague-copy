"use client"

import {
  ModalityShell,
  ModalityHero,
  Panel,
  Lead,
  Body,
  WhatsAppButton,
  BookingBlock,
} from "@/components/modality"
import { ScrollReveal } from "@/components/scroll-reveal"

const packages: { name: string; includes: string; text: string }[] = [
  {
    name: "Rise & Shine",
    includes: "Consultation · Life Activation",
    text: "The gentle first step. A personal consultation followed by your Life Activation — the perfect way to begin if you are new to the Path.",
  },
  {
    name: "Nurturing Foundation",
    includes: "Life Activation · Aura Healing · Max Meditation",
    text: "Activate your blueprint, restore your energetic field, and learn a daily meditation practice to hold and grow the light.",
  },
  {
    name: "Total Potential Activation",
    includes: "Life Activation · Full Spirit Activation",
    text: "The complete activation journey — first the body and blueprint, then the soul and spirit, anchored fully into your being.",
  },
  {
    name: "The Metaphysical Architect",
    includes: "Sacred Geometry · Spiritual Intuition · Astral Travel",
    text: "For the curious seeker who wants the tools — read the language of creation, awaken your intuition, and learn to travel beyond the body.",
  },
]

export default function Packages() {
  const inquiry = "Hello Radu, I would like to learn more about the Packages Full of Light."
  return (
    <ModalityShell bg="plains-of-heaven.jpg" position="center 35%">
      <ModalityHero
        eyebrow="Curated Journeys"
        title="Packages Full of Light"
        subtitle="Thoughtfully combined sessions for a deeper journey"
        tagline="A path designed around where you are, and where you wish to go"
      />

      <Panel wide>
        <Lead>More than the sum of their parts</Lead>
        <Body>
          Each session and workshop on the Path stands on its own &mdash; but combined with intention, they carry you
          further than any single one could alone. These packages weave the modalities together into a coherent
          journey, so that each step prepares and amplifies the next. Below are starting points; the right path is
          always the one shaped around you.
        </Body>
      </Panel>

      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2">
              {packages.map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col rounded-lg border border-primary/20 bg-muted/60 p-8 backdrop-blur-sm"
                >
                  <h3 className="font-serif text-2xl tracking-wide text-primary">{p.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-foreground/70">
                    {p.includes}
                  </p>
                  <div className="mt-4 mb-6 h-px w-12 bg-primary/40" />
                  <p className="text-lg leading-relaxed text-foreground">{p.text}</p>
                  <div className="mt-auto pt-8">
                    <WhatsAppButton text={`Hello Radu, I am interested in the "${p.name}" package.`} label="Enquire" />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BookingBlock
        title="Let Us Design Your Path"
        inquiry={inquiry}
        note="Not sure which package is right? Reach out and we will help you choose — or build a journey around exactly what you need."
      />
    </ModalityShell>
  )
}
