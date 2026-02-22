import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'The Path of Initiation Prague | Radu Coman',
  description: 'A 3,000-year-old lineage of spiritual initiation, now open to the modern seeker. Begin your journey of transformation in Prague with Guide Radu Coman.',
  generator: 'v0.app',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.thepathofinitiationprague.com/#radu-coman",
        "name": "Radu Coman",
        "jobTitle": "Guide and Teacher of the Path of Initiation",
        "description": "Radu Coman is a certified Guide and Teacher in the Lineage of King Salomon, dedicated to spiritual awakening, practical magic, and soul development.",
        "url": "https://www.thepathofinitiationprague.com",
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
          "Practical Magic"
        ]
      },
      {
        "@type": "ProfessionalService",
        "name": "The Path of Initiation Prague",
        "url": "https://www.thepathofinitiationprague.com",
        "logo": "https://www.thepathofinitiationprague.com/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Prague",
          "addressCountry": "CZ"
        },
        "description": "A dedicated training program and mystery school path in Prague focused on spiritual knowledge, divine purpose, and healing.",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Modern Mystery School International",
          "url": "https://www.modernmysteryschoolint.com"
        }
      },
      {
        "@type": "Course",
        "name": "The Path of Initiation Training Program",
        "description": "A comprehensive spiritual training involving months of study and constant practice to awaken magic, develop the soul, and learn healing modalities.",
        "provider": {
          "@type": "Person",
          "@id": "https://www.thepathofinitiationprague.com/#radu-coman"
        },
        "educationalCredentialAwarded": "Certified Initiate",
        "syllabusSections": [
          {
            "@type": "Syllabus",
            "name": "Spiritual Knowledge and Understanding"
          },
          {
            "@type": "Syllabus",
            "name": "Awakening Practical Magic"
          },
          {
            "@type": "Syllabus",
            "name": "Soul Development and Higher Purpose"
          },
          {
            "@type": "Syllabus",
            "name": "Healing Modalities and Service"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
