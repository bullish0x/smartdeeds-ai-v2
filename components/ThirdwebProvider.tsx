'use client'

import { ThirdwebProvider as ThirdwebProviderSDK } from 'thirdweb/react'

export function ThirdwebProvider({ children }: { children: React.ReactNode }) {
  // In thirdweb v5, ThirdwebProvider doesn't need client prop
  // Components will get client from context or create their own
  return (
    <ThirdwebProviderSDK>
      {children}
    </ThirdwebProviderSDK>
  )
}

