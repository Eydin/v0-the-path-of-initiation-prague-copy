import type { MouseEvent } from "react"

// Self-hosted Cal.com booking site (separate repo and deployment: poip-booking-calcom).
// Plain module (no "use client") so server components and the chatbot prompt can import it too.
export const CAL_ORIGIN = "https://booking.thepathofinitiationprague.com"

/** Wires a button/link up to Cal.com's "pop up via element click" embed
 *  (see CalcomPopupLoader) instead of navigating - pass to a `cta`/`bookCalEmbed`
 *  prop alongside the normal href, which stays as a right-click/no-JS fallback. */
export type CalEmbed = {
  /** e.g. "all/empower-thyself" */
  link: string
  namespace: string
  config?: Record<string, string>
}

export function calEmbedAttrs(calEmbed?: CalEmbed) {
  if (!calEmbed) return {}
  return {
    // Cal's own click listener (bound on document) opens the modal but never
    // calls preventDefault, so a plain click would also navigate/open a new
    // tab via href unless we stop that ourselves.
    onClick: (e: MouseEvent) => e.preventDefault(),
    "data-cal-link": calEmbed.link,
    "data-cal-namespace": calEmbed.namespace,
    "data-cal-origin": CAL_ORIGIN,
    "data-cal-config": JSON.stringify(calEmbed.config ?? { layout: "month_view" }),
  }
}

/** The free 30-minute intro call with Radu or Diana (Cal.com event "Free 30 min meeting", on Zoom). */
export const FREE_CALL: CalEmbed = { link: "all/30min", namespace: "30min" }
export const FREE_CALL_URL = `${CAL_ORIGIN}/${FREE_CALL.link}`
