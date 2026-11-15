/**
 * Lightweight spam protection shared by the site's public forms (contact
 * dialog, withdrawal form, newsletter). Two checks, both invisible to people:
 *
 * - A honeypot input placed off-screen (see `components/form-guard.tsx`).
 *   Visitors never see or reach it; form-filling bots fill in every input.
 * - A minimum time between the form appearing and being submitted. Bots submit
 *   within milliseconds. The time is measured on the visitor's own clock, so a
 *   clock difference between visitor and server can't cause false rejections.
 *
 * A filled honeypot is answered with a fake success (so the bot learns nothing)
 * and nothing is sent. A too-fast submit gets an ordinary error instead, so a
 * real person who was unusually quick just sees "try again" and nothing is lost.
 */
export const HONEYPOT_FIELD = "extra_info"

export const MIN_FILL_MS = 2000

export type FormGuardVerdict = "ok" | "honeypot" | "too_fast"

export function checkFormGuard(input: { honeypot?: string | null; elapsedMs: number }): FormGuardVerdict {
  if (input.honeypot && input.honeypot.trim() !== "") return "honeypot"
  if (!Number.isFinite(input.elapsedMs) || input.elapsedMs < MIN_FILL_MS) return "too_fast"
  return "ok"
}
