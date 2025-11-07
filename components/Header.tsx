'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ConnectButton } from 'thirdweb/react'
import { base } from 'thirdweb/chains'
import { getThirdwebClient } from '@/lib/thirdweb-client'
import { getImagePath } from '@/lib/utils'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Get client for ConnectButton
  const client = useMemo(() => {
    try {
      return getThirdwebClient()
    } catch (error) {
      console.warn('Failed to get thirdweb client:', error)
      return null
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={getImagePath("/images/smartdeeds.png")}
              alt="SmartDeeds"
              width={180}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#tiers" className="text-white hover:text-yellowish transition-colors">
              Pre-Sale Vouchers
            </Link>
            <Link href="/#how-it-works" className="text-white hover:text-yellowish transition-colors">
              How It Works
            </Link>
            <Link href="/#about" className="text-white hover:text-yellowish transition-colors">
              About
            </Link>
            <Link href="/terms" className="text-white hover:text-yellowish transition-colors">
              Terms
            </Link>
            <Link href="/disclaimer" className="text-white hover:text-yellowish transition-colors">
              Disclaimer
            </Link>
            <Link href="/kyc" className="text-white hover:text-yellowish transition-colors">
              KYC
            </Link>
            {client && (
              <div className="scale-90 origin-right" style={{ backgroundColor: '#EEFE93', color: '#000000', borderRadius: '8px', fontSize: '12px', padding: '4px 8px' }}>
                <ConnectButton client={client} chain={base} />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {client && (
              <div className="scale-90" style={{ backgroundColor: '#EEFE93', color: '#000000', borderRadius: '8px', fontSize: '12px', padding: '4px 8px' }}>
                <ConnectButton client={client} chain={base} />
              </div>
            )}
            <button
              className="p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/#tiers"
              className="block px-4 py-2 text-white hover:bg-yellowish/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pre-Sale Vouchers
            </Link>
            <Link
              href="/#how-it-works"
              className="block px-4 py-2 text-white hover:bg-yellowish/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#about"
              className="block px-4 py-2 text-white hover:bg-yellowish/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/terms"
              className="block px-4 py-2 text-white hover:bg-yellowish/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terms
            </Link>
            <Link
              href="/disclaimer"
              className="block px-4 py-2 text-white hover:bg-yellowish/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </Link>
            <Link
              href="/kyc"
              className="block px-4 py-2 text-white hover:bg-yellowish/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              KYC
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
