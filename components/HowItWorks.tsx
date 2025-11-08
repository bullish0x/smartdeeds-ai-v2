"use client";

import { motion } from "framer-motion";
import { Wallet, Layers, ShieldCheck, ShoppingCart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Wallet",
      description:
        "Connect your wallet to get started. Invite‑only access; proceed to select your tier.",
      icon: Wallet,
    },
    {
      number: "02",
      title: "Choose Your Tier",
      description:
        "Select from Founder, Diamond, Platinum, or Gold Pre‑Sale Voucher NFTs. Each tier offers unique benefits and access levels.",
      icon: Layers,
    },
    {
      number: "03",
      title: "Complete KYC",
      description:
        "Verify your identity through our secure KYC process. All information is encrypted and protected.",
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Purchase & Receive",
      description:
        "Purchase your Pre‑Sale Voucher NFT. Funding is held by the Escrow Agent and released at Launch per the Agreement.",
      icon: ShoppingCart,
    },
    {
      number: "05",
      title: "Access Benefits",
      description:
        "Gain exclusive access to Project Malibu, events, education, and real estate investment opportunities.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-zinc-900 relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(238,254,147,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            How It <span className="text-yellowish">Works</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Join SmartDeeds in five simple steps and start your journey into
            blockchain-secured real estate ownership
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} variants={staggerItem} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-yellowish/30 -z-10"
                    style={{ width: "calc(100% - 1.5rem)" }}
                  />
                )}

                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellowish/50 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-yellowish/10 group-hover:bg-yellowish/15 transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6 text-yellowish" />
                      </div>
                      <div className="text-yellowish text-3xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
