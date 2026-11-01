"use client"

import { useEffect, useState } from "react"

export type WidgetHealing = { name: string; description: string }

// Shows 3 healings picked at random on every visit. The server renders the first
// three (so the HTML is complete for crawlers / no-JS), then the browser shuffles
// once on mount and fades the cards in — hidden until then to avoid a visible swap.
export function HealingsWidgetCards({ items }: { items: WidgetHealing[] }) {
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
    <ul className={`mt-8 grid gap-4 transition-opacity duration-500 md:grid-cols-3 ${ready ? "opacity-100" : "opacity-0"}`}>
      {picked.map((h) => (
        <li
          key={h.name}
          className="flex h-full flex-col gap-2 home-mini-card rounded-lg border border-primary/15 p-5"
        >
          <h4 className="font-serif text-lg leading-tight tracking-wide text-primary">{h.name}</h4>
          <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
        </li>
      ))}
    </ul>
  )
}
