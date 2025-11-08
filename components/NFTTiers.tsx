"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Shield } from "lucide-react";
import { NFT_TIERS } from "@/lib/constants";
import NFTTierCard from "./NFTTierCard";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

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
    <section id="tiers" className="py-20 md:py-24 bg-black relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(238,254,147,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Pre-Launch{" "}
            <span className="text-yellowish">Membership Vouchers</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Select a voucher tier to reserve your membership. At Launch, your voucher converts to a SmartDeed NFT with full membership benefits.
          </motion.p>
        </motion.div>

            {/* Tier Cards Grid - 4 columns side by side */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1800px] mx-auto px-4">
          {NFT_TIERS.filter(
            (tier) => tier.tokenId >= 0 && tier.tokenId <= 3,
          )
          .sort((a, b) => b.tokenId - a.tokenId)
          .map((tier, index) => (
            <motion.div key={tier.id} variants={staggerItem}>
              <NFTTierCard tokenId={tier.tokenId} />
            </motion.div>
          ))}
        </motion.div>

        {/* Swap Tokens Button and Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button
            onClick={() => setShowSwapWidget(!showSwapWidget)}
            variant="glass"
            size="lg"
            className="mb-6 inline-flex items-center gap-2"
          >
            {showSwapWidget ? (
              <>
                <ChevronUp className="w-5 h-5" />
                Hide Swap Widget
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                Swap Tokens
              </>
            )}
          </Button>

          {showSwapWidget && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 flex flex-col items-center"
            >
              <div className="text-center mb-6 w-full">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Swap & <span className="text-yellowish">Buy Tokens</span>
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                  Need tokens before minting? Swap existing tokens or buy directly with a credit card on the Base network.
                </p>
              </div>
              <SwapWidgetSection />
            </motion.div>
          )}

          <p className="text-xs md:text-sm text-gray-400 mt-6 max-w-2xl mx-auto">
            * In the United States, purchases are subject to KYC verification and terms of service. Payments are processed on the Base network.
          </p>
        </motion.div>

        {/* Refund Policy Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Alert className="border-emerald-500/30 bg-emerald-500/10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <AlertDescription className="text-emerald-100">
                  <p className="font-semibold mb-1">Refund Policy: We've got your back</p>
                  <p className="text-sm text-emerald-200/90">
                    Pre‑launch funds are held in escrow. Request a refund anytime before Launch—we'll process it promptly.
                  </p>
                </AlertDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black shrink-0"
                onClick={(e) => {
                  if (typeof window !== "undefined" && (window as any).Intercom) {
                    e.preventDefault();
                    try {
                      (window as any).Intercom("show");
                    } catch {}
                  }
                }}
              >
                Contact Support
              </Button>
            </div>
          </Alert>
        </motion.div>
      </div>
    </section>
  );
}
