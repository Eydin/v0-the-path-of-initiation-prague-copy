"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function EmpowerThyself() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Header */}
        <header className="relative pt-24 lg:pt-32 pb-4 lg:pb-4">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground mb-4">
                  The Empower Thyself Program
                </h1>
                <h2 className="font-serif text-2xl tracking-wide text-muted-foreground mb-12">
                  Initiation into the Lineage of King Salomon
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-muted border border-border/40 p-8 rounded-lg mb-12"
                >
                  <h3 className="text-2xl font-serif tracking-wide text-foreground mb-6">
                    If you could be like God — filled with love, harmony, and creative power — would you say "yes"?
                  </h3>
                  <div className="space-y-4 text-left text-lg text-muted-foreground">
                    <p>This initiation will expand the horizon of what you believe is possible. It awakens new potentials and challenges us to release old dogmas and paradigms.</p>
                    <p>Over the course of these two days, you will receive keys that unlock the potential within your mind to embody your divine nature. We all carry this potential—it is already within you. Now is the time to bring it to the surface and make it the focus of your life.</p>
                    <p>You will learn how to move beyond the negative ego that stands in your way and receive practical tools to support you in this process. The initiation will accelerate your transformation, helping you experience results faster and enjoy the journey of becoming your true self.</p>
                    <p>You will be supported by an ancient lineage that stands behind you.<br/>Those who have walked this path before you are here to guide you with their wisdom and experience.<br/>Through their dedication, these teachings have been preserved in their purest form—kept safe so that we may benefit from them today.</p>
                    <p className="font-semibold text-xl pt-4 text-foreground">Will you answer the call?</p>
                    <a href="https://buy.stripe.com/28E3co1rhgMC8R70xRg3606" className="inline-block mt-4 px-8 py-3 bg-primary text-primary-foreground rounded border border-primary font-semibold hover:bg-primary/90 transition">
                      Book Now →
                    </a>
                  </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative w-full h-[940px] rounded overflow-hidden border border-border"
                >
                  <Image 
                    src="/images/Key.jpg" 
                    alt="A pair of hands handing out a magical key"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </header>

        {/* Letter Section */}
        <section className="relative pt-12 lg:pt-16 pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                {/* Letter Content */}
                <div className="bg-muted/30 border border-primary/20 rounded-lg p-8 md:p-12 space-y-6 text-muted-foreground">
                  <p className="text-lg italic text-foreground font-serif">Dear Seeker,</p>
                  
                  <p className="text-lg leading-relaxed">I speak to you now not only as a spiritual guide in an ancient Lineage of Light—but also as an engineer. I know, at first glance these two paths may seem like completely different worlds. But both have revealed to me the same profound truth: <span className="text-foreground font-semibold">there is a deeper design in everything that exists</span>.</p>
                  
                  <p className="text-lg leading-relaxed">In engineering, we study structure, energy, and systems.<br/>In this Sacred Lineage — passed down uninterrupted since the time of King Salomon — we study the structure of the soul, the flow of vital energy, and the systems that govern healing, purpose, and inner mastery.</p>
                  
                  <p className="text-lg leading-relaxed"><span className="text-foreground font-semibold">Empower Thyself</span> is not just a class. It is a precise, time-tested initiation into your own divine architecture. King Solomon gathered the wisest people and mystics of his time, testing every transformational tool to create a system that truly works—<em>for all people, across cultures and <span className="text-foreground font-semibold">centuries</span>.</em></p>
                  
                  <p className="text-lg leading-relaxed">This path does not ask you to believe blindly. It invites you to experience. To awaken the gifts encoded in your DNA. To release ancestral patterns that no longer serve you. To align your inner world with a higher intelligence—the divine plan of your soul.</p>
                  
                  <p className="text-lg leading-relaxed">If you feel that life has a deeper architecture… If you've always known, somewhere inside, that you are here for something more—even if you haven't yet been able to name it… Then this step may be your next beginning.</p>
                  
                  <div className="border-t border-primary/20 pt-8 mt-8">
                    <p className="text-lg leading-relaxed">It would be an honor for me to guide you. From one seeker of truth to another, with clarity, structure, and soul.</p>
                    <p className="text-lg mt-4"><span className="text-foreground font-semibold">Your guide in the Lineage of Light</span><br/><span className="text-foreground font-semibold">Radu Coman</span></p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6">
          <div className="border-t border-border" />
        </div>

        {/* Program Origins */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground mb-12">
                  What is the Empower Thyself Program and where does it come from?
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <ScrollReveal direction="left">
                    <div className="relative w-full h-96 rounded overflow-hidden border border-border">
                      <Image 
                        src="/images/angelic-heavenly-presence-stockcake.webp" 
                        alt="Angelic Heavenly Presence"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="right">
                    <div className="space-y-6 text-lg text-muted-foreground">
                      <p><span className="text-foreground font-semibold">Empower Thyself</span> is part of a living tradition of wisdom, healing, and inner evolution, founded over 3,000 years ago by King Salomon.</p>
                      <p>Driven by the desire to help people discover and fulfill their divine potential, Salomon gathered the wisest masters of his time — healers, doctors, sages, mystics, and spiritual seekers. Together, they tested and refined all known methods of transformation until they created a clear, profound, and practical system designed to work for anyone, regardless of culture or era.</p>
                      <p><span className="text-foreground font-semibold">What truly makes Empower Thyself special</span> is that it's not just a collection of another set of techniques or theories. It is part of a complete and coherent system, passed down continuously to this day — a trusted and validated framework that supports the awakening of consciousness, inner balance, and reconnection with your true self.</p>
                      <p className="text-xl text-foreground font-semibold">This system is still effective today and brings results in areas where modern science has not yet been able to.</p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What will you do */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground mb-12 text-center">
                  What will you do in the Empower Thyself program?
                </h2>
                
                <div className="bg-muted/30 border border-primary/20 rounded-lg p-8 md:p-12 space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    This program is designed to help you realize that you have the power to create the life you truly desire. It empowers you to see where you might be holding yourself back and where you're settling for less than you deserve. But it doesn't stop there — this program also gives you the tools to change those parts of your life! After these two days, you'll be able to recognize the patterns and programs that shape your behavior, understand where they come from, and have the power to release them.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    You will open pathways through which you can access more energy, new knowledge and fresh insights, empowering you to create a new life that brings you complete fulfillment.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    This is a practical and interactive program, after which you will be confident that you understand exactly what you need to do next to continue your growth and transformation.
                  </p>
                  
                  <div className="border-t border-primary/20 pt-6 mt-6">
                    <p className="text-lg leading-relaxed text-foreground font-semibold mb-6">
                      You will gain clarity and structure in your understanding of spirit and human nature, as well as clear insight into experiences you may have already encountered.
                    </p>
                    
                    <ul className="space-y-4 text-muted-foreground">
                      <li className="flex gap-4">
                        <span className="text-primary font-semibold flex-shrink-0">•</span>
                        <span className="text-lg leading-relaxed">You will learn to recognize the unseen world, access it, and interact with it.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-primary font-semibold flex-shrink-0">•</span>
                        <span className="text-lg leading-relaxed">You will learn how to gather the power of your thoughts and use it to create good around you.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-primary font-semibold flex-shrink-0">•</span>
                        <span className="text-lg leading-relaxed">You will practice sacred rituals and participate in a sacred initiation ceremony.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What makes it special */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground mb-12 text-center">
                  What makes this program special?
                </h2>
                <div className="bg-muted/30 border border-primary/20 rounded-lg p-8 md:p-12">
                  <p className="text-xl text-foreground font-semibold leading-relaxed">
                    We don't just teach you theory. There are many teachers who can talk to you about spirituality. We offer you authentic, powerful tools and teach you how to use them in your life. We give you the key to unlock these powers within yourself!
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Curriculum List */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground mb-12 text-center">
                  What will you learn in this program?
                </h2>
                <div className="bg-muted/30 border border-primary/20 rounded-lg p-8 md:p-12 space-y-6">
                  <ol className="list-decimal list-inside space-y-4 text-lg font-semibold text-foreground ml-2">
                    <li>How to answer the question <em>"Who am I?"</em></li>
                    <li>What is an initiation, and why do we need it today?</li>
                    <li>The role of King Solomon in this process</li>
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
                    <p className="text-lg text-muted-foreground leading-relaxed">Throughout this program, you will receive teachings, practical exercises, and sacred rituals that you can use to elevate your life to the next level. All of these keys come from the lineage of King Salomon, passed down in an unbroken tradition for thousands of years.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Next Steps */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground mb-12 text-center">
                  What do you need to do?
                </h2>
                <div className="bg-muted/30 border border-primary/20 rounded-lg p-8 md:p-12">
                  <ol className="list-decimal list-inside space-y-4 text-lg text-muted-foreground ml-2">
                    <li className="leading-relaxed">Reach out to us to discover whether this program is the right fit for you at this moment in your journey.<br/><span className="ml-5">We're here to support you with clarity and guidance, every step of the way.</span></li>
                    <li className="leading-relaxed">Receive a Life Activation session from one of our certified practitioners.</li>
                    <li className="leading-relaxed">Make a deposit or pay the full amount to reserve your spot.</li>
                    <li className="leading-relaxed">Attend the two-day class and participate in the initiation ceremony.</li>
                    <li className="leading-relaxed">Start applying what you've learned and enjoy the results.</li>
                  </ol>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Recommendations */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground mb-12 text-center">
                  Recommendations
                </h2>
                <div className="bg-muted/30 border border-primary/20 rounded-lg p-8 md:p-12 space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground"><span className="text-foreground font-semibold">Empower Thyself</span> is not just a class. It is the beginning of a profound journey and a lasting connection.</p>
                  <p className="text-lg leading-relaxed text-muted-foreground">This initiation opens a gateway to a new understanding of life, as well as a safe space you can return to whenever you need clarity, support, or guidance.</p>
                  <p className="text-lg leading-relaxed text-muted-foreground">We commit to supporting you not only throughout the program but also in the years ahead. Whether you have questions about applying the teachings in daily life, are going through a period of transformation, or simply feel ready to take the next step in your personal journey, we are here for you.</p>
                  <div className="border-t border-primary/20 pt-6">
                    <p className="text-lg leading-relaxed text-muted-foreground">This relationship is built over time — with trust, respect, and a honest intention to support your growth, balance, and inner strength.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Booking / Event Box */}
        <section id="inscriere-eveniment" className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="bg-muted border border-border/40 rounded-lg p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground">
                    Discover Your Potential to Be a Divine Being!
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Cost: 1500 €</h3>
                    <p className="text-muted-foreground space-y-3 leading-relaxed">
                      <span className="block">Includes the 2 day training and a complimentary Life Activation session (valued at €300) to prepare your energy system and connect you to your divine blueprint before the Initiation.</span>
                      <span className="block font-semibold text-foreground mt-4">Booking Process:</span>
                      <span className="block">A €500 deposit secures your place and allows us to schedule your Life Activation session.</span>
                      <span className="block">The remaining €1000 is due before the 2-day training and Initiation begins.</span>
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Duration</h3>
                      <p className="text-muted-foreground">2 Days</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Location</h3>
                      <p className="text-muted-foreground">Prague, Czech Republic</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Date</h3>
                      <p className="text-muted-foreground">April 25th - 26th</p>
                    </div>
                  </div>
                </div>

                <div className="text-center border-t border-border pt-12">
                  <h4 className="text-lg font-semibold text-foreground mb-8">After the payment is completed, we will contact you to finalize the appointment.</h4>
                  <a href="https://buy.stripe.com/28E3co1rhgMC8R70xRg3606" className="inline-block mt-4 px-8 py-3 bg-primary text-primary-foreground rounded border border-primary font-semibold hover:bg-primary/90 transition">
                      Book Now
                  </a>
                  
                  <ul className="mt-12 space-y-3 text-muted-foreground">
                    <li>Monday - Friday: 10:00 - 18:00</li>
                    <li><a href="tel:+420792908296" className="hover:text-primary transition">+420 792 908 296</a></li>
                    <li><a href="mailto:info@thepathofinitiationprague.com" className="hover:text-primary transition">info@thepathofinitiationprague.com</a></li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
