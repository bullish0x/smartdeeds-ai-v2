'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Key, 
  Lock, 
  Eye, 
  Users, 
  Sparkles,
  Building2,
  FileCheck
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion'

const benefits = [
  {
    icon: Shield,
    title: 'Blockchain-Secured',
    description: 'Your membership is secured on-chain with smart contracts. Permanent, verifiable, and portable.',
  },
  {
    icon: Key,
    title: 'Exclusive Access',
    description: 'Invite-only membership to Project Malibu with private renovation updates and educational content.',
  },
  {
    icon: Lock,
    title: 'Funds in Escrow',
    description: 'Pre-launch commitments held securely in escrow. Fast refunds available before Launch per Terms.',
  },
  {
    icon: Eye,
    title: 'On-Chain Transparency',
    description: 'All transactions settle on Base network. Your wallet is your receipt—verifiable and permanent.',
  },
  {
    icon: Users,
    title: 'Lifetime Membership',
    description: 'Membership privileges for the active life of the property under SmartDeeds management.',
  },
  {
    icon: Sparkles,
    title: 'Educational Content',
    description: 'Exclusive access to real estate investment education, events, and behind-the-scenes property insights.',
  },
  {
    icon: Building2,
    title: 'Iconic Property',
    description: 'Access to the Tadao Ando-designed oceanfront estate—formerly owned by Kanye West.',
  },
  {
    icon: FileCheck,
    title: 'Compliance & Security',
    description: 'Multi-signature wallet security with jurisdictional compliance. KYC verification where required.',
  },
]

export default function VideoSection() {
  return (
    <section id="benefits" className="py-20 md:py-24 bg-black relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(238,254,147,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why <span className="text-yellowish">SmartDeeds</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Join the new era of real estate ownership. Blockchain-secured membership with exclusive access to iconic properties and real estate investment education.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div key={index} variants={staggerItem}>
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellowish/50 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-yellowish/10 group-hover:bg-yellowish/15 transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6 text-yellowish" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellowish transition-colors">
                          {benefit.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

