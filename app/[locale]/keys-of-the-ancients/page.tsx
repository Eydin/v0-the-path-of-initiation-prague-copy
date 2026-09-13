// This is a referral/informational page, not a locally-run session: Keys of
// the Ancients is taught personally by Sovereign Ipsissimus Dave Lanyon at
// Modern Mystery School HQ events (historically London), not by Radu in
// Prague. The BookingBlock below deliberately has no `slug`/investment/
// duration — it only offers to connect a visitor with Radu, and links out to
// Dave Lanyon's own site for official dates and registration.
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import {
  ModalityShell,
  ModalityHero,
  Panel,
  PanelHeading,
  Lead,
  Body,
  BenefitList,
  WhatsAppButton,
  BookingBlock,
} from "@/components/modality"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "KeysOfTheAncientsPage" })
  const title = "Keys of the Ancients | The Path of Initiation Prague"
  const description = t("heroTagline")
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "/images/art/hermes-trismegistus-sienna-cathedral-mosaic.jpg", width: 1200, height: 630 }] },
  }
}

export default async function KeysOfTheAncients({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "KeysOfTheAncientsPage" })
  const inquiry = t("inquiry")
  const benefits = [0, 1, 2, 3].map((i) => ({ label: t(`benefits.${i}.label`), text: t(`benefits.${i}.text`) }))

  return (
    <ModalityShell bg="hermes-trismegistus-sienna-cathedral-mosaic.jpg" position="center 30%">
      <ModalityHero
        eyebrow={t("heroEyebrow")}
        title="Keys of the Ancients"
        subtitle={t("heroSubtitle")}
        tagline={t("heroTagline")}
      />

      <Panel>
        <Lead>{t("introLead")}</Lead>
        <Body>
          {t.rich("introBody1", { strong: (chunks) => <strong className="text-primary">{chunks}</strong> })}
        </Body>
        <Body>{t("introBody2")}</Body>
        <div className="border-t border-primary/20 pt-6">
          <WhatsAppButton text={inquiry} label={t("askLabel")} />
        </div>
      </Panel>

      <Panel>
        <PanelHeading>{t("learnHeading")}</PanelHeading>
        <BenefitList items={benefits} />
      </Panel>

      <Panel>
        <PanelHeading>{t("forYouHeading")}</PanelHeading>
        <Body>{t("forYouBody1")}</Body>
        <Body>
          {t.rich("forYouBody2", {
            link: (chunks) => (
              <a
                href="https://www.thedavelanyon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
              >
                {chunks}
              </a>
            ),
          })}
        </Body>
      </Panel>

      <BookingBlock title={t("bookingTitle")} inquiry={inquiry} note={t("bookingNote")} />
    </ModalityShell>
  )
}
