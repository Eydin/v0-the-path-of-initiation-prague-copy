"use client"

import { useState, type FormEvent } from "react"
import { useTranslations, useLocale } from "next-intl"
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react"

const fieldClass =
  "w-full rounded-sm border border-border bg-background/60 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
const labelClass = "mb-2 block text-sm font-semibold uppercase tracking-wide text-foreground"

export function WithdrawalForm() {
  const t = useTranslations("WithdrawalPage")
  const locale = useLocale()

  const [fields, setFields] = useState({
    services: "",
    orderDate: "",
    orderNumber: "",
    name: "",
    address: "",
    bankAccount: "",
    email: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function update(key: keyof typeof fields) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [key]: event.target.value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/withdrawal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, locale }),
      })
      if (!res.ok) throw new Error("request failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-primary/30 bg-muted/40 p-8 text-foreground">
        <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
        <p className="text-lg">{t("success")}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={labelClass} htmlFor="services">
          {t("servicesLabel")}
        </label>
        <textarea
          id="services"
          required
          rows={3}
          value={fields.services}
          onChange={update("services")}
          placeholder={t("servicesPlaceholder")}
          className={fieldClass}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="orderDate">
            {t("orderDateLabel")}
          </label>
          <input
            id="orderDate"
            type="date"
            required
            value={fields.orderDate}
            onChange={update("orderDate")}
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="orderNumber">
            {t("orderNumberLabel")} <span className="normal-case text-muted-foreground">({t("orderNumberOptional")})</span>
          </label>
          <input
            id="orderNumber"
            type="text"
            value={fields.orderNumber}
            onChange={update("orderNumber")}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="name">
          {t("nameLabel")}
        </label>
        <input id="name" type="text" required value={fields.name} onChange={update("name")} className={fieldClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="address">
          {t("addressLabel")}
        </label>
        <input
          id="address"
          type="text"
          required
          value={fields.address}
          onChange={update("address")}
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="bankAccount">
          {t("bankAccountLabel")}
        </label>
        <input
          id="bankAccount"
          type="text"
          required
          value={fields.bankAccount}
          onChange={update("bankAccount")}
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          {t("emailLabel")}
        </label>
        <input
          id="email"
          type="email"
          required
          value={fields.email}
          onChange={update("email")}
          className={fieldClass}
        />
        <p className="mt-1.5 text-xs text-muted-foreground">{t("emailHint")}</p>
      </div>

      <p className="text-xs text-muted-foreground">{t("requiredFieldsNote")}</p>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-14 items-center justify-center gap-3 rounded-sm border border-primary bg-primary px-8 font-serif text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? t("submitting") : t("submit")}
        <ArrowRight className="h-4 w-4" />
      </button>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          <span>{t("errorGeneric")}</span>
        </div>
      )}
    </form>
  )
}
