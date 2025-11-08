'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Loader2, AlertCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { createVerificationSession } from '@/lib/kyc'
import { fadeInUp, staggerContainer } from '@/lib/motion'

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
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-3 mb-6">
              <ShieldCheck className="w-10 h-10 text-yellowish" />
              <Badge variant="outline" className="border-yellowish/50 text-yellowish bg-yellowish/10 px-4 py-2 text-base">
                Secure Verification
              </Badge>
              
              {/* Prominent Stripe Badge */}
              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-sm font-semibold text-white">Powered by</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Stripe
                  </span>
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Identity Verification <span className="text-yellowish">Required</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              You must complete KYC before accessing the app. This is a quick and secure process to verify your identity.
            </motion.p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-zinc-950 border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Begin Verification Process</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  You'll be redirected to our secure verification partner. The process typically takes 2-3 minutes.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Info List */}
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellowish/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellowish text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Prepare Your Documents</p>
                      <p className="text-sm">Have your government-issued ID ready (passport, driver's license, or national ID)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellowish/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellowish text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Complete Verification</p>
                      <p className="text-sm">Follow the secure verification flow to submit your information</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellowish/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellowish text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Get Approved</p>
                      <p className="text-sm">You'll be automatically redirected back once verification is complete</p>
                    </div>
                  </div>
                </div>

                {/* Error Alert */}
                {error && (
                  <Alert className="bg-red-900/20 border-red-500/50">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <AlertDescription className="text-red-400">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                {/* CTA Button */}
                <Button
                  onClick={start}
                  disabled={loading}
                  variant="yellowish"
                  size="lg"
                  className="w-full text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Starting Verification...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5 mr-2" />
                      Start Verification
                    </>
                  )}
                </Button>

                {/* Privacy & Security Notice */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 border border-purple-500/20">
                    <ShieldCheck className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-base font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Powered by Stripe
                      </p>
                      <p className="text-sm text-gray-300">
                        Industry-leading secure identity verification trusted by millions
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-yellowish/5 border border-yellowish/20 rounded-lg p-4">
                    <p className="text-xs text-gray-300 leading-relaxed">
                      <strong className="text-yellowish">Your privacy is protected:</strong> SmartDeeds and SolsLot do not have access to any of your KYC information. 
                      We only receive a pass or fail result to grant access. Your verification session is stored locally on your device—if you visit from a new device, 
                      you may be asked to verify again.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
