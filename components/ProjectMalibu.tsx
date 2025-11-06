'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PROJECT_MALIBU } from '@/lib/constants'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const GALLERY_IMAGES = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
]

export default function ProjectMalibu() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
            <a
              href="#tiers"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              View Membership Tiers
            </a>
          </div>
          
          {/* Image Carousel */}
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {GALLERY_IMAGES.map((image, index) => (
                  <CarouselItem key={index}>
                    <div 
                      className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl cursor-pointer group"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image}
                        alt={`${PROJECT_MALIBU.name} - Image ${index + 1}`}
                        fill
                        className="object-cover transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 bg-white/90 hover:bg-white border-white/20 text-gray-800 shadow-lg" />
              <CarouselNext className="right-2 md:right-4 bg-white/90 hover:bg-white border-white/20 text-gray-800 shadow-lg" />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/70 rounded-full p-3 hover:bg-black/90"
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
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt={`${PROJECT_MALIBU.name} - Full view`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

