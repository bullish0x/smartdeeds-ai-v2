'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { getImagePath } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-16 md:py-20 relative border-t border-white/10">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(238,254,147,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={getImagePath("/images/smartdeeds.png")}
                alt="SmartDeeds"
                width={150}
                height={45}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
                priority
                unoptimized
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              SmartDeed™ NFT and Membership Pre‑Sale (invite‑only). Blockchain-secured membership tiers providing exclusive access to Project Malibu—the iconic Tadao Ando-designed oceanfront estate.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Escrowed funding (per Agreement). Voucher NFT converts to SmartDeed NFT at Launch.
            </p>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#project-malibu"
                  className="text-gray-400 hover:text-yellowish transition-colors"
                >
                  Project Malibu
                </Link>
              </li>
              <li>
                <Link
                  href="#trust"
                  className="text-gray-400 hover:text-yellowish transition-colors"
                >
                  Trusted Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-yellowish transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#malibu-program"
                  className="text-gray-400 hover:text-yellowish transition-colors"
                >
                  Malibu Program
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-gray-400 hover:text-yellowish transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#tiers"
                  className="text-gray-400 hover:text-yellowish transition-colors"
                >
                  Membership Tiers
                </Link>
              </li>
              <li>
                <Link
                  href="#publications"
                  className="text-gray-400 hover:text-yellowish transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="text-gray-400 hover:text-yellowish transition-colors"
                >
                  Why SmartDeeds
                </Link>
              </li>
              <li>
                <Link
                  href="#booking"
                  className="text-gray-400 hover:text-yellowish transition-colors"
                >
                  Book a Chat
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-yellowish transition-colors relative z-10 inline-block"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/kyc/start"
                  className="text-gray-400 hover:text-yellowish transition-colors relative z-10 inline-block"
                >
                  KYC Verification
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-gray-400 hover:text-yellowish transition-colors relative z-10 inline-block"
                >
                  Membership
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#booking"
                  className="text-gray-400 hover:text-yellowish transition-colors"
                >
                  Schedule a Chat
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).Intercom) {
                      try {
                        (window as any).Intercom("show");
                      } catch {}
                    }
                  }}
                  className="text-gray-400 hover:text-yellowish transition-colors text-left"
                >
                  Support
                </button>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright & Powered By */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-white/10 text-center space-y-4"
        >
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SmartDeeds. All rights reserved.
          </p>
          <div className="flex flex-col items-center pt-2">
            <p className="text-base text-gray-300 font-medium">
              SmartDeeds powered by <span className="text-yellowish font-semibold">Sols Lot</span> and <span className="text-yellowish font-semibold">Belwood</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

