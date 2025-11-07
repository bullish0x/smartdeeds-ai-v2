import type { Metadata } from 'next'
import { generateMetadata as generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'KYC Verification - SmartDeeds',
  description:
    'Complete your Know Your Customer (KYC) verification for SmartDeeds NFT membership. Required for all purchases. Secure and encrypted verification process.',
  path: '/kyc',
  noindex: true, // No-index for privacy
})

export default function KYCLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

