import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react"
import { Link } from "@/i18n/navigation"

export type ClassCardProps = {
  name: string
  description: string
  /** Small pill above the title, e.g. the duration */
  tag?: string
  /** Rows render only when provided */
  price?: string
  nextDate?: string
  location?: string
  /** Internal route (next-intl Link) unless `external` */
  href: string
  external?: boolean
  labels: { price: string; nextDate: string; cta: string }
}

// ── A class / practice card: price, next date and a button to the full page ──
// The whole card is clickable: the button's link stretches over the card (after:inset-0).
export function ClassCard({ name, description, tag, price, nextDate, location, href, external, labels }: ClassCardProps) {
  const buttonClass =
    "inline-flex items-center justify-center gap-1 rounded border border-primary bg-primary px-4 py-2 text-xs uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 after:absolute after:inset-0 after:rounded-lg after:content-['']"

  return (
    <div className="relative flex h-full cursor-pointer flex-col rounded-lg border border-primary/15 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-card/75 hover:shadow-[0_10px_30px_-14px_rgba(212,175,55,0.4)]">
      {tag && (
        <span className="mb-3 inline-block w-fit rounded-full border border-primary/25 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-primary/80">
          {tag}
        </span>
      )}
      <h3 className="font-serif text-lg leading-tight tracking-wide text-primary">{name}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

      {(price || nextDate || location) && (
        <dl className="mt-5 space-y-2 border-t border-primary/15 pt-4 text-sm">
          {price && (
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{labels.price}</dt>
              <dd className="text-right font-serif text-base tracking-wide text-foreground">{price}</dd>
            </div>
          )}
          {nextDate && (
            <div className="flex items-baseline justify-between gap-4">
              <dt className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5 text-primary" />
                {labels.nextDate}
              </dt>
              <dd className="text-right text-foreground">{nextDate}</dd>
            </div>
          )}
          {location && (
            <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {location}
            </div>
          )}
        </dl>
      )}

      <div className="mt-5">
        {external ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
            {labels.cta}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        ) : (
          <Link href={href} className={buttonClass}>
            {labels.cta}
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        )}
      </div>
    </div>
  )
}
