import { getTranslations } from "next-intl/server"
import {
  ArrowRight,
  BookOpen,
  CloudRain,
  HeartHandshake,
  Leaf,
  Puzzle,
  Repeat,
  Sparkles,
  Unplug,
  type LucideIcon,
} from "lucide-react"
import { Link } from "@/i18n/navigation"
import { ScrollReveal } from "./scroll-reveal"

// "What are you looking for?" — a playful chooser: tap how you feel, see where to start.
// Each tile names a feeling in everyday words and points to the session, class or evening that fits.
const TILES: { key: string; href: string; icon: LucideIcon }[] = [
  { key: "stressed", href: "/max-meditation", icon: CloudRain },
  { key: "drained", href: "/emotional-cord-cutting", icon: Unplug },
  { key: "stuck", href: "/treating-negative-habits", icon: Repeat },
  { key: "body", href: "/ensofic-reiki", icon: Leaf },
  { key: "missing", href: "/soul-retrieval", icon: Puzzle },
  { key: "gifts", href: "/life-activation", icon: Sparkles },
  { key: "learn", href: "/empower-thyself", icon: BookOpen },
  { key: "people", href: "/community", icon: HeartHandshake },
]

const WHATSAPP = "https://wa.me/420792908296"

export async function LookingForSection() {
  const t = await getTranslations("LookingFor")

  return (
    <section id="looking-for" className="relative py-12">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <p className="mb-2 font-serif text-xs uppercase tracking-[0.3em] text-primary sm:text-sm">{t("eyebrow")}</p>
            <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl">{t("heading")}</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t("intro")}</p>
          </div>
        </ScrollReveal>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {TILES.map(({ key, href, icon: Icon }, i) => (
            <li key={key}>
              <ScrollReveal delay={i * 0.04} className="h-full">
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-primary/20 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:rotate-[-0.6deg] hover:border-primary/60 hover:shadow-[0_12px_30px_-14px_rgba(122,92,15,0.45)] sm:p-5"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="font-serif text-base leading-snug text-foreground sm:text-lg">{t(`tiles.${key}.feel`)}</p>
                  <p className="mt-auto pt-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">{t("tryLabel")}</p>
                  <p className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {t(`tiles.${key}.try`)}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </p>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>

        <ScrollReveal>
          <p className="mt-8 text-center text-muted-foreground">
            {t("unsure")}{" "}
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent(t("unsureMessage"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              {t("unsureLink")}
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
