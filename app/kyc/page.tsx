'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function KYCRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the KYC start page
    router.replace('/kyc/start')
  }, [router])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-yellowish animate-spin" />
        <p className="text-gray-400">Redirecting to verification...</p>
      </div>
    </div>
  )
}

