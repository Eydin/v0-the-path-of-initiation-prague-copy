import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Link } from "@/i18n/navigation"
import { WithdrawalForm } from "@/components/withdrawal-form"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "WithdrawalPage" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function WithdrawFromContractPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "WithdrawalPage" })

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <Link
            href="/"
            className="mb-10 inline-block text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            ← {t("back")}
          </Link>

          <h1 className="mb-4 font-serif text-3xl tracking-wide text-primary md:text-4xl">{t("heading")}</h1>
          <p className="mb-12 text-lg leading-relaxed text-muted-foreground">{t("intro")}</p>

          <WithdrawalForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
