import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { LegalDocumentView } from "@/components/legal-document-view"
import { PRIVACY_CONTENT } from "@/lib/legal/privacy-content"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "PrivacyPolicyPage" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "PrivacyPolicyPage" })
  const doc = PRIVACY_CONTENT[locale as Locale] ?? PRIVACY_CONTENT.en

  return <LegalDocumentView doc={doc} backLabel={t("back")} />
}
