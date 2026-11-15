"use client"

import { useEffect, useRef } from "react"
import { HONEYPOT_FIELD } from "@/lib/form-guard"

/**
 * Off-screen input that only bots fill in (see lib/form-guard.ts). Render it
 * inside an existing field wrapper rather than as a direct child of a
 * `space-y-*` form, so it can't shift the spacing of the visible fields.
 */
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute -left-[10000px] top-0 h-px w-px overflow-hidden">
      <label>
        Extra info
        <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  )
}

/**
 * Tracks when the form appeared and collects the guard values to send along
 * with a submission. Call `collect(event.currentTarget)` synchronously in the
 * submit handler (before any `await`), and `restart()` when a form re-appears,
 * e.g. when a dialog opens.
 */
export function useFormGuard() {
  const startedAt = useRef<number | null>(null)

  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  return {
    restart() {
      startedAt.current = Date.now()
    },
    collect(form: HTMLFormElement) {
      const honeypot = new FormData(form).get(HONEYPOT_FIELD)
      return {
        [HONEYPOT_FIELD]: typeof honeypot === "string" ? honeypot : "",
        elapsedMs: startedAt.current === null ? 0 : Date.now() - startedAt.current,
      }
    },
  }
}
