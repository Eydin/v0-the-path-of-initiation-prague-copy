"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, CheckCircle2, Mail, AlertCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"

const HUBSPOT_ENDPOINT =
  "https://api.hsforms.com/submissions/v3/integration/submit/244385888/1234d7eb-cafd-416c-ac29-891fcefedeb6"
const MAILERLITE_ENDPOINT = "https://static.mailerlite.com/webforms/submit/o1u2r8"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      setStatus("error")
      setMessage("Please enter your email address.")
      return
    }

    setStatus("loading")
    setMessage("")

    try {
      const [hubspotResponse, mailerliteResponse] = await Promise.all([
        fetch(HUBSPOT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            submittedAt: Date.now().toString(),
            fields: [{ objectTypeId: "0-1", name: "email", value: trimmedEmail }],
            context: {
              pageUri: window.location.href,
              pageName: document.title || "The Path of Initiation Prague",
            },
          }),
        }),
        fetch(MAILERLITE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
          body: new URLSearchParams({
            "fields[email]": trimmedEmail,
            "ml-submit": "1",
          }).toString(),
        }),
      ])

      if (!hubspotResponse.ok || !mailerliteResponse.ok) {
        throw new Error("Unable to submit subscription")
      }

      setStatus("success")
      setMessage("Thank you — your subscription request has been received.")
      setEmail("")
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again or contact us directly.")
    }
  }

  return (
    <section
      id="newsletter"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "clamp(460px, 60vh, 600px)" }}
    >
      <ParallaxImage src="/images/art/flammarion.jpg" alt="" position="center 30%" strength={60} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/90" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <div className="mx-auto mb-6 h-px w-24 bg-primary/60" />
          <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-primary">
            Letters from the Path
          </p>
          <h2 className="mb-5 font-serif text-3xl leading-tight tracking-wide text-foreground md:text-4xl lg:text-5xl text-balance">
            Receive the Teachings
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Occasional letters on initiation, sacred geometry, and the work of the soul —
            sent only when there is something worth saying.
          </p>

          <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/60" />
              <input
                type="email"
                inputMode="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                aria-label="Your email address"
                className="h-14 w-full rounded-sm border border-border bg-background/60 pl-11 pr-4 text-base text-foreground placeholder:text-muted-foreground/70 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-sm border border-primary bg-primary px-8 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Submitting..." : "Subscribe"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {message ? (
            <div
              className={`mt-4 flex items-center justify-center gap-2 text-sm ${
                status === "error" ? "text-destructive" : "text-primary"
              }`}
            >
              {status === "success" ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <span>{message}</span>
            </div>
          ) : null}

          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
            No noise. Unsubscribe anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
