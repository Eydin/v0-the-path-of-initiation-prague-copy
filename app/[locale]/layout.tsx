import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ChatWidget } from '@/components/chat-widget'
import { routing } from '@/i18n/routing'
import '../globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const SITE = "https://www.thepathofinitiationprague.com"

const OPEN_GRAPH_LOCALE: Record<string, string> = {
  en: "en_US",
  cs: "cs_CZ",
  de: "de_DE",
  ro: "ro_RO",
}

const JSON_LD_LANGUAGE: Record<string, string> = {
  en: "en",
  cs: "cs",
  de: "de",
  ro: "ro",
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'The Path of Initiation Prague | Radu Coman',
    description: 'A 3,000-year-old lineage of spiritual initiation, now open to the modern seeker. Begin your journey of transformation in Prague with Guide Radu Coman.',
    generator: 'v0.app',
    metadataBase: new URL(SITE),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, l === routing.defaultLocale ? "/" : `/${l}`]),
      ),
    },
    openGraph: {
      title: 'The Path of Initiation Prague | Radu Coman',
      description: 'Begin your journey of spiritual transformation, life activation, and ancient mystery school lineage teachings locally in Prague.',
      url: SITE,
      siteName: 'The Path of Initiation Prague',
      images: [
        {
          url: '/images/radu-coman-square.jpg', // High-quality featured image
          width: 1080,
          height: 1080,
          alt: 'Radu Coman - Guide and Teacher of the Path of Initiation',
        },
      ],
      locale: OPEN_GRAPH_LOCALE[locale] ?? OPEN_GRAPH_LOCALE[routing.defaultLocale],
      type: 'website',
    },
    icons: {
      icon: [
        {
          url: '/icon-light-32x32.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/icon-dark-32x32.png',
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: '/icon.svg',
          type: 'image/svg+xml',
        },
      ],
      apple: '/apple-icon.png',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)
  const messages = await getMessages()

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        "url": SITE,
        "name": "The Path of Initiation Prague",
        "description": "A 3,000-year-old lineage of spiritual initiation, now open to the modern seeker — with Guide Radu Coman in Prague.",
        "inLanguage": JSON_LD_LANGUAGE[locale] ?? JSON_LD_LANGUAGE[routing.defaultLocale],
        "publisher": { "@id": `${SITE}/#organization` },
        "about": { "@id": `${SITE}/#organization` }
      },
      {
        "@type": "Person",
        "@id": `${SITE}/#radu-coman`,
        "name": "Radu Coman",
        "jobTitle": "Guide and Teacher of the Path of Initiation",
        "description": "Radu Coman is a certified Guide and Teacher in the Lineage of King Salomon, dedicated to spiritual awakening, practical magic, and soul development.",
        "url": SITE,
        "image": `${SITE}/images/radu-coman-square.jpg`,
        "worksFor": { "@id": `${SITE}/#organization` },
        "knowsLanguage": ["en", "ro", "cs"],
        "sameAs": [
          "https://www.universitateapentrusuflet.ro",
          "https://www.modernmysteryschoolint.com",
          "https://www.modernmysteryschooluk.com"
        ],
        "knowsAbout": [
          "Hermeticism",
          "Life Activation",
          "Initiation",
          "Sacred Geometry",
          "Healing Modalities",
          "Practical Magic",
          "Modern Mystery School",
          "Lineage of King Salomon"
        ]
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${SITE}/#organization`,
        "name": "The Path of Initiation Prague",
        "url": SITE,
        "logo": `${SITE}/logo.png`,
        "image": `${SITE}/logo.png`,
        "description": "A dedicated training program and mystery school path in Prague focused on spiritual knowledge, divine purpose, healing and practical magic — part of the Modern Mystery School lineage. Taught in English.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ve Smečkách 22, Nové Město",
          "postalCode": "110 00",
          "addressLocality": "Prague",
          "addressCountry": "CZ"
        },
        "areaServed": ["Prague", "Czech Republic", "Europe"],
        "availableLanguage": ["English", "Czech", "German", "Romanian"],
        "priceRange": "$$",
        "telephone": "+420 792 908 296",
        "email": "info@thepathofinitiationprague.com",
        "founder": { "@id": `${SITE}/#radu-coman` },
        "knowsAbout": [
          "Life Activation",
          "Empower Thyself Initiation",
          "Healers Academy",
          "Sacred Geometry",
          "Astral Travel",
          "Spiritual Intuition",
          "King Salomon Healing Modalities"
        ],
        "sameAs": [
          "https://www.modernmysteryschoolint.com",
          "https://www.modernmysteryschooluk.com"
        ],
        "parentOrganization": {
          "@type": "Organization",
          "name": "Modern Mystery School International",
          "url": "https://www.modernmysteryschoolint.com",
          "sameAs": ["https://www.modernmysteryschoolint.com"]
        }
      },
      {
        "@type": "Course",
        "name": "The Path of Initiation Training Program",
        "description": "A comprehensive spiritual training involving months of study and constant practice to awaken magic, develop the soul, and learn healing modalities.",
        "provider": { "@id": `${SITE}/#organization` },
        "educationalCredentialAwarded": "Certified Initiate",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "location": { "@type": "Place", "name": "Prague, Czech Republic" }
        },
        "syllabusSections": [
          { "@type": "Syllabus", "name": "Spiritual Knowledge and Understanding" },
          { "@type": "Syllabus", "name": "Awakening Practical Magic" },
          { "@type": "Syllabus", "name": "Soul Development and Higher Purpose" },
          { "@type": "Syllabus", "name": "Healing Modalities and Service" }
        ]
      },
      {
        "@type": "Course",
        "name": "Empower Thyself",
        "url": `${SITE}/empower-thyself`,
        "description": "First level of Initiation focused on awakening the inner power, understanding the self, and beginning the journey of transformation.",
        "provider": { "@id": `${SITE}/#organization` },
        "educationalCredentialAwarded": "Certified Initiate",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "courseWorkload": "2 days in person, followed by weekly follow-up sessions for ~3 months",
          "location": { "@type": "Place", "name": "Prague, Czech Republic" }
        },
        "syllabusSections": [
          { "@type": "Syllabus", "name": "Spiritual Knowledge and Understanding" },
          { "@type": "Syllabus", "name": "Awakening Practical Magic" },
          { "@type": "Syllabus", "name": "Soul Development and Higher Purpose" }
        ]
      },
      {
        "@type": "Service",
        "name": "Life Activation",
        "url": `${SITE}/life-activation`,
        "serviceType": "Energy Healing / DNA Activation",
        "description": "A foundational session of the Modern Mystery School that activates 22 of the 24 DNA strands to awaken your divine potential, clarity and life force. Duration approximately 2 hours.",
        "provider": { "@id": `${SITE}/#organization` },
        "areaServed": "Prague, Czech Republic",
        "offers": {
          "@type": "Offer",
          "price": "8500",
          "priceCurrency": "CZK",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "name": "Healing Modalities",
        "url": `${SITE}/healings`,
        "serviceType": "Spiritual Healing",
        "description": "A range of authentic Modern Mystery School healing sessions offered in Prague, including Sacred Geometry Aura Healing and the King Salomon Healing Modalities (KSHM).",
        "provider": { "@id": `${SITE}/#organization` },
        "areaServed": "Prague, Czech Republic"
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is The Path of Initiation Prague?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Path of Initiation Prague is a spiritual training path and mystery-school program in Prague, guided by Radu Coman, a certified Guide in the Lineage of King Salomon (Modern Mystery School). It offers activations, initiations, healings and classes, taught in English."
            }
          },
          {
            "@type": "Question",
            "name": "Who is Radu Coman?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Radu Coman is a Guide and Teacher in the Lineage of King Salomon, certified by the Modern Mystery School. He brings the ancient teachings to Prague, guiding people through initiation, activation and healing in English."
            }
          },
          {
            "@type": "Question",
            "name": "What is Life Activation and how much does it cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Life Activation is the foundational session of the Modern Mystery School. It activates 22 of the 24 DNA strands to awaken your divine potential. The session lasts about 2 hours and the investment is 8,500 CZK."
            }
          },
          {
            "@type": "Question",
            "name": "What is Empower Thyself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Empower Thyself is the first level of initiation — a 2-day in-person program followed by weekly follow-up sessions over about three months, where you receive the sacred tools and teachings to take command of your life as an Initiate."
            }
          },
          {
            "@type": "Question",
            "name": "Where is The Path of Initiation Prague located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ve Smečkách 22, Nové Město, 110 00 Prague, Czech Republic. You can reach Radu on WhatsApp at +420 792 908 296."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Modern Mystery School and the Lineage of King Salomon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Modern Mystery School is a worldwide spiritual education organisation that carries the Lineage of King Salomon — a tradition of mystery-school teachings spanning more than 3,000 years, founded by Gudni Gudnason. The Path of Initiation Prague teaches these authentic modalities locally in Prague."
            }
          },
          {
            "@type": "Question",
            "name": "How do I begin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most people begin with a Life Activation or with the Empower Thyself initiation. Reach out to Radu on WhatsApp at +420 792 908 296 and he will guide you personally to the right first step."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          {children}
          <ChatWidget />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
