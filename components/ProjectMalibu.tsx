'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { PROJECT_MALIBU } from '@/lib/constants'

const GALLERY_IMAGES = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/ProjectMalibu.webp',
]

export default function ProjectMalibu() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Autoplay functionality
  useEffect(() => {
    // Don't autoplay if lightbox is open or if paused
    if (selectedImageIndex !== null || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [selectedImageIndex, isPaused])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setSelectedImageIndex((prev) => 
          prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
        )
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setSelectedImageIndex((prev) => 
          prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
        )
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setSelectedImageIndex(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImageIndex])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
    // Pause autoplay after manual navigation
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 4000)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
    // Pause autoplay after manual navigation
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 4000)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
    // Reset autoplay after manual navigation
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 4000)
  }

  return (
    <section id="project-malibu" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {PROJECT_MALIBU.name}
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              {PROJECT_MALIBU.description}
            </p>
            <p className="text-lg text-gray-400 mb-8">
              SmartDeeds membership tiers provide exclusive access to this iconic property
              through blockchain-secured membership passes. Each tier offers different levels
              of access and benefits related to Project Malibu.
            </p>

            {/* Project Details */}
            <div className="mb-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">MAX TERM</p>
                  <p className="text-lg font-semibold text-white">18 Months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">PROJECTED TIMEFRAME</p>
                  <p className="text-lg font-semibold text-white">12-14 Months</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">AS-IS MARKET VALUE</p>
                  <p className="text-lg font-semibold text-white">$35,000,000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">AFTER REPAIR VALUE (BPO)</p>
                  <p className="text-lg font-semibold text-white">$57,500,000</p>
                  <p className="text-sm text-gray-400 mt-1">Jason Oppenheim</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-4">
                  Your exchange value depends on your tier multiplier and is subject to market risk. Full terms in detail.
                </p>
                <p className="text-base text-white font-medium">
                  Join the membership and purchase this project.
                </p>
              </div>
            </div>

            <a
              href="#tiers"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              View Membership Tiers
            </a>
          </div>
          
          {/* Enhanced Image Gallery */}
          <div className="relative space-y-4">
            {/* Main Image Display */}
            <div 
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <Image
                src={GALLERY_IMAGES[currentIndex]}
                alt={`${PROJECT_MALIBU.name} - Image ${currentIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={currentIndex === 0}
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              
              {/* Click to open lightbox */}
              <button
                onClick={() => setSelectedImageIndex(currentIndex)}
                className="absolute inset-0 w-full h-full cursor-zoom-in"
                aria-label="View full size image"
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-white/20 text-gray-800 rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-white/20 text-gray-800 rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                {currentIndex + 1} / {GALLERY_IMAGES.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div 
              className="flex gap-2 overflow-x-auto py-2 px-2 scrollbar-hide"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {GALLERY_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 transition-all ${
                    currentIndex === index
                      ? 'p-2 -m-2'
                      : ''
                  }`}
                >
                  <button
                    onClick={() => goToImage(index)}
                    className={`relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all ${
                      currentIndex === index
                        ? 'ring-2 ring-white scale-105 shadow-lg'
                        : 'opacity-60 hover:opacity-100 hover:scale-[1.02]'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImageIndex(null)
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-20 bg-black/80 rounded-full p-3 hover:bg-black/90 backdrop-blur-sm"
              aria-label="Close lightbox"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImageIndex((prev) => 
                  prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
                )
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all z-20"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImageIndex((prev) => 
                  prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
                )
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all z-20"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[selectedImageIndex]}
                alt={`${PROJECT_MALIBU.name} - Full view`}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </div>

            {/* Image Counter in Lightbox */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm z-20">
              {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
            </div>

            {/* Keyboard Hint */}
            <div className="absolute bottom-4 right-4 text-white/60 text-xs bg-black/50 px-3 py-1.5 rounded backdrop-blur-sm z-20">
              Use ← → arrow keys to navigate
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

