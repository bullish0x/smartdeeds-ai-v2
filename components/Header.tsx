'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-black">
            SmartDeeds
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#tiers" className="text-black hover:text-yellowish transition-colors">
              NFT Tiers
            </Link>
            <Link href="/#trust" className="text-black hover:text-yellowish transition-colors">
              About
            </Link>
            <Link href="/terms" className="text-black hover:text-yellowish transition-colors">
              Terms
            </Link>
            <Link href="/disclaimer" className="text-black hover:text-yellowish transition-colors">
              Disclaimer
            </Link>
            <Link href="/kyc" className="text-black hover:text-yellowish transition-colors">
              KYC
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black"
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/#tiers"
              className="block px-4 py-2 text-black hover:bg-yellowish transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              NFT Tiers
            </Link>
            <Link
              href="/#trust"
              className="block px-4 py-2 text-black hover:bg-yellowish transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/terms"
              className="block px-4 py-2 text-black hover:bg-yellowish transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terms
            </Link>
            <Link
              href="/disclaimer"
              className="block px-4 py-2 text-black hover:bg-yellowish transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </Link>
            <Link
              href="/kyc"
              className="block px-4 py-2 text-black hover:bg-yellowish transition-colors"
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

