"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { NFT_TIERS } from "@/lib/constants";
import NFTTierCard from "./NFTTierCard";

// Dynamic import for SwapWidget to improve initial page load
const SwapWidgetSection = dynamic(() => import("./SwapWidget"), {
  loading: () => (
    <div className="flex items-center justify-center p-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellowish"></div>
    </div>
  ),
  ssr: false, // Disable SSR for this component
});

export default function SmartDeedsTiers() {
  const [showSwapWidget, setShowSwapWidget] = useState(false);

  return (
    <section id="tiers" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="rounded-xl border border-emerald-300/30 bg-emerald-900/20 p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="text-left">
                <p className="text-emerald-300 font-semibold">
                  Refund Policy: We’ve got your back
                </p>
                <p className="text-emerald-200/90 text-sm md:text-base">
                  Pre‑launch funds are held in escrow. If you’d like a refund
                  before Launch, reach out and we’ll process it promptly.
                </p>
              </div>
              <a
                href="#booking"
                onClick={(e) => {
                  if (
                    typeof window !== "undefined" &&
                    (window as any).Intercom
                  ) {
                    e.preventDefault();
                    try {
                      (window as any).Intercom("show");
                    } catch {}
                  }
                }}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-400 text-black font-semibold px-4 py-2 hover:bg-emerald-300 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SmartDeeds Pre-Launch{" "}
            <span className="text-yellowish">Vouchers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select a pre‑launch Voucher tier. The Voucher is a pre‑launch
            instrument—no present membership or economic rights. At Launch, it
            becomes your SmartDeed and your Membership benefits activate.
            Funding is held in escrow and released at Launch; bring your own
            wallet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {NFT_TIERS.filter(
            (tier) => tier.tokenId >= 0 && tier.tokenId <= 3,
          ).map((tier) => (
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
                  Need tokens before minting? Swap existing tokens or buy
                  directly with a credit card on the Base network.
                </p>
              </div>
              <SwapWidgetSection />
            </div>
          )}

          <p className="text-sm text-gray-400">
            * In the United States, purchases are subject to KYC verification
            and terms of service. Payments are processed on the Base network.
          </p>
        </div>
      </div>
    </section>
  );
}
