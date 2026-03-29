"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Certifications() {
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
                      Certifications
                    </h1>
                    <div className="h-px w-16 bg-primary mx-auto" />
                    <h2 className="font-serif text-2xl tracking-wide text-foreground">
                      Radu is here to support you in creating a life worth waking up for
                    </h2>
                    <p className="text-lg font-serif italic text-foreground leading-relaxed">
                      Every morning
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
                      The certifications for the classes, initiations and healing sessions that Radu offers come from Modern Mystery School International.
                    </p>
                    
                    <div className="border-t border-primary/20 pt-6">
                      <p className="text-lg leading-relaxed text-foreground text-center">
                        Radu has undergone numerous initiations and trainings to prepare himself and to be able to hold the energy for the trasformation to happen for his students.
                      </p>
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
                    Radu's Qualifications
                  </h2>
                  
                  <div className="bg-muted/60 backdrop-blur-sm border border-primary/20 rounded-lg p-8 md:p-12 space-y-6">
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold flex-shrink-0">•</span>
                      <div>
                        <p className="text-lg leading-relaxed text-foreground">
                          Radu is a certified <span className="text-primary font-semibold">Guide</span> and <span className="text-primary font-semibold">Teacher</span> in the lineage of the Modern Mystery School.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="text-primary font-semibold flex-shrink-0">•</span>
                      <div>
                        <p className="text-lg leading-relaxed text-foreground">
                          Radu is also certified as a <span className="text-primary font-semibold">Life Activation Practitioner and Healer</span>, recertified annually.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="text-primary font-semibold flex-shrink-0">•</span>
                      <div>
                        <p className="text-lg leading-relaxed text-foreground">
                          Radu has completed all three levels of <span className="text-primary font-semibold">Ensofic Ray Healing</span>, with a specialization in addressing destructive mental patterns, harmful habits, and addictions.
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
                    Diplomas & Certificates
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