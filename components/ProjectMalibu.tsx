import Image from 'next/image'
import { PROJECT_MALIBU } from '@/lib/constants'

export default function ProjectMalibu() {
  return (
    <section id="project-malibu" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              View Membership Tiers
            </a>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={PROJECT_MALIBU.image}
              alt={PROJECT_MALIBU.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

