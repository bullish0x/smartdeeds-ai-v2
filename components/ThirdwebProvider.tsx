'use client'

import { ThirdwebProvider as ThirdwebProviderSDK } from 'thirdweb/react'
import { createThirdwebClient } from 'thirdweb'
import { useMemo } from 'react'

export function ThirdwebProvider({ children }: { children: React.ReactNode }) {
  const client = useMemo(() => {
    const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID

    if (!clientId) {
      throw new Error(
        'NEXT_PUBLIC_THIRDWEB_CLIENT_ID is not set. Please add it to your .env.local file.\n' +
        'Get your Client ID from: https://thirdweb.com/dashboard'
      )
    }

    return createThirdwebClient({
      clientId,
    })
  }, [])

  return (
    <ThirdwebProviderSDK client={client}>
      {children}
    </ThirdwebProviderSDK>
  )
}

