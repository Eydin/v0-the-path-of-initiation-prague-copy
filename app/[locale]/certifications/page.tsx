"use client"

import { useTranslations } from "next-intl"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

export default function Certifications() {
  const t = useTranslations("CertificationsPage")

  return (
    <>
      <Header />
      <main className="pt-20 bg-[url('/images/empower-thyself-bg.jpg')] bg-fixed bg-cover">
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <ScrollReveal>
                <div className="max-w-4xl mx-auto">
                  <div className="bg-muted/30 backdrop-blur-sm border border-primary/20 rounded-lg p-12 md:p-16 text-center space-y-8">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide text-primary">
                      {t("heading")}
                    </h1>
                    <div className="h-px w-16 bg-primary mx-auto" />
                    <h2 className="font-serif text-2xl tracking-wide text-foreground">
                      {t("subheading")}
                    </h2>
                    <p className="text-lg font-serif italic text-foreground leading-relaxed">
                      {t("everyMorning")}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Introduction Section */}
          <section className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <ScrollReveal>
                <div className="max-w-4xl mx-auto">
                  <div className="bg-muted/60 backdrop-blur-sm border border-primary/20 rounded-lg p-8 md:p-12 space-y-6">
                    <p className="text-lg italic text-primary font-serif text-center">
                      {t.rich("introLead", {
                        mms: (chunks) => (
                          <a
                            href="https://modernmysteryschoolint.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-primary underline hover:text-primary/80"
                          >
                            {chunks}
                          </a>
                        ),
                      })}
                    </p>
                    <div className="border-t border-primary/20 pt-6">
                      <p className="text-lg leading-relaxed text-foreground text-center">
                        {t("introBody")}
                      </p>
                    </div>
                    <div className="mt-8 flex justify-center">
                      <a
                        href="https://modernmysteryschoolint.com/certified-professionals/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-[260px] transition hover:opacity-80"
                      >
                        <Image
                          src="/images/certified-by-mms-new.png"
                          alt={t("certifiedAlt")}
                          width={260}
                          height={104}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Qualifications Section */}
          <section className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <ScrollReveal>
                <div className="max-w-4xl mx-auto">
                  <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-primary mb-12 text-center">
                    {t("qualificationsHeading")}
                  </h2>

                  <div className="bg-muted/60 backdrop-blur-sm border border-primary/20 rounded-lg p-8 md:p-12 space-y-6">
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold flex-shrink-0">•</span>
                      <div>
                        <p className="text-lg leading-relaxed text-foreground">
                          {t.rich("qualifications.0", { bold: (chunks) => <span className="text-primary font-semibold">{chunks}</span> })}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="text-primary font-semibold flex-shrink-0">•</span>
                      <div>
                        <p className="text-lg leading-relaxed text-foreground">
                          {t.rich("qualifications.1", { bold: (chunks) => <span className="text-primary font-semibold">{chunks}</span> })}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="text-primary font-semibold flex-shrink-0">•</span>
                      <div>
                        <p className="text-lg leading-relaxed text-foreground">
                          {t.rich("qualifications.2", { bold: (chunks) => <span className="text-primary font-semibold">{chunks}</span> })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Certifications Gallery Section */}
          <section className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <ScrollReveal>
                <div className="max-w-5xl mx-auto">
                  <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-primary mb-12 text-center">
                    {t("galleryHeading")}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <a href="https://modernmysteryschoolint.com/certified-professionals/" target="_blank" rel="noopener noreferrer" className="group">
                      <div className="relative w-full h-96 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition cursor-pointer">
                        <img
                          src="images/radu-guide.jpg"
                          alt="Guide Certification - Radu"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    </a>

                    <a href="https://modernmysteryschoolint.com/certified-professionals/" target="_blank" rel="noopener noreferrer" className="group">
                      <div className="relative w-full h-96 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition cursor-pointer">
                        <img
                          src="images/radu-teacher.webp"
                          alt="Teacher Certification - Radu"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    </a>

                    <a href="https://modernmysteryschoolint.com/certified-professionals/" target="_blank" rel="noopener noreferrer" className="group">
                      <div className="relative w-full h-96 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition cursor-pointer">
                        <img
                          src="images/radu-healer-old.jpg"
                          alt="Life Activation Practitioner - Radu"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    </a>

                    <a href="https://modernmysteryschoolint.com/certified-professionals/" target="_blank" rel="noopener noreferrer" className="group">
                      <div className="relative w-full h-96 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition cursor-pointer">
                        <img
                          src="images/radu-healer.jpg"
                          alt="Life Activation Practitioner - Radu"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    </a>

                    <a href="https://modernmysteryschoolint.com/certified-professionals/" target="_blank" rel="noopener noreferrer" className="group">
                      <div className="relative w-full h-96 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition cursor-pointer">
                        <img
                          src="images/radu-lap-old.webp"
                          alt="Healer Certification - Diana"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    </a>

                    <a href="https://modernmysteryschoolint.com/certified-professionals/" target="_blank" rel="noopener noreferrer" className="group">
                      <div className="relative w-full h-96 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition cursor-pointer">
                        <img
                          src="images/radu-lap.jpg"
                          alt="Ensofic Ray - Diana"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    </a>

                    <a href="https://modernmysteryschoolint.com/certified-professionals/" target="_blank" rel="noopener noreferrer" className="group">
                      <div className="relative w-full h-96 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition cursor-pointer">
                        <img
                          src="images/radu-ensofic.webp"
                          alt="Ensofic Ray - Radu"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
