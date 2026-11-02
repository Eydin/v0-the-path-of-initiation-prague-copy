"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { waLink } from "./modality"

export type WidgetHealing = { name: string; description: string; href: string }

// Shows 3 healings picked at random on every visit. The server renders the first
// three (so the HTML is complete for crawlers / no-JS), then the browser shuffles
// once on mount and fades the cards in — hidden until then to avoid a visible swap.
// Each card links to that healing's own page.
export function HealingsWidgetCards({ items }: { items: WidgetHealing[] }) {
  const t = useTranslations("HealingGrid")
  const [picked, setPicked] = useState<WidgetHealing[]>(() => items.slice(0, 3))
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const shuffled = [...items]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setPicked(shuffled.slice(0, 3))
    setReady(true)
  }, [items])

  return (
    <ul className={`mt-10 grid gap-4 transition-opacity duration-500 md:grid-cols-3 ${ready ? "opacity-100" : "opacity-0"}`}>
      {picked.map((h) => (
        <li key={h.name}>
          <Link
            href={h.href}
            className="home-mini-card group/card flex h-full flex-col rounded-lg border border-primary/15 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl"
          >
            <h4 className="font-serif text-lg leading-tight tracking-wide text-primary">{h.name}</h4>
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
            <div className="mt-4 flex items-center justify-end border-t border-primary/15 pt-3">
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-primary">
                {t("details")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-1" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

// Secondary "help me choose" button: opens WhatsApp with a prefilled message.
export function HealingsWidgetAsk({ text, label }: { text: string; label: string }) {
  return (
    <a
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded border border-primary/70 bg-black/20 px-7 py-3.5 font-serif text-sm uppercase tracking-widest text-primary backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/15"
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  )
}
