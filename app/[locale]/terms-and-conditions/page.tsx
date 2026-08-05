import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { LegalDocumentView } from "@/components/legal-document-view"
import { TERMS_CONTENT } from "@/lib/legal/terms-content"
import { Link } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "TermsPage" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function TermsAndConditionsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "TermsPage" })
  const doc = TERMS_CONTENT[locale as Locale] ?? TERMS_CONTENT.en

  return (
    <LegalDocumentView
      doc={doc}
      backLabel={t("back")}
      annotations={{
        "6.4": (
          <Link
            href="/withdraw-from-contract"
            className="inline-block text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/80"
          >
            {t("withdrawalCta")}
          </Link>
        ),
      }}
    />
  )
}
