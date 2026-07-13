"use client"

import Image from "next/image"
import {
  ModalityShell,
  ModalityHero,
  Panel,
  PanelHeading,
  Body,
  BenefitList,
  BookingBlock,
  VideoEmbed,
} from "@/components/modality"

const STRIPE = "https://buy.stripe.com/cNi14gd9ZdAq5EVdkDg360i"

export default function EmpowerThyself() {
  const inquiry = "Hello Radu, I would like to learn more about the Empower Thyself Initiation."
  return (
    <ModalityShell bg="accolade-leighton.jpg" position="center 20%">
      <ModalityHero
        eyebrow="A Two-Day Initiation"
        title="The Empower Thyself Program"
        subtitle="Initiation into the Lineage of King Salomon"
      />

      {/* Invitation + key image */}
      <Panel wide>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-wide text-primary">
              If you could be like God — filled with love, harmony, and creative power — would you do it?
            </h3>
            <p className="text-lg leading-relaxed text-foreground">
              This initiation will expand the horizon of what you believe is possible. It awakens new potentials and
              challenges us to release old dogmas and paradigms.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Over the course of these two days, you will receive keys that unlock the potential within your mind to
              embody your divine nature. We all carry this potential—it is already within you. Now is the time to bring
              it to the surface and make it the focus of your life.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              You will learn how to move beyond the negative ego that stands in your way and receive practical tools to
              support you in this process. The initiation will accelerate your transformation, helping you experience
              results faster and enjoy the journey of becoming your true self.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              You will be supported by an ancient lineage that stands behind you.
              <br />
              Those who have walked this path before you are here to guide you with their wisdom and experience.
              <br />
              Through their dedication, these teachings have been preserved in their purest form—kept safe so that we may
              benefit from them today.
            </p>
            <p className="pt-2 font-serif text-xl font-semibold text-primary">Will you answer the call?</p>
            <a
              href={STRIPE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-3.5 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
            >
              Book Now →
            </a>
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-primary/20">
            <Image
              src="/images/Key.jpg"
              alt="A pair of hands handing out a magical key"
              fill
              sizes="(max-width: 768px) 90vw, 40rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Panel>

      {/* Letter */}
      <Panel>
        <p className="font-serif text-lg italic text-primary">Dear Seeker,</p>
        <p className="text-lg leading-relaxed text-foreground">
          I speak to you now not only as a spiritual guide in an ancient Lineage of Light—but also as an engineer. I
          know, at first glance these two paths may seem like completely different worlds. But both have revealed to me
          the same profound truth: <span className="font-semibold text-primary">there is a deeper design in everything that exists</span>.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          In engineering, we study structure, energy, and systems.
          <br />
          In this Sacred Lineage — passed down uninterrupted since the time of King Salomon — we study the structure of
          the soul, the flow of vital energy, and the systems that govern healing, purpose, and inner mastery.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          <span className="font-semibold text-primary">Empower Thyself</span> is not just a class. It is a precise,
          time-tested initiation into your own divine architecture. King Salomon gathered the wisest people and mystics
          of his time, testing every transformational tool to create a system that truly works—
          <em>
            for all people, across cultures and <span className="font-semibold text-primary">centuries</span>.
          </em>
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          This path does not ask you to believe blindly. It invites you to experience. To awaken the gifts encoded in
          your DNA. To release ancestral patterns that no longer serve you. To align your inner world with a higher
          intelligence—the divine plan of your soul.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          If you feel that life has a deeper architecture… If you've always known, somewhere inside, that you are here
          for something more—even if you haven't yet been able to name it… Then this step may be your next beginning.
        </p>
        <div className="mt-8 border-t border-primary/20 pt-8">
          <p className="text-lg leading-relaxed text-foreground">
            It would be an honor for me to guide you. From one seeker of truth to another, with clarity, structure, and
            soul.
          </p>
          <p className="mt-4 text-lg">
            <span className="font-semibold text-primary">Your guide in the Lineage of Light</span>
            <br />
            <span className="font-semibold text-primary">Radu Coman</span>
          </p>
        </div>
      </Panel>

      {/* Program origins */}
      <Panel wide>
        <PanelHeading>What is the Empower Thyself Program and where does it come from?</PanelHeading>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-primary/20">
            <Image
              src="/images/angelic-heavenly-presence-stockcake.webp"
              alt="Angelic Heavenly Presence"
              fill
              sizes="(max-width: 768px) 90vw, 40rem"
              className="object-cover"
            />
          </div>
          <div className="space-y-5">
            <Body>
              <span>
                <span className="font-semibold text-primary">Empower Thyself</span> is part of a living tradition of
                wisdom, healing, and inner evolution, founded over 3,000 years ago by King Salomon.
              </span>
            </Body>
            <Body>
              Driven by the desire to help people discover and fulfill their divine potential, Salomon gathered the
              wisest masters of his time — healers, doctors, sages, mystics, and spiritual seekers. Together, they tested
              and refined all known methods of transformation until they created a clear, profound, and practical system
              designed to work for anyone, regardless of culture or era.
            </Body>
            <Body>
              <span>
                <span className="font-semibold text-primary">What truly makes Empower Thyself special</span> is that
                it's not just a collection of another set of techniques or theories. It is part of a complete and
                coherent system, passed down continuously to this day — a trusted and validated framework that supports
                the awakening of consciousness, inner balance, and reconnection with your true self.
              </span>
            </Body>
            <p className="font-serif text-xl font-semibold text-primary">
              This system is still effective today and brings results in areas where modern science has not yet been
              able to.
            </p>
          </div>
        </div>
      </Panel>

      {/* What will you do */}
      <Panel>
        <PanelHeading>What will you do in the Empower Thyself program?</PanelHeading>
        <Body>
          This program is designed to help you realize that you have the power to create the life you truly desire. It
          empowers you to see where you might be holding yourself back and where you're settling for less than you
          deserve. But it doesn't stop there — this program also gives you the tools to change those parts of your life!
          After these two days, you'll be able to recognize the patterns and programs that shape your behavior,
          understand where they come from, and have the power to release them.
        </Body>
        <Body>
          You will open pathways through which you can access more energy, new knowledge and fresh insights, empowering
          you to create a new life that brings you complete fulfillment.
        </Body>
        <Body>
          This is a practical and interactive program, after which you will be confident that you understand exactly
          what you need to do next to continue your growth and transformation.
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <p className="mb-6 text-lg font-semibold leading-relaxed text-primary">
            You will gain clarity and structure in your understanding of spirit and human nature, as well as clear
            insight into experiences you may have already encountered.
          </p>
          <BenefitList
            items={[
              { text: "You will learn to recognize the unseen world, access it, and interact with it." },
              { text: "You will learn how to gather the power of your thoughts and use it to create good around you." },
              { text: "You will practice sacred rituals and participate in a sacred initiation ceremony." },
            ]}
          />
        </div>
      </Panel>

      {/* What makes it special */}
      <Panel>
        <PanelHeading>What makes this program special?</PanelHeading>
        <p className="text-center font-serif text-xl font-semibold leading-relaxed text-foreground">
          We don't just teach you theory. There are many teachers who can talk to you about spirituality. We offer you
          authentic, powerful tools and teach you how to use them in your life. We give you the key to unlock these
          powers within yourself!
        </p>
      </Panel>

      {/* Curriculum + video */}
      <Panel>
        <PanelHeading>What will you learn in this program?</PanelHeading>
        <VideoEmbed src="https://www.youtube.com/embed/6_TzH0U9XZ0" title="Empower Thyself Initiation Introduction" />
        <ol className="ml-2 list-inside list-decimal space-y-3 text-lg font-semibold text-foreground">
          <li>
            How to answer the question <em>"Who am I?"</em>
          </li>
          <li>What is an initiation, and why do we need it today?</li>
          <li>The role of King Salomon in this process</li>
          <li>The Human potential to be God</li>
          <li>The 12 Dimensions of the Earth and the 7 Spiritual Dimensions</li>
          <li>The Structure of the Hierarchy of Light</li>
          <li>Meditation and Brainwave Frequencies</li>
          <li>The Influence of the Ego on the True Self</li>
          <li>The Cycle of Human Processes</li>
          <li>The Energetic Structure of the Human Being</li>
          <li>Universal Kabbalah and the Tree of Life</li>
        </ol>
        <div className="border-t border-primary/20 pt-6">
          <Body>
            Throughout this program, you will receive teachings, practical exercises, and sacred rituals that you can use
            to elevate your life to the next level. All of these keys come from the lineage of King Salomon, passed down
            in an unbroken tradition for thousands of years.
          </Body>
        </div>
      </Panel>

      {/* Next steps */}
      <Panel>
        <PanelHeading>What do you need to do?</PanelHeading>
        <ol className="ml-2 list-inside list-decimal space-y-4 text-lg text-foreground">
          <li className="leading-relaxed">
            Reach out to us to discover whether this program is the right fit for you at this moment in your journey.
            <br />
            <span className="ml-5">We're here to support you with clarity and guidance, every step of the way.</span>
          </li>
          <li className="leading-relaxed">Receive a Life Activation session from one of our certified practitioners.</li>
          <li className="leading-relaxed">Make a deposit or pay the full amount to reserve your spot.</li>
          <li className="leading-relaxed">Attend the two-day class and participate in the initiation ceremony.</li>
          <li className="leading-relaxed">Start applying what you've learned and enjoy the results.</li>
        </ol>
      </Panel>

      {/* Recommendations */}
      <Panel>
        <PanelHeading>Recommendations</PanelHeading>
        <Body>
          <span>
            <span className="font-semibold text-primary">Empower Thyself</span> is not just a class. It is the beginning
            of a profound journey and a lasting connection.
          </span>
        </Body>
        <Body>
          This initiation opens a gateway to a new understanding of life, as well as a safe space you can return to
          whenever you need clarity, support, or guidance.
        </Body>
        <Body>
          We commit to supporting you not only throughout the program but also in the years ahead. Whether you have
          questions about applying the teachings in daily life, are going through a period of transformation, or simply
          feel ready to take the next step in your personal journey, we are here for you.
        </Body>
        <div className="border-t border-primary/20 pt-6">
          <Body>
            This relationship is built over time — with trust, respect, and a honest intention to support your growth,
            balance, and inner strength.
          </Body>
        </div>
      </Panel>

      <BookingBlock
        slug="empower-thyself"
        title="Discover Your Potential to Be a Divine Being!"
        investment="36.500 CZK"
        duration="2 Days"
        inquiry={inquiry}
        bookHref={STRIPE}
        note="Held in Prague, Czech Republic. After your deposit we will contact you to schedule your Life Activation and confirm your place."
      >
        <div className="mx-auto max-w-2xl space-y-3 text-foreground">
          <p className="leading-relaxed">
            Includes the 2 day training and a complimentary Life Activation session (valued at 8.500 CZK) to prepare your
            energy system and connect you to your divine blueprint before the Initiation.
          </p>
          <p className="font-semibold text-primary">Booking Process:</p>
          <p className="leading-relaxed">
            A 12.000 CZK deposit secures your place and allows us to schedule your Life Activation session.
          </p>
          <p className="leading-relaxed">
            The remaining 24.500 CZK is due before the 2-day training and Initiation begins.
          </p>
        </div>
      </BookingBlock>
    </ModalityShell>
  )
}
