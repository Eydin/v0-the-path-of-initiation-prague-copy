---
name: poip-website
description: Reference for working on this repo — "The Path of Initiation Prague" (Radu Coman's Modern Mystery School site). Covers the Next.js/next-intl architecture, the file map for pages/blog/schedule/chatbot-knowledge, i18n & translation conventions, editorial conventions, how the Cal.com booking popup ("Book Now") is wired up and maintained per event/session page, and known gotchas on this Windows dev machine (Nodist, OneDrive-locked builds, stray dev servers). Load this before making any change to the site so you don't have to re-derive the architecture from scratch.
---

# The Path of Initiation Prague — working reference

Radu Coman's Modern Mystery School site (thepathofinitiationprague.com). Next.js
App Router + `next-intl`. This file exists so a fresh session doesn't have to
re-derive the architecture, conventions, and Windows-specific gotchas from
scratch every time — read it fully before starting non-trivial work here.

## Architecture at a glance

- **Routing**: every page lives at `app/[locale]/<route>/page.tsx`. Locales:
  `en` (default, **unprefixed** — `/life-activation`), `cs`/`de`/`ro`
  (prefixed — `/cs/life-activation`). Config in `i18n/routing.ts`
  (`localePrefix: "as-needed"`).
- **Copy lives in `messages/{en,cs,de,ro}.json`**, not in the `.tsx` files.
  Each page/component has one root-level namespace key (e.g.
  `"SacredGeometryPage"`, `"Header"`, `"Guide"`). Pages call
  `useTranslations("Namespace")` then `t("key")` / `t.rich("key", {...})` for
  rich text containing custom tags like `<strong>`, `<mms>`, `<link>`,
  `<emphasis>`, `<bold>`, `<usuflet>`.
  - When calling `t.rich`, pass the tag-renderer object **inline** in the
    call (`t.rich("x", { strong: (chunks) => <strong>{chunks}</strong> })`),
    not as a separately-declared `const` — pulling it out breaks TS's
    contextual typing of `chunks` and forces an explicit (and usually wrong)
    type annotation.
- **Brand/program names are proper nouns and are NEVER translated**: Life
  Activation, Full Spirit Activation, Empower Thyself, Healers Academy,
  Ritual Master, Sacred Geometry (+ II/III/IV), Modern Mystery School, King
  Salomon. Kept identical across all 4 locale files. Canonical list (partial)
  in `lib/brand-names.ts`'s `BRAND` object. Everything else in a namespace —
  headings, benefit text, hero taglines — genuinely gets translated (checked
  against real committed translations; don't assume prose stays English).
- **Shared "class/program page" building blocks**: `components/modality.tsx`
  exports `ModalityShell`, `ModalityHero`, `Panel`, `PanelHeading`, `Lead`,
  `Body`, `BenefitList`, `WhatsAppButton`, `EmailButton`, `BookingBlock`.
  Every activation/initiation/workshop page (life-activation,
  sacred-geometry-2/3/4, keys-of-the-ancients, kabbalah-ascension, ritual-
  master, ...) is composed from these — copy the pattern from a neighboring
  page rather than inventing new markup.
  - `BookingBlock` takes an optional `slug` (wires to `lib/schedule.ts` for a
    "next dates" box — omit `slug` for a referral-only page with no local
    booking), `investment`, `duration`, and `note` (shown above the
    WhatsApp/Email buttons — use it for a "coming soon" message when there
    are no dates yet).
- **Class schedule**: `lib/schedule.ts` → `SCHEDULE` array, one entry per
  class with a `dates: string[]` (`YYYY-MM-DD`). `dates: []` means "not
  scheduled yet" — it's correctly invisible on `/calendar` and in
  `UpcomingDates`, but the page can still show a hand-written "coming soon"
  `note` via `BookingBlock`. `ClassCategory` = `"Activation" | "Initiation" |
  "Workshop" | "Community"`.
- **Blog**: `lib/blog/posts.ts` → `BLOG_POSTS` array (slug, title, excerpt,
  category, coverImage, releaseDate, `readyToPost`, keywords, readTime,
  `content`, optional `translations: { cs, de, ro }`). English body markdown
  in `lib/blog/content/<slug>.ts`; translated body+title+excerpt in
  `lib/blog/content/<locale>/<slug>.ts` (exports `post = { title, excerpt,
  content }`). A post is only live once **both** `releaseDate` has passed
  **and** `readyToPost: true` (set `BLOG_PREVIEW=true` locally to bypass both
  for review). Cover images come from `/public/images/art/*` — freely reused
  across posts/pages, no need for a unique image per post.
- **Chatbot knowledge base**: `scripts/build-knowledge.mjs` regenerates
  `lib/chatbot/site-knowledge.ts` (auto-generated — never hand-edit it, it
  gets overwritten). It walks every `app/**/page.tsx`, auto-discovers every
  component transitively imported via `@/components/*`, strips code/JS
  comments, and pulls in each page's `useTranslations()` /
  `getTranslations()` namespace content from `messages/en.json`. It also
  scans `@/lib/*` files a page imports **if** they load translations (e.g.
  `lib/healings.ts`, which holds the healing prices/links shared by
  `/healings` and the homepage teaser) — other lib files are skipped. **Run `node scripts/build-knowledge.mjs` after any
  copy change that should reach the chatbot** — `lib/chatbot/knowledge.ts`
  combines `KEY_FACTS + MMS_KNOWLEDGE + SITE_KNOWLEDGE` into the
  `KNOWLEDGE_BASE` the chat API actually uses.
  - After regenerating, **read the diff, don't trust the "wrote N pages, M
    chars" log line alone** — it's easy for a "fix" to look successful while
    silently gutting real content (happened once here: a first-pass fix
    replaced a good file with a much worse one; only caught by diffing
    against `git show HEAD:lib/chatbot/site-knowledge.ts`).
- **Sitemap**: `app/sitemap.ts` — `CORE_ROUTES` array (add new top-level
  pages here) + per-locale expansion; blog posts get one entry per locale
  only if `hasTranslation()` is true for that locale.

## Cal.com booking popup (per event/session page)

Pages with a **real, locally-run** class or session (as opposed to a
referral page — see Editorial conventions below) should let the booker pick
a date and book **without leaving the page**: clicking "Book Now" opens the
live Cal.com booking calendar as a popup overlay on top of the current page.
This is implemented once, generically, and reused per page — don't rebuild
the embed mechanics from scratch.

**The booking backend is a separate, sibling repo and deployment**:
self-hosted Cal.com at `booking.thepathofinitiationprague.com`, source in
`poip-booking-calcom` (a different Vercel project, different git repo from
this site). This repo only needs to know each event type's **calLink**
(`<organizer-username>/<event-slug>`) — everything else (price, dates,
payment, confirmation) is configured and lives over there.

### Wiring up a new page

1. Find the event type's calLink. The organizer username on this instance
   is **`all`**. Known slugs so far (confirm before reusing — Cal.com slugs
   don't always match the marketing-site route):
   - Empower Thyself → `all/empower-thyself`
   - Sacred Geometry 1 Class → `all/sacred-geometry-1-class`
   - Life Activation → `all/secret` (⚠️ slug is literally "secret", not
     "life-activation" — don't guess it from the page route)

   If you need a slug that isn't listed here: if this session has the
   `calcom-event-types` MCP server connected (a local, per-machine config in
   `poip-booking-calcom`'s `mcp-server/index.mjs`, registered in
   `~/.claude.json` — not guaranteed available in every environment), use
   its `list_event_types`/`get_event_type` tools. Otherwise, log into the
   Cal.com dashboard → Event types → "..." menu on the event → **Embed** →
   **"Pop up via element click"** → **React (iframe)** tab, which prints the
   exact `data-cal-*` attributes for that event (don't retype them from
   memory — copy what it shows).

2. In the page file, add:
   ```tsx
   import { CalcomPopupLoader } from "@/components/calcom-popup-loader"
   import { ..., type CalEmbed } from "@/components/modality"

   const BOOKING_URL = "https://booking.thepathofinitiationprague.com/all/<slug>"
   const CAL_NAMESPACE = "<slug>"
   const CAL_EMBED: CalEmbed = {
     link: "all/<slug>",
     namespace: CAL_NAMESPACE,
     config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
   }
   ```
   Mount `<CalcomPopupLoader namespace={CAL_NAMESPACE} />` once, anywhere
   inside `<ModalityShell>` (it renders nothing, just loads Cal's embed
   script for that namespace). Then pass `calEmbed={CAL_EMBED}` alongside
   the existing `href`/`bookHref` on `ImageHero`'s `cta` and on
   `BookingBlock` (as `bookCalEmbed`) — see `app/[locale]/empower-thyself/page.tsx`
   for the complete, working reference. The real `href` stays as a working
   link (right-click → open in new tab, or if JS fails); the popup is what
   actually fires on a normal click.

3. `tsc --noEmit` and a dev-server click-through (see Verification habits)
   — don't skip the live click test; see the gotcha below.

### The gotcha already solved for you

Cal.com's embed script (`embed-core`) attaches a single `document`-level
click listener for any element carrying `data-cal-link` that opens the
popup — but it **never calls `event.preventDefault()`**. Left alone, a
normal `<a href>` with these attributes both opens the popup *and* follows
the link (same tab, or a stray new tab if `target="_blank"` is set). The
`calEmbedAttrs()` helper in `components/modality.tsx` already attaches its
own `onClick={(e) => e.preventDefault()}` to cancel that. If you ever wire
up a **new, bespoke** trigger element instead of going through
`ImageHero`/`BookingBlock`, you must replicate this yourself or clicking
will misbehave exactly this way (confirmed by reading Cal's actual bundled
source, not assumed from docs — the official docs don't mention it).

### Maintaining an existing booking

- Price, available dates, payment method, deposit/full-payment options,
  confirmation flow: all live in Cal.com itself (the event type's settings
  on `booking.thepathofinitiationprague.com`, or via the
  `calcom-event-types` MCP server when connected). Changing them does **not**
  require a change in this repo.
- This repo only needs a change if: the Cal.com event slug changes (update
  `BOOKING_URL`/`CAL_EMBED.link` on that page), or the page's own displayed
  copy (investment/duration text, booking note) needs to match something
  that changed over there.
- Currently wired up this way: **Empower Thyself** only. Life Activation and
  Sacred Geometry 1 Class are real local bookings too but still use the
  plain pre-popup pattern — converting them is just following "Wiring up a
  new page" above with their known slugs.

## Key file map

| What | Where |
|---|---|
| Route pages | `app/[locale]/<route>/page.tsx` |
| Root layout, JSON-LD, body-level `overflow-x-hidden` | `app/[locale]/layout.tsx` |
| Sitemap | `app/sitemap.ts` |
| All page copy, per-locale | `messages/{en,cs,de,ro}.json` |
| Untranslatable proper-noun program names | `lib/brand-names.ts` |
| Class/workshop schedule | `lib/schedule.ts` |
| Blog metadata | `lib/blog/posts.ts` |
| Blog body content (en + per-locale) | `lib/blog/content/**` |
| Chatbot knowledge generator | `scripts/build-knowledge.mjs` |
| Chatbot knowledge (generated, don't hand-edit) | `lib/chatbot/site-knowledge.ts` |
| Chatbot knowledge (hand-written facts + combiner) | `lib/chatbot/knowledge.ts` |
| Shared page-shell components; `CalEmbed` type + `calEmbedAttrs` helper | `components/modality.tsx` |
| Loads Cal.com's embed script for the booking popup (mount once per page) | `components/calcom-popup-loader.tsx` |
| Site nav (desktop + mobile, **both** live here) | `components/header.tsx` |
| Footer nav | `components/footer.tsx` |
| Sacred Geometry I–IV cross-links | `components/sacred-geometry-series-links.tsx` |
| Locale/routing config | `i18n/routing.ts` |

## Editorial & content conventions

- Tone is hopeful/positive, never fear-based (original brief: "make all
  posts positive, bringing hope").
- First-person "I" narrative voice for personal-story blog posts (Radu's own
  voice); third-person for informational/evergreen posts.
- Primary source for Modern Mystery School facts:
  modernmysteryschoolint.com (HQ/international — use as the primary when a
  regional site disagrees), modernmysteryschooluk.com, thedavelanyon.com.
  When sources genuinely disagree on a fact (e.g. program length), say so in
  the copy rather than picking one arbitrarily ("10 to 12 months").
- Programs run by MMS leadership elsewhere (Keys of the Ancients with Dave
  Lanyon, the Kabbalah Ascension Program at HQ) are **referral pages, not
  local bookings** — no `slug`/investment/duration on `BookingBlock`, just a
  link to the official page + "ask Radu about it."
- Diana Coman (Radu's wife) is a co-teacher and equal, not an assistant —
  copy about her should never read as "helping Radu" or subordinate framing.
- New pages/posts default to going live immediately (today's date,
  `readyToPost: true`) unless there's a reason to schedule ahead — ask if
  ambiguous.

## Localization workflow

- New site-wide content (nav entries, new pages meant to ship fully
  localized) goes into **all 4** `messages/*.json` files in one pass, using
  the terminology already established in neighboring namespaces (check how
  "lineage", "initiate", "Workshop", King Salomon's name, etc. are already
  rendered in that language before translating from scratch).
- For genuinely new standalone content (a new blog post, a brand-new page),
  the pattern that's worked well here: ship English first, translate as an
  explicit follow-up once the user confirms wording — this repo iterates on
  English copy line-by-line before translation, and translating too early
  just means re-translating after edits.
- **Validate every `messages/*.json` edit immediately**: `node -e
  "JSON.parse(require('fs').readFileSync('messages/X.json','utf8'))"`. These
  files are large; one bad escape/quote breaks the whole app for that
  locale.
- German "you" is informal (`du`/`dein`), not formal `Sie` — matches the
  site's existing German copy.

## Verification habits

- Run `node_modules/.bin/tsc --noEmit -p tsconfig.json` after every
  substantive edit; a clean run prints nothing.
- Don't trust a script's own success message — spot-check the actual output
  (curl the dev server, read the generated file, diff against git HEAD)
  before calling something done.
- For CSS/visual bugs (overflow, layout), don't reason from source alone —
  measure it. Playwright isn't installed by default:
  `npm install --no-save playwright && npx playwright install chromium
  --with-deps` (doesn't touch package.json/lockfile). For horizontal-scroll
  bugs specifically, `document.documentElement.scrollWidth >
  window.innerWidth` alone can be misleading once `overflow-x: hidden` is
  set on `<body>` (the CSS spec propagates body's overflow to the viewport
  when `<html>` has default overflow, clipping real scrollability while
  `scrollWidth` can still read nonzero from now-invisible content) — confirm
  with a real `window.scrollTo(9999, 0)` + read back `window.scrollX`.
- `ScrollReveal` (`components/scroll-reveal.tsx`) with `direction="left"` /
  `"right"` applies a ±40px `translateX` in its pre-scroll-into-view hidden
  state. A below-the-fold section using it can silently contribute to page
  `scrollWidth` before it's ever revealed — a likely culprit if a "phantom"
  horizontal-scroll bug shows up on a page with no obviously-too-wide
  content.
- Flex rows of badges/pills need explicit `flex-wrap` — plain `flex` doesn't
  wrap to a new line on narrow viewports (real, not phantom, overflow).
- The homepage is the only page with its own per-page `overflow-x-hidden`
  wrapper div. The actual fix for a site-wide mobile-overflow class of bug
  was moving that to `<body>` in `app/[locale]/layout.tsx` once — prefer
  that kind of root-cause fix over re-wrapping each affected page
  individually.

## Windows dev-machine gotchas (this specific box)

- **Never rebuild a large file via `head -n N` + append + re-append the
  tail** — this truncates anything after the cut point if you forget the
  tail (lost `lib/blog/posts.ts`'s trailing helper functions this way once).
  Use a precise `Edit` (exact `old_string`/`new_string`) for structural
  inserts into long files instead of shell reconstruction.
- `.next/` can get OneDrive-locked mid-build (`EPERM: operation not
  permitted, rmdir ...` / "resource busy" during `next build`) — unrelated
  to code changes. Clearing `.next` and retrying sometimes helps; when it
  doesn't, `tsc --noEmit` + a dev-server smoke test is a fine substitute for
  a full production build.
- **Nodist** (the Node/npm version manager here) is unreliable for fetching
  *new* versions: `nodist npm add <version>` / `nodist npm <version>` hits a
  broken registry-search call ("Only the first 1000 results are
  available...") **and** leaves a bad pinned-version file
  (`Nodist/.npm-version-global`) that breaks every subsequent `node`/`npm`
  call until it's manually reset back to a known-good version. `nodist add
  <node-version>` + `nodist global <version>` for Node itself works fine.
  For a new npm version: `npm install <pkg>` into a scratch dir with the
  currently-working npm, then manually copy the result into
  `Nodist/npmv/<version>/` and edit `.npm-version-global` by hand.
  Currently pinned: Node 24.20.0, npm 12.0.2.
- Stray `next dev` processes on this machine don't always die cleanly
  (`lsof -ti:3000 -sTCP:LISTEN | xargs kill` can leave a PID that's still
  listening but no longer responding). Don't fight it — let Next.js
  auto-bump to the next free port (it prints which one) and just use that
  port.
- `git status`/diffs on this repo warn about LF→CRLF line-ending
  normalization — cosmetic noise from Windows git config, not a real
  problem; don't "fix" it.
- Playwright's Chromium download is ~300MB the first time — expect it to
  take a minute or so, not an error.
