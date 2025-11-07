import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import NFTTiers from '@/components/NFTTiers'
import ProjectMalibu from '@/components/ProjectMalibu'
import BoBelmont from '@/components/BoBelmont'
import VideoSection from '@/components/VideoSection'
import TrustSection from '@/components/TrustSection'
import PublicationsCarousel from '@/components/PublicationsCarousel'
import ConnectionSection from '@/components/ConnectionSection'
import FloatingCTA from '@/components/FloatingCTA'
import { generateMetadata as generatePageMetadata } from '@/lib/metadata'
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'SmartDeeds - Exclusive NFT Membership for Premium Real Estate Access',
  description:
    'Join the new era of real estate ownership with SmartDeeds. Exclusive NFT membership tiers on Base network providing access to Project Malibu—the iconic Tadao Ando-designed oceanfront estate. Founder ($1M), Diamond ($100K), Platinum ($10K), and Gold ($1K) tiers available. Blockchain-secured membership passes with multi-signature wallet security.',
  path: '/',
  ogImage: '/images/gallery/ProjectMalibu.webp',
})

export default function Home() {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebSiteSchema()

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
      <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <HowItWorks />
      <NFTTiers />
      <ProjectMalibu />
      <BoBelmont />
      <VideoSection />
      <TrustSection />
      <PublicationsCarousel />
      <ConnectionSection />
      <Footer />
      <FloatingCTA />
    </main>
    </>
  )
}

