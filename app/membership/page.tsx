"use client";

import { motion } from "framer-motion";
import { Crown, Gem, Award, Medal, ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

const tiers = [
  {
    id: "founders",
    icon: Crown,
    name: "Founders Circle — Legacy",
    subtitle: "Invitation Only",
    price: "$300,000",
    exchange: "1.33×",
    color: "from-purple-500 to-pink-500",
    features: [
      "💎 Includes all Diamond perks",
      "👥 Exclusive Founders Summit",
      "🔖 Name recognition at property",
      "🤝 Special co-branding privileges"
    ]
  },
  {
    id: "diamond",
    icon: Gem,
    name: "Diamond — Estate Tier",
    subtitle: "Premium Access",
    price: "$100,000",
    exchange: "1.30×",
    color: "from-cyan-500 to-blue-500",
    features: [
      "🥈 Includes all Platinum perks",
      "🏡 4 Private Estate Sessions/year",
      "🍽️ Half-day hosted experiences (up to 12 guests)",
      "👨‍🍳 1 chef dinner annually",
      "🗓️ Concierge scheduling included"
    ]
  },
  {
    id: "platinum",
    icon: Award,
    name: "Platinum — Social Tier",
    subtitle: "Enhanced Experience",
    price: "$10,000",
    exchange: "1.25×",
    color: "from-gray-400 to-gray-600",
    features: [
      "🥇 Includes all Gold perks",
      "🌅 2 Malibu Member Days/year",
      "🎤 Sunset receptions & curated talks",
      "🤝 Private guest access privileges"
    ]
  },
  {
    id: "gold",
    icon: Medal,
    name: "Gold — Insider Tier",
    subtitle: "Foundation Access",
    price: "$1,000",
    exchange: "1.20×",
    color: "from-yellow-500 to-orange-500",
    features: [
      "🏛️ One guided day at Malibu Estate",
      "📐 Property tour & architecture briefing",
      "🤝 Private networking mixer"
    ]
  }
];

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <Badge variant="outline" className="border-yellowish/50 text-yellowish bg-yellowish/10 px-4 py-2 text-base">
                Invite-Only Program
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Membership <span className="text-yellowish">Overview</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8"
            >
              Invite‑only access to Project Malibu — on a public blockchain. Bring
              your own wallet. At go‑live, presale Vouchers are redeemed for a
              SmartDeed Digital Assignment Contract (DAC) issued at the tier's
              Exchange Rate.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-yellowish text-yellowish hover:bg-yellowish hover:text-black"
              >
                <a href="/terms">
                  Read Presale Terms <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Tiers Grid */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div key={tier.id} variants={staggerItem}>
                  <Card className="bg-zinc-950 border-white/10 hover:border-yellowish/50 transition-all duration-300 hover:shadow-glow group h-full">
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div 
                          className={`p-3 rounded-xl bg-gradient-to-br ${tier.color} shadow-lg group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline" className="border-yellowish/50 text-yellowish bg-yellowish/10">
                          {tier.exchange} Exchange Rate
                        </Badge>
                      </div>
                      
                      <div>
                        <CardTitle className="text-2xl text-white mb-1">
                          {tier.name}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {tier.subtitle}
                        </CardDescription>
                      </div>
                      
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-yellowish">
                          {tier.price}
                        </span>
                        <span className="text-sm text-gray-500">
                          Pre-Launch Voucher
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <Check className="w-5 h-5 text-yellowish mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        asChild 
                        variant={tier.id === "founders" ? "yellowish" : "outline"}
                        className={`w-full ${tier.id !== "founders" ? "border-white/20 text-white hover:bg-white/10" : ""}`}
                      >
                        <a href="/#tiers">
                          {tier.id === "founders" ? "Request Invite" : `Select ${tier.name.split(' — ')[0]}`}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-zinc-950 border-yellowish/30">
              <CardHeader>
                <CardTitle className="text-white">Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="flex gap-3">
                  <div className="w-1.5 bg-yellowish rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Voucher & Launch</p>
                    <p>
                      SmartDeed NFT (on-chain digital assignment granting a minority economic
                      assignment—no title/governance—plus non-financial membership access) is issued at
                      the applicable Exchange Rate.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-1.5 bg-yellowish rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Membership Benefits</p>
                    <p>
                      Lifetime privileges for the active life of the property under SmartDeeds' management.
                      Membership is consumptive and non-financial—no dividends, profit-sharing, voting, or
                      control rights.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-1.5 bg-yellowish rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Eligibility</p>
                    <p>
                      Participation is subject to eligibility, KYC/AML, and sanctions screening. Funding
                      is held in escrow and released at Launch per the Agreement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
