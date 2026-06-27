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

export type ClassCategory = "Activation" | "Initiation" | "Workshop"

export type ScheduledClass = {
  /** Route slug, e.g. "life-activation" — also the URL path. */
  slug: string
  /** Display title (matches the nav labels). */
  title: string
  /** Stream this class belongs to — drives the calendar accent + grouping. */
  category: ClassCategory
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
    category: "Activation",
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
    category: "Initiation",
    title: "Empower Thyself",
    location: "Prague, CZ",
    time: "10:00",
    duration: "2-Day Initiation",
    dates: [
      "2026-07-25",
      "2026-08-29",
      "2026-09-26",
      "2026-10-17",
      "2026-11-28",
      "2026-12-21",
      "2027-01-23",
      "2027-02-13",
      "2027-03-20",
    ],
  },
  {
    slug: "full-spirit-activation",
    category: "Activation",
    title: "Full Spirit Activation",
    location: "Prague, CZ",
    time: "10:00",
    duration: "2 Hours",
    dates: [
      "2026-07-26",
      "2026-09-27",
      "2026-11-22"
    ],
  },
  {
    slug: "healers-academy",
    category: "Initiation",
    title: "Healers Academy",
    location: "London, UK",
    time: "09:30",
    duration: "Multi-Day Program",
    dates: [
      "2026-10-8",
      "2027-03-12"
    ],
  },
  {
    slug: "ritual-master",
    category: "Initiation",
    title: "Ritual Master",
    location: "London, UK",
    time: "10:00",
    duration: "Advanced Training",
    dates: ["2026-10-09"],
  },
  {
    slug: "sacred-geometry",
    category: "Workshop",
    title: "Sacred Geometry",
    location: "Prague, CZ",
    time: "10:00",
    duration: "Workshop - 5 Hours",
    dates: [
      "2026-07-11",
      "2026-09-12",
      "2026-10-24",
      "2026-12-05",
      "2027-01-09",
      "2027-02-20",
      "2027-04-10",
    ],
  },
  {
    slug: "astral-travel",
    category: "Workshop",
    title: "Astral Travel",
    location: "Prague, CZ",
    time: "14:00",
    duration: "Workshop - 5 Hours",
    dates: [
      "2026-07-18",
      "2026-09-19",
      "2026-10-31",
      "2026-12-12",
      "2027-01-16",
      "2027-02-27",
      "2027-04-17",
    ],
  },
  {
    slug: "spiritual-intuition",
    category: "Workshop",
    title: "Spiritual Intuition",
    location: "Prague, CZ",
    time: "11:00",
    duration: "Workshop - 2.5 Hours",
    dates: [
      "2026-07-05",
      "2026-09-20",
      "2026-11-15"
    ],
  },
  {
    slug: "seven-mystery-schools",
    category: "Workshop",
    title: "The 7 Mystery Schools",
    location: "Prague, CZ",
    time: "10:00",
    duration: "Workshop - 2.5 Hours",
    dates: [
      "2026-08-30",
      "2026-11-08"
    ],
  },
  {
    slug: "stress-management",
    category: "Workshop",
    title: "Stress Rescue",
    location: "Prague, CZ",
    time: "18:00",
    duration: "Workshop - 2.5 Hours",
    dates: [
      "2026-07-05",
      "2026-08-16",
      "2026-09-27",
      "2026-11-08"
    ],
  },
]

// ── A single dated occurrence of a class (flattened from SCHEDULE) ────────
export type ClassEvent = {
  slug: string
  title: string
  category: ClassCategory
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
          category: cls.category,
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
