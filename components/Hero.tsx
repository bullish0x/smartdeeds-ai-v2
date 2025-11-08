"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import { getImagePath } from "@/lib/utils";

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
  const launchDate = "2025-11-15T00:00:00Z";

  useEffect(() => {
    const difference = new Date(launchDate).getTime() - new Date().getTime();
    setTimerExpired(difference <= 0);

    // Cycle background images every 6 seconds
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleTimerExpired = () => setTimerExpired(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-24">
      {/* Background slideshow */}
      {IMAGES.map((src, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.05,
          }}
          transition={{ duration: 6, ease: "easeOut" }}
        >
          <Image
            src={src}
            alt={`Malibu ${i}`}
            fill
            priority={i === 0}
            className="object-cover object-center brightness-75"
          />
        </motion.div>
      ))}

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-[0_0_30px_rgba(238,254,147,0.35)]">
          The Malibu Drop:{" "}
          <span className="text-yellowish">Own a Piece of the Coast</span>
        </h1>

        <p className="text-xl md:text-2xl text-yellowish/95 italic mb-6 max-w-3xl mx-auto drop-shadow-md">
          A high‑velocity RWA moment. Public chain. Real‑world stakes. Malibu,
          for the bold.
        </p>

        <div className="mx-auto max-w-3xl rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 md:p-8 shadow-2xl">
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: [-2, 0, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white/90 border border-white/20"
            >
              Invite‑only
            </motion.span>
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: [-2, 0, -2] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white/90 border border-white/20"
            >
              Bring your own wallet
            </motion.span>
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: [-2, 0, -2] }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white/90 border border-white/20"
            >
              Viral RWA Launch
            </motion.span>
          </div>
          <ul className="text-base md:text-lg text-gray-200 leading-relaxed list-disc pl-6 space-y-2 text-left">
            <li>
              Founders’ Vouchers from $1,000 — limited mint. Whitelist moving
              fast.
            </li>
            <li>
              On Launch: Your Voucher evolves into a SmartDeed — an on‑chain
              assignment tying you to Project Malibu’s economics + members‑only
              access.
            </li>
            <li>
              Pre‑launch is for collectors — rights and membership unlock at
              conversion.
            </li>
          </ul>
        </div>

        {/* Countdown or CTA */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4">
          {!timerExpired ? (
            <>
              <p className="text-lg md:text-xl text-white/90">
                Pre‑Launch ends Nov 15, 2025
              </p>
              <CountdownTimer
                targetDate={launchDate}
                onExpired={handleTimerExpired}
              />
            </>
          ) : (
            <a
              href="#tiers"
              className="bg-yellowish text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-lg md:text-xl"
            >
              Pre‑Sale Vouchers
            </a>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#tiers"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Claim Your Spot →
          </a>
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-sm text-gray-400">
            Exclusive early access. Limited invites remaining.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
            <div className="rounded-lg bg-white/10 border border-white/20 p-4 text-left">
              <p className="text-white/95 text-sm font-semibold">
                Funds in Escrow · Fast Refunds
              </p>
              <p className="text-gray-300/90 text-xs mt-1">
                Pre‑launch commitments sit in escrow. If you request a refund
                before Launch, we’ll process it promptly per the Terms.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 border border-white/20 p-4 text-left">
              <p className="text-white/95 text-sm font-semibold">
                On‑Chain Transparency
              </p>
              <p className="text-gray-300/90 text-xs mt-1">
                Transactions settle on Base. Your wallet is your receipt —
                verifiable, permanent, and portable.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 border border-white/20 p-4 text-left">
              <p className="text-white/95 text-sm font-semibold">
                Jurisdictional Compliance
              </p>
              <p className="text-gray-300/90 text-xs mt-1">
                In the United States, purchases are subject to KYC and Terms;
                elsewhere, KYC may not apply.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
