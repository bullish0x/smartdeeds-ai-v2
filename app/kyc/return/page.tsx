'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { checkVerificationStatus, type KycStatus } from '@/lib/kyc'

const POLL_MS = 2500
const POLL_TIMEOUT_MS = 2 * 60 * 1000 // 2 minutes

export default function KycReturn() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [status, setStatus] = useState<KycStatus | 'error' | 'none'>('none')
  const [msg, setMsg] = useState<string>('')

  useEffect(() => {
    // read session id from URL params or localStorage fallback
    const sessionId =
      searchParams.get('session_id') ||
      searchParams.get('session') ||
      (typeof window !== 'undefined' ? localStorage.getItem('kycSessionId') : null)

    if (!sessionId) {
      setStatus('error')
      setMsg('Missing session_id. Please start verification again.')
      return
    }

    // Persist for future retries
    const sessionIdStr: string = sessionId
    if (typeof window !== 'undefined') {
      localStorage.setItem('kycSessionId', sessionIdStr)
    }

    let isCancelled = false
    let timer: ReturnType<typeof setTimeout> | undefined
    const startTs = Date.now()

    async function poll() {
      try {
        const s = await checkVerificationStatus(sessionIdStr)
        if (isCancelled) return

        setStatus(s)

        if (s === 'verified') {
          if (typeof window !== 'undefined') {
            localStorage.setItem('kycVerified', 'true')
          }
          // Optionally clear the session id once verified
          // localStorage.removeItem('kycSessionId');
          router.push('/')
          return
        }

        if (s === 'requires_input') {
          setMsg(
            'Verification incomplete. Please submit all required information.'
          )
          return
        }

        // s === 'processing': continue polling until timeout
        if (Date.now() - startTs < POLL_TIMEOUT_MS) {
          timer = setTimeout(poll, POLL_MS)
        } else {
          setStatus('error')
          setMsg('Still processing. Please try again shortly.')
        }
      } catch (e: any) {
        if (isCancelled) return
        setStatus('error')
        setMsg(e?.message || 'Error checking verification status')
      }
    }

    poll()

    return () => {
      isCancelled = true
      if (timer) clearTimeout(timer)
    }
  }, [searchParams, router])

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="pt-16 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Completing Verification…
          </h1>

          {status === 'processing' && (
            <div className="space-y-4">
              <div className="inline-block w-16 h-16 border-4 border-yellowish border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Your verification is being processed. This usually takes a moment.
              </p>
            </div>
          )}

          {status === 'requires_input' && (
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {msg || 'Verification requires additional information.'}
              </p>
              <a
                href="/kyc/start"
                className="inline-block bg-black dark:bg-white text-white dark:text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Continue verification
              </a>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400">
                  {msg || 'Something went wrong.'}
                </p>
              </div>
              <a
                href="/kyc/start"
                className="inline-block bg-black dark:bg-white text-white dark:text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Try again
              </a>
            </div>
          )}

          {status === 'none' && (
            <div className="space-y-4">
              <div className="inline-block w-16 h-16 border-4 border-yellowish border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Checking your status…
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}

