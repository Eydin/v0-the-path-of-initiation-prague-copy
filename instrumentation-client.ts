import { initBotId } from "botid/client/core"

// Vercel BotID: an invisible check that requests to these routes come from a
// real browser on this site, not a script. Each route listed here calls
// checkBotId() on the server, and every route that calls it must be listed here.
initBotId({
  protect: [
    { path: "/api/chat", method: "POST" },
    { path: "/api/contact", method: "POST" },
    { path: "/api/withdrawal", method: "POST" },
  ],
})
