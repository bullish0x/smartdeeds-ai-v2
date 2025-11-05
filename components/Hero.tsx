'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number }>>([])

  useEffect(() => {
    // Create particles for background effect
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellowish opacity-20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${i * 0.1}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
          SmartDeeds
        </h1>
        <p className="text-2xl md:text-3xl text-black mb-8 max-w-3xl mx-auto">
          NFT Membership Tiers on Base Network
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Exclusive membership tiers with Founder, Diamond, Platinum, and Gold options.
          All funds secured in multi-signature wallets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#tiers"
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            View NFT Tiers
          </a>
          <a
            href="#trust"
            className="bg-yellowish text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
