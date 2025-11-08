'use client'

/**
 * Client-side KYC gate
 *
 * Usage:
 *   <KycGate>
 *     <ProtectedApp />
 *   </KycGate>
 *
 * Behavior:
 * - Respects NEXT_PUBLIC_KYC_ENABLED feature flag - if disabled, always renders children.
 * - If KYC is enabled, always renders children (no redirect behavior).
 * - The actual KYC gating is now handled by TiersSection component which conditionally
 *   shows KycSection or NFTTiers based on verification status.
 * - This component is kept for backward compatibility but no longer redirects.
 */
export default function KycGate({ children }: { children: React.ReactNode }) {
  // Check if KYC feature is enabled
  const kycEnabled = process.env.NEXT_PUBLIC_KYC_ENABLED === 'true'

  // Always render children - KYC gating is now handled at the component level
  // (e.g., in TiersSection) rather than redirecting to a separate page
  return <>{children}</>
}

