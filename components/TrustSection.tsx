"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Shield, FileCheck, Blocks } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { COMPANIES } from "@/lib/companies";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 md:py-24 bg-zinc-900 relative">
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
            Trusted <span className="text-yellowish">Infrastructure</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            SmartDeeds is built on proven blockchain technology and backed by institutional-grade processes
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-gray-300">
            SmartDeeds is founded by the team behind{" "}
            <strong>{COMPANY_INFO.founded}</strong>—with over{" "}
            <strong>{COMPANY_INFO.assets}</strong> and features in{" "}
            {COMPANY_INFO.mentions.map((mention, index, array) => (
              <Fragment key={index}>
                <em>{mention}</em>
                {index < array.length - 1 && " and "}
              </Fragment>
            ))}
            .
          </p>

          <p className="text-lg text-gray-300">
            SmartDeeds is membership‑first. At Launch, your SmartDeed is an
            on‑chain smart contract that grants a minority economic interest in
            Project Malibu plus membership access.
          </p>

          {/* Company Logos */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {COMPANIES.map((company, index) => (
              <motion.div
                key={company.id}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-4 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-white/10 hover:border-yellowish/50 hover:bg-white/10 transition-all flex items-center justify-center min-w-[120px]"
              >
                {company.logo ? (
                  <Image
                    src={getImagePath(company.logo)}
                    alt={company.name}
                    width={120}
                    height={40}
                    className="object-contain max-h-10 opacity-90 hover:opacity-100 transition-opacity"
                    unoptimized
                  />
                ) : (
                  <span className="text-white font-semibold text-sm">
                    {company.name}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Verifiable Trust Signals */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={staggerItem}>
              <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellowish/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-yellowish/10 group-hover:bg-yellowish/15 transition-colors">
                      <Shield className="w-5 h-5 text-yellowish" />
                    </div>
                    <h3 className="text-white font-semibold text-base whitespace-nowrap">
                      Escrow & Refunds
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Pre‑launch funds are held in escrow. If you request a refund
                    before Launch, we'll process it promptly as described in the
                    Terms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellowish/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-yellowish/10 group-hover:bg-yellowish/15 transition-colors">
                      <FileCheck className="w-5 h-5 text-yellowish" />
                    </div>
                    <h3 className="text-white font-semibold text-base">
                      Compliance
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    In the United States, purchases are subject to KYC verification
                    and Terms. Outside the U.S., KYC may not apply. We take AML and
                    sanctions screening seriously.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellowish/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-yellowish/10 group-hover:bg-yellowish/15 transition-colors">
                      <Blocks className="w-5 h-5 text-yellowish" />
                    </div>
                    <h3 className="text-white font-semibold text-base whitespace-nowrap">
                      On‑Chain Transparency
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Mints settle on Base. Your wallet and transaction history
                    provide public proof. You can always verify activity in your own
                    explorer.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
