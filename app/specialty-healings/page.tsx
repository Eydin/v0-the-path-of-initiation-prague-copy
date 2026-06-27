"use client"

import Link from "next/link"
import {
  ModalityShell,
  ModalityHero,
  Panel,
  Lead,
  Body,
  WhatsAppButton,
  EmailButton,
} from "@/components/modality"
import { HealingGroup, type Healing } from "@/components/healing-grid"
import { ScrollReveal } from "@/components/scroll-reveal"

// King Salomon Healing Modality sessions currently offered.
const kshmSessions: Healing[] = [
  {
    name: "Starseed Healing",
    description: "Reconnects you with your cosmic origins and star lineage.",
  },
  {
    name: "Unified Chakra Healing",
    description: "Weaves the seven centres into one coherent, unified field.",
  },
]

// DRAFT descriptions — Paul to review/correct (not in the MMS Knowledge Base).
const specialtySessions: Healing[] = [
  {
    name: "Fire Soul Infusion",
    description: "Reignites the inner fire of the soul, restoring passion, drive and life-force where you feel depleted.",
  },
  {
    name: "Core Will Infusion",
    description: "Strengthens your core will — the inner seat of personal power, resolve and direction.",
  },
  {
    name: "Archangel Michael Interstellar Tube of Light",
    description: "Calls on Archangel Michael to surround you in a column of protective light, clearing and shielding your energy field.",
  },
  {
    name: "Compassion Summoning",
    description: "Opens the heart and summons divine compassion to soften and heal emotional wounds.",
  },
  {
    name: "Space Realignment",
    description: "Realigns and harmonises the energy of a home or space, restoring sacred order and flow.",
  },
  {
    name: "Baby Blessing",
    description: "A sacred blessing to welcome a newborn — calling in protection, light and a blessed beginning.",
  },
  {
    name: "Chronos Reading",
    description: "A reading that works with the energies of time to bring clarity on your past, present and path ahead.",
  },
]

export default function SpecialtyHealings() {
  const inquiry = "Hello Radu, I would like to learn more about the specialty healings."
  return (
    <ModalityShell bg="sheba-solomon-temple.jpg" position="center 30%">
      <ModalityHero
        eyebrow="The King Salomon Healing Modality"
        title="Specialty Healings"
        subtitle="The deep healings of a 3,500-year lineage"
        tagline="For those ready to go beyond the foundational sessions"
      />

      <Panel>
        <Lead>What is the King Salomon Healing Modality?</Lead>
        <Body>
          Over three thousand years ago, King Salomon gathered the greatest healers, shamans, prophets and alchemists
          of the world and brought their wisdom into one living system of healing. That system — the King Salomon
          Healing Modality — has been kept and passed down, teacher to student, in an unbroken lineage ever since.
        </Body>
        <Body>
          These are not foundational sessions. They are the deeper, specialised healings of the tradition — precise
          work on the etheric, mental and auric bodies for those who are ready to go further. Each is offered
          one-to-one. If you feel drawn to any of them, reach out and we will find the right starting point for you.
        </Body>
      </Panel>

      <HealingGroup
        title="King Salomon Healing Sessions"
        blurb="Core healings of the modality. Mastering all of its branches takes many years of dedicated training."
        items={kshmSessions}
      />

      <HealingGroup
        title="Specialty Sessions"
        blurb="Deeper, specialised work of the tradition — each offered one-to-one."
        items={specialtySessions}
      />

      {/* link to the wider menu */}
      <section className="relative py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <p className="text-muted-foreground">
              Looking for the foundational sessions and the full range of healings?{" "}
              <Link href="/healings" className="text-primary underline transition-colors hover:text-gold-light">
                See all healing modalities →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* inquire CTA */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="rounded-lg border border-primary/20 bg-muted/60 p-8 text-center backdrop-blur-sm md:p-12">
              <h2 className="mb-8 font-serif text-3xl tracking-wide text-primary md:text-4xl">
                Not Sure Which Healing You Need?
              </h2>
              <div className="mx-auto mb-8 h-px w-16 bg-border" />
              <p className="mb-10 text-lg text-foreground">
                Reach out and Radu will listen, then guide you to the healing that truly serves you right now.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <EmailButton subject={inquiry} />
                <WhatsAppButton text={inquiry} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ModalityShell>
  )
}
