import Header from '@/components/Header'
import TopBar from '@/components/TopBar'
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

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <TopBar />
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
  )
}

