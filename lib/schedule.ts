// ─────────────────────────────────────────────────────────────────────────
//  Class Schedule — single source of truth for all upcoming classes.
//
//  These are PLACEHOLDER dates spread across the next ~6 months. To update,
//  just edit the `dates` arrays below — the homepage, the /calendar page and
//  every class page read from here automatically.
//
//  Date strings are YYYY-MM-DD and are always parsed as LOCAL time (see
//  parseLocalDate) to avoid the UTC off-by-one-day bug.
// ─────────────────────────────────────────────────────────────────────────

export type ScheduledClass = {
  /** Route slug, e.g. "life-activation" — also the URL path. */
  slug: string
  /** Display title (matches the nav labels). */
  title: string
  /** Where it takes place. */
  location: string
  /** Default start time shown on the calendar. */
  time: string
  /** Optional duration tag, e.g. "2-Day Initiation". */
  duration?: string
  /** Upcoming dates (YYYY-MM-DD, local). Keep sorted ascending. */
  dates: string[]
}

export const SCHEDULE: ScheduledClass[] = [
  {
    slug: "life-activation",
    title: "Life Activation",
    location: "Prague, CZ",
    time: "10:00",
    duration: "2 Hours",
    dates: [
      "2026-07-03",
      "2026-07-24",
      "2026-08-14",
      "2026-09-04",
      "2026-09-25",
      "2026-10-16",
      "2026-11-06",
      "2026-11-27",
      "2026-12-18",
    ],
  },
  {
    slug: "empower-thyself",
    title: "Empower Thyself",
    location: "Prague, CZ",
    time: "10:00",
    duration: "2-Day Initiation",
    dates: ["2026-08-22", "2026-10-24", "2026-12-12"],
  },
  {
    slug: "full-spirit-activation",
    title: "Full Spirit Activation",
    location: "Prague, CZ",
    time: "10:00",
    dates: ["2026-07-26", "2026-09-27", "2026-11-22"],
  },
  {
    slug: "healers-academy",
    title: "Healers Academy",
    location: "Prague, CZ",
    time: "09:30",
    duration: "Multi-Day Program",
    dates: ["2026-10-10", "2026-12-05"],
  },
  {
    slug: "ritual-master",
    title: "Ritual Master",
    location: "Prague, CZ",
    time: "10:00",
    duration: "Advanced Training",
    dates: ["2026-11-28"],
  },
  {
    slug: "aura-healing",
    title: "Sacred Geometry Aura Healing",
    location: "Prague, CZ",
    time: "11:00",
    dates: ["2026-07-12", "2026-09-06", "2026-11-01"],
  },
  {
    slug: "sacred-geometry",
    title: "Sacred Geometry",
    location: "Prague, CZ",
    time: "10:00",
    duration: "Workshop",
    dates: ["2026-09-12", "2026-11-14"],
  },
  {
    slug: "astral-travel",
    title: "Astral Travel",
    location: "Prague, CZ",
    time: "14:00",
    duration: "Workshop",
    dates: ["2026-08-09", "2026-10-11", "2026-12-06"],
  },
  {
    slug: "spiritual-intuition",
    title: "Spiritual Intuition",
    location: "Prague, CZ",
    time: "11:00",
    duration: "Workshop",
    dates: ["2026-07-19", "2026-09-20", "2026-11-15"],
  },
  {
    slug: "seven-mystery-schools",
    title: "The 7 Mystery Schools",
    location: "Prague, CZ",
    time: "10:00",
    duration: "Workshop",
    dates: ["2026-08-30", "2026-11-08"],
  },
  {
    slug: "stress-management",
    title: "Stress Rescue",
    location: "Prague, CZ",
    time: "18:00",
    dates: ["2026-07-05", "2026-08-16", "2026-09-27", "2026-11-08"],
  },
]

// ── A single dated occurrence of a class (flattened from SCHEDULE) ────────
export type ClassEvent = {
  slug: string
  title: string
  location: string
  time: string
  duration?: string
  /** YYYY-MM-DD */
  date: string
}

/** Parse a YYYY-MM-DD string as LOCAL midnight (never UTC). */
export function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number)
  return new Date(y, m - 1, d)
}

/** Today at local midnight — safe to compare against parseLocalDate(). */
function startOfToday(): Date {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

/** "Sat · 5 Jul 2026" */
export function formatEventDate(dateStr: string): string {
  const date = parseLocalDate(dateStr)
  const weekday = date.toLocaleDateString("en-GB", { weekday: "short" })
  const rest = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
  return `${weekday} · ${rest}`
}

/** "July 2026" — used for month grouping. */
export function formatMonthLabel(dateStr: string): string {
  return parseLocalDate(dateStr).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  })
}

/** Next `count` future dates for one class (today included). */
export function getUpcomingDates(slug: string, count = 2): string[] {
  const cls = SCHEDULE.find((c) => c.slug === slug)
  if (!cls) return []
  const today = startOfToday()
  return cls.dates
    .filter((d) => parseLocalDate(d) >= today)
    .sort()
    .slice(0, count)
}

/** Every upcoming occurrence across all classes, sorted by date ascending. */
export function getAllUpcomingEvents(): ClassEvent[] {
  const today = startOfToday()
  const events: ClassEvent[] = []
  for (const cls of SCHEDULE) {
    for (const date of cls.dates) {
      if (parseLocalDate(date) >= today) {
        events.push({
          slug: cls.slug,
          title: cls.title,
          location: cls.location,
          time: cls.time,
          duration: cls.duration,
          date,
        })
      }
    }
  }
  return events.sort((a, b) => a.date.localeCompare(b.date))
}

/** Upcoming events grouped into { month: "July 2026", events: [...] }. */
export function getUpcomingEventsByMonth(): { month: string; events: ClassEvent[] }[] {
  const groups: { month: string; events: ClassEvent[] }[] = []
  for (const ev of getAllUpcomingEvents()) {
    const month = formatMonthLabel(ev.date)
    const last = groups[groups.length - 1]
    if (last && last.month === month) {
      last.events.push(ev)
    } else {
      groups.push({ month, events: [ev] })
    }
  }
  return groups
}
