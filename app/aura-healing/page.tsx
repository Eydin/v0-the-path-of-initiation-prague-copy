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

export default function AuraHealing() {
  const inquiry = "Hello Radu, I would like to learn more about the Sacred Geometry Aura Healing."
  return (
    <ModalityShell bg="ancient-of-days-blake.jpg" position="center 25%">
      <ModalityHero
        eyebrow="A Healing of the Mystery School"
        title="Sacred Geometry Aura Healing"
        subtitle="Restore and protect your energetic field"
        tagline="Clear, balance and seal the seven layers of the aura"
      />

      <Panel>
        <Lead>Healing that works through the geometry of light</Lead>
        <Body>
          Your aura is the energetic field that surrounds and protects you &mdash; and over time it can be drained,
          torn or clouded by stress, grief and the demands of daily life. The Sacred Geometry Aura Healing uses the
          ordered patterns of creation to repair that field, restoring its strength, clarity and natural protection.
        </Body>
        <Body>
          Working across the seven layers of the aura, this gentle session releases what no longer serves you,
          balances the energies of body and mind, and re-establishes a clean, whole and radiant field around you.
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label="Book a Session" />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>The Benefits</PanelHeading>
        <BenefitList
          items={[
            { label: "Repair & seal:", text: "Mend tears and fill the gaps in the aura so your energy stops leaking away." },
            { label: "Balance the seven layers:", text: "Harmonise each level of the auric field with the geometry of light." },
            { label: "Release & lighten:", text: "Clear stagnant and foreign energies, leaving you calm and clear." },
            { label: "Protection & vitality:", text: "Re-establish a strong, whole field that supports your wellbeing day to day." },
          ]}
        />
      </Panel>

      <BookingBlock
        slug="aura-healing"
        title="Restore Your Light"
        duration="Approx. 1 Hour"
        inquiry={inquiry}
        note="After you reach out, we will contact you personally to finalise your appointment."
      />
    </ModalityShell>
  )
}
