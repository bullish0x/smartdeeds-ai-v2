import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Membership & Pre‑Sale Commitment Agreement (U.S.) - SmartDeeds",
  description:
    "SMARTDEED Membership & Pre‑Sale Commitment Agreement (U.S.) for invited applicants. Private membership terms, pre‑sale commitment and escrow, confidentiality, SmartDeed digital primacy, governing law, dispute resolution, and schedules.",
  path: "/membership",
});

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-3">
            Membership — Overview
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Invite‑only access to Project Malibu — on a public blockchain. Bring
            your own wallet. At go‑live, presale Vouchers are redeemed for a
            SmartDeed Digital Assignment Contract (DAC) issued at the tier's
            Exchange Rate. The DAC combines a contractual minority economic
            assignment (not title/governance) and a Global Digital Membership
            (consumptive, non‑financial).
          </p>

          <div className="mb-6 flex flex-wrap gap-3">
            <a
              href="/terms"
              className="text-yellowish underline hover:no-underline"
            >
              Read Presale Terms →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                👑 Founders Circle — Legacy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                $300,000 • 1.33× Exchange Rate
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-none pl-0 space-y-1">
                <li>💎 Includes all Diamond perks</li>
                <li>👥 Exclusive Founders Summit</li>
                <li>🔖 Name recognition • 🤝 co‑branding</li>
              </ul>
              <div className="mt-3">
                <a
                  href="/#tiers"
                  className="text-yellowish text-sm underline hover:no-underline"
                >
                  Request Invite →
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                💎 Diamond — Estate
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                $100,000 • 1.30× Exchange Rate
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-none pl-0 space-y-1">
                <li>🥈 Includes all Platinum perks</li>
                <li>
                  🏡 4 Private Estate Sessions/year (half‑day, up to 12 guests)
                </li>
                <li>👨‍🍳 1 chef dinner • 🗓️ concierge scheduling</li>
              </ul>
              <div className="mt-3">
                <a
                  href="/#tiers"
                  className="text-yellowish text-sm underline hover:no-underline"
                >
                  Select Diamond →
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                🥈 Platinum — Social
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                $10,000 • 1.25× Exchange Rate
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-none pl-0 space-y-1">
                <li>🥇 Includes all Gold perks</li>
                <li>
                  🌅 2 Malibu Member Days/year (receptions, talks, guest access)
                </li>
              </ul>
              <div className="mt-3">
                <a
                  href="/#tiers"
                  className="text-yellowish text-sm underline hover:no-underline"
                >
                  Select Platinum →
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                🥇 Gold — Insider
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                $1,000 • 1.20× Exchange Rate
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-none pl-0 space-y-1">
                <li>🏛️ Guided day at the Malibu Estate</li>
                <li>📐 Architecture briefing + tour</li>
                <li>🤝 Private networking mixer</li>
              </ul>
              <div className="mt-3">
                <a
                  href="/#tiers"
                  className="text-yellowish text-sm underline hover:no-underline"
                >
                  Select Gold →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
