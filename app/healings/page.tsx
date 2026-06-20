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

const activations: Healing[] = [
  {
    name: "Life Activation",
    tag: "Foundation",
    description: "The foundational session of the lineage — activates 22 of the 24 DNA strands and your divine blueprint.",
  },
  {
    name: "Full Spirit Activation",
    description: "Deepens your connection to the soul and higher self beyond the Life Activation.",
  },
  {
    name: "Galactic Activation",
    description: "Progressive activation of the Galactic and Divinity codes within your physical and spiritual DNA.",
  },
  {
    name: "11th Codon Reading",
    description: "Activates the 11th and 12th spiritual and physical DNA strands beyond the Life Activation.",
  },
]

const auraEnergy: Healing[] = [
  {
    name: "Sacred Geometry Aura Healing",
    description: "Clears, balances and seals the seven layers of the aura through the geometry of light.",
  },
  {
    name: "Negative Energy Removal",
    description: "Removes energetic blocks and negative patterns from your energy system.",
  },
  {
    name: "Emotional Cord Cutting",
    description: "Disconnects draining emotional cords so you stop losing energy to other people.",
  },
  {
    name: "Shamanic Aura Clearing",
    description: "Shamanic techniques to clear blockages and heavy energies from the auric field.",
  },
  {
    name: "Ensofic Ray Healing",
    description: "The brightest, most powerful ray of energy — realigns body, soul and spirit at the core.",
  },
  {
    name: "Crystal Healing",
    description: "Ancient lineage techniques working with crystals for healing, intuition and protection.",
  },
]

const sacredRites: Healing[] = [
  {
    name: "Isis Healing",
    description: "An ancient Egyptian ritual calling on Isis and the Ra family to release emotional burdens.",
  },
  {
    name: "Ra Protection Healing",
    description: "Draws on the Ray of Ra for deep spiritual protection and healing.",
  },
  {
    name: "Hands of Melchizedek",
    description: "Activates will and divine purpose through the hexagram and the energies of the Ra family.",
  },
  {
    name: "Healing with Essential Oils",
    description: "Sacred arts and rituals with essential oils, handed down for over three thousand years.",
  },
  {
    name: "House & Space Blessing",
    description: "Ancient blessings to cleanse and uplift the energy of your home or workspace.",
  },
]

const readings: Healing[] = [
  {
    name: "Purpose of Life Reading",
    description: "A reading to help you identify and align with your divine life purpose.",
  },
  {
    name: "Soul Retrieval",
    description: "Recovers and reintegrates lost fragments of the self into wholeness.",
  },
  {
    name: "Spark of Life — Distance Healing",
    description: "A remote healing that carries restorative energy to you across any distance.",
  },
]

const bodyWork: Healing[] = [
  {
    name: "Max Meditation System™",
    description: "A guided system blending ancient yogic technique with modern method to release stress and restore vitality.",
  },
  {
    name: "Laser Light Healing",
    description: "Light frequencies and reflexology applied along the meridian lines to restore flow.",
  },
  {
    name: "Golden Spiral Reflexology",
    description: "Sacred geometry of the golden spiral applied through reflexology to rebalance energy.",
  },
  {
    name: "Meridian Line Balancing",
    description: "Balances the flow of life-force (chi) along the body's meridian lines.",
  },
  {
    name: "Tree of Life Awakening",
    description: "Awakens your connection to the Tree of Life and expands consciousness.",
  },
  {
    name: "Chakra Awakening",
    description: "Awakens and harmonises the body's seven energy centres.",
  },
  {
    name: "Spiritual Drug Detox Healing",
    description: "Holistic support that clears the energetic imprints of substance use — alongside, not in place of, medical care.",
  },
]

export default function Healings() {
  const inquiry = "Hello Radu, I would like to inquire about the healing modalities."
  return (
    <ModalityShell bg="bethesda-bloch.jpg" position="center 25%">
      <ModalityHero
        eyebrow="In the Lineage of King Salomon"
        title="Healing Modalities"
        subtitle="Over twenty-five healings for body, mind and soul"
        tagline="Each session is offered one-to-one — reach out to inquire about any of them"
      />

      <Panel>
        <Lead>A living tradition of healing</Lead>
        <Body>
          The Modern Mystery School carries one of the oldest, most complete systems of healing on Earth — gathered by
          King Salomon and kept whole through an unbroken lineage. Below is the range of healings available in Prague.
          You do not need to know which one is right for you. Simply explore, and inquire about anything that calls to
          you — Radu will guide you from there.
        </Body>
        <Body>
          For the deeper, specialised work of the tradition, see the{" "}
          <Link href="/specialty-healings" className="text-primary underline transition-colors hover:text-gold-light">
            King Salomon specialty healings →
          </Link>
        </Body>
      </Panel>

      <HealingGroup
        title="Foundational Activations"
        blurb="Where most journeys begin — awakening the gifts already encoded within you."
        items={activations}
      />
      <HealingGroup
        title="Aura & Energy Healings"
        blurb="Clearing, repairing and protecting your energetic field."
        items={auraEnergy}
      />
      <HealingGroup
        title="Ancient & Sacred Rites"
        blurb="Healings drawn from Egypt, the Ra family and the oldest sacred traditions."
        items={sacredRites}
      />
      <HealingGroup
        title="Readings & Guidance"
        blurb="Insight into your purpose, your soul and your path."
        items={readings}
      />
      <HealingGroup
        title="Body, Meridian & Meditation"
        blurb="Restoring flow, balance and stillness through body and breath."
        items={bodyWork}
      />

      {/* inquire CTA */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="rounded-lg border border-primary/20 bg-muted/60 p-8 text-center backdrop-blur-sm md:p-12">
              <h2 className="mb-8 font-serif text-3xl tracking-wide text-primary md:text-4xl">
                Begin Your Healing
              </h2>
              <div className="mx-auto mb-8 h-px w-16 bg-border" />
              <p className="mb-10 text-lg text-foreground">
                Tell Radu a little about where you are right now, and he will help you choose the healing that serves
                you best.
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
