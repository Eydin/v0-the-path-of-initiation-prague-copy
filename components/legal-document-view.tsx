import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Link } from "@/i18n/navigation"
import type { LegalDocument } from "@/lib/legal/types"

function ClauseNumber({ number }: { number: string }) {
  return <span className="mr-3 inline-block font-serif text-primary/80">{number}.</span>
}

export function LegalDocumentView({
  doc,
  backLabel,
  annotations,
}: {
  doc: LegalDocument
  backLabel: string
  /** Extra UI (e.g. a CTA link) rendered right after the clause with this number. Not part of the legal text itself. */
  annotations?: Record<string, ReactNode>
}) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Link
            href="/"
            className="mb-10 inline-block text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            ← {backLabel}
          </Link>

          <h1 className="mb-4 font-serif text-3xl tracking-wide text-primary md:text-4xl">{doc.title}</h1>
          <p className="mb-12 text-sm italic text-muted-foreground">{doc.effectiveDateLine}</p>

          <div className="space-y-5 border-t border-border/60 pt-10">
            {doc.blocks.map((block, i) => {
              switch (block.type) {
                case "article":
                  return (
                    <h2
                      key={i}
                      className="!mt-14 mb-2 font-serif text-xl tracking-wide text-primary uppercase md:text-2xl"
                    >
                      {block.number}. {block.heading}
                    </h2>
                  )
                case "clause": {
                  const depth = block.number.split(".").length - 1
                  const indent = depth > 1 ? `${(depth - 1) * 1.5}rem` : "0rem"
                  const annotation = annotations?.[block.number]
                  return (
                    <div key={i}>
                      <p
                        style={{ marginLeft: indent }}
                        className={
                          block.heading
                            ? "!mt-6 font-serif text-base font-semibold uppercase tracking-wide text-foreground"
                            : "text-base leading-relaxed text-foreground"
                        }
                      >
                        <ClauseNumber number={block.number} />
                        {block.text}
                      </p>
                      {annotation && (
                        <div style={{ marginLeft: indent }} className="mt-3">
                          {annotation}
                        </div>
                      )}
                    </div>
                  )
                }
                case "heading":
                  return (
                    <h3 key={i} className="!mt-10 mb-1 font-serif text-lg tracking-wide text-primary">
                      {block.text}
                    </h3>
                  )
                case "paragraph":
                  return (
                    <p key={i} className="text-base leading-relaxed text-foreground">
                      {block.text}
                    </p>
                  )
                case "list":
                  return (
                    <ul key={i} className="ml-2 list-disc space-y-2 pl-5 marker:text-primary">
                      {block.items.map((item, j) => (
                        <li key={j} className="text-base leading-relaxed text-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                default:
                  return null
              }
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
