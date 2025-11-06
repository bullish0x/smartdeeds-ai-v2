'use client'

import { useState } from 'react'
import { NFT_TIERS } from '@/lib/constants'
import NFTTierCard from './NFTTierCard'
import SwapWidgetSection from './SwapWidget'

export default function NFTTiers() {
  const [showSwapWidget, setShowSwapWidget] = useState(false)

  return (
    <section id="tiers" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pre-Sale <span className="text-yellowish">Vouchers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your pre-sale voucher tier. All funds are held in a multi-signature wallet
            on the Base network for security and refund purposes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {NFT_TIERS.filter((tier) => tier.tokenId >= 0 && tier.tokenId <= 3).map((tier) => (
            <NFTTierCard key={tier.id} tokenId={tier.tokenId} />
          ))}
        </div>

        {/* Swap Tokens Button and Widget */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowSwapWidget(!showSwapWidget)}
            className="mb-6 bg-yellowish text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center gap-2"
          >
            {showSwapWidget ? (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 15l7-7 7 7" />
                </svg>
                Hide Swap Widget
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                Swap Tokens
              </>
            )}
          </button>

          {showSwapWidget && (
            <div className="mb-8 animate-fade-in flex flex-col items-center">
              <div className="text-center mb-6 w-full">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Swap & <span className="text-yellowish">Buy Tokens</span>
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Need tokens before minting? Swap existing tokens or buy directly with a credit card on the Base network.
                </p>
              </div>
              <SwapWidgetSection />
            </div>
          )}

          <p className="text-sm text-gray-400">
            * All purchases are subject to KYC verification and terms of service.
            Payments are processed on the Base network.
          </p>
        </div>
      </div>
    </section>
  )
}

