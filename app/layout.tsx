import type { Metadata } from 'next'
import '../styles/globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'SmartDeeds - NFT Membership Tiers',
  description: 'SmartDeeds NFT membership tiers on Base network. Founder, Diamond, Platinum, and Gold tiers available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

