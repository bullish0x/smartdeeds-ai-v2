'use client'

import { useEffect, useState } from 'react'
import EarlyAccessForm from './EarlyAccessForm'

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
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-32">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellowish opacity-20 dark:opacity-30 animate-float"
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
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Join the New Era of <span className="text-yellowish">Real Estate Ownership</span>
        </h1>
        <p className="text-xl md:text-2xl text-yellowish italic mb-6 max-w-3xl mx-auto">
          Welcome to SmartDeeds—invite-only access to the multi-million-dollar residential market, secured on blockchain.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Get exclusive education, events, and behind-the-scenes access to the Malibu oceanfront estate by Tadao Ando (formerly owned by Kanye West). If approved, you&apos;ll join Belwood Investments through the rehab and sale, with private renovation updates and real-time learning as we prepare the property for market. Details shared privately by invite.
        </p>
        {/* Early Access Form */}
        <div className="mb-8">
          <EarlyAccessForm />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Book a Private Chat →
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          Exclusive early access. Limited invites remaining.
        </p>
      </div>
    </section>
  )
}
