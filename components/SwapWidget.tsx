"use client";

import { useState } from "react";
import { SwapWidget, BuyWidget } from "thirdweb/react";
import { getThirdwebClient } from "@/lib/thirdweb-client";
import { useMemo } from "react";
import { base } from "thirdweb/chains";

export default function SwapWidgetSection() {
  const [activeTab, setActiveTab] = useState<"swap" | "buy">("swap");

  // Get client using useMemo
  const client = useMemo(() => {
    try {
      return getThirdwebClient();
    } catch (error) {
      console.error("Failed to get thirdweb client:", error);
      return null;
    }
  }, []);

  if (!client) {
    return (
      <div className="bg-gray-900 rounded-lg p-6 text-center">
        <p className="text-gray-400">
          Widget unavailable. Please check your configuration.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-6 bg-gray-900 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("swap")}
          className={`flex-1 px-4 py-2 rounded-md font-semibold transition-colors ${
            activeTab === "swap"
              ? "bg-yellowish text-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Get Funds
        </button>
        <button
          onClick={() => setActiveTab("buy")}
          className={`flex-1 px-4 py-2 rounded-md font-semibold transition-colors ${
            activeTab === "buy"
              ? "bg-yellowish text-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Buy Crypto
        </button>
      </div>

      {/* Widget Content */}
      <div className="flex justify-center">
        {activeTab === "swap" ? (
          <SwapWidget
            client={client}
            prefill={{
              sellToken: {
                // Base network (chainId: 8453)
                chainId: 8453,
              },
            }}
          />
        ) : (
          <BuyWidget 
            client={client} 
            chain={base}
            tokenAddress="0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" // USDC on Base
          />
        )}
      </div>
    </div>
  );
}
