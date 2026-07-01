import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { SmoothScroll } from '@/components/ui/smooth-scroll'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const cormorant = Fraunces({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aurelia-med-spa.vercel.app/'
  ),
  title: 'Lumière Medical Spa | Personalized Aesthetic Care in Scottsdale',
  description:
    'Personalized aesthetic treatments designed by board-certified physician Dr. Sophia Laurent to help you achieve natural, confident, and lasting results in Scottsdale, Arizona.',
  openGraph: {
    title: 'Lumière Medical Spa | Personalized Aesthetic Care in Scottsdale',
    description:
      'Personalized aesthetic treatments designed by board-certified physician Dr. Sophia Laurent to help you achieve natural, confident, and lasting results in Scottsdale, Arizona.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aurelia-med-spa.vercel.app/',
    siteName: 'Lumière Medical Spa',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lumière Medical Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumière Medical Spa | Personalized Aesthetic Care in Scottsdale',
    description:
      'Personalized aesthetic treatments designed by board-certified physician Dr. Sophia Laurent to help you achieve natural, confident, and lasting results in Scottsdale, Arizona.',
    images: ['/og-image.png'],
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

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf8f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
