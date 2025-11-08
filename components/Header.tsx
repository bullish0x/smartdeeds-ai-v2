"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ConnectButton } from "thirdweb/react";
import { base } from "thirdweb/chains";
import { getThirdwebClient } from "@/lib/thirdweb-client";
import { getImagePath } from "@/lib/utils";
import { cn } from "@/lib/ui";
import { slideInFromRight, mobileMenuVariants, menuItemVariants } from "@/lib/motion";

const navItems = [
  { href: "/#tiers", label: "Pre‑Launch Voucher NFT" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#about", label: "About" },
  { href: "/terms", label: "Terms" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Get client for ConnectButton
  const client = useMemo(() => {
    try {
      return getThirdwebClient();
    } catch (error) {
      console.warn("Failed to get thirdweb client:", error);
      return null;
    }
  }, []);

  // Track scroll position for glass morphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section with intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -50% 0px" }
    );

    navItems.forEach(({ href }) => {
      const id = href.split("#")[1];
      if (id) {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return activeSection === href.slice(1);
    }
    return false;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "backdrop-blur-md bg-black/80 border-b border-white/10 shadow-lg"
          : "bg-black/60 backdrop-blur-sm border-b border-gray-800"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src={getImagePath("/images/smartdeeds.png")}
              alt="SmartDeeds"
              width={180}
              height={40}
              className="h-8 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-all duration-200",
                  "hover:text-yellowish",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellowish rounded-md px-2 py-1",
                  isActive(href)
                    ? "text-yellowish"
                    : "text-gray-200"
                )}
              >
                {label}
                {isActive(href) && (
                  <motion.div
                    layoutId="activeSection"
                    className="h-0.5 bg-yellowish mt-1"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {client && (
              <div className="ml-2 scale-90 origin-right">
                <div
                  className="rounded-lg overflow-hidden"
                  style={{
                    backgroundColor: "#EEFE93",
                    color: "#000000",
                  }}
                >
                  <ConnectButton client={client} chain={base} />
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {client && (
              <div className="scale-75">
                <div
                  className="rounded-lg overflow-hidden"
                  style={{
                    backgroundColor: "#EEFE93",
                    color: "#000000",
                  }}
                >
                  <ConnectButton client={client} chain={base} />
                </div>
              </div>
            )}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 text-white hover:text-yellowish transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellowish"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-white/10">
                {navItems.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    custom={i}
                    variants={menuItemVariants}
                  >
                    <Link
                      href={href}
                      className={cn(
                        "block px-4 py-3 rounded-lg transition-all",
                        "hover:bg-yellowish/10 hover:text-yellowish",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellowish focus-visible:ring-inset",
                        isActive(href)
                          ? "bg-yellowish/10 text-yellowish font-medium"
                          : "text-gray-200"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
