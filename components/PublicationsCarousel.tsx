'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { PUBLICATIONS } from '@/lib/publications'
import { getImagePath } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function PublicationsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 },
      '(min-width: 1024px)': { slidesToScroll: 2 }
    }
  })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const isHoveredRef = useRef(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      isHoveredRef.current = true
      emblaApi.scrollPrev()
      // Resume autoplay after a delay
      setTimeout(() => {
        isHoveredRef.current = false
      }, 3000)
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      isHoveredRef.current = true
      emblaApi.scrollNext()
      // Resume autoplay after a delay
      setTimeout(() => {
        isHoveredRef.current = false
      }, 3000)
    }
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  // Auto-scroll functionality
  const startAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current)
    }
    
    autoplayIntervalRef.current = setInterval(() => {
      if (!isHoveredRef.current && emblaApi) {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext()
        } else {
          // Loop back to start
          emblaApi.scrollTo(0)
        }
      }
    }, 5000) // Auto-scroll every 5 seconds
  }, [emblaApi])

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current)
      autoplayIntervalRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
    
    // Start autoplay when carousel is ready
    startAutoplay()

    return () => {
      stopAutoplay()
    }
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay])

  return (
    <section 
      className="py-20 md:py-24 bg-zinc-900 relative"
      id="publications"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(238,254,147,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
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
            <span className="text-yellowish">Publications</span>
          </motion.h2>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative"
        >
          <div className="relative">
            {/* Navigation Arrows */}
            <Button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 hover:border-yellowish/50 hover:scale-110 transition-all shadow-xl z-20 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous publication"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </Button>
            <Button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 hover:border-yellowish/50 hover:scale-110 transition-all shadow-xl z-20 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next publication"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </Button>

            {/* Embla Carousel */}
            <div 
              className="overflow-hidden" 
              ref={emblaRef}
              onMouseEnter={() => {
                isHoveredRef.current = true
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false
              }}
            >
              <div className="flex gap-4 md:gap-6">
                {PUBLICATIONS.map((publication, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                  >
                    <Link
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full group"
                    >
                      <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg hover:border-yellowish/50 hover:shadow-xl hover:shadow-yellowish/10 transition-all duration-300 h-full flex flex-col">
                        <CardContent className="p-6 md:p-8 flex flex-col flex-1">
                          {/* Publication Logo with white background */}
                          <div className="relative w-full h-16 md:h-20 mb-4 flex items-center justify-center bg-white/90 rounded-lg p-3 md:p-4">
                            {publication.logo ? (
                              <Image
                                src={getImagePath(publication.logo)}
                                alt={publication.title}
                                width={200}
                                height={80}
                                className="object-contain w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                                unoptimized
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  if (target.parentElement) {
                                    target.parentElement.innerHTML = `<span class="text-gray-900 font-bold text-lg">${publication.title}</span>`
                                  }
                                }}
                              />
                            ) : (
                              <span className="text-gray-900 font-bold text-lg">{publication.title}</span>
                            )}
                          </div>

                          {/* Publication Title */}
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-yellowish transition-colors line-clamp-2">
                            {publication.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 flex-grow line-clamp-3">
                            {publication.excerpt}
                          </p>

                          {/* Read Article Link */}
                          <div className="flex items-center gap-2 text-gray-300 hover:text-yellowish text-xs md:text-sm font-semibold mt-auto group-hover:gap-3 transition-all">
                            <span>Read Article</span>
                            <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
