import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Oswald } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Bahia Roleplay — O melhor servidor de RP da Bahia',
  description:
    'Bahia Roleplay é o melhor servidor de Roleplay da Bahia no FiveM. Cidade viva, economia real e uma comunidade que respira RP. Venha viver sua história.',
  generator: 'v0.app',
  keywords: [
    'Bahia Roleplay',
    'FiveM',
    'GTA RP',
    'servidor roleplay',
    'RP Bahia',
    'cidade roleplay',
  ],
  openGraph: {
    title: 'Bahia Roleplay — O melhor servidor de RP da Bahia',
    description:
      'Cidade viva, economia real e comunidade ativa. Venha viver sua história no Bahia Roleplay.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a1a12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} dark`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
