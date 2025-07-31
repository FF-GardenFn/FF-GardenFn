import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Load Inter font with Latin subset
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ff-gardenfn.github.io/FF-GardenFn'),
  title: {
    default: 'FF-GardenFn | Where Ideas Germinate & Bloom',
    template: '%s | FF-GardenFn'
  },
  description: 'A callable, ever-evolving "function" that surfaces curated experiments, unfinished thoughts, and executable insight fragments from Faycal Farhat\'s hyperstack.',
  keywords: ['AI Alignment', 'State Transition Calculus', 'STC', 'Faycal Farhat', 'Research', 'Programming', 'Garden'],
  authors: [{ name: 'Faycal Farhat', url: 'https://github.com/FF-GardenFn' }],
  creator: 'Faycal Farhat',
  publisher: 'Faycal Farhat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'FF-GardenFn | Where Ideas Germinate & Bloom',
    description: 'A callable, ever-evolving "function" that surfaces curated experiments, unfinished thoughts, and executable insight fragments.',
    url: '/',
    siteName: 'FF-GardenFn',
    images: [
      {
        url: '/meta-image.png',
        width: 1200,
        height: 630,
        alt: 'FF-GardenFn - Where Ideas Germinate & Bloom',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FF-GardenFn | Where Ideas Germinate & Bloom',
    description: 'A callable, ever-evolving "function" that surfaces curated experiments, unfinished thoughts, and executable insight fragments.',
    images: ['/meta-image.png'],
    creator: '@FF_GardenFn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}