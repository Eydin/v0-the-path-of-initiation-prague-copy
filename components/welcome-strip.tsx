import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { ArrowDown } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

// A warm, early "Hi, we're Diana and Radu": smiling faces near the top of the homepage, so visitors
// know who will welcome them before they read anything else. Links down to the full guide section.
export async function WelcomeStrip() {
  const t = await getTranslations("Welcome")

  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-primary/20 bg-card px-6 py-8 text-center shadow-sm sm:flex-row sm:px-10 sm:text-left">
            <div className="flex shrink-0 -space-x-5">
              <Image
                src="/images/diana-smiling-avatar.jpg"
                alt="Diana Coman"
                width={128}
                height={128}
                className="h-28 w-28 rounded-full border-4 border-card object-cover shadow-md sm:h-32 sm:w-32"
              />
              <Image
                src="/images/Radu2.jpg"
                alt="Radu Coman"
                width={128}
                height={128}
                className="h-28 w-28 rounded-full border-4 border-card object-cover object-[50%_35%] shadow-md sm:h-32 sm:w-32"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl tracking-wide text-foreground">{t("heading")}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{t("body")}</p>
              <a
                href="#guide"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80"
              >
                {t("link")}
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
