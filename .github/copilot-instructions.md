# Booking and website synchronization

- Keep live Cal.com bookings at `booking.thepathofinitiationprague.com` in sync with the website content. A content-only edit is not sufficient when it changes what visitors can book.
- When changing a session's formats, price, duration, location, hosts, dates, or payment terms, inspect the existing Cal.com event types and update both sides as needed. Preserve unrelated scheduling, conflict checks, booking questions, payment, notification, and cancellation settings.
- If a session is offered in person and remotely, expose both choices on its page and any booking cards using the existing `bookOptions` pattern, each linked to a verified live event with the correct location.
- Preserve working booking URLs where possible. Never invent event slugs or link visitors to an unconfigured event.
- Update affected translations in all four `messages/*.json` files, regenerate `lib/chatbot/site-knowledge.ts` with `node scripts/build-knowledge.mjs`, and inspect the diff.
- Verify the saved Cal.com settings and click through every changed booking option without submitting a real booking. If Cal.com access is unavailable, report the sync as blocked rather than claiming completion.

See `.claude/skills/poip-website/SKILL.md` for the site's booking implementation and maintenance reference.
