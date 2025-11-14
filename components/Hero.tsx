"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import { getImagePath } from "@/lib/utils";
import { heroHeading, heroSubheading, heroCTA, staggerContainer, staggerItem } from "@/lib/motion";

const IMAGES = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/ProjectMalibu.webp",
].map(getImagePath);

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [timerExpired, setTimerExpired] = useState(false);
  const launchDate = "2025-11-22T00:00:00Z";

  // Parallax effect on scroll for background images
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);

  useEffect(() => {
    const difference = new Date(launchDate).getTime() - new Date().getTime();
    setTimerExpired(difference <= 0);

    // Cycle background images every 6 seconds with smoother transitions
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleTimerExpired = () => setTimerExpired(true);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16">
      {/* Background slideshow with enhanced transitions */}
      {IMAGES.map((src, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.1,
          }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 6, ease: "easeOut" }
          }}
          style={{ y: i === index ? y : 0 }}
        >
          <Image
            src={src}
            alt={`Malibu ${i + 1}`}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      ))}

      {/* Enhanced gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[1]" />
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] z-[1]" />

      {/* Hero Content with stagger animation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Main content - no fade effect */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={heroHeading}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight"
          >
            The Malibu Drop:{" "}
            <span className="text-yellowish bg-clip-text">
              Own a Piece of the Coast
            </span>
          </motion.h1>

          <motion.p
            variants={heroSubheading}
            className="text-lg sm:text-xl md:text-2xl text-yellowish/95 italic mb-8 max-w-3xl mx-auto drop-shadow-lg font-medium"
          >
            A high‑velocity RWA moment. Public chain. Real‑world stakes. Malibu,
            for the bold.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mx-auto max-w-3xl rounded-2xl bg-white/5 border border-white/20 backdrop-blur-lg p-6 md:p-8 shadow-2xl mb-8"
          >
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <Badge variant="outline" className="border-yellowish/50 text-yellowish bg-yellowish/10">
                Invite‑only
              </Badge>
              <Badge variant="outline" className="border-white/50 text-white/90 bg-white/10">
                Bring your own wallet
              </Badge>
              <Badge variant="outline" className="border-yellowish/50 text-yellowish bg-yellowish/10">
                Viral RWA Launch
              </Badge>
            </div>
            <ul className="text-base md:text-lg text-gray-100 leading-relaxed list-disc pl-6 space-y-3 text-left">
              <li>
                Founders' Vouchers from $1,000 — limited mint. Whitelist moving
                fast.
              </li>
              <li>
                On Launch: Your Voucher evolves into a SmartDeed — an on‑chain
                assignment tying you to Project Malibu's economics + members‑only
                access.
              </li>
              <li>
                Pre‑launch is for collectors — rights and membership unlock at
                conversion.
              </li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={heroCTA}
            className="flex flex-col items-center gap-6"
          >
          {!timerExpired ? (
            <>
              <p className="text-lg md:text-xl text-white font-semibold bg-yellowish/20 px-6 py-3 rounded-full border border-yellowish/50">
                Pre‑Launch ends Nov 22, 2025
              </p>
              <CountdownTimer
                targetDate={launchDate}
                onExpired={handleTimerExpired}
              />
              <Button 
                asChild 
                variant="yellowish" 
                size="lg"
                className="text-lg md:text-xl px-10 py-6 shadow-glow-lg"
              >
                <a href="#tiers">
                  Claim Your Spot →
                </a>
              </Button>
            </>
          ) : (
            <Button 
              asChild 
              variant="yellowish" 
              size="lg"
              className="text-lg md:text-xl px-10 py-6 shadow-glow-lg"
            >
              <a href="#tiers">
                Pre‑Sale Vouchers
              </a>
            </Button>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="min-w-[200px] border-2 border-white text-white hover:bg-white hover:text-black"
            >
              <a href="#how-it-works">
                Learn More
              </a>
            </Button>
          </div>

          <p className="text-sm text-gray-300 mt-4 font-medium">
            Exclusive early access • Limited invites remaining
          </p>
        </motion.div>
        </motion.div>

        {/* Info Cards - Outside fade effect for better readability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          <div className="rounded-lg bg-white/20 border border-white/30 p-5 text-left backdrop-blur-md shadow-xl hover:bg-white/25 transition-all duration-300">
            <p className="text-white text-base font-bold mb-2">
              Funds in Escrow · Fast Refunds
            </p>
            <p className="text-gray-200 text-sm leading-relaxed">
              Pre‑launch commitments sit in escrow. If you request a refund
              before Launch, we'll process it promptly per the Terms.
            </p>
          </div>
          <div className="rounded-lg bg-white/20 border border-white/30 p-5 text-left backdrop-blur-md shadow-xl hover:bg-white/25 transition-all duration-300">
            <p className="text-white text-base font-bold mb-2">
              On‑Chain Transparency
            </p>
            <p className="text-gray-200 text-sm leading-relaxed">
              Transactions settle on Base. Your wallet is your receipt —
              verifiable, permanent, and portable.
            </p>
          </div>
          <div className="rounded-lg bg-white/20 border border-white/30 p-5 text-left backdrop-blur-md shadow-xl hover:bg-white/25 transition-all duration-300">
            <p className="text-white text-base font-bold mb-2">
              Jurisdictional Compliance
            </p>
            <p className="text-gray-200 text-sm leading-relaxed">
              In the United States, purchases are subject to KYC and Terms;
              elsewhere, KYC may not apply.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned higher to avoid overlap */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer">
          <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
