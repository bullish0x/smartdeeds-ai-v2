'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Client-side KYC gate
 *
 * Usage:
 *   <KycGate>
 *     <ProtectedApp />
 *   </KycGate>
 *
 * Behavior:
 * - If localStorage.kycVerified !== 'true', users are redirected to /kyc/start.
 * - The /kyc/return route is allowed to render so it can poll the verification status.
 * - Once verification is complete, set localStorage.kycVerified = 'true' to unlock the app.
 * - Respects NEXT_PUBLIC_KYC_ENABLED feature flag - if disabled, always renders children.
 */
export default function KycGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  // Check if KYC feature is enabled
  const kycEnabled = process.env.NEXT_PUBLIC_KYC_ENABLED === 'true'

  // If KYC is disabled, always render children
  if (!kycEnabled) {
    return <>{children}</>
  }

  // SSR-safe read of localStorage, defaulting to not verified.
  const verified =
    typeof window !== 'undefined' &&
    typeof window.localStorage !== 'undefined' &&
    window.localStorage.getItem('kycVerified') === 'true'

  useEffect(() => {
    if (!verified) {
      // Allow the return page to run even if not yet verified
      if (pathname?.startsWith('/kyc/return')) {
        return
      }

      // Redirect to KYC start page
      router.push('/kyc/start')
    }
  }, [verified, pathname, router])

  if (!verified && !pathname?.startsWith('/kyc/return')) {
    // Return null while redirecting
    return null
  }

  return <>{children}</>
}

