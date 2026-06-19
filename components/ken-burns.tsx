"use client"

import Image from "next/image"

interface KenBurnsProps {
  src: string
  alt: string
  /** wrapper classes — control the framed area (aspect ratio, rounding, border) */
  className?: string
  /** object-position, e.g. "center 30%" */
  position?: string
  priority?: boolean
  sizes?: string
  /** "zoom" = straight slow zoom, "pan" = zoom + diagonal drift */
  variant?: "zoom" | "pan"
}

/**
 * A framed image with a slow, infinite Ken Burns zoom.
 * The wrapper clips the overflow so the zoom stays inside its frame.
 */
export function KenBurns({
  src,
  alt,
  className = "",
  position = "center",
  priority = false,
  sizes = "100vw",
  variant = "zoom",
}: KenBurnsProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectPosition: position }}
        className={`object-cover ${variant === "pan" ? "animate-kenburns-pan" : "animate-kenburns"}`}
      />
    </div>
  )
}
