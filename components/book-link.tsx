"use client"

import type { ReactNode } from "react"
import { calEmbedAttrs, type CalEmbed } from "./modality"
import { CalcomPopupLoader } from "./calcom-popup-loader"

/**
 * Drop-in replacement for a plain `<a href={STRIPE_LINK} ...>` booking button:
 * opens the matching Cal.com event type's booking calendar as a popup instead
 * of navigating to a raw Stripe Payment Link. `slug` must match the Cal.com
 * event type's slug exactly (used for both the embed and the plain-navigation
 * fallback link). Works inside server-component pages since this file itself
 * carries "use client" — no need to convert the whole page.
 */
export function BookLink({
  slug,
  className,
  children,
}: {
  slug: string
  className?: string
  children: ReactNode
}) {
  const href = `https://booking.thepathofinitiationprague.com/all/${slug}`
  const calEmbed: CalEmbed = { link: `all/${slug}`, namespace: slug }
  return (
    <>
      <CalcomPopupLoader namespace={slug} />
      <a href={href} target="_blank" rel="noopener noreferrer" {...calEmbedAttrs(calEmbed)} className={className}>
        {children}
      </a>
    </>
  )
}
