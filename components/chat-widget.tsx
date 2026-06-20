"use client"

// Floating AI chat assistant — fixed bottom-right on every page, replacing the
// old WhatsApp float. Answers from the site + Modern Mystery School knowledge,
// and hands off to Radu on WhatsApp when it can't help.

import { useEffect, useRef, useState } from "react"
import { Sparkles, X, Send, ArrowUpRight } from "lucide-react"
import { ASSISTANT_NAME, GREETING, WHATSAPP_HANDOFF } from "@/lib/chatbot/config"

type Msg = { role: "user" | "assistant"; content: string }

const WA_SVG = (
  <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current" aria-hidden focusable="false">
    <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.258.59 4.46 1.71 6.402L3.2 28.8l6.57-1.69a12.74 12.74 0 0 0 6.234 1.588h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.052A12.71 12.71 0 0 0 16.004 3.2Zm0 23.36h-.004a10.57 10.57 0 0 1-5.385-1.474l-.386-.23-4.003 1.03 1.068-3.903-.252-.4a10.55 10.55 0 0 1-1.617-5.613c0-5.86 4.768-10.627 10.633-10.627 2.84 0 5.508 1.107 7.515 3.117a10.56 10.56 0 0 1 3.112 7.518c0 5.86-4.768 10.628-10.62 10.628l-.554-.143Zm5.83-7.957c-.32-.16-1.89-.932-2.183-1.04-.293-.106-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.214-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.586-.95-.847-1.59-1.893-1.777-2.213-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.534.107-.213.054-.4-.026-.56-.08-.16-.72-1.733-.986-2.373-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.823.763.33 1.358.527 1.822.674.766.244 1.463.21 2.014.127.614-.092 1.89-.773 2.156-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
  </svg>
)

function WhatsAppHandoff({ prominent = false }: { prominent?: boolean }) {
  return (
    <a
      href={WHATSAPP_HANDOFF}
      target="_blank"
      rel="noopener noreferrer"
      className={
        prominent
          ? "inline-flex items-center justify-center gap-2 rounded border border-[#25D366] bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1ebe5b]"
          : "inline-flex items-center gap-1.5 text-xs tracking-wide text-muted-foreground transition-colors hover:text-[#25D366]"
      }
    >
      {WA_SVG}
      {prominent ? "Message Radu on WhatsApp" : "Talk to Radu on WhatsApp"}
      {prominent && <ArrowUpRight className="h-3.5 w-3.5" />}
    </a>
  )
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [streaming, setStreaming] = useState(false)
  const [error, setError] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, streaming, open])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200)
  }, [open])

  async function send() {
    const text = input.trim()
    if (!text || streaming) return
    setError(false)
    setInput("")

    const history: Msg[] = [...messages, { role: "user", content: text }]
    // Add the user turn + an empty assistant turn we will stream into.
    setMessages([...history, { role: "assistant", content: "" }])
    setStreaming(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      })

      if (!res.ok || !res.body) throw new Error(`status ${res.status}`)

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let acc = ""
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        acc += decoder.decode(value, { stream: true })
        setMessages((prev) => {
          const next = [...prev]
          next[next.length - 1] = { role: "assistant", content: acc }
          return next
        })
      }
      if (!acc.trim()) throw new Error("empty response")
    } catch (err) {
      console.error("[chat] failed:", err)
      setError(true)
      setMessages((prev) => {
        const next = [...prev]
        next[next.length - 1] = {
          role: "assistant",
          content:
            "I'm sorry — I can't reach my knowledge right now. Radu would be glad to help you personally on WhatsApp.",
        }
        return next
      })
    } finally {
      setStreaming(false)
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Ask the Path of Initiation assistant"
          className="group chat-launcher-nudge fixed bottom-6 right-6 z-[60] flex items-center"
          style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <span className="pointer-events-none mr-3 hidden translate-x-2 whitespace-nowrap rounded-full border border-primary/30 bg-background/90 px-4 py-2 font-serif text-sm tracking-wide text-foreground opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:inline-block">
            Ask a question
          </span>
          <span className="chat-launcher-glow relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-primary/40 transition-transform duration-300 group-hover:scale-110">
            <Sparkles className="h-6 w-6" />
          </span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Path of Initiation assistant"
          className="fixed inset-x-0 bottom-0 z-[60] flex h-[85dvh] flex-col border-t border-primary/30 bg-background shadow-2xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:h-[34rem] sm:w-[24rem] sm:rounded-2xl sm:border"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-primary/20 bg-muted/40 px-4 py-3 sm:rounded-t-2xl">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Sparkles className="h-4.5 w-4.5" />
              </span>
              <div className="leading-tight">
                <p className="font-serif text-sm tracking-wide text-primary">Path of Initiation · {ASSISTANT_NAME}</p>
                <p className="text-[11px] text-muted-foreground">Ask about classes, healings & the lineage</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {/* Greeting */}
            <div className="flex">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-primary/15 bg-muted/50 px-3.5 py-2.5 text-sm leading-relaxed text-foreground">
                {GREETING}
              </div>
            </div>

            {messages.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2.5 text-sm leading-relaxed text-primary-foreground">
                    {m.content}
                  </div>
                </div>
              ) : (
                <div key={i} className="flex">
                  <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tl-sm border border-primary/15 bg-muted/50 px-3.5 py-2.5 text-sm leading-relaxed text-foreground">
                    {m.content || (
                      <span className="inline-flex gap-1 align-middle">
                        <Dot /> <Dot delay="150ms" /> <Dot delay="300ms" />
                      </span>
                    )}
                  </div>
                </div>
              ),
            )}

            {error && (
              <div className="flex justify-center pt-1">
                <WhatsAppHandoff prominent />
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-primary/20 bg-muted/30 px-3 py-3 sm:rounded-b-2xl">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Type your question…"
                className="max-h-28 min-h-[44px] flex-1 resize-none rounded-xl border border-primary/20 bg-background px-3.5 py-3 text-base leading-snug text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary/50"
              />
              <button
                onClick={send}
                disabled={streaming || !input.trim()}
                aria-label="Send"
                className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-center">
              <WhatsAppHandoff />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Dot({ delay = "0ms" }: { delay?: string }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60"
      style={{ animationDelay: delay, animationDuration: "1s" }}
    />
  )
}
