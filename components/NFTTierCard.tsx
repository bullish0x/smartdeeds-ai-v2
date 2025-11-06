'use client'

import Image from 'next/image'
import { NFTTier, CONTRACT_CONFIG } from '@/lib/constants'
import { useActiveAccount, useActiveWalletChain, useThirdwebClient } from 'thirdweb/react'
import { getContract } from 'thirdweb/contract'
import { prepareContractCall, sendTransaction } from 'thirdweb'
import { useState } from 'react'
import { base } from 'thirdweb/chains'

interface NFTTierCardProps {
  tier: NFTTier
}

export default function NFTTierCard({ tier }: NFTTierCardProps) {
  const account = useActiveAccount()
  const chain = useActiveWalletChain()
  const client = useThirdwebClient()
  const [isClaiming, setIsClaiming] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Only show claim button for token ID 0 (Founder) for now
  const canClaim = tier.tokenId === 0

  const contract = getContract({
    client,
    address: CONTRACT_CONFIG.address,
    chain: base,
  })

  const handleMint = async () => {
    if (!account) {
      setError('Please connect your wallet first')
      return
    }

    setIsClaiming(true)
    setError(null)

    try {
      // Prepare the claim/mint transaction
      // NOTE: Adjust the method name based on your contract's ABI
      // Common method names: 'claim', 'mint', 'mintTo', 'safeMint', etc.
      // Example: 'function claim(uint256 tokenId)' or 'function mint(address to, uint256 tokenId)'
      const transaction = prepareContractCall({
        contract,
        method: 'function claim(uint256 tokenId)', // Update this to match your contract's method
        params: [BigInt(tier.tokenId)],
      })

      // Send the transaction
      const receipt = await sendTransaction({
        transaction,
        account,
      })

      console.log('Transaction successful:', receipt)
      // You can add success notification here
      alert(`Successfully purchased ${tier.name} tier!`)
    } catch (err: any) {
      console.error('Mint error:', err)
      setError(err.message || 'Failed to mint NFT. Please try again.')
    } finally {
      setIsClaiming(false)
    }
  }

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
        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm">
            {error}
          </div>
        )}
        {canClaim ? (
          <button
            onClick={handleMint}
            disabled={!account || isClaiming || chain?.id !== base.id}
            className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {!account
              ? 'Connect Wallet to Purchase'
              : chain?.id !== base.id
                ? 'Switch to Base Network'
                : isClaiming
                  ? 'Processing...'
                  : `Purchase ${tier.name}`}
          </button>
        ) : (
          <button
            className="w-full bg-gray-400 dark:bg-gray-600 text-white dark:text-gray-300 py-3 rounded-lg font-semibold cursor-not-allowed"
            disabled
          >
            {tier.name} - Coming Soon
          </button>
        )}
      </div>
    </div>
  )
}

