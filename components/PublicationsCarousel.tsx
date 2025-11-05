'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PUBLICATIONS } from '@/lib/publications'

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
      style={{ padding: '3rem 5%', background: '#000000', color: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-1">
            Publications
          </h2>
        </div>
        <p className="pubs-hint text-center mb-4 text-gray-400">
          Tap or click an article to read ↗
        </p>

        <div className="max-w-4xl mx-auto">
          <Link
            href={currentPublication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative h-64 bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col justify-center hover:shadow-xl transition-all group border border-gray-700 hover:border-yellowish"
          >
            <div className="text-center">
              {/* Publication Logo */}
              <div className="relative h-16 w-auto mx-auto mb-6 flex items-center justify-center">
                {currentPublication.logo ? (
                  <Image
                    src={currentPublication.logo}
                    alt={currentPublication.title}
                    width={200}
                    height={64}
                    className="object-contain max-h-16 max-w-[200px]"
                    unoptimized
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `<span class="text-white font-bold text-xl">${currentPublication.title}</span>`
                      }
                    }}
                  />
                ) : (
                  <span className="text-white font-bold text-xl">{currentPublication.title}</span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellowish transition-colors">
                {currentPublication.title}
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                {currentPublication.excerpt}
              </p>

              {/* External Link Indicator */}
              <div className="flex items-center justify-center gap-2 text-yellowish text-sm mt-4">
                <span>Read Article</span>
                <svg
                  className="w-4 h-4"
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

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {PUBLICATIONS.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-yellowish' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to publication ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setCurrentIndex(
                  (prev) => (prev - 1 + PUBLICATIONS.length) % PUBLICATIONS.length
                )
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-700 rounded-full shadow-md hover:bg-yellowish/20 transition-colors z-10"
              aria-label="Previous publication"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setCurrentIndex((prev) => (prev + 1) % PUBLICATIONS.length)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-700 rounded-full shadow-md hover:bg-yellowish/20 transition-colors z-10"
              aria-label="Next publication"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
