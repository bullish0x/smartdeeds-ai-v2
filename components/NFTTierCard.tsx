'use client'

import { CONTRACT_CONFIG } from '@/lib/constants'
import { 
  useActiveAccount, 
  useActiveWalletChain, 
  NFTProvider, 
  NFTMedia, 
  NFTName, 
  NFTDescription,
  ClaimButton,
  TransactionButton
} from 'thirdweb/react'
import { getContract } from 'thirdweb/contract'
import { readContract } from 'thirdweb'
import { useState, useMemo, useEffect, useRef } from 'react'
import { base } from 'thirdweb/chains'
import { getThirdwebClient } from '@/lib/thirdweb-client'
import { toast } from '@/hooks/use-toast'
import { claimTo, getActiveClaimCondition } from 'thirdweb/extensions/erc1155'

interface NFTTierCardProps {
  tokenId: number
}

interface ClaimCondition {
  startTimestamp: bigint
  maxClaimableSupply: bigint
  supplyClaimed: bigint
  quantityLimitPerWallet: bigint
  merkleRoot: string
  pricePerToken: bigint
  currency: string
  metadata: string
}

export default function NFTTierCard({ tokenId }: NFTTierCardProps) {
  const account = useActiveAccount()
  const chain = useActiveWalletChain()
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [claimCondition, setClaimCondition] = useState<ClaimCondition | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const hasFetched = useRef(false)

  // Get client using useMemo
  const client = useMemo(() => {
    try {
      return getThirdwebClient()
    } catch (error) {
      console.error('Failed to get thirdweb client:', error)
      return null
    }
  }, [])

  const contract = client
    ? getContract({
        client,
        address: CONTRACT_CONFIG.address as `0x${string}`,
        chain: base,
      })
    : null

  // Fetch NFT metadata and claim conditions from contract
  useEffect(() => {
    // Prevent multiple fetches - use a stable key
    const cacheKey = `${tokenId}-${CONTRACT_CONFIG.address}`
    if (hasFetched.current) {
      console.log(`Already fetched data for token ${tokenId}, skipping`)
      return
    }
    
    const fetchNFTData = async () => {
      if (!contract || !client || tokenId === undefined || tokenId === null || isNaN(tokenId)) {
        setIsLoading(false)
        if (tokenId === undefined || tokenId === null || isNaN(tokenId)) {
          setError('Invalid token ID')
        }
        return
      }

      // Mark as fetching to prevent duplicate calls
      hasFetched.current = true
      setIsLoading(true)
      setError(null)
      
      // Stagger requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 200 * tokenId))
      
      try {
        // Fetch claim condition using thirdweb's Drop 1155 extension
        const activeCondition = await getActiveClaimCondition({
          contract,
          tokenId: BigInt(tokenId),
        })

        if (!activeCondition) {
          // No claim condition set - this is okay, just means not ready for claiming yet
          console.log(`No active claim condition for token ID ${tokenId}`)
          setClaimCondition(null)
          setIsLoading(false)
          return
        }
        
        const condition: ClaimCondition = {
          startTimestamp: activeCondition.startTimestamp,
          maxClaimableSupply: activeCondition.maxClaimableSupply,
          supplyClaimed: activeCondition.supplyClaimed,
          quantityLimitPerWallet: activeCondition.quantityLimitPerWallet,
          merkleRoot: activeCondition.merkleRoot as string,
          pricePerToken: activeCondition.pricePerToken,
          currency: activeCondition.currency,
          metadata: activeCondition.metadata || '',
        }

        setClaimCondition(condition)
      } catch (err: any) {
        console.error('Error fetching claim condition for token', tokenId, ':', err)
        
        // If claim condition not found, it's not an error - just means not set up yet
        if (err?.message?.includes('Claim condition not found') || 
            err?.message?.includes('No active claim phase') ||
            err?.message?.includes('not found')) {
          console.log(`Token ID ${tokenId} has no claim condition set yet`)
          setClaimCondition(null)
          // Don't set error for missing claim conditions - they might not be set up yet
        } else if (err?.message?.includes('rate limit') || err?.message?.includes('429')) {
          setError('Rate limit exceeded. Please wait a moment and refresh the page.')
        } else {
          // Only show error for actual failures, not missing claim conditions
          console.warn(`Could not load claim condition for token ${tokenId}:`, err.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchNFTData()
    
    // Don't reset hasFetched on cleanup - keep it cached to prevent re-fetching
  }, [contract, client, tokenId])

  // Check if claim phase has started
  const isClaimPhaseActive = useMemo(() => {
    if (!claimCondition) return false
    const currentTimestamp = BigInt(Math.floor(Date.now() / 1000))
    return claimCondition.startTimestamp <= currentTimestamp
  }, [claimCondition])

  // Format price for display
  const formatPrice = (price: bigint, currency: string) => {
    if (price === BigInt(0)) return 'Free'
    
    const isNative = currency === '0x0000000000000000000000000000000000000000' || 
                     currency === '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
    
    const decimals = 18
    const priceNumber = Number(price) / Math.pow(10, decimals)
    const currencySymbol = isNative ? 'ETH' : 'TOKEN'
    
    const formatNumber = (num: number) => {
      if (num < 0.01) return num.toFixed(6)
      else if (num < 1) return num.toFixed(4)
      else if (num < 1000) return num.toFixed(4)
      else return num.toLocaleString('en-US', { maximumFractionDigits: 4, minimumFractionDigits: 0 })
    }
    
    return `${formatNumber(priceNumber)} ${currencySymbol}`
  }

  const totalPrice = claimCondition ? claimCondition.pricePerToken * BigInt(quantity) : BigInt(0)

  if (!contract || !client) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
        <div className="relative h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <div className="text-gray-400 dark:text-gray-500">Loading...</div>
        </div>
        <div className="p-6">
          <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
          <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>
        </div>
      </div>
    )
  }

  return (
    <NFTProvider 
      contract={contract} 
      tokenId={BigInt(tokenId)}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-yellowish transition-all hover:shadow-xl transform hover:-translate-y-2">
        <div className="relative h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <NFTMedia 
            className="object-contain w-full h-full"
            loadingComponent={
              <div className="text-gray-400 dark:text-gray-500">Loading image...</div>
            }
          />
        </div>
        <div className="p-6 overflow-visible">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
            <NFTName 
              loadingComponent={<span className="text-gray-400">Loading name...</span>}
            />
          </h3>
          <div className="mb-4">
            <p className="text-3xl font-bold text-black dark:text-white">
              {isLoading && !claimCondition
                ? 'Loading...' 
                : claimCondition 
                  ? formatPrice(claimCondition.pricePerToken, claimCondition.currency)
                  : 'Price unavailable'}
            </p>
            {claimCondition && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                per NFT
              </p>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <NFTDescription 
              loadingComponent={<span className="text-gray-400">Loading description...</span>}
            />
          </p>
          {claimCondition && (
            <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Available:</span>
                <span className="text-black dark:text-white font-semibold">
                  {claimCondition.maxClaimableSupply > BigInt(0)
                    ? `${claimCondition.supplyClaimed.toString()} / ${claimCondition.maxClaimableSupply.toString()} claimed`
                    : 'Unlimited'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Max per wallet:</span>
                <span className="text-black dark:text-white font-semibold">
                  {claimCondition.quantityLimitPerWallet > BigInt(0)
                    ? claimCondition.quantityLimitPerWallet.toString()
                    : 'Unlimited'}
                </span>
              </div>
              {(() => {
                const currentTimestamp = BigInt(Math.floor(Date.now() / 1000))
                const hasStarted = claimCondition.startTimestamp <= currentTimestamp
                const startDate = new Date(Number(claimCondition.startTimestamp) * 1000)
                const hasAllowlist = claimCondition.merkleRoot && 
                                     claimCondition.merkleRoot !== '0x0000000000000000000000000000000000000000000000000000000000000000'
                
                return (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Claim phase:</span>
                      <span className={`font-semibold ${hasStarted ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}`}>
                        {hasStarted ? 'Active' : `Starts ${startDate.toLocaleString()}`}
                      </span>
                    </div>
                    {hasAllowlist && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Allowlist:</span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                          Required
                        </span>
                      </div>
                    )}
                  </>
                )
              })()}
            </div>
          )}
        {!claimCondition && !isLoading && !error && (
          <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-sm">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                  Not Available Yet
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Claim conditions need to be set up for this NFT. Visit the{' '}
                <a 
                  href={`https://thirdweb.com/${base.id}/${CONTRACT_CONFIG.address}/claim-conditions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  thirdweb dashboard
                </a>
                {' '}to configure.
              </p>
            </div>
          </div>
        )}
          {error && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          {/* Quantity Selector */}
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-black dark:text-white mb-2 w-full">
              Quantity
            </label>
            <div className="flex items-center gap-2 w-full">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                max={claimCondition?.quantityLimitPerWallet && claimCondition.quantityLimitPerWallet > BigInt(0) 
                  ? Number(claimCondition.quantityLimitPerWallet) 
                  : undefined}
                value={quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 1
                  const max = claimCondition?.quantityLimitPerWallet && claimCondition.quantityLimitPerWallet > BigInt(0)
                    ? Number(claimCondition.quantityLimitPerWallet)
                    : undefined
                  setQuantity(max ? Math.min(val, max) : Math.max(1, val))
                }}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded text-center text-black dark:text-white bg-white dark:bg-gray-800"
              />
              <button
                onClick={() => {
                  const max = claimCondition?.quantityLimitPerWallet && claimCondition.quantityLimitPerWallet > BigInt(0)
                    ? Number(claimCondition.quantityLimitPerWallet)
                    : undefined
                  setQuantity(max ? Math.min(quantity + 1, max) : quantity + 1)
                }}
                disabled={claimCondition?.quantityLimitPerWallet && claimCondition.quantityLimitPerWallet > BigInt(0)
                  ? quantity >= Number(claimCondition.quantityLimitPerWallet)
                  : false}
                className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                +
              </button>
            </div>
            {claimCondition && (
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                Total: {totalPrice > BigInt(0) 
                  ? formatPrice(totalPrice, claimCondition.currency)
                  : 'Free'}
              </div>
            )}
          </div>

          {/* ClaimButton - auto-handles allowlist proofs for Drop 1155 contracts */}
          {client && contract && account && isClaimPhaseActive && chain?.id === base.id ? (
            <ClaimButton
              contractAddress={CONTRACT_CONFIG.address}
              chain={base}
              client={client}
              claimParams={{
                type: "ERC1155",
                quantity: BigInt(quantity),
                tokenId: BigInt(tokenId),
              }}
              onTransactionConfirmed={(receipt) => {
                toast({
                  title: 'Mint Successful!',
                  description: `Successfully minted ${quantity} NFT${quantity > 1 ? 's' : ''}!`,
                })
                setQuantity(1)
              }}
              onError={(error) => {
                toast({
                  title: 'Mint Failed',
                  description: error.message || 'Failed to mint NFT. Please try again.',
                  variant: 'destructive',
                })
              }}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Mint {quantity} NFT{quantity > 1 ? 's' : ''}
            </ClaimButton>
          ) : (
            <button
              disabled
              className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed"
            >
              {!account
                ? 'Connect Wallet to Mint'
                : chain?.id !== base.id
                  ? 'Switch to Base Network'
                  : !isClaimPhaseActive
                    ? 'Claim Phase Not Started'
                    : 'Loading...'}
            </button>
          )}
        </div>
      </div>
    </NFTProvider>
  )
}
