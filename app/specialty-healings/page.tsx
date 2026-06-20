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

const featured: Healing[] = [
  {
    name: "Hermetic Rebalancing",
    tag: "Specialty",
    description:
      "Realigns body, mind and spirit through the Hermetic laws, restoring deep inner equilibrium where life has pulled you out of balance.",
  },
  {
    name: "Etheric Reconstruction",
    tag: "Specialty",
    description:
      "Rebuilds and repairs the etheric body across its layers, mending energetic damage held over long periods of time.",
  },
  {
    name: "Celestial Code Etheric Reconstruction",
    tag: "Specialty",
    description:
      "Restores the etheric structure through celestial geometric codes — a deeper reconstruction of the subtle body.",
  },
  {
    name: "KSHM — Auric Region",
    tag: "Specialty",
    description:
      "Focused King Salomon work within the auric field, clearing and rebuilding the region that surrounds and protects you.",
  },
]

const kshmSessions: Healing[] = [
  {
    name: "Tree of Life Healing",
    description: "Foundational King Salomon energy work along the sephirot of the Tree of Life.",
  },
  {
    name: "Seal of Solomon Healing",
    description: "Calls on the balancing, protective power of King Salomon's sacred seal.",
  },
  {
    name: "Tone Healing",
    description: "Uses sacred vibration and tone to restore harmony within the energy body.",
  },
  {
    name: "Etheric Body Healing",
    description: "Tends the subtle etheric body and its structures directly.",
  },
  {
    name: "Mental Body Healing",
    description: "Clears and rebalances thought-patterns held within the mental body.",
  },
  {
    name: "Unified Chakra Healing",
    description: "Weaves the seven centres into one coherent, unified field.",
  },
  {
    name: "Starseed Healing",
    description: "Reconnects you with your cosmic origins and star lineage.",
  },
  {
    name: "Exorcism Healing",
    description: "Removes intrusive or foreign energies under the protection of the lineage.",
  },
  {
    name: "Kabbalistic & Enochian Healing",
    description: "Angelic and Kabbalistic healing drawn from the Tree of Life and the Enochian keys.",
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
        title="Featured Specialty Healings"
        blurb="The healings most often asked for — deep reconstruction and rebalancing of the subtle bodies."
        items={featured}
      />

      <HealingGroup
        title="King Salomon Healing Sessions"
        blurb="Core healings of the modality. Mastering all of its branches takes many years of dedicated training."
        items={kshmSessions}
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
