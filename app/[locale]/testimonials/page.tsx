import type { Metadata } from "next"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

const LIFE_ACTIVATION_STRIPE = "https://buy.stripe.com/14AdR2gmbeEuaZf2FZg360j"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "TestimonialsPage" })
  const title = `${t("heading")} | The Path of Initiation Prague`
  return {
    title,
    openGraph: { title, images: [{ url: "/images/life-activation-bg.jpg", width: 1200, height: 630 }] },
  }
}

export default async function Testimonials({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "TestimonialsPage" })
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
                  src="https://www.youtube-nocookie.com/embed/mjXlaZDHVdE"
                  title="What are the benefits of having a spiritual guide?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-full-screen"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="aspect-video border border-border bg-card overflow-hidden">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/hgx3oG2Mkl0"
                  title="Healing insede the Modern Mystery School"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-full-screen"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative mx-auto max-w-7xl px-6 py-16 border-t border-border">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl border border-border bg-card p-8 md:p-12 text-center">
              <div className="mx-auto mb-6 h-px w-16 bg-primary/60" />
              <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                {t("ctaHeading")}
              </h2>
              <p className="mx-auto mb-10 text-lg leading-relaxed text-muted-foreground">
                {t("ctaBody")}
              </p>
              <a
                href={LIFE_ACTIVATION_STRIPE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              >
                {t("ctaButton")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
