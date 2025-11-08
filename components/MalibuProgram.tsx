'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, PenTool, Star, Key, Network, Users } from "lucide-react"
import { MALIBU_TIERS } from '@/lib/constants'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion"

export default function MalibuProgram() {
  const [activeTab, setActiveTab] = useState("property-snapshot")
  return (
    <section id="malibu-program" className="py-20 md:py-24 bg-black relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(238,254,147,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            Malibu <span className="text-yellowish">Program</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-4xl mx-auto"
          >
            Welcome to SmartDeeds—invite-only access to the multi-million-dollar residential market, secured on blockchain. Get exclusive education, events, and behind-the-scenes access to the Malibu oceanfront estate by Tadao Ando (formerly owned by Kanye West). If approved, you'll follow Belwood Investments through the rehab and sale, with private renovation updates and real-time learning as we prepare the property for market. Details shared privately by invite.
          </motion.p>
        </motion.div>

        {/* Tabs for Sections */}
        <Tabs defaultValue="property-snapshot" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-1.5 mb-6 grid grid-cols-3 gap-2 h-auto">
              <TabsTrigger 
                value="property-snapshot" 
                className="text-xs sm:text-sm md:text-base font-semibold text-gray-400 data-[state=active]:text-yellowish data-[state=active]:bg-white/10 data-[state=active]:shadow-sm rounded-md transition-all py-2 sm:py-3 px-2 sm:px-3 hover:text-white whitespace-nowrap overflow-hidden text-ellipsis"
              >
                Property Snapshot
              </TabsTrigger>
              <TabsTrigger 
                value="membership-tiers" 
                className="text-xs sm:text-sm md:text-base font-semibold text-gray-400 data-[state=active]:text-yellowish data-[state=active]:bg-white/10 data-[state=active]:shadow-sm rounded-md transition-all py-2 sm:py-3 px-2 sm:px-3 hover:text-white whitespace-nowrap overflow-hidden text-ellipsis"
              >
                Membership Tiers
              </TabsTrigger>
              <TabsTrigger 
                value="disclosures" 
                className="text-xs sm:text-sm md:text-base font-semibold text-gray-400 data-[state=active]:text-yellowish data-[state=active]:bg-white/10 data-[state=active]:shadow-sm rounded-md transition-all py-2 sm:py-3 px-2 sm:px-3 hover:text-white whitespace-nowrap overflow-hidden text-ellipsis"
              >
                Disclosures
              </TabsTrigger>
            </TabsList>

            {/* Property Snapshot Tab */}
            <TabsContent value="property-snapshot" className="mt-0">
              <motion.div
                key={`property-snapshot-${activeTab}`}
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                  {[
                    { 
                      label: "Property", 
                      value: "Malibu oceanfront estate",
                      icon: Building2,
                      description: "Iconic coastal property"
                    },
                    { 
                      label: "Architect", 
                      value: "Tadao Ando",
                      icon: PenTool,
                      description: "Pritzker Prize-winning architect"
                    },
                    { 
                      label: "Provenance", 
                      value: "Formerly owned by Kanye West",
                      icon: Star,
                      description: "Cultural significance"
                    },
                    { 
                      label: "Access", 
                      value: "Invite-only program with private renovation updates and educational content",
                      icon: Key,
                      description: "Exclusive membership"
                    },
                    { 
                      label: "Program Rail", 
                      value: "Base blockchain (USDC for on-chain rails)",
                      icon: Network,
                      description: "Blockchain-secured"
                    },
                    { 
                      label: "Operator", 
                      value: "SmartDeeds, in collaboration with Belwood Investments",
                      icon: Users,
                      description: "Proven expertise"
                    },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div key={index} variants={staggerItem}>
                        <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellowish/50 transition-all duration-300 group h-full">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="p-3 rounded-lg bg-yellowish/10 group-hover:bg-yellowish/15 transition-colors flex-shrink-0">
                                <Icon className="w-6 h-6 text-yellowish" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium">{item.label}</p>
                                {item.description && (
                                  <p className="text-xs text-gray-500 italic mb-2">{item.description}</p>
                                )}
                              </div>
                            </div>
                            <p className="text-base font-bold text-white leading-relaxed">{item.value}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
              </motion.div>
            </TabsContent>

            {/* Membership Tiers Tab */}
            <TabsContent value="membership-tiers" className="mt-0">
              <motion.div
                key={`membership-tiers-${activeTab}`}
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                  {MALIBU_TIERS.map((tier, index) => (
                    <motion.div key={tier.id} variants={staggerItem}>
                      <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellowish/50 transition-all duration-300 group h-full">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-bold text-white mb-3">
                            {tier.name}
                          </h4>
                          <div className="mb-3">
                            <p className="text-2xl font-bold text-white">
                              {tier.priceFormatted}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {tier.exchangeRateMultiplier} Exchange Rate Multiplier
                            </p>
                          </div>
                          <ul className="space-y-2">
                            {tier.benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-gray-300 flex items-start leading-relaxed">
                                <span className="text-yellowish mr-2">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>

            {/* Important Disclosures Tab */}
            <TabsContent value="disclosures" className="mt-0">
              <motion.div
                key={`disclosures-${activeTab}`}
                initial="initial"
                animate="animate"
                variants={fadeInUp}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                  <CardContent className="p-6">
                    <div className="space-y-5 text-gray-300">
                      {/* Voucher & Go-Live */}
                      <div>
                        <h4 className="text-base font-semibold text-white mb-3">Voucher & Go‑Live</h4>
                        <p className="text-sm leading-relaxed mb-3 text-gray-300">
                          This presale Voucher evidences only a paid reservation. No present rights are granted. At go‑live, your SmartDeed DAC is issued at the applicable Exchange Rate and your Global Digital Membership activates. Membership is consumptive and non‑financial.
                        </p>
                        <ul className="text-sm space-y-2 ml-4 list-disc text-gray-300">
                          <li>
                            <strong className="text-white">Voucher:</strong> presale instrument only; no membership privileges or economic/property interest until go‑live and DAC issuance.
                          </li>
                          <li>
                            <strong className="text-white">Exchange at Go‑Live:</strong> Presale Amount × Exchange Rate determines your DAC interest; recorded on the Base network. The Canonical Registry controls.
                          </li>
                          <li>
                            <strong className="text-white">Membership:</strong> consumptive access benefits; no dividends, profit‑sharing, voting, or control rights.
                          </li>
                        </ul>
                      </div>

                      {/* Duration & Transition */}
                      <div>
                        <h4 className="text-base font-semibold text-white mb-3">Duration & Transition</h4>
                        <ul className="text-sm space-y-2 ml-4 list-disc text-gray-300">
                          <li>
                            All Malibu memberships grant lifetime privileges for the active life of the property under SmartDeeds' management.
                          </li>
                          <li>
                            If the Malibu Estate is sold, recapitalized, or transferred, member access and privileges will conclude with the transition.
                          </li>
                          <li>
                            Post‑settlement, SmartDeed may issue a non‑transferable digital Membership credential to preserve gated access (non‑financial; subject to program terms).
                          </li>
                        </ul>
                      </div>

                      {/* Settlement & Redemption */}
                      <div>
                        <h4 className="text-base font-semibold text-white mb-3">Settlement & Redemption (High‑Level)</h4>
                        <p className="text-sm leading-relaxed text-gray-300">
                          If and when a Settlement Event occurs, and after legal review and compliance clearance, SmartDeed may initiate an exchange process under the DAC. Payments, if any, are intended to be delivered in USDC on Base to your whitelisted wallet; alternate rails may be offered at the Company's discretion with applicable fees/withholding. No automatic conversion is promised; timing and mechanics are governed by program terms and notices.
                        </p>
                      </div>

                      {/* Important Disclosures */}
                      <div>
                        <h4 className="text-base font-semibold text-white mb-3">Important Disclosures</h4>
                        <ul className="text-sm space-y-2 ml-4 list-disc text-gray-300">
                          <li>
                            No present property interest; prior to go‑live, Vouchers confer no membership privileges, no economic or property interest, and no settlement rights.
                          </li>
                          <li>
                            No dividends, profit-sharing, voting, or governance rights are conveyed by membership.
                          </li>
                          <li>
                            Participation is subject to eligibility, KYC/AML, and sanctions screening.
                          </li>
                          <li>
                            On-chain operations and any distributions (if applicable) are intended to use USDC on the Base network unless otherwise stated in official notices.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
      </div>
    </section>
  )
}

