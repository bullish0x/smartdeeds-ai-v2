'use client'

import Image from 'next/image'
import { NFTTier } from '@/lib/constants'

interface NFTTierCardProps {
  tier: NFTTier
}

export default function NFTTierCard({ tier }: NFTTierCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-yellowish transition-all hover:shadow-xl transform hover:-translate-y-2">
      <div className="relative h-64 bg-gray-100 dark:bg-gray-700">
        <Image
          src={tier.image}
          alt={tier.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{tier.name}</h3>
        <p className="text-3xl font-bold text-black dark:text-white mb-4">{tier.priceFormatted}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{tier.description}</p>
        <ul className="space-y-2 mb-6">
          {tier.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
              <span className="text-yellowish mr-2">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
        <button
          className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          onClick={() => {
            // Mockup - no actual action
            alert(`This is a mockup. ${tier.name} tier purchase would be processed here.`)
          }}
        >
          Purchase {tier.name}
        </button>
      </div>
    </div>
  )
}

