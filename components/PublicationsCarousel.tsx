'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PUBLICATIONS } from '@/lib/publications'
import { getImagePath } from '@/lib/utils'

export default function PublicationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PUBLICATIONS.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const currentPublication = PUBLICATIONS[currentIndex]

  return (
    <section 
      className="publications bg-black text-white"
      id="publications"
      style={{ padding: '6rem 5%', background: '#000000', color: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Publications
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto relative">
          <div 
            className="relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 bg-white"
          >
            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.preventDefault()
                setCurrentIndex(
                  (prev) => (prev - 1 + PUBLICATIONS.length) % PUBLICATIONS.length
                )
              }}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all z-20 border border-gray-200 hover:border-[#EEFE93] hover:shadow-[#EEFE93]/30"
              aria-label="Previous publication"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                setCurrentIndex((prev) => (prev + 1) % PUBLICATIONS.length)
              }}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all z-20 border border-gray-200 hover:border-[#EEFE93] hover:shadow-[#EEFE93]/30"
              aria-label="Next publication"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <Link
              href={currentPublication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative min-h-[450px] md:min-h-[500px] p-12 md:p-16 lg:p-20 flex flex-col justify-center group"
            >
              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
                {/* Publication Logo */}
                <div className="relative w-full max-w-[320px] h-24 md:h-28 lg:h-32 mx-auto mb-6 flex items-center justify-center">
                  {currentPublication.logo ? (
                    <Image
                      src={getImagePath(currentPublication.logo)}
                      alt={currentPublication.title}
                      width={320}
                      height={128}
                      className="object-contain w-full h-full opacity-95 group-hover:opacity-100 transition-opacity"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `<span class="text-gray-800 font-bold text-3xl">${currentPublication.title}</span>`
                        }
                      }}
                    />
                  ) : (
                    <span className="text-gray-800 font-bold text-3xl">{currentPublication.title}</span>
                  )}
                </div>

                {/* Publication Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 group-hover:text-[#EEFE93] transition-colors">
                  {currentPublication.title}
                </h3>

                {/* Excerpt */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
                  {currentPublication.excerpt}
                </p>

                {/* Read Article Link */}
                <div className="flex items-center justify-center gap-2 text-gray-800 hover:text-[#EEFE93] text-base md:text-lg font-semibold mt-8 group-hover:gap-3 transition-all">
                  <span>Read Article</span>
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-20">
              {PUBLICATIONS.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentIndex(index)
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-3.5 h-3.5 bg-gray-800 shadow-lg shadow-gray-800/30' 
                      : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to publication ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
