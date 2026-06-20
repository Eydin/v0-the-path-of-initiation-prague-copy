# Deploy Notes — for Eydin

The production domain **thepathofinitiationprague.com** has not auto-deployed in ~30 days.
`main` is fully up to date, but the live site is serving an old build (new routes 404 in
production, e.g. `/astral-travel`, `/calendar`).

The Vercel ↔ GitHub auto-deploy for the production domain appears disconnected or paused.

## Fix

1. Open the Vercel project that owns `thepathofinitiationprague.com`.
2. **Settings → Git** — confirm it's connected to `Eydin/v0-the-path-of-initiation-prague-copy`
   with **Production Branch = `main`**.
3. Confirm deploys aren't paused (Settings → Git → Ignored Build Step / deployment pausing).
4. Trigger a redeploy of the latest `main` commit and **promote it to Production**.

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

A live preview of the current build (deployed separately, not the real domain):
**https://v0-prague-clone.vercel.app**
