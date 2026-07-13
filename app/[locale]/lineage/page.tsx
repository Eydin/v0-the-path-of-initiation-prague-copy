import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"
import { KenBurns } from "@/components/ken-burns"
import { QuoteBreaker } from "@/components/quote-breaker"
import { ArrowRight, MessageCircle } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "LineagePage" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

const WHATSAPP =
  "https://wa.me/420792908296?text=Hello%20Radu%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Lineage%20and%20the%20Path%20of%20Initiation."

const HOLDER_IMAGES = ["gudni-gudnason.jpg", "hideto-nakagome.jpg", "dave-lanyon.jpg"]
const HOLDER_HREFS = [
  "https://modernmysteryschoolint.com/founder-gudni/",
  "https://modernmysteryschoolint.com/sovereign-ipsissimus-hideto/",
  "https://modernmysteryschoolint.com/sovereign-ipsissimus-dave-lanyon/",
]
const HOLDER_NAMES = ["Gudni GED Gudnason", "Hideto REI Nakagome", "Dave THOR Lanyon"]

export default async function LineagePage() {
  const t = await getTranslations("LineagePage")

  const holders = [0, 1, 2].map((i) => ({
    name: HOLDER_NAMES[i],
    title: t(`holders.${i}.title`),
    role: t(`holders.${i}.role`),
    image: HOLDER_IMAGES[i],
    href: HOLDER_HREFS[i],
    bio: t(`holders.${i}.bio`),
  }))

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
          <ParallaxImage
            src="/images/art/pantheon-panini.jpg"
            alt=""
            position="center 35%"
            strength={90}
            priority
          />
          <div className="absolute inset-0 bg-background/75" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
            <ScrollReveal>
              <div className="mx-auto mb-6 h-px w-24 bg-primary/60" />
              <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">
                {t("heroEyebrow")}
              </p>
              <h1 className="mb-8 font-serif text-4xl leading-tight tracking-wide text-foreground md:text-6xl lg:text-7xl text-balance">
                {t.rich("heroHeading", { emphasis: (chunks) => <span className="text-primary">{chunks}</span> })}
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("heroBody")}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── What is Lineage ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="relative z-10 mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <p className="mb-3 text-center font-serif text-sm uppercase tracking-[0.3em] text-primary">
                {t("whatIsLineageEyebrow")}
              </p>
              <h2 className="mb-10 text-center font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                {t("whatIsLineageHeading")}
              </h2>
              <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
                <p>{t("whatIsLineageBody1")}</p>
                <p>
                  {t.rich("whatIsLineageBody2", {
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
                <p className="font-serif text-xl italic text-foreground">
                  {t("whatIsLineageBody3")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Quote breaker ── */}
        <QuoteBreaker
          image="hermes-trismegistus-sienna-cathedral-mosaic.jpg"
          quote={
            <>
              &ldquo;{t("quote.text")} <em className="text-primary">{t("quote.emphasis")}</em>.&rdquo;
            </>
          }
          attribution={t("quote.attribution")}
          caption={t("quote.caption")}
          position="center 10%"
        />

        {/* ── The King Salomon Lineage ── */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <p className="mb-3 text-center font-serif text-sm uppercase tracking-[0.3em] text-primary">
                {t("ksLineageEyebrow")}
              </p>
              <h2 className="mb-10 text-center font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                {t("ksLineageHeading")}
              </h2>
              <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  {t.rich("ksLineageBody1", {
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
                <p>{t("ksLineageBody2")}</p>
                <p>{t("ksLineageBody3")}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── The Third Order — Three Lineage Holders ── */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <ParallaxImage src="/images/art/pantheon-panini.jpg" alt="" position="center" strength={70} />
          <div className="absolute inset-0 bg-background/90" />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-primary">
                  {t("thirdOrderEyebrow")}
                </p>
                <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                  {t("thirdOrderHeading")}
                </h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {t("thirdOrderBody")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-10 md:grid-cols-3">
              {holders.map((h, i) => (
                <ScrollReveal key={h.name} delay={i * 0.12}>
                  <a
                    href={h.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col border border-primary/20 bg-card/60 backdrop-blur-sm no-underline"
                  >
                    <KenBurns
                      src={`/images/art/${h.image}`}
                      alt={`${h.title} ${h.name}`}
                      position="center 20%"
                      sizes="(max-width: 768px) 90vw, 22rem"
                      className="aspect-[4/5] w-full"
                    />
                    <div className="flex flex-1 flex-col gap-3 p-7">
                      <p className="font-serif text-xs uppercase tracking-[0.25em] text-primary">
                        {h.title}
                      </p>
                      <h3 className="font-serif text-2xl tracking-wide text-foreground">
                        {h.name}
                      </h3>
                      <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                        {h.role}
                      </p>
                      <div className="my-2 h-px w-12 bg-primary/40" />
                      <p className="text-base leading-relaxed text-muted-foreground">{h.bio}</p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <p className="mx-auto mt-16 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
                {t("thirdOrderClosing")}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Council of Ipsissimi & Leadership ── */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <p className="mb-3 text-center font-serif text-sm uppercase tracking-[0.3em] text-primary">
                {t("councilEyebrow")}
              </p>
              <h2 className="mb-8 text-center font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                {t("councilHeading")}
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
                {t("councilBody")}
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://modernmysteryschoolint.com/governing-ipsissimas-ipsissimus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded border border-primary px-8 py-4 font-serif text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {t("governingLink")}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://modernmysteryschoolint.com/leadership/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded border border-primary px-8 py-4 font-serif text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {t("leadershipLink")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <p className="mb-3 text-center font-serif text-sm uppercase tracking-[0.3em] text-foreground">
                {t("otherResourcesEyebrow")}
              </p>
              <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
                <a
                  href="https://modernmysteryschoolint.com/what-is-lineage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded border border-primary px-8 py-4 font-serif text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {t("resourceLineage")}
                </a>
                <a
                  href="https://modernmysteryschoolint.com/core-values/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded border border-primary px-8 py-4 font-serif text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {t("resourceCoreValues")}
                </a>
                <a
                  href="https://modernmysteryschoolint.com/illuminating-our-culture-of-light/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded border border-primary px-8 py-4 font-serif text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {t("resourceCulture")}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Community Image (static) ── */}
        <section className="relative py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="overflow-hidden rounded-2xl border border-border/40 bg-card/60">
              <img
                src="/images/community/Radu%20DSC03340.jpg"
                alt="Radu with community members"
                className="w-full h-72 object-cover sm:h-160"
              />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
            <ScrollReveal>
              <div className="mx-auto mb-6 h-px w-16 bg-primary/60" />
              <h2 className="mb-6 font-serif text-3xl tracking-wide text-foreground md:text-4xl text-balance">
                {t("ctaHeading")}
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {t("ctaBody")}
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded border border-primary bg-primary px-10 py-4 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                {t("ctaButton")}
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
