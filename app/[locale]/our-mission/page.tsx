import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"
import { KenBurns } from "@/components/ken-burns"
import { QuoteBreaker } from "@/components/quote-breaker"
import { EmailContactButton } from "@/components/email-contact-button"
import { Link } from "@/i18n/navigation"
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  HandHeart,
  Lock,
  Mail,
  MessageCircle,
  MessagesSquare,
  Scale,
  ScrollText,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "MissionPage" })
  const title = t("metaTitle")
  const description = t("metaDescription")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/path-into-sunrise.jpg" }] },
  }
}

// Kept local (not imported from components/modality): that module is "use client",
// so its helpers can't be called from this server component.
const PHONE = "420792908296"
const MMS_URL = "https://modernmysteryschoolint.com/"

const WHAT_WE_DO: { key: "sessions" | "classes" | "community"; icon: LucideIcon; href: string; navKey: string }[] = [
  { key: "sessions", icon: Sparkles, href: "/healings", navKey: "nav.healings" },
  { key: "classes", icon: BookOpen, href: "/workshops", navKey: "nav.workshops" },
  { key: "community", icon: Users, href: "/community", navKey: "nav.community" },
]

const STANDARD_ICONS: LucideIcon[] = [BadgeCheck, Lock, Scale, MessagesSquare, ScrollText, HandHeart]

const linkClass = "font-semibold text-primary underline underline-offset-2 hover:text-primary/80"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 text-center">
      <div className="mx-auto mb-6 h-px w-16 bg-primary/60" />
      <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">{children}</h2>
    </div>
  )
}

export default async function MissionPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "MissionPage" })
  const tNav = await getTranslations({ locale, namespace: "Header" })
  const tQuote = await getTranslations({ locale, namespace: "HomeQuotes" })

  const whatsappHref = `https://wa.me/${PHONE}?text=${encodeURIComponent(t("working.whatsappMessage"))}`

  return (
    <div className="home-cream isolate overflow-x-hidden">
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
          <ParallaxImage src="/images/art/path-into-sunrise.jpg" alt="" position="center 45%" strength={90} priority />
          <div className="absolute inset-0 bg-background/75" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
            <ScrollReveal>
              <div className="mx-auto mb-6 h-px w-24 bg-primary/60" />
              <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">{t("heroEyebrow")}</p>
              <h1 className="mb-8 font-serif text-4xl leading-tight tracking-wide text-foreground md:text-6xl lg:text-7xl text-balance">
                {t.rich("heroHeading", { emphasis: (chunks) => <span className="text-primary">{chunks}</span> })}
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {t.rich("intro", {
                  mms: (chunks) => (
                    <a href={MMS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {chunks}
                    </a>
                  ),
                  lineage: (chunks) => (
                    <Link href="/lineage" className={linkClass}>
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Why we do this ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="relative z-10 mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <SectionHeading>{t("why.heading")}</SectionHeading>
              <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
                <p>{t("why.body1")}</p>
                <p>{t("why.body2")}</p>
                <p className="border-l-2 border-primary/60 pl-6 font-serif text-xl italic text-foreground">
                  {t("why.measure")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── What we do ── */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <SectionHeading>{t("what.heading")}</SectionHeading>
            </ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-3">
              {WHAT_WE_DO.map(({ key, icon: Icon, href, navKey }, i) => (
                <ScrollReveal key={key} delay={i * 0.12}>
                  <div className="flex h-full flex-col gap-4 border border-primary/20 bg-card/60 p-8 backdrop-blur-sm">
                    <Icon className="h-7 w-7 text-primary" aria-hidden />
                    <h3 className="font-serif text-2xl tracking-wide text-foreground">{t(`what.${key}.title`)}</h3>
                    <div className="h-px w-12 bg-primary/40" />
                    <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                      {t.rich(`what.${key}.body`, {
                        la: (chunks) => (
                          <Link href="/life-activation" className={linkClass}>
                            {chunks}
                          </Link>
                        ),
                        et: (chunks) => (
                          <Link href="/empower-thyself" className={linkClass}>
                            {chunks}
                          </Link>
                        ),
                      })}
                    </p>
                    <Link
                      href={href}
                      className="mt-2 inline-flex items-center gap-2 font-serif text-sm uppercase tracking-widest text-primary transition-colors hover:text-primary/80"
                    >
                      {tNav(navKey)}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
                {t("what.practical")}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Know thyself ── */}
        <QuoteBreaker
          image="ancient-versus-eternal-sounion.jpg"
          tone="dark"
          keepSides
          quote={
            <>
              &ldquo;{tQuote("quote1.text")} <em className="text-primary">{tQuote("quote1.emphasis")}</em>.&rdquo;
            </>
          }
          attribution={tQuote("quote1.attribution")}
          caption={tQuote("quote1.caption")}
          position="center 62%"
        />

        {/* ── Our approach ── */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <SectionHeading>{t("approach.heading")}</SectionHeading>
              <p className="-mt-4 mb-12 text-center text-lg leading-relaxed text-muted-foreground">
                {t("approach.intro")}
              </p>
            </ScrollReveal>
            <ol className="flex flex-col gap-10">
              {[0, 1, 2, 3, 4].map((i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <li className="flex gap-6">
                    <span className="w-10 flex-shrink-0 font-serif text-4xl leading-none text-primary/70" aria-hidden>
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="mb-2 font-serif text-xl tracking-wide text-foreground md:text-2xl">
                        {t(`approach.principles.${i}.title`)}
                      </h3>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        {t(`approach.principles.${i}.body`)}
                      </p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Our standards ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <ScrollReveal>
              <SectionHeading>{t("standards.heading")}</SectionHeading>
              <p className="-mt-4 mb-12 text-center text-lg leading-relaxed text-muted-foreground">
                {t("standards.intro")}
              </p>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2">
              {STANDARD_ICONS.map((Icon, i) => (
                <ScrollReveal key={i} delay={(i % 2) * 0.1}>
                  <div className="flex h-full gap-5 border border-primary/20 bg-card/60 p-7 backdrop-blur-sm">
                    <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-primary" aria-hidden />
                    <div>
                      <h3 className="mb-2 font-serif text-xl tracking-wide text-foreground">
                        {t(`standards.items.${i}.title`)}
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {t(`standards.items.${i}.body`)}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our training and lineage ── */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <ScrollReveal>
              <SectionHeading>{t("training.heading")}</SectionHeading>
              <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {t.rich("training.body", {
                  mms: (chunks) => (
                    <a href={MMS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {chunks}
                    </a>
                  ),
                  lineage: (chunks) => (
                    <Link href="/lineage" className={linkClass}>
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </ScrollReveal>

            <div className="grid gap-12 md:grid-cols-2">
              {[
                { key: "diana", name: "Diana Coman", src: "/images/diana-coman.jpeg" },
                { key: "radu", name: "Radu Coman", src: "/images/Radu2.jpg" },
              ].map((person, i) => (
                <ScrollReveal key={person.key} delay={i * 0.12}>
                  <div className="flex flex-col gap-6">
                    <div className="relative mx-auto w-full max-w-sm">
                      <div className="absolute -inset-3 -z-10 rounded-sm bg-primary/15 blur-2xl" aria-hidden />
                      <KenBurns
                        src={person.src}
                        alt={person.name}
                        position="center 25%"
                        sizes="(max-width: 768px) 90vw, 24rem"
                        className="aspect-[4/5] w-full rounded-sm border border-primary/40 shadow-2xl shadow-black/40 ring-1 ring-primary/10"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                      <p className="absolute bottom-4 left-5 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                        {person.name}
                      </p>
                    </div>
                    <p className="mx-auto max-w-sm text-lg leading-relaxed text-muted-foreground">
                      {t.rich(`training.${person.key}`, {
                        name: (chunks) => <strong className="font-semibold text-foreground">{chunks}</strong>,
                      })}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <p className="mx-auto mt-16 max-w-3xl text-center font-serif text-xl italic text-foreground">
                {t("training.ongoing")}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {[
                  { href: "/lineage", label: tNav("nav.lineage") },
                  { href: "/certifications", label: tNav("nav.certifications") },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center justify-center gap-3 rounded border border-primary px-8 py-4 font-serif text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    {l.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Who we work with ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="relative z-10 mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <SectionHeading>{t("who.heading")}</SectionHeading>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{t("who.body")}</p>
              <ul className="mb-8 flex flex-col gap-4">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex gap-4 text-lg leading-relaxed text-foreground">
                    <Check className="mt-1.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                    <span>{t(`who.reasons.${i}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed text-muted-foreground">{t("who.closing")}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Working with us ── */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <SectionHeading>{t("working.heading")}</SectionHeading>
              <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
                <p>{t("working.body1")}</p>
                <p>{t("working.body2")}</p>
              </div>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-8 py-4 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("working.whatsappButton")}
                </a>
                <EmailContactButton className="inline-flex items-center justify-center gap-3 rounded border border-primary px-8 py-4 font-serif text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                  <Mail className="h-4 w-4" />
                  {t("working.contactButton")}
                </EmailContactButton>
              </div>
              <div className="mt-16 text-center">
                <div className="mx-auto mb-6 h-px w-16 bg-primary/60" />
                <p className="font-serif text-2xl italic tracking-wide text-foreground">{t("working.signature")}</p>
                <p className="mt-2 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                  {t("working.signaturePlace")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
