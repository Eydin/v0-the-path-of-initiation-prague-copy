import { Link } from "@/i18n/navigation"

// Plain copy text where the part inside <link>…</link> becomes a link to `href` (locale-aware).
// Without an href the tags are simply dropped, so the text still reads correctly.
export function LinkedText({ text, href }: { text: string; href?: string }) {
  const parts = text.split(/<link>(.*?)<\/link>/)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 && href ? (
          <Link key={i} href={href} className="text-primary underline underline-offset-4 hover:opacity-80">
            {part}
          </Link>
        ) : (
          part
        ),
      )}
    </>
  )
}
