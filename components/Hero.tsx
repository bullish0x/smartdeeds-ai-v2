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
  const launchDate = "2025-11-14T00:00:00Z";

  // Parallax effect on scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16">
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
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
      >
        <motion.h1
          variants={heroHeading}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight"
        >
          Join the New Era of{" "}
          <span className="text-yellowish bg-clip-text text-transparent bg-gradient-to-r from-yellowish via-yellow-200 to-yellowish">
            Real Estate Ownership
          </span>
        </motion.h1>

        <motion.p
          variants={heroSubheading}
          className="text-lg sm:text-xl md:text-2xl text-yellow-100 italic mb-8 max-w-3xl mx-auto drop-shadow-lg font-medium"
        >
          Invite-only access to Project Malibu—on a public blockchain. Bring
          your own wallet.
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
          </div>
          <ul className="text-base md:text-lg text-gray-100 leading-relaxed list-disc pl-6 space-y-3 text-left">
            <li>Pre‑Launch Voucher starting at $1,000</li>
            <li>
              At Launch: Voucher converts to your SmartDeed — a digital
              assignment recorded on‑chain that grants an economic interest in
              Project Malibu plus membership access
            </li>
            <li>Before Launch: no membership or economic rights</li>
          </ul>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={heroCTA}
          className="flex flex-col items-center gap-6"
        >
          {!timerExpired ? (
            <p className="text-lg md:text-xl text-white font-semibold bg-yellowish/20 px-6 py-2 rounded-full border border-yellowish/50">
              PRE-LAUNCH LIVE NOW
            </p>
          ) : (
            <Button 
              asChild 
              variant="yellowish" 
              size="lg"
              className="text-lg md:text-xl px-10 py-6 shadow-glow-lg"
            >
              <a href="#tiers">
                Pre-Sale Vouchers
              </a>
            </Button>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              variant="yellowish" 
              size="lg"
              className="min-w-[200px]"
            >
              <a href="#tiers">
                Purchase Now →
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="min-w-[200px] border-2 border-white text-white hover:bg-white hover:text-black"
            >
              <a href="#project-malibu">
                Learn More
              </a>
            </Button>
          </div>

          <p className="text-sm text-gray-300 mt-4 font-medium">
            Exclusive early access • Limited invites remaining
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <svg
              className="w-6 h-6 animate-bounce"
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
      </motion.div>
    </section>
  );
}
