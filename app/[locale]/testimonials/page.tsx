"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Testimonials() {
  const t = useTranslations("TestimonialsPage")
  const mariaQA = [0, 1, 2, 3, 4].map((i) => ({
    q: t(`maria.qa.${i}.q`),
    a1: t.has(`maria.qa.${i}.a1`) ? t(`maria.qa.${i}.a1`) : undefined,
    a2: t.has(`maria.qa.${i}.a2`) ? t(`maria.qa.${i}.a2`) : undefined,
    italic: t.has(`maria.qa.${i}.italic`),
  }))
  const anaQA = [0, 1, 2, 3].map((i) => ({
    q: t(`ana.qa.${i}.q`),
    a1: t(`ana.qa.${i}.a1`),
    a2: t.has(`ana.qa.${i}.a2`) ? t(`ana.qa.${i}.a2`) : undefined,
  }))

  return (
    <>
      <Header />
      <main className="pt-20 bg-[url('/images/life-activation-bg.jpg')] bg-fixed bg-cover">
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          {/* Featured Testimonial: Maria */}
          <ScrollReveal>
            <div className="mb-24">
              <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance mb-12 text-center">
                {t("heading")}
              </h2>
              <div id="maria-testimonial" className="border border-border bg-card p-8 md:p-12">
                <div className="grid gap-12 md:grid-cols-2">
                  <div>
                    <h3 className="font-serif text-2xl tracking-wide text-foreground mb-6">
                      {t("maria.name")}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                      {t("maria.role")}
                    </p>
                    <div className="space-y-4 text-foreground">
                      {mariaQA.map((item, i) => (
                        <div key={i}>
                          <p className="font-semibold text-primary mb-2">{item.q}</p>
                          <p className={`text-sm leading-relaxed ${item.italic ? "italic" : ""}`}>{item.a1}</p>
                          {item.a2 && <p className="text-sm leading-relaxed mt-2">{item.a2}</p>}
                        </div>
                      ))}
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
                      {t("ana.name")}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                      {t("ana.role")}
                    </p>
                    <div className="space-y-4 text-foreground">
                      {anaQA.map((item, i) => (
                        <div key={i}>
                          <p className="font-semibold text-primary mb-2">{item.q}</p>
                          <p className="text-sm leading-relaxed">{item.a1}</p>
                          {item.a2 && <p className="text-sm leading-relaxed mt-2">{item.a2}</p>}
                        </div>
                      ))}
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
              {t("moreJourneys")}
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
