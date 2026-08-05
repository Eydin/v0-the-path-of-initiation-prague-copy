export type LegalBlock =
  // Top-level numbered heading, e.g. "1." "INTRODUCTORY PROVISIONS"
  | { type: "article"; number: string; heading: string }
  // Numbered clause/sub-clause, e.g. "1.1", "2.1.1", "7.2". `heading` marks a short
  // bolded numbered sub-heading (e.g. "Individual Sessions") rather than body text.
  | { type: "clause"; number: string; text: string; heading?: boolean }
  // Unnumbered sub-heading (used throughout the Privacy Policy)
  | { type: "heading"; text: string }
  // Unnumbered body paragraph
  | { type: "paragraph"; text: string }
  // Bullet list
  | { type: "list"; items: string[] }

export interface LegalDocument {
  title: string
  /** Rendered effective-date sentence, already localized, e.g. "This Privacy Policy is effective as of 3 August 2026" */
  effectiveDateLine: string
  blocks: LegalBlock[]
}
