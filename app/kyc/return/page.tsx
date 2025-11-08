'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, AlertCircle, RefreshCcw } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { checkVerificationStatus, type KycStatus } from '@/lib/kyc'
import { fadeInUp } from '@/lib/motion'

const POLL_MS = 2500
const POLL_TIMEOUT_MS = 2 * 60 * 1000 // 2 minutes

function KycReturnContent() {
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
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-zinc-950 border-white/10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white mb-2">
                {status === 'verified' && 'Verification Complete!'}
                {status === 'processing' && 'Processing Verification...'}
                {status === 'requires_input' && 'Additional Information Needed'}
                {status === 'error' && 'Verification Issue'}
                {status === 'none' && 'Checking Status...'}
              </CardTitle>
              <CardDescription className="text-gray-400 text-base">
                {status === 'verified' && 'Your identity has been successfully verified'}
                {status === 'processing' && 'Please wait while we verify your information'}
                {status === 'requires_input' && 'We need more information to complete your verification'}
                {status === 'error' && 'There was a problem with the verification process'}
                {status === 'none' && 'Please wait a moment...'}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Processing State */}
              {status === 'processing' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-4 py-8"
                >
                  <Loader2 className="w-16 h-16 text-yellowish animate-spin" />
                  <p className="text-gray-300 text-center max-w-md">
                    Your verification is being processed. This usually takes a moment. Please don't close this window.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 rounded-full bg-yellowish animate-pulse" />
                    <span>Checking status every few seconds...</span>
                  </div>
                </motion.div>
              )}

              {/* Verified State */}
              {status === 'verified' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-4 py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <p className="text-gray-300 text-center max-w-md">
                    Great! You're all set. Redirecting you back to the app...
                  </p>
                </motion.div>
              )}

              {/* Requires Input State */}
              {status === 'requires_input' && (
                <div className="space-y-4">
                  <Alert className="bg-yellow-900/20 border-yellow-500/50">
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                    <AlertDescription className="text-yellow-200">
                      {msg || 'Verification requires additional information.'}
                    </AlertDescription>
                  </Alert>
                  <Button 
                    asChild 
                    variant="yellowish" 
                    size="lg" 
                    className="w-full"
                  >
                    <a href="/kyc/start">
                      <RefreshCcw className="w-4 h-4 mr-2" />
                      Continue Verification
                    </a>
                  </Button>
                </div>
              )}

              {/* Error State */}
              {status === 'error' && (
                <div className="space-y-4">
                  <Alert className="bg-red-900/20 border-red-500/50">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <AlertDescription className="text-red-400">
                      {msg || 'Something went wrong during verification.'}
                    </AlertDescription>
                  </Alert>
                  <Button 
                    asChild 
                    variant="yellowish" 
                    size="lg" 
                    className="w-full"
                  >
                    <a href="/kyc/start">
                      <RefreshCcw className="w-4 h-4 mr-2" />
                      Try Again
                    </a>
                  </Button>
                </div>
              )}

              {/* Initial Loading State */}
              {status === 'none' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-4 py-8"
                >
                  <Loader2 className="w-16 h-16 text-yellowish animate-spin" />
                  <p className="text-gray-300 text-center">
                    Checking your verification status...
                  </p>
                </motion.div>
              )}

              {/* Privacy Notice */}
              {(status === 'processing' || status === 'none') && (
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <p className="text-sm">
                      <span className="text-gray-400">Secured by</span>{' '}
                      <span className="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Stripe
                      </span>
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 text-center leading-relaxed">
                    SmartDeeds and SolsLot do not have access to any of your KYC information. 
                    We only receive a pass or fail result to grant access.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-zinc-950 border-white/10">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white mb-2">
              Checking Status...
            </CardTitle>
            <CardDescription className="text-gray-400 text-base">
              Please wait a moment...
            </CardDescription>
          </CardHeader>
          <CardContent className="py-12">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-16 h-16 text-yellowish animate-spin" />
              <p className="text-gray-300">Loading...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function KycReturn() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <KycReturnContent />
      </Suspense>
      <Footer />
    </main>
  )
}
