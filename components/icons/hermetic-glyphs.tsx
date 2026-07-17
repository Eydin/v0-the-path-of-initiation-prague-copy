// Hand-drawn alchemical/hermetic glyphs — replacing generic UI icons for the
// Four Pillars, each one tied to the pillar's actual meaning rather than a
// stock "book / sparkle / compass / heart" icon set.

type GlyphProps = { className?: string }

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

/** Ouroboros — the serpent devouring its own tail. Unbroken lineage, eternal knowledge. */
export function OuroborosGlyph({ className }: GlyphProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M12 4a8 8 0 1 1 -5.657 2.343" />
      <path d="M6.343 6.343l-2.1-.3" />
      <path d="M6.343 6.343l-.4-2.1" />
    </svg>
  )
}

/** Mercury (☿) — the active, transformative principle. Practical magic, will made tangible. */
export function MercuryGlyph({ className }: GlyphProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M8.5 5.2a3.5 3.5 0 1 0 7 0" />
      <circle cx="12" cy="11" r="4" />
      <line x1="12" y1="15" x2="12" y2="21" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
  )
}

/** Sol (☉) — the sun, the true self at the center. Divine purpose, the gold within. */
export function SolGlyph({ className }: GlyphProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** The chalice — the vessel of the elixir. Healing, service, transformation carried to others. */
export function ChaliceGlyph({ className }: GlyphProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M6 4h12l-1.2 6.2a4.8 4.8 0 0 1-9.6 0z" />
      <line x1="12" y1="14.5" x2="12" y2="19" />
      <line x1="8.5" y1="21" x2="15.5" y2="21" />
    </svg>
  )
}
