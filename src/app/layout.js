import '@/styles/globals.css'

import { cn } from '@/lib/utils'

import { siteConfig } from '@/root/config/site'
import { fontGeinstSans } from '@/components/ui/fonts'

import { AppProvider } from '@/providers/app-provider'
import Header from '@/components/header'

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'nextjs',
    'shadcn',
    'starter',
    'template',
    'github',
    'actions',
    'husky',
    'eslint',
    'prettier'
  ],
  authors: [
    {
      name: 'Jose Ignacio',
      url: 'https://joseignacio.dev'
    }
  ],
  creator: 'Jose Ignacio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@jozefzin'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `${siteConfig.url}/site.webmanifest`
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-dvh bg-background font-sans antialiased',
          fontGeinstSans.variable
        )}
      >
        <AppProvider>
          <main className='flex h-full animate-blurred-fade-in flex-col'>
            <Header />
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  )
}
