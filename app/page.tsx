import type { Metadata } from "next";
import Script from "next/script";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
// Use the tiers component once (rename as you prefer)
import SmartDeedsTiers from "@/components/NFTTiers";
import ProjectMalibu from "@/components/ProjectMalibu";
import MalibuProgram from "@/components/MalibuProgram";
import Team from "@/components/Team";
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
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Intercom */}
      <Script id="intercom-settings" strategy="afterInteractive">
        {`window.intercomSettings = { app_id: "qjd0ivm0" };`}
      </Script>
      <Script id="intercom-loader" strategy="afterInteractive">
        {`(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic("reattach_activator");ic("update",w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement("script");s.type="text/javascript";s.async=true;s.src="https://widget.intercom.io/widget/qjd0ivm0";var x=d.getElementsByTagName("script")[0];x.parentNode.insertBefore(s,x)};if(d.readyState==="complete"){l()}else if(w.attachEvent){w.attachEvent("onload",l)}else{w.addEventListener("load",l,false)}}})();`}
      </Script>

      <main className="min-h-screen bg-black">
        <Header />
        
        {/* 1. Hero - Immediate visual impact with property images */}
        <Hero />
        
        {/* 2. Project Malibu - Lead with cultural cachet (Tadao Ando + Kanye West) */}
        <ProjectMalibu />

        {/* 3. Trust/About Section - Consolidated credibility (Bo Belmont + Company logos) */}
        <TrustSection />
        <Team />
        
        {/* 4. Malibu Program - Detailed program information */}
        <MalibuProgram />

        {/* 5. How It Works - Explain the process before showing tiers */}
        <HowItWorks />

        {/* 6. Tiers - Now they're interested, show the membership options */}
        <SmartDeedsTiers />
        
        {/* 7. Publications - Reinforce credibility mid-funnel */}
        <PublicationsCarousel />
        
        {/* 8. Benefits Section - Why SmartDeeds value propositions */}
        <VideoSection />
        
        {/* 9. Connection Section - Final CTA */}
        <ConnectionSection />
        
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
}
