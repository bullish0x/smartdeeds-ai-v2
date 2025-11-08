"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Wallet, Shield } from "lucide-react";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import KycPrompt, { useKycStatus } from "@/components/KycPrompt";
import { base } from "thirdweb/chains";
import { getThirdwebClient } from "@/lib/thirdweb-client";
import { getImagePath } from "@/lib/utils";
import { cn } from "@/lib/ui";
import { slideInFromRight, mobileMenuVariants, menuItemVariants } from "@/lib/motion";

const navItems = [
  { href: "#project-malibu", label: "Project Malibu" },
  { href: "#malibu-program", label: "Program" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#tiers", label: "Membership Tiers" },
  { href: "#booking", label: "Book a Chat" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [kycOpen, setKycOpen] = useState(false);
  const { kycEnabled, verified, refresh } = useKycStatus();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const account = useActiveAccount();

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
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    // Observe all sections from navItems
    navItems.forEach(({ href }) => {
      const id = href.startsWith("#") ? href.slice(1) : href.split("#")[1];
      if (id) {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    // Also observe hero section
    const heroElement = document.getElementById("hero");
    if (heroElement) observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return activeSection === href;
    }
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
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <Image
              src={getImagePath("/images/smartdeeds.png")}
              alt="SmartDeeds"
              width={200}
              height={60}
              className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[200px] object-contain transition-transform group-hover:scale-105"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 relative",
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
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellowish"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {client && (
              <div className="ml-2 flex-shrink-0">
                {kycEnabled && !verified ? (
                  // Show "Verify to Connect" button when KYC is required
                  <button
                    onClick={() => setKycOpen(true)}
                    className="px-4 py-2 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 transition-all font-semibold text-sm shadow-lg flex items-center gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    Verify to Connect
                  </button>
                ) : (
                  // Show normal ConnectButton when KYC is not required or already verified
                  <div className={cn(
                    "relative rounded-lg overflow-hidden backdrop-blur-md border transition-all",
                    account 
                      ? "bg-white/5 border-white/10 hover:border-white/20 [&_button]:!bg-transparent [&_button]:!text-white [&_button:hover]:!text-yellowish [&_button]:!border-none [&_button]:!font-medium [&_button]:!text-sm [&_button]:!px-4 [&_button]:!py-2"
                      : "bg-zinc-800/90 border-zinc-700 hover:border-zinc-600 [&_button]:!bg-zinc-800 [&_button]:!text-white [&_button:hover]:!bg-zinc-700 [&_button]:!border-none [&_button]:!font-semibold [&_button]:!text-sm [&_button]:!px-4 [&_button]:!py-2 [&_button]:!shadow-lg"
                  )}>
                    <ConnectButton 
                      client={client} 
                      chain={base}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {client && (
              <>
                {/* Icon-only button for mobile */}
                {kycEnabled && !verified ? (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setKycOpen(true)}
                    className="p-2 rounded-lg bg-zinc-800/90 backdrop-blur-md border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-700 transition-all text-white"
                    aria-label="Verify to connect wallet"
                  >
                    <Shield className="w-5 h-5" />
                  </motion.button>
                ) : (
                  <>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setConnectModalOpen(true)}
                      className="p-2 rounded-lg bg-zinc-800/90 backdrop-blur-md border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-700 transition-all text-white"
                      aria-label="Connect wallet"
                    >
                      <Wallet className="w-5 h-5" />
                    </motion.button>
                    
                    {/* Connect Modal */}
                    <Dialog open={connectModalOpen} onOpenChange={setConnectModalOpen}>
                      <DialogContent className="max-w-md w-full bg-zinc-900 border-white/10 p-6">
                        <VisuallyHidden>
                          <DialogTitle>Connect Wallet</DialogTitle>
                        </VisuallyHidden>
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-white mb-4 text-center">
                            Connect Your Wallet
                          </h3>
                          <div className="relative w-full [&_button]:!w-full [&_button]:!bg-zinc-800 [&_button]:!text-white [&_button:hover]:!bg-zinc-700 [&_button]:!border-none [&_button]:!font-semibold [&_button]:!rounded-lg [&_button]:!h-12 [&_button]:!text-base [&_button]:!shadow-lg">
                            <ConnectButton 
                              client={client} 
                              chain={base}
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </>
                )}
              </>
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
              className="lg:hidden overflow-hidden"
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
      <KycPrompt
        open={kycOpen}
        onOpenChange={(o) => {
          setKycOpen(o);
          if (!o) refresh();
        }}
      />
    </motion.header>
  );
}
