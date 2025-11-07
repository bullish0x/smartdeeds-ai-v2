import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SmartDeedsTiers from "@/components/NFTTiers";
import ProjectMalibu from "@/components/ProjectMalibu";
import BoBelmont from "@/components/BoBelmont";
import VideoSection from "@/components/VideoSection";
import TrustSection from "@/components/TrustSection";
import PublicationsCarousel from "@/components/PublicationsCarousel";
import ConnectionSection from "@/components/ConnectionSection";
import FloatingCTA from "@/components/FloatingCTA";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title:
    "SmartDeeds - Exclusive SmartDeeds Membership for Premium Real Estate Access",
  description:
    "Join the new era of real estate ownership with SmartDeeds. Exclusive SmartDeeds membership tiers on Base network providing access to Project Malibu—the iconic Tadao Ando-designed oceanfront estate. Founder ($1M), Diamond ($100K), Platinum ($10K), and Gold ($1K) tiers available. Blockchain-secured membership passes with multi-signature wallet security.",
  path: "/",
  ogImage: "/images/gallery/ProjectMalibu.webp",
});

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script id="intercom-settings" strategy="afterInteractive">
        {`window.intercomSettings = { app_id: "qjd0ivm0" };`}
      </Script>
      <Script id="intercom-loader" strategy="afterInteractive">
        {`(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic("reattach_activator");ic("update",w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement("script");s.type="text/javascript";s.async=true;s.src="https://widget.intercom.io/widget/qjd0ivm0";var x=d.getElementsByTagName("script")[0];x.parentNode.insertBefore(s,x)};if(d.readyState==="complete"){l()}else if(w.attachEvent){w.attachEvent("onload",l)}else{w.addEventListener("load",l,false)}}})();`}
      </Script>
      <main className="min-h-screen bg-black">
        <Header />
        <Hero />
        <HowItWorks />
        <SmartDeedsTiers />
        <ProjectMalibu />
        <section id="malibu-program" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Malibu Program
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Invite‑only access to Project Malibu. Purchase a pre‑launch
                Voucher starting at $1,000 (Gold). At Launch, your Voucher
                converts to your SmartDeed—an on‑chain digital assignment
                granting a minority economic assignment (no title/governance)
                plus non‑financial membership access. Funding is held in escrow
                and released at Launch per the Agreement. Details shared
                privately by invite.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Property Snapshot
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Property: Malibu oceanfront estate</li>
                <li>Architect: Tadao Ando</li>
                <li>Provenance: Formerly owned by Kanye West</li>
                <li>
                  Access: Invite-only program with private renovation updates
                  and educational content
                </li>
                <li>Program Rail: Base blockchain (USDC for on-chain rails)</li>
                <li>
                  Operator: SmartDeeds, in collaboration with Belwood
                  Investments
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellowish mb-2">
                  GOLD — Insider Tier
                </h3>
                <p className="text-white font-semibold">$1,000</p>
                <p className="text-gray-300 mb-3">
                  1.2× Exchange Rate Multiplier
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>One private guided day at the Malibu Estate</li>
                  <li>Property tour, architecture briefing</li>
                  <li>Private networking mixer</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellowish mb-2">
                  PLATINUM — Social Tier
                </h3>
                <p className="text-white font-semibold">$10,000</p>
                <p className="text-gray-300 mb-3">
                  1.25× Exchange Rate Multiplier
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>All Gold benefits</li>
                  <li>
                    2 annual Malibu Member Days (sunset receptions, curated
                    talks, private guest access)
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellowish mb-2">
                  DIAMOND — Estate Tier
                </h3>
                <p className="text-white font-semibold">$100,000</p>
                <p className="text-gray-300 mb-3">
                  1.3× Exchange Rate Multiplier
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>All Platinum benefits</li>
                  <li>
                    4 Private Estate Sessions annually (half-day hosted
                    experiences for dinners, creative gatherings, or brand
                    showcases up to 12 guests)
                  </li>
                  <li>1 chef dinner</li>
                  <li>Concierge scheduling included</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellowish mb-2">
                  FOUNDERS CIRCLE — Legacy Tier (Invitation Only)
                </h3>
                <p className="text-white font-semibold">$300,000</p>
                <p className="text-gray-300 mb-3">
                  1.33× Exchange Rate Multiplier
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>All Diamond benefits</li>
                  <li>Exclusive Founders Summit</li>
                  <li>Name recognition at the property</li>
                  <li>Special co-branding privileges</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Voucher & Launch; SmartDeed Issuance
                </h3>
                <p className="text-gray-300 mb-4">
                  This pre‑launch Voucher NFT evidences only a paid reservation.
                  No present rights are granted. At Launch, your SmartDeed NFT
                  (on‑chain digital assignment granting a minority economic
                  assignment—no title/governance—plus non‑financial membership
                  access) is issued at the applicable Exchange Rate and your
                  Global Digital Membership activates. Membership is consumptive
                  and non‑financial.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>
                    Voucher: pre‑launch instrument only; no membership
                    privileges or economic/property interest until Launch and
                    SmartDeed issuance.
                  </li>
                  <li>
                    Exchange at Launch: Pre‑Launch Commitment × Exchange Rate
                    determines your SmartDeed interest; recorded on the Chain of
                    Record. The Canonical Registry controls.
                  </li>
                  <li>
                    Membership: consumptive access benefits; no dividends,
                    profit‑sharing, voting, or control rights.
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Duration & Transition
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>
                    All Malibu memberships grant lifetime privileges for the
                    active life of the property under SmartDeeds’ management.
                  </li>
                  <li>
                    If the Malibu Estate is sold, recapitalized, or transferred,
                    member access and privileges will conclude with the
                    transition.
                  </li>
                  <li>
                    Post‑settlement, SmartDeed may issue a non‑transferable
                    digital Membership credential to preserve gated access
                    (non‑financial; subject to program terms).
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Important Disclosures
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>
                  No present property interest; prior to go‑live, Vouchers
                  confer no membership privileges, no economic or property
                  interest, and no settlement rights.
                </li>
                <li>
                  No dividends, profit-sharing, voting, or governance rights are
                  conveyed by membership.
                </li>
                <li>
                  Participation is subject to eligibility, KYC/AML, and
                  sanctions screening.
                </li>
                <li>
                  On‑chain records and any distributions (if applicable) follow
                  the Agreement and official notices.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <BoBelmont />
        <VideoSection />
        <TrustSection />
        <PublicationsCarousel />
        <ConnectionSection />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
}
