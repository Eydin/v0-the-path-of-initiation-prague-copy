"use client"

import type { ReactNode } from "react"
import { calEmbedAttrs, type CalEmbed } from "./modality"
import { CalcomPopupLoader } from "./calcom-popup-loader"

/**
 * Like BookLink, but for buttons whose destination is decided at render time
 * (e.g. a WhatsApp link when there's no Cal.com event type for this choice,
 * or a Cal.com booking link when there is). Pass `calEmbed` only when `href`
 * actually points at a Cal.com booking page - omit it for a plain link
 * (WhatsApp, mailto, etc.), which then behaves like an ordinary `<a>`.
 */
export function BookOrLink({
  href,
  calEmbed,
  className,
  children,
}: {
  href: string
  calEmbed?: CalEmbed
  className?: string
  children: ReactNode
}) {
  return (
    <>
      {calEmbed && <CalcomPopupLoader namespace={calEmbed.namespace} />}
      <a href={href} target="_blank" rel="noopener noreferrer" {...calEmbedAttrs(calEmbed)} className={className}>
        {children}
      </a>
    </>
  )
}
