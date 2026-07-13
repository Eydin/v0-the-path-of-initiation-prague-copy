// Persists chat Q&A pairs to Vercel Postgres for later review.
//
// One-time setup:
//   1. In the Vercel dashboard: Storage tab → Create Database → Postgres,
//      then connect it to this project (this injects POSTGRES_URL, etc.
//      into your Production/Preview/Development env vars automatically).
//   2. Open that database's Query tab (or `vercel env pull` + run locally)
//      and run once:
//
//        CREATE TABLE IF NOT EXISTS chat_logs (
//          id SERIAL PRIMARY KEY,
//          created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
//          session_id TEXT,
//          question TEXT NOT NULL,
//          answer TEXT NOT NULL
//        );
//
//   To review past questions, run in that same Query tab:
//     SELECT created_at, question, answer FROM chat_logs ORDER BY created_at DESC;

import { sql } from "@vercel/postgres"

export async function logChatExchange(sessionId: string | undefined, question: string, answer: string) {
  try {
    await sql`
      INSERT INTO chat_logs (session_id, question, answer)
      VALUES (${sessionId ?? null}, ${question}, ${answer})
    `
  } catch (err) {
    // Never let logging failures break the chat response.
    console.error("[chat] failed to log exchange:", err)
  }
}
