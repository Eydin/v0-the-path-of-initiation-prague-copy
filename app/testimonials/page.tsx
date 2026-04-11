"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Testimonials() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-[url('/images/life-activation-bg.jpg')] bg-fixed bg-cover">
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          {/* Featured Testimonial: Maria */}
          <ScrollReveal>
            <div className="mb-24">
              <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance mb-12 text-center">
                The Journey of Transformation
              </h2>
              <div id="maria-testimonial" className="border border-border bg-card p-8 md:p-12">
                <div className="grid gap-12 md:grid-cols-2">
                  <div>
                    <h3 className="font-serif text-2xl tracking-wide text-foreground mb-6">
                      Maria - Mother, CEO and Healer
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                      Life Activation Practitioner, Prague, Czech Republic
                    </p>
                    <div className="space-y-4 text-foreground">
                      <div>
                        <p className="font-semibold text-primary mb-2">What brought you to Healers Academy?</p>
                        <p className="text-sm leading-relaxed">
                          I found myself at a moment where my life was changing a lot. I'd built a successful company over 20 years and raised a beautiful family. But the kids were starting to move out, and I felt a deep calling to the mystical island of Samotraki, sensing that my role as a CEO was coming to an end.
                        </p>
                        <p className="text-sm leading-relaxed mt-2">
                          On Samotraki, I had a clear inner calling that I was always part of the Mystery Schools. Then I found an Instagram post from Diana saying "Mystery School in Prague." I knew I had to explore it, and the rest is history.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-2">How does it feel now?</p>
                        <p className="text-sm leading-relaxed italic">
                          "Very healing. I feel very light and at peace. The energy here is beautiful, and the people are beyond lovely. I've become much more sensitive to the energies and what surrounds me."
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-2">What surprised you most?</p>
                        <p className="text-sm leading-relaxed">
                          The initiation ceremony was beyond my imagination. I realized how much I was missing being part of a community. I felt genuinely welcome and it truly feels like I've found a community that I'm super happy to belong to.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-2">Your favorite moments?</p>
                        <p className="text-sm leading-relaxed">
                          During the Aura healing, I felt the light—I was dancing in the light. It was beautiful and amazing. And when I was able to give a session, I just knew that I was born to do that. Someone told me I'm filled with grace and beauty, which gave me the empowerment to do it more.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-2">How will your life shift now?</p>
                        <p className="text-sm leading-relaxed italic">
                          "It's a mystery. I don't know. But that's the beauty, right? I feel like stepping into the unknown was always very scary for me. But now that I feel like I'm on the path of light, the path will reveal itself. It will be just like stepping into light and a bridge of golden light will unfold."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="aspect-square border border-border bg-muted rounded-lg overflow-hidden">
                      <Image
                        src="/images/maria.webp"
                        alt="Maria - Healers Academy Student"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Featured Testimonial: Ana */}
          <ScrollReveal>
            <div className="mb-24">
              <div className="border border-border bg-card p-8 md:p-12">
                <div className="grid gap-12 md:grid-cols-2">
                  <div>
                    <h3 className="font-serif text-2xl tracking-wide text-foreground mb-6">
                      Ana - The Journey of Reconnection
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                      Spiritual Student & Practitioner
                    </p>
                    <div className="space-y-4 text-foreground">
                      <div>
                        <p className="font-semibold text-primary mb-2">What do you feel the benefits are in having a spiritual guide in this modern day world?</p>
                        <p className="text-sm leading-relaxed">
                          The first thing that I understand is that Radu didn't tell me what to do and what not to do. He really helps me to hear my own truth, my own clarity. What I received was clarity and emotional safety and the permission to trust myself again.
                        </p>
                        <p className="text-sm leading-relaxed mt-2">
                          I believe that real benefits of having a spiritual guide is not direction, but remembering who you already are in your everyday life.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-2">What would you say to people seeking a spiritual guide?</p>
                        <p className="text-sm leading-relaxed">
                          You just need to come back to yourself. You need to go deeper; you need to really understand who you are. This journey for me was amazing. It was hard, but I found myself; I found the love that I needed.
                        </p>
                        <p className="text-sm leading-relaxed mt-2">
                          Everyone just needs to really go and start to know themselves—this is the most important thing.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-2">Advice for those just starting?</p>
                        <p className="text-sm leading-relaxed">
                          Healing doesn't have to be fast. You don't need to rush, fix, or become someone else to be worthy. Those just beginning don't need to be 'fixed'—they need gentleness.
                        </p>
                        <p className="text-sm leading-relaxed mt-2">
                          I also needed to hear that my sensitivity is not a weakness, it's actually my greatest trait. I wasn't broken; I was just disconnected from myself. Now that I'm connected, I started to see the power, the strength, and the love.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-2">How have the tools and practices helped you?</p>
                        <p className="text-sm leading-relaxed">
                          The work with the body, with moon cycles, with rituals, with meditation—it's so important. It's not easy, it's really hard, but when you put it inside and work with yourself, you get it.
                        </p>
                        <p className="text-sm leading-relaxed mt-2">
                          I'm so thankful that I was made to feel safe to be the way I am, who I am. It made me feel like I could trust myself again and remember who I am.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="aspect-square border border-border bg-muted rounded-lg overflow-hidden">
                      <Image
                        src="/images/ana.jpg"
                        alt="Ana"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="relative mx-auto max-w-7xl px-6 py-16 border-t border-border">
            <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance mb-12 text-center">
              More Student Journeys
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="aspect-video border border-border bg-card overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/mjXlaZDHVdE"
                  title="What are the benefits of having a spiritual guide?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-full-screen"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="aspect-video border border-border bg-card overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/hgx3oG2Mkl0"
                  title="Healing insede the Modern Mystery School"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-full-screen"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}