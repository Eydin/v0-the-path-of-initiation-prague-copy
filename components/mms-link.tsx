import type { ReactNode } from "react"

// Links to the Modern Mystery School's international site. The name is a brand and stays in
// English in every language, so it can be found and linked inside any translated sentence.
export const MMS_URL = "https://modernmysteryschoolint.com/"

// same look as the links in the FAQ answers (LinkedText)
const linkClass = "text-primary underline underline-offset-4 hover:opacity-80"

export function MmsLink({ children }: { children: ReactNode }) {
  return (
    <a href={MMS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  )
}

/** Turns every "Modern Mystery School" (and "… International") in a plain string into a link. */
export function withMmsLinks(text: string): ReactNode {
  const parts = text.split(/(Modern Mystery School(?: International)?)/)
  if (parts.length === 1) return text
  return parts.map((part, i) => (i % 2 === 1 ? <MmsLink key={i}>{part}</MmsLink> : part))
}
