"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxImageProps {
  src: string
  alt: string
  position?: string
  /** vertical drift in px across the scroll range (bigger = stronger) */
  strength?: number
  /** also apply the slow Ken Burns zoom */
  kenBurns?: boolean
  priority?: boolean
  className?: string
}

/**
 * A full-bleed background image that drifts vertically as it scrolls
 * through the viewport. Uses transform (GPU) — works on iOS, unlike
 * `background-attachment: fixed`. Drop into a `relative overflow-hidden` parent.
 */
export function ParallaxImage({
  src,
  alt,
  position = "center",
  strength = 80,
  kenBurns = true,
  priority = false,
  className = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength])

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* oversized so the parallax drift never reveals an edge */}
      <motion.div style={{ y }} className="absolute inset-[-12%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          style={{ objectPosition: position }}
          className={`object-cover ${kenBurns ? "animate-kenburns" : ""}`}
        />
      </motion.div>
    </div>
  )
}
