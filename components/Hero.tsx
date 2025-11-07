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
  "/images/gallery/5.jpg",
  "/images/gallery/ProjectMalibu.webp",
].map(getImagePath);

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [timerExpired, setTimerExpired] = useState(false);
  const launchDate = "2025-11-14T00:00:00Z";

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
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Join the New Era of{" "}
          <span className="text-yellowish">Real Estate Ownership</span>
        </h1>

        <p className="text-xl md:text-2xl text-yellowish italic mb-6 max-w-3xl mx-auto drop-shadow-md">
          Invite-only access to Project Malibu—on a public blockchain. Bring
          your own wallet.
        </p>

        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed">
          Get education, events, and behind-the-scenes content for the Malibu
          oceanfront property designed by Tadao Ando and once owned by Kanye
          West. If approved, you’ll follow Belwood Investments with private
          renovation updates and real-time learning as the property is prepared
          for market. Details are shared privately by invite.
        </p>
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Minimum purchase starts at $1,000 (Gold) at a defined Exchange Rate
          (per tier). At go‑live, your presale Voucher is redeemed for a
          SmartDeed Digital Assignment Contract (DAC) that combines a minority
          contractual economic assignment under a Forward Sale &amp; Exchange
          Agreement (not title or governance) and a Global Digital Membership
          Grant (consumptive, non‑financial) with exclusive access perks. Prior
          to go‑live, Vouchers confer no membership privileges or economic
          rights; no dividends, profit‑sharing, voting, or control rights are
          granted.
        </p>

        {/* Countdown or CTA */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4">
          {!timerExpired ? (
            <>
              <p className="text-lg md:text-xl text-white mb-2">
                Global Launch in
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
              Pre-Sale Vouchers
            </a>
          )}
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
      </motion.div>
    </section>
  );
}
