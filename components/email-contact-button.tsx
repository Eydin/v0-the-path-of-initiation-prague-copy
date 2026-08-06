"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import { useTranslations, useLocale } from "next-intl"
import { AlertCircle, CheckCircle2, Send } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const fieldClass =
  "w-full rounded-sm border border-border bg-background/60 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
const labelClass = "mb-2 block text-sm font-semibold uppercase tracking-wide text-foreground"

/**
 * Drop-in replacement for a `mailto:` link. Renders whatever trigger markup
 * is passed as children (so callers keep their exact existing button styling)
 * and opens a dialog with a small form that sends the message via /api/contact
 * instead of handing off to the visitor's email client.
 */
export function EmailContactButton({
  className,
  children,
  context = "",
}: {
  className?: string
  children: ReactNode
  context?: string
}) {
  const t = useTranslations("ContactDialog")
  const locale = useLocale()

  const [open, setOpen] = useState(false)
  const [fields, setFields] = useState({ name: "", email: "", message: context })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function onOpenChange(next: boolean) {
    setOpen(next)
    if (next) {
      setStatus("idle")
      setFields({ name: "", email: "", message: context })
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, context, locale }),
      })
      if (!res.ok) throw new Error("request failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button type="button" className={className}>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-card border-primary/20 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl text-primary">{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="flex items-center gap-3 rounded-lg border border-primary/30 bg-muted/40 p-6 text-foreground">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
            <p>{t("success")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={labelClass} htmlFor="contact-name">
                {t("nameLabel")}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={fields.name}
                onChange={(e) => setFields((prev) => ({ ...prev, name: e.target.value }))}
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="contact-email">
                {t("emailLabel")}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={fields.email}
                onChange={(e) => setFields((prev) => ({ ...prev, email: e.target.value }))}
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="contact-message">
                {t("messageLabel")}
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={fields.message}
                onChange={(e) => setFields((prev) => ({ ...prev, message: e.target.value }))}
                className={fieldClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-sm border border-primary bg-primary px-8 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? t("submitting") : t("submit")}
              <Send className="h-4 w-4" />
            </button>

            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{t("errorGeneric")}</span>
              </div>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
