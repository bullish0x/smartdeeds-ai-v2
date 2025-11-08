"use client";

import { useEffect, useState } from "react";
import SmartDeedsTiers from "@/components/NFTTiers";
import KycSection from "@/components/KycSection";

/**
 * TiersSection Component
 * 
 * Conditionally renders either the NFTTiers component or the KycSection component
 * based on KYC status:
 * - If KYC is disabled: always shows NFTTiers
 * - If KYC is enabled and verified: shows NFTTiers
 * - If KYC is enabled but not verified: shows KycSection
 */
export default function TiersSection() {
  const [kycEnabled, setKycEnabled] = useState(false);
  const [kycVerified, setKycVerified] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check KYC enabled status (compile-time env var)
    setKycEnabled(process.env.NEXT_PUBLIC_KYC_ENABLED === "true");
    // Check KYC verified status from localStorage
    setKycVerified(
      typeof window !== "undefined" &&
        typeof window.localStorage !== "undefined" &&
        window.localStorage.getItem("kycVerified") === "true",
    );
  }, []);

  // Listen for localStorage changes (e.g., after KYC completion)
  useEffect(() => {
    if (!mounted) return;

    const checkKycStatus = () => {
      const verified =
        typeof window !== "undefined" &&
        typeof window.localStorage !== "undefined" &&
        window.localStorage.getItem("kycVerified") === "true";
      setKycVerified(verified);
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "kycVerified") {
        setKycVerified(e.newValue === "true");
      }
    };

    // Listen for cross-tab changes
    window.addEventListener("storage", handleStorageChange);

    // Check when window regains focus (user returns from KYC flow)
    const handleFocus = () => {
      checkKycStatus();
    };
    window.addEventListener("focus", handleFocus);

    // Poll for same-tab changes (since storage event doesn't fire for same tab)
    const interval = setInterval(checkKycStatus, 1000); // Check every second

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("focus", handleFocus);
      clearInterval(interval);
    };
  }, [mounted]);

  // Show loading state during initial mount
  if (!mounted) {
    return (
      <section id="tiers" className="py-20 md:py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellowish"></div>
          </div>
        </div>
      </section>
    );
  }

  // If KYC is disabled, always show tiers
  if (!kycEnabled) {
    return <SmartDeedsTiers />;
  }

  // If KYC is enabled but not verified, show KYC section
  if (!kycVerified) {
    return <KycSection />;
  }

  // If KYC is enabled and verified, show tiers
  return <SmartDeedsTiers />;
}

