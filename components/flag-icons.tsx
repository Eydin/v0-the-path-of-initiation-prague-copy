// Small inline SVG flags for the language switcher. Kept as plain SVGs (not
// emoji) because flag emoji don't render as flags on Windows/Chromium — they
// fall back to the raw two-letter region code text.

import type { ComponentType } from "react"

function FlagGB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  )
}

function FlagCZ({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden>
      <rect width="30" height="20" fill="#fff" />
      <rect y="10" width="30" height="10" fill="#D7141A" />
      <polygon points="0,0 0,20 15,10" fill="#11457E" />
    </svg>
  )
}

function FlagDE({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden>
      <rect y="0" width="30" height="6.67" fill="#000000" />
      <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
    </svg>
  )
}

function FlagRO({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden>
      <rect x="0" width="10" height="20" fill="#002B7F" />
      <rect x="10" width="10" height="20" fill="#FCD116" />
      <rect x="20" width="10" height="20" fill="#CE1126" />
    </svg>
  )
}

export const FLAG_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  en: FlagGB,
  cs: FlagCZ,
  de: FlagDE,
  ro: FlagRO,
}
