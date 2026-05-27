import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://jupiter-ai.co'
  ),

  title: {
    default: 'Jupiter AI — AI Built for Real Business Workflows',
    template: '%s | Jupiter AI',
  },

  description:
    'Jupiter AI builds vertical AI tools shaped around how businesses actually operate. Start with Fashion AI — get AI-powered SEO, insights, and automation built for the way your business works.',

  keywords: [
    'vertical AI',
    'AI for business',
    'business AI tools',
    'AI workflow automation',
    'fashion AI',
    'AI SEO tool',
    'Jupiter AI',
    'Jupiter Rank',
  ],

  authors: [{ name: 'Jupiter AI', url: 'https://jupiter-ai.co' }],
  creator: 'Jupiter AI',
  publisher: 'Jupiter AI',

  alternates: {
    canonical: 'https://jupiter-ai.co',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Jupiter AI',
    title: 'Jupiter AI — AI Built for Real Business Workflows',
    description:
      'Vertical AI tools shaped around how businesses actually operate. Not generic AI. AI that fits your workflow.',
    url: 'https://jupiter-ai.co',
    images: [
      {
        url: '/og/default.png',
        width: 1200,
        height: 630,
        alt: 'Jupiter AI — AI Built for Real Business Workflows',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@JupiterAI_co',
    creator: '@JupiterAI_co',
    title: 'Jupiter AI — AI Built for Real Business Workflows',
    description:
      'Vertical AI tools shaped around how businesses actually operate.',
    images: ['/og/default.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',

  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DN2MMHCXQB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DN2MMHCXQB');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-navy text-white">
        <ScrollToTop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
