import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NFTTiers from '@/components/NFTTiers'
import TrustSection from '@/components/TrustSection'
import PublicationsCarousel from '@/components/PublicationsCarousel'
import ConnectionSection from '@/components/ConnectionSection'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <NFTTiers />
      <TrustSection />
      <PublicationsCarousel />
      <ConnectionSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}

