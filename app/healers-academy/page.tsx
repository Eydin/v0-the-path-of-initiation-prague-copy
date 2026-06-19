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

export default function HealersAcademy() {
  const inquiry = "Hello Radu, I would like to learn more about the Healers Academy."
  return (
    <ModalityShell bg="bethesda-bloch.jpg" position="center 25%">
      <ModalityHero
        eyebrow="The Second Level of Initiation"
        title="Healers Academy"
        subtitle="Become a certified healer in the lineage of King Salomon"
        tagline="Step fully into a life of service and light"
      />

      <Panel>
        <Lead>An intensive program &amp; initiation — open to graduates of Empower Thyself</Lead>
        <Body>
          The Healers Academy is the second level of initiation on the Path. After Empower Thyself awakens your own
          power, the Healers Academy turns that power outward &mdash; training you to hold sacred space and to bring
          true healing to others. It is the threshold where a student of the mysteries becomes a practitioner of them.
        </Body>
        <Body>
          Over an intensive program of study and practice, you are initiated and certified to offer the foundational
          modalities of the Modern Mystery School &mdash; the same work that changed your own life, now placed in your
          hands to give.
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label="Apply Now" />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>What You Will Learn</PanelHeading>
        <BenefitList
          items={[
            { label: "Perform the Life Activation:", text: "Learn to deliver the full 22-strand DNA Life Activation for others." },
            { label: "Lead Max Meditation™ groups:", text: "Guide the signature group meditation that opens this path for so many." },
            { label: "Read & heal the aura:", text: "Learn to find and fill the holes in a person's aura, restoring wholeness and protection." },
            { label: "Empower your light body:", text: "Nourish and care for your own light body so it can hold up to a hundred times more power." },
            { label: "Sacred ceremony & ethics:", text: "Hold space with integrity, discernment and the responsibility of a true healer." },
          ]}
        />
      </Panel>

      <QuoteBreaker
        image="ascent-blessed-bosch.jpg"
        quote={
          <>
            &ldquo;Know thyself, and thou shalt know <em className="text-primary">the universe and the gods</em>.&rdquo;
          </>
        }
        attribution="Inscribed at the Temple of Apollo · Delphi"
        caption="Ascent of the Blessed · H. Bosch, c. 1505"
        position="center 42%"
      />

      <Panel>
        <PanelHeading>Who It Is For</PanelHeading>
        <Body>
          The Healers Academy is for those who have felt the call to serve &mdash; who, having walked through their own
          initiation, wish to carry the light further. No prior healing background is required, only sincerity, a
          completed Empower Thyself initiation, and a readiness to commit to your own continued growth.
        </Body>
        <Body>
          Graduates join a worldwide community of certified healers and are eligible to continue toward the Ritual
          Master path and the deeper teachings of the school.
        </Body>
      </Panel>

      <BookingBlock
        slug="healers-academy"
        title="Answer the Call to Serve"
        duration="Intensive Program & Initiation"
        inquiry={inquiry}
        note="Dates are scheduled with each group. Reach out and we will share the next available program and guide you through enrolment."
      />
    </ModalityShell>
  )
}
