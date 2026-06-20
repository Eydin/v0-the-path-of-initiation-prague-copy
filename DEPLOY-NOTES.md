# Deploy Notes — for Eydin

The production domain **thepathofinitiationprague.com** is serving an old build.
`main` is fully up to date, but the live domain has not auto-deployed in ~30 days, so all
new routes 404 in production.

## Confirmed live status (2026-06-20)

Checked the real domain vs. the current build:

| Route          | thepathofinitiationprague.com | current build (preview) |
|----------------|-------------------------------|-------------------------|
| `/`            | 200                           | 200                     |
| `/calendar`    | **404**                       | 200                     |
| `/healings`    | **404**                       | 200                     |
| `/astral-travel` | **404**                     | 200                     |

`main` HEAD = `4d3ff87`. The build is healthy and deploys fine — the only problem is the
Vercel ↔ GitHub auto-deploy for the production domain is disconnected or paused.

## Two Vercel projects exist

- **Eydin's project** owns `thepathofinitiationprague.com` — this is the stale one.
- **Paul's project** (`v0-prague-clone`, Dagon's account) is connected to the **same repo**
  (`Eydin/v0-the-path-of-initiation-prague-copy`, branch `main`) and auto-deploys correctly.
  Latest production deploy is READY. It serves the current site at:
  **https://v0-prague-clone.vercel.app**

## Fix — option A (Eydin's project, keeps current setup)

1. Open the Vercel project that owns `thepathofinitiationprague.com`.
2. **Settings → Git** — confirm it's connected to `Eydin/v0-the-path-of-initiation-prague-copy`
   with **Production Branch = `main`**.
3. Confirm deploys aren't paused (Settings → Git → Ignored Build Step / deployment pausing).
4. **Deployments** → redeploy the latest `main` commit → **Promote to Production**.

## Fix — option B (fastest — repoint domain to the working build)

If Eydin's project stays broken, move the domain to Paul's already-working project:

1. In Eydin's Vercel project: **Settings → Domains** → remove `thepathofinitiationprague.com`.
2. In Paul's `v0-prague-clone` project: **Settings → Domains** → add
   `thepathofinitiationprague.com` and follow the DNS instructions.

(Requires Eydin to release the domain first; DNS lives with Eydin either way.)

## Verify after deploy

- `thepathofinitiationprague.com/calendar` → 200
- `thepathofinitiationprague.com/healings` → 200
- `thepathofinitiationprague.com/astral-travel` → 200
- WhatsApp bubble appears bottom-right on every page

## Build facts

- Next.js 16 (Turbopack), `pnpm build` passes locally, 21 static routes.
- No env vars required for the build.

## What shipped recently (all on `main`)

- Class **Calendar** (`/calendar`) + next-2-dates on every class page
- Cinematic calendar redesign; all 11 class pages unified to one visual system
- Floating **WhatsApp** button site-wide
- **Dragon** home hero with Ken Burns motion
- **Healing Modalities** menu (`/healings`) + **KSHM Specialty Healings** (`/specialty-healings`)
