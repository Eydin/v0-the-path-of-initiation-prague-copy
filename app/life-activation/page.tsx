"use client"

import Link from "next/link"
import {
  ModalityShell,
  ModalityHero,
  Panel,
  PanelHeading,
  Lead,
  Body,
  BenefitList,
  BookingBlock,
  WhatsAppButton,
  VideoEmbed,
} from "@/components/modality"

const STRIPE = "https://buy.stripe.com/14AdR2gmbeEuaZf2FZg360j"

export default function LifeActivation() {
  const inquiry = "Hello Radu, I would like to learn more about the Life Activation."
  return (
    <ModalityShell bg="albion-rose.jpg" position="center 18%">
      <ModalityHero
        eyebrow="The Mystery Tradition · Lineage of King Salomon"
        title="Life Activation"
        subtitle="Activate the innate gifts that reside in your DNA"
        tagline="Clear 5–7 generations of ancestral trauma and step into your highest potential"
      />

      {/* Introduction */}
      <Panel>
        <Lead>Life Activation – The Mystery Tradition, Lineage of King Salomon</Lead>
        <Body>
          Life Activation is a profound experience offered through the Modern Mystery School tradition, designed to
          awaken the divine potential within every human being. This powerful session activates 22 of the 24 DNA
          strands (11 physical and 11 spiritual), opening the doorway to a deeper connection with your Divine Self. By
          doing so, it enhances your ability to receive, circulate, and hold more Light—supporting healing, clarity, and
          spiritual growth in the physical body.
        </Body>
        <div className="border-t border-primary/20 pt-6 text-center">
          <a
            href={STRIPE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
          >
            Book Now →
          </a>
        </div>
      </Panel>

      {/* Benefits */}
      <Panel>
        <PanelHeading>The Benefits of Life Activation</PanelHeading>
        <BenefitList
          items={[
            {
              label: "Deep Connection with the Divine Self:",
              text: "Life Activation facilitates a deeper connection with your Divine Self, allowing the manifestation of your inner resources, talents, and potential.",
            },
            {
              label: "Energy and Clarity:",
              text: "The experience brings an infusion of energy and clarity into all areas of life, supporting your ability to navigate daily life with confidence.",
            },
            {
              label: "Manifestation of Talents and Abilities:",
              text: "By awakening the inner potential, participants become more aware and capable of expressing their unique talents and abilities more fully.",
            },
            {
              label: "Body Transformation and Karma Release:",
              text: "Life Activation initiates a process of transformation in the body, helping to release emotional and mental patterns stored in the DNA, known as “karma.”",
            },
            {
              label: "Expanded Use of Brain Capacity:",
              text: "Through this experience, the ability to tap into more of the brain's potential is enhanced, bringing to light previously overlooked or dormant capabilities.",
            },
          ]}
        />
      </Panel>

      {/* Additional procedures */}
      <Panel>
        <PanelHeading>Additional Procedures for Balancing and Transformation</PanelHeading>
        <Lead>
          In addition to the activation itself, the session includes supplementary procedures designed to balance and
          stimulate the body in alignment with the newly activated information from the DNA.
        </Lead>
        <BenefitList
          items={[
            {
              label: "Emotional Blockage Removal:",
              text: "Focused on clearing potential emotional blockages from the crown chakra, this process creates a freer flow of energy.",
            },
            {
              label: "Central Core Balancing:",
              text: "This process works to harmonize the energies flowing through the central core, supporting the alignment and balance of the entire energetic system.",
            },
            {
              label: "Opening of the 16 Lotus Petals:",
              text: "This action enhances the connection with the Elemental energies—Earth, Water, Air, and Fire—amplifying your interaction with them.",
            },
            {
              label: "Balancing of Elemental and Magnetic Energy Lines:",
              text: "This process focuses on balancing and harmonizing the energy lines that run through the body, supporting a smooth and aligned energy flow.",
            },
            {
              label: "Chakra Balancing:",
              text: "This process aims to bring harmony and alignment to the chakra system—the body's energy centers.",
            },
            {
              label: "Removal of Burnt Etheric Crystals from the Body:",
              text: "This procedure is intended to cleanse and revitalize the energetic body.",
            },
            {
              label: "Brief Reading from Your Newly Activated DNA:",
              text: "A short exploration of the subconscious layers, providing you with deeper self-understanding.",
            },
            {
              label: "Homeopathic Remedy:",
              text: "A homeopathic remedy created in the school's alchemy laboratory, designed to detoxify, support, and ease the physical and energetic changes associated with this unique experience.",
            },
          ]}
        />
      </Panel>

      {/* Explore the higher dimensions + video */}
      <Panel>
        <VideoEmbed src="https://www.youtube.com/embed/SYauL1N3ppI" title="About the Life Activation" />
        <PanelHeading>Explore the Higher Dimensions</PanelHeading>
        <Body>
          DNA Activation is a return to the self—a session that not only brings light into the darkness of life but also
          opens doors to unlimited potential.
        </Body>
        <Body>
          At the Modern Mystery School, this activation serves as a gateway to spiritual evolution and the discovery of
          the true Self in a deep and transformative way. It is a step toward self-knowledge and an opportunity to live
          life with greater energy, clarity, and awareness.
        </Body>
        <div className="flex justify-center border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label="Do you have any questions?" />
        </div>
      </Panel>

      {/* Certifications */}
      <Panel wide>
        <div className="grid items-center gap-8 md:grid-cols-3">
          <Link href="/certifications" className="transition hover:opacity-80">
            <img
              src="/images/radu-lap-old.webp"
              alt="Radu — Life Activation certification"
              loading="lazy"
              className="h-auto w-full rounded border border-primary/20"
            />
          </Link>
          <div className="space-y-4 text-center">
            <h3 className="font-serif text-2xl tracking-wide text-primary">Life Activation – DNA Activation</h3>
            <Body>
              <span>
                This is a groundbreaking method for <i>inner transformation and unlocking your personal potential</i>. It
                combines ancient wisdom with modern energies to help you grow and evolve. This technique is offered by
                the Modern Mystery School through Certified Life Activation Practitioners. It serves as a{" "}
                <span className="font-semibold text-foreground">
                  gateway to higher consciousness and spiritual expansion.
                </span>
              </span>
            </Body>
          </div>
          <Link href="/certifications" className="transition hover:opacity-80">
            <img
              src="/images/radu-lap.jpg"
              alt="Radu — Life Activation certification"
              loading="lazy"
              className="h-auto w-full rounded border border-primary/20"
            />
          </Link>
        </div>
      </Panel>

      <BookingBlock
        slug="life-activation"
        title="Meet Your Authentic Power and Higher Self!"
        investment="8.500 CZK"
        duration="2 Hours"
        inquiry={inquiry}
        bookHref={STRIPE}
        note="After the payment is completed, we will contact you to finalize the appointment."
      />
    </ModalityShell>
  )
}
