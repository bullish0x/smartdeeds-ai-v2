"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { getImagePath } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

// Carousel data
const SLIDES = [
  {
    id: "bo-belmont",
    badge: "Founder & Visionary",
    title: "Bo Belmont",
    description: [
      "Bo Belmont is the visionary founder behind SmartDeeds, bringing together decades of experience in real estate investment and cutting-edge blockchain technology.",
      "With a proven track record through Solslot.com, Bestia AI, and Belwood Investments, Bo has managed over $150M+ in assets and has been featured in leading publications including The Wall Street Journal and The Real Deal.",
      "His vision for SmartDeeds is to democratize access to premium real estate investments through blockchain-secured membership tiers, starting with the iconic Project Malibu—the Tadao Ando-designed oceanfront property once owned by Kanye West."
    ],
    image: "/images/bo-belmont.jpg",
    cta: { text: "Purchase Now", href: "#tiers" }
  },
  {
    id: "solslot",
    badge: "Proven Platform",
    title: "Solslot",
    description: [
      "Solslot is the pioneering platform that revolutionized fractional real estate investment through blockchain technology. With a proven track record of successful property tokenization, Solslot has enabled thousands of investors to access premium real estate opportunities.",
      "The platform has facilitated over $150M+ in real estate transactions, demonstrating the viability and demand for blockchain-secured property investments.",
      "SmartDeeds builds on Solslot's proven infrastructure and expertise, taking the concept to the next level with exclusive membership-based access to iconic properties."
    ],
    image: "/images/companies/solslot-platform.png",
    cta: { text: "View Tiers", href: "#tiers" }
  },
  {
    id: "bestia-ai",
    badge: "Innovation Engine",
    title: "Bestia AI",
    description: [
      "Bestia AI brings cutting-edge artificial intelligence and machine learning capabilities to real estate investment analysis and decision-making.",
      "By leveraging advanced data analytics, predictive modeling, and market intelligence, Bestia AI provides the technological backbone that powers SmartDeeds' investment strategies and member benefits.",
      "The platform continuously analyzes market trends, property values, and investment opportunities to ensure SmartDeeds members receive data-driven insights and optimal outcomes."
    ],
    image: "/images/companies/bestia-ai.svg",
    cta: { text: "Explore Technology", href: "#how-it-works" }
  },
  {
    id: "belwood",
    badge: "Investment Expertise",
    title: "Belwood Investments",
    description: [
      "Belwood Investments is the institutional-grade investment firm behind SmartDeeds, bringing decades of real estate expertise and a portfolio exceeding $150M+ in managed assets.",
      "With a focus on premium coastal properties and architectural landmarks, Belwood has established a reputation for identifying and acquiring exceptional real estate opportunities.",
      "The Belwood Investment Circle offers exclusive access to SmartDeeds opportunities, combining traditional investment rigor with blockchain innovation for a new era of real estate ownership."
    ],
    image: "/images/companies/belwood-investments.svg",
    cta: { text: "Join Membership", href: "#tiers" }
  }
];

export default function Team() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="about" className="py-20 md:py-24 bg-zinc-900 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(238,254,147,0.02)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Built by <span className="text-yellowish">Proven Real Estate Innovators</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Meet the team and platforms powering SmartDeeds
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {SLIDES.map((slide, index) => (
                <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-20">
                    {/* Content Side */}
                    <AnimatePresence mode="wait">
                      {selectedIndex === index && (
                        <motion.div
                          key={`content-${slide.id}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.5 }}
                          className="order-2 lg:order-1"
                        >
                          <div className="mb-6">
                            <Badge variant="outline" className="border-yellowish/50 text-yellowish bg-yellowish/10 mb-4">
                              {slide.badge}
                            </Badge>
                            <h3 className="text-4xl md:text-5xl font-bold text-white">
                              About <span className="text-yellowish">{slide.title}</span>
                            </h3>
                          </div>
                          
                          <div className="space-y-4 text-gray-300 mb-8">
                            {slide.description.map((paragraph, i) => (
                              <p key={i} className="text-base md:text-lg leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                          
                          <Button asChild variant="yellowish" size="lg">
                            <a href={slide.cta.href}>
                              {slide.cta.text}
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Image Side */}
                    <AnimatePresence mode="wait">
                      {selectedIndex === index && (
                         <motion.div
                          key={`image-${slide.id}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.5 }}
                          className="order-1 lg:order-2"
                        >
                          <div className={`relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group ${
                            slide.id === 'bo-belmont' ? 'bg-black' : 'bg-gradient-to-br from-zinc-900 to-zinc-950'
                          }`}>
                            {/* Gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellowish/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            
                            <Image
                              src={getImagePath(slide.image)}
                              alt={`${slide.title} - ${slide.badge}`}
                              fill
                              className={`transition-all duration-700 group-hover:scale-105 ${
                                slide.id === 'bo-belmont' 
                                  ? 'object-cover' 
                                  : 'object-contain p-8'
                              }`}
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority={index === 0}
                            />
                            
                            {/* Subtle border glow on hover */}
                            <div className="absolute inset-0 ring-1 ring-inset ring-yellowish/0 group-hover:ring-yellowish/30 transition-all duration-500 rounded-2xl" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Positioned outside content area */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-20">
            <Button
              onClick={scrollPrev}
              variant="ghost"
              size="icon"
              className="pointer-events-auto h-14 w-14 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 hover:border-yellowish/50 hover:scale-110 transition-all shadow-xl -ml-4"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-7 h-7 text-white" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="ghost"
              size="icon"
              className="pointer-events-auto h-14 w-14 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 hover:border-yellowish/50 hover:scale-110 transition-all shadow-xl -mr-4"
              aria-label="Next slide"
            >
              <ChevronRight className="w-7 h-7 text-white" />
            </Button>
          </div>

          {/* Mobile Navigation - Below carousel */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <Button
              onClick={scrollPrev}
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 hover:border-yellowish/50 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 hover:border-yellowish/50 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-yellowish"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

