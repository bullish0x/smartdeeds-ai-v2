'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

/**
 * Client component that redirects to /kyc/start when KYC is enabled
 * and user is not verified. Used to gate the home page.
 */
export default function KycRedirect({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const kycEnabled = process.env.NEXT_PUBLIC_KYC_ENABLED === 'true'

  useEffect(() => {
    if (!kycEnabled) {
      return
    }

    // Allow KYC routes to render
    if (pathname?.startsWith('/kyc')) {
      return
    }

    // Check if user is verified
    const verified =
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined' &&
      window.localStorage.getItem('kycVerified') === 'true'

    // If not verified, redirect to KYC start
    if (!verified) {
      router.push('/kyc/start')
    }
  }, [kycEnabled, pathname, router])

  // If KYC is enabled and we're on a non-KYC route, check verification
  if (kycEnabled && !pathname?.startsWith('/kyc')) {
    const verified =
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined' &&
      window.localStorage.getItem('kycVerified') === 'true'

    // Return null while redirecting
    if (!verified) {
      return null
    }
  }

  return <>{children}</>
}

