"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"
import { BookingBlock } from "@/components/modality"
import { 
  ArrowRight, 
  MessageCircle, 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  Smile 
} from "lucide-react"

const WHATSAPP =
  "https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20community%20and%20upcoming%20events."

const CAROUSEL_IMAGES = [
  "/images/community/2.jpg",
  "/images/community/3.jpg",
  "/images/community/5.jpg",
  "/images/community/6.jpg",
  "/images/community/7.jpg",
  "/images/community/8.jpg",
  "/images/community/9.jpg",
  "/images/community/10.jpg",
  "/images/community/12.jpg",
  "/images/community/20.jpg",
  "/images/community/IMG-20260512-WA0008.jpg",
  "/images/community/IMG-20260514-WA0002.jpg",
  "/images/community/IMG_20260621_100319150.jpg",
  "/images/community/Messenger_creation_1003F14A-1C77-4E40-B700-D318B91FBB89.jpeg",
]

export default function CommunityPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
  }

  return (
    <>
      <Header />
      <main style={{ backgroundImage: "url('/images/empower-thyself-bg.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-cover">
          <div className="absolute inset-0 bg-background/20" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
            <ScrollReveal>
              <div className="mx-auto mb-6 h-px w-24 bg-primary/60" />
              <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">
                Community
              </p>
              <h1 className="mb-8 font-serif text-4xl leading-tight tracking-wide text-foreground md:text-6xl lg:text-7xl text-balance">
                A circle of <span className="text-primary">hearts</span> and shared transformation
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The Path of Initiation Prague is far more than just a place to take classes. It is a living, 
                breathing community devoted to awakening, healing, and walking the path together with sincerity, joy, and courage.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Values / Connection Section */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-background/20" />
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <ScrollReveal direction="left">
                <div className="rounded border border-primary/20 bg-background/60 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm">
                  <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                    Beyond the Classroom
                  </p>
                  <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                    Space for genuine growth & connection
                  </h2>
                  <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      Here, seekers gather in a container of trust, respect, and deep inner work. We offer a 
                      consistent harbor where you can connect with like-minded individuals who truly care about 
                      <strong> embodying their divine essence</strong>, accelerating personal growth, and overcoming 
                      life's challenges together.
                    </p>
                    <div className="flex items-start gap-3 border-t border-border/40 pt-4 font-medium text-foreground">
                      <Smile className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <p>
                        But don't worry, it's not all serious! We believe that true spiritual integration 
                        comes with a light heart. We share plenty of laughter, joy, and genuine fun along the way.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="rounded border border-border/60 bg-background/60 p-8 backdrop-blur-sm">
                  <div className="mb-6 flex h-19.5 w-19.5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl tracking-wide text-foreground">
                    What ties us together
                  </h3>
                  <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    <li>• Supportive gatherings and zero-judgment conversations</li>
                    <li>• Overcoming personal challenges with community support</li>
                    <li>• Celebrating the joy, magic, and fun of life together</li>
                    <li>• Embodying our divinity through practical daily actions</li>
                    <li>• Excitement of living life alive!</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Dynamic Image Carousel Section */}
        <section className="relative py-12 overflow-hidden bg-background/60">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl border border-border/60 bg-muted shadow-lg">
                {CAROUSEL_IMAGES.map((src, index) => {
                  const isActive = index === currentSlide
                  // Virtualization window check: Only mount image tag if it is current, next, or previous slide
                  const isNearVisible = 
                    isActive || 
                    Math.abs(index - currentSlide) === 1 ||
                    (currentSlide === 0 && index === CAROUSEL_IMAGES.length - 1) ||
                    (currentSlide === CAROUSEL_IMAGES.length - 1 && index === 0)

                  return (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        isActive ? "opacity-100 z-10 visible" : "opacity-0 z-0 invisible"
                      }`}
                    >
                      {isNearVisible && (
                        <img
                          src={encodeURI(src)}
                          alt={`Community gathering moment ${index + 1}`}
                          className="h-full w-full object-cover object-center"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      )}
                    </div>
                  )
                })}
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/40 p-2 text-foreground backdrop-blur-md transition-colors hover:bg-background/70"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/40 p-2 text-foreground backdrop-blur-md transition-colors hover:bg-background/70"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Numeric Slide Counter */}
                <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center rounded-full bg-background/60 px-4 py-1.5 font-serif text-xs uppercase tracking-widest text-foreground backdrop-blur-md border border-border/40">
                  {currentSlide + 1} / {CAROUSEL_IMAGES.length}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The 4 Big Linkable Gathering Sections */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <div className="mb-20 text-center">
                <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                  Our Gatherings
                </p>
                <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-5xl text-balance">
                  Regular Community Evenings
                </h2>
                <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-5xl text-balance">
                  Open to students, initiates and anyone else interested.
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-16">
              {/* 1. Prayer Evening */}
              <BookingBlock
                slug="community#prayer-evening"
                title="Prayer Evening"
                investment="Free of Charge"
                duration="2 Hours"
                inquiry="Hello Radu, I would like to learn more about the Prayer Evening community gathering."
                note=""
              >
                <div className="mx-auto max-w-2xl text-foreground">
                  <p className="leading-relaxed text-muted-foreground">
                    Gentle evenings of prayer, deep reflection, and collective intention designed to open the heart and strengthen inner alignment. A peaceful oasis to realign your vibration, step back from life's clutter, and anchor your focus into your highest essence alongside companions who hold the same sacred intent.
                  </p>
                </div>
              </BookingBlock>

              {/* 2. Meditation Evening */}
              <BookingBlock
                slug="community#meditation-evening"
                title="Meditation Evening"
                investment="350 CZK"
                duration="2 Hours"
                inquiry="Hello Radu, I would like to learn more about the Meditation Evening community gathering."
                note=""
              >
                <div className="mx-auto max-w-2xl text-foreground">
                  <p className="leading-relaxed text-muted-foreground">
                    Quiet spaces built for profound stillness, breath-work, visualization, and the deepening of awareness through guided traditional paths. Perfect for resetting the nervous system, taming mental over-activity, and leaning on collective group energy to unlock deeper meditative states than practicing alone.
                  </p>
                </div>
              </BookingBlock>

              {/* 3. Socialization Evening */}
              <BookingBlock
                slug="community#socialization-evening"
                title="Socialization Evening"
                investment="Free of Charge"
                duration="2 Hours"
                inquiry="Hello Radu, I would like to learn more about the Socialization Evening community gathering."
                note=""
              >
                <div className="mx-auto max-w-2xl text-foreground">
                  <p className="leading-relaxed text-muted-foreground">
                    Warm, high-vibrational, and beautifully relaxed gatherings where friends, seekers, and students meet in joyful fellowship. This is where we let our hair down, laugh over tea, swap stories about life's adventures, and build friendships that support our human experience just as much as our spiritual paths.
                  </p>
                </div>
              </BookingBlock>

              {/* 4. International Mystery School Community */}
              <BookingBlock
                title="International Mystery School Community"
                inquiry="Hello Radu, I would like to learn more about the International Mystery School Community opportunities."
                note=""
              >
                <div className="mx-auto max-w-2xl space-y-6 text-foreground">
                  <p className="leading-relaxed text-muted-foreground">
                    An expansive global circle of practitioners, initiates, and teachers sharing the ancient lineages, values, and spiritual lineage of the Modern Mystery School. Connecting here unlocks international events, global networking with conscious peers, and shared support infrastructures for systemic transformation.
                  </p>
                  <div className="pt-2 flex justify-center">
                    <a
                      href="https://modernmysteryschooluk.com/calendar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg border border-primary/20 bg-background/80 px-5 py-4 text-base font-semibold leading-relaxed text-primary transition-all hover:bg-primary/5 hover:border-primary/40"
                    >
                      See the international schedule over here:
                      <span className="block mt-1 text-sm font-normal text-muted-foreground underline">
                        Calendar - Modern Mystery School UK and Europe
                      </span>
                    </a>
                  </div>
                </div>
              </BookingBlock>
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section className="relative py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                Begin with a conversation
              </p>
              <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                Join the circle
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                If you feel called to learn more about our upcoming gatherings, get precise logistics, or explore how this community can support your personal journey, reach out directly to Radu.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                Contact the Community
                <ArrowRight className="h-4 w-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}