"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

const CAL_ORIGIN = "https://booking.thepathofinitiationprague.com"

/** Inline Cal.com booking calendar, embedded directly on the page. */
export function CalcomEmbed({
  calLink,
  namespace,
  layout = "month_view",
}: {
  /** e.g. "all/empower-thyself" */
  calLink: string
  namespace: string
  layout?: "month_view" | "week_view" | "column_view"
}) {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace })
      cal("ui", { theme: "light", layout, hideEventTypeDetails: false })
    })()
  }, [namespace, layout])

  return (
    <div className="min-h-[700px] w-full overflow-hidden rounded-lg">
      <Cal
        namespace={namespace}
        calLink={calLink}
        calOrigin={CAL_ORIGIN}
        style={{ width: "100%", height: "100%", minHeight: "700px", overflow: "scroll" }}
        config={{ layout }}
      />
    </div>
  )
}
