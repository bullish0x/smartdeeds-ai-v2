'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createVerificationSession } from '@/lib/kyc'

export default function KycStart() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function start() {
    try {
      setLoading(true)
      setError(null)

      // Compute the return URL for your current environment.
      // Make sure this URL is whitelisted on the KYC server.
      const returnUrl = `${window.location.origin}/kyc/return`

      const resp = await createVerificationSession(returnUrl)
      const sessionId = resp.session_id
      const redirectUrl = resp.url || resp.verification_url || resp.redirect_url

      if (!sessionId) {
        throw new Error('No session_id returned from /create-verification-session')
      }

      // Persist the session id to recover it on the return page
      localStorage.setItem('kycSessionId', sessionId)

      if (!redirectUrl) {
        throw new Error(
          'No verification URL returned. The backend should include a URL to redirect the user.'
        )
      }

      // Redirect to the hosted verification flow
      window.location.href = redirectUrl
    } catch (e: any) {
      setError(e?.message || 'Failed to start verification')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="pt-16 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Identity Verification Required
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            You must complete KYC before accessing the app.
          </p>

          <button
            onClick={start}
            disabled={loading}
            className="bg-black dark:bg-white text-white dark:text-black py-4 px-8 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Starting…' : 'Start verification'}
          </button>

          {error && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}

