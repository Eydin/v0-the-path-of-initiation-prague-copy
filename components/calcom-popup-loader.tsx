"use client"

import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import { CAL_ORIGIN } from "@/components/modality"

/**
 * Initialises Cal.com's embed script so any element on the page carrying
 * data-cal-link/data-cal-namespace (see the CalEmbed type in modality.tsx)
 * opens the booking calendar as a popup when clicked, instead of navigating.
 * Renders nothing - mount it once per page that uses calEmbed.
 */
export function CalcomPopupLoader({ namespace }: { namespace: string }) {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace, embedJsUrl: `${CAL_ORIGIN}/embed/embed.js` })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [namespace])

  return null
}
