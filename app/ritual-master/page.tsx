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

export default function RitualMaster() {
  const inquiry = "Hello Radu, I would like to learn more about the Ritual Master program."
  return (
    <ModalityShell bg="accolade-leighton.jpg" position="center 20%">
      <ModalityHero
        eyebrow="The Path of the Master Magician"
        title="Ritual Master"
        subtitle="True mastery of the Self"
        tagline="The warrior of light breaks every chain that holds them captive — and then helps others do the same."
      />

      <Panel>
        <Lead>The Ritual Master Program</Lead>
        <Body>
          Today we have access to more knowledge than humanity has ever had &mdash; yet so many look at life and feel
          lost, trapped in a box. This is because one vital component is missing: Spirit, who you truly are. From
          spirit comes hope, joy, and the power to rise above all negativity.
        </Body>
        <Body>
          There is a path that helps you regain your freedom. Through our beliefs and behaviour, we lock ourselves
          inside the prison we live in &mdash; we are both the slave and the oppressor. The Ritual Master path begins
          with the first force that must be addressed to regain freedom: yourself.
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label="Ask About the Path" />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>True Mastery of the Self</PanelHeading>
        <Body>
          A renowned Hermetic teaching, the Law of Correspondence, says:{" "}
          <em className="text-primary">
            &ldquo;As within, so without. As without, so within. As above, so below. As below, so above.&rdquo;
          </em>{" "}
          The Ritual Master program helps you gain control over your inner world, and then make the changes that
          create results in the outer world.
        </Body>
        <Body>
          For centuries, these principles have been the study of the master magician, who learns to focus and
          discipline their will and direct it toward fulfilling their needs and desires. The path combines{" "}
          <span className="font-semibold text-primary">will, love and discernment</span> &mdash; so that you can
          create good things and be a source of Light for yourself and those around you.
        </Body>
      </Panel>

      <QuoteBreaker
        image="sheba-solomon-temple.jpg"
        quote={
          <>
            &ldquo;Reality is that which cannot be changed by your <em className="text-primary">thoughts, feelings,
            or opinions</em>.&rdquo;
          </>
        }
        attribution="Sovereign Ipsissimus Dave Lanyon"
        caption="The Queen of Sheba before the Temple of Salomon · S. de Bray, 1657"
        position="center 22%"
      />

      <Panel>
        <PanelHeading>Are You Ready to Act?</PanelHeading>
        <Body>
          These are the steps to follow to train alongside the Ritual Masters. The path is demanding and it is
          taken in order &mdash; each step prepares you for the next.
        </Body>
        <BenefitList
          items={[
            { label: "1 · Empower Thyself:", text: "The first initiation — awaken your power and your divine purpose." },
            { label: "2 · Healers Academy:", text: "The second initiation — learn to heal and to serve others." },
            { label: "3 · Apply & be accepted:", text: "Apply for, and be accepted by, a Ritual Master teacher." },
            { label: "4 · Ritual Master Novice:", text: "Enrol in the Ritual Master Novice class at one of the international centers of the Modern Mystery School." },
          ]}
        />
        <Body>
          These teachings are essential for anyone who truly wants to change something in their life and is committed
          to their transformation &mdash; taking responsibility for their inner work and acting to create a purer,
          more authentic, and freer version of their Self.
        </Body>
      </Panel>

      <BookingBlock
        title="Begin Your Mastery"
        inquiry={inquiry}
        note="The Ritual Master path begins with Empower Thyself and the Healers Academy. Reach out and we will help you map the right next step for you."
      />
    </ModalityShell>
  )
}
