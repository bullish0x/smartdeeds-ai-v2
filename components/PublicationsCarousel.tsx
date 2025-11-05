'use client'

import { useState, useEffect } from 'react'

const publications = [
  {
    title: 'The Wall Street Journal',
    excerpt: 'Featured coverage of SmartDeeds and its innovative approach to real estate tokenization.',
  },
  {
    title: 'The Real Deal',
    excerpt: 'In-depth analysis of SmartDeeds membership model and blockchain integration.',
  },
  {
    title: 'Real Estate Tech',
    excerpt: 'Exploring how SmartDeeds is revolutionizing property ownership through NFTs.',
  },
]

export default function PublicationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % publications.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured in Leading Publications
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                {publications[currentIndex].title}
              </h3>
              <p className="text-lg text-gray-700">
                {publications[currentIndex].excerpt}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {publications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-yellowish' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to publication ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + publications.length) % publications.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-yellowish transition-colors"
              aria-label="Previous publication"
            >
              <svg
                className="w-6 h-6 text-black"
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
              onClick={() => setCurrentIndex((prev) => (prev + 1) % publications.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-yellowish transition-colors"
              aria-label="Next publication"
            >
              <svg
                className="w-6 h-6 text-black"
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
          </div>
        </div>
      </div>
    </section>
  )
}

