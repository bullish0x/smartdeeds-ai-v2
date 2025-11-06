'use client'

import { CONTRACT_CONFIG } from '@/lib/constants'
import { useActiveAccount, useActiveWalletChain, NFTProvider, NFTMedia, NFTName, NFTDescription } from 'thirdweb/react'
import { getContract } from 'thirdweb/contract'
import { prepareContractCall, sendTransaction, readContract } from 'thirdweb'
import { useState, useMemo, useEffect, useRef } from 'react'
import { base } from 'thirdweb/chains'
import { getThirdwebClient } from '@/lib/thirdweb-client'

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
  const [isClaiming, setIsClaiming] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [txHash, setTxHash] = useState<string | null>(null)
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
        address: CONTRACT_CONFIG.address,
        chain: base,
      })
    : null

  // Fetch NFT metadata and claim conditions from contract
  useEffect(() => {
    // Prevent multiple fetches
    if (hasFetched.current) return
    
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
      
      // Add a longer delay to avoid rate limiting when multiple cards load at once
      // Stagger requests: 200ms * tokenId to spread them out
      await new Promise(resolve => setTimeout(resolve, 200 * tokenId))
      
      try {
        // Fetch claim condition - the return type is a struct, so we need to handle it as an array/object
        const conditionResult = await readContract({
          contract,
          method: 'function claimCondition(uint256 _tokenId) view returns (uint256 startTimestamp, uint256 maxClaimableSupply, uint256 supplyClaimed, uint256 quantityLimitPerWallet, bytes32 merkleRoot, uint256 pricePerToken, address currency, string metadata)',
          params: [BigInt(tokenId)],
        })

        // Handle the result - it's a tuple array from the contract
        // Type: readonly [bigint, bigint, bigint, bigint, `0x${string}`, bigint, string, string]
        const resultArray = conditionResult as readonly [bigint, bigint, bigint, bigint, `0x${string}`, bigint, string, string]
        
        const condition: ClaimCondition = {
          startTimestamp: resultArray[0],
          maxClaimableSupply: resultArray[1],
          supplyClaimed: resultArray[2],
          quantityLimitPerWallet: resultArray[3],
          merkleRoot: resultArray[4],
          pricePerToken: resultArray[5],
          currency: resultArray[6],
          metadata: resultArray[7],
        }

        setClaimCondition(condition)
        // NFT metadata will be fetched automatically by NFTProvider
      } catch (err: any) {
        console.error('Error fetching NFT data:', err)
        
        // Handle rate limiting
        if (err?.message?.includes('rate limit') || err?.message?.includes('429')) {
          // Don't set error for rate limits - NFTProvider will handle metadata
          // Just show that claim condition couldn't be loaded
          setError('Rate limit exceeded. Please wait a moment and refresh the page.')
        } else if (err?.message?.includes('PositionOutOfBounds')) {
          // This might mean the token ID doesn't exist or has no claim condition
          setError(`No claim condition found for token ID ${tokenId}. This NFT may not be available for minting.`)
        } else {
          setError('Failed to load claim condition. Please try again.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchNFTData()
    
    // Reset hasFetched when tokenId changes
    return () => {
      hasFetched.current = false
    }
  }, [contract, client, tokenId])


  const handleMint = async () => {
    if (!account) {
      setError('Please connect your wallet first')
      return
    }

    if (!contract || !client || !claimCondition) {
      setError('Blockchain connection not available. Please check your configuration.')
      return
    }

    setIsClaiming(true)
    setError(null)
    setSuccess(null)
    setTxHash(null)

    try {
      // Calculate total price
      const totalPrice = claimCondition.pricePerToken * BigInt(quantity)

      // Prepare the claim transaction
      // claim(address _receiver, uint256 _tokenId, uint256 _quantity, address _currency, uint256 _pricePerToken, AllowlistProof _allowlistProof, bytes _data)
      const transaction = prepareContractCall({
        contract,
        method: 'function claim(address _receiver, uint256 _tokenId, uint256 _quantity, address _currency, uint256 _pricePerToken, (bytes32[] proof, uint256 quantityLimitPerWallet, uint256 pricePerToken, address currency) _allowlistProof, bytes _data)',
        params: [
          account.address, // _receiver: mint to the connected wallet
          BigInt(tokenId), // _tokenId: the tier token ID
          BigInt(quantity), // _quantity: number of NFTs to mint
          claimCondition.currency || '0x0000000000000000000000000000000000000000', // _currency: from claim condition
          claimCondition.pricePerToken, // _pricePerToken: from claim condition
          {
            proof: [], // Empty proof array (no allowlist)
            quantityLimitPerWallet: BigInt(0), // No limit
            pricePerToken: claimCondition.pricePerToken, // Price per token from claim condition
            currency: claimCondition.currency || '0x0000000000000000000000000000000000000000', // Currency from claim condition
          }, // _allowlistProof: empty allowlist proof
          '0x', // _data: empty bytes
        ],
        value: claimCondition.currency === '0x0000000000000000000000000000000000000000' ? totalPrice : undefined, // Send native token if currency is native
      })

      // Send the transaction
      const receipt = await sendTransaction({
        transaction,
        account,
      })

      console.log('Transaction successful:', receipt)
      setTxHash(receipt.transactionHash)
      setSuccess(`Successfully minted ${quantity} NFT${quantity > 1 ? 's' : ''}!`)
    } catch (err: any) {
      console.error('Mint error:', err)
      // Provide more helpful error messages
      let errorMessage = 'Failed to mint NFT. Please try again.'
      if (err.message) {
        if (err.message.includes('insufficient funds')) {
          errorMessage = 'Insufficient funds. Please ensure you have enough tokens for payment and gas.'
        } else if (err.message.includes('user rejected')) {
          errorMessage = 'Transaction was cancelled.'
        } else if (err.message.includes('claim condition')) {
          errorMessage = 'Claim conditions not met. Please check if this NFT is available for minting.'
        } else {
          errorMessage = err.message
        }
      }
      setError(errorMessage)
    } finally {
      setIsClaiming(false)
    }
  }

  // Format price for display
  const formatPrice = (price: bigint, currency: string) => {
    if (price === BigInt(0)) return 'Free'
    
    // Convert from wei to ETH/BASE
    const ethPrice = Number(price) / 1e18
    const currencySymbol = currency === '0x0000000000000000000000000000000000000000' ? 'ETH' : 'TOKEN'
    
    if (ethPrice < 0.01) {
      return `${ethPrice.toFixed(6)} ${currencySymbol}`
    }
    return `${ethPrice.toFixed(4)} ${currencySymbol}`
  }

  const totalPrice = claimCondition ? claimCondition.pricePerToken * BigInt(quantity) : BigInt(0)

  if (!contract) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
        <div className="p-6 text-center">
          <div className="text-gray-500 dark:text-gray-400">Initializing contract...</div>
        </div>
      </div>
    )
  }

  return (
    <NFTProvider contract={contract} tokenId={BigInt(tokenId)}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-yellowish transition-all hover:shadow-xl transform hover:-translate-y-2">
        <div className="relative h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <NFTMedia
            className="object-contain w-full h-full"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
            <NFTName />
          </h3>
          <p className="text-3xl font-bold text-black dark:text-white mb-4">
            {claimCondition ? formatPrice(claimCondition.pricePerToken, claimCondition.currency) : isLoading ? 'Loading...' : 'Price unavailable'}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <NFTDescription />
          </p>
        {claimCondition && (
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm">
            <div className="flex justify-between mb-1">
              <span className="text-gray-600 dark:text-gray-400">Available:</span>
              <span className="text-black dark:text-white font-semibold">
                {claimCondition.maxClaimableSupply > BigInt(0)
                  ? `${claimCondition.supplyClaimed.toString()} / ${claimCondition.maxClaimableSupply.toString()} claimed`
                  : 'Unlimited'}
              </span>
            </div>
            {claimCondition.quantityLimitPerWallet > BigInt(0) && (
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Max per wallet:</span>
                <span className="text-black dark:text-white font-semibold">
                  {claimCondition.quantityLimitPerWallet.toString()}
                </span>
              </div>
            )}
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm">
            <div className="font-semibold mb-1">{success}</div>
            {txHash && (
              <a
                href={`https://basescan.org/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                View on BaseScan →
              </a>
            )}
          </div>
        )}
        {/* Quantity Selector */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black dark:text-white mb-2">
            Quantity
          </label>
          <div className="flex items-center gap-2">
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
              max={claimCondition?.quantityLimitPerWallet ? Number(claimCondition.quantityLimitPerWallet) : undefined}
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 1
                const max = claimCondition?.quantityLimitPerWallet ? Number(claimCondition.quantityLimitPerWallet) : undefined
                setQuantity(max ? Math.min(val, max) : Math.max(1, val))
              }}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded text-center text-black dark:text-white bg-white dark:bg-gray-800"
            />
            <button
              onClick={() => {
                const max = claimCondition?.quantityLimitPerWallet ? Number(claimCondition.quantityLimitPerWallet) : undefined
                setQuantity(max ? Math.min(quantity + 1, max) : quantity + 1)
              }}
              disabled={claimCondition?.quantityLimitPerWallet ? quantity >= Number(claimCondition.quantityLimitPerWallet) : false}
              className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              +
            </button>
          </div>
          {claimCondition && totalPrice > BigInt(0) && (
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
              Total: {formatPrice(totalPrice, claimCondition.currency)}
            </div>
          )}
        </div>

        {/* Mint Button */}
        <button
          onClick={handleMint}
          disabled={!account || isClaiming || chain?.id !== base.id || !contract || !claimCondition}
          className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {!contract
            ? 'Initializing...'
            : !account
              ? 'Connect Wallet to Mint'
              : chain?.id !== base.id
                ? 'Switch to Base Network'
                : isClaiming
                  ? 'Processing Transaction...'
                  : `Mint ${quantity} NFT${quantity > 1 ? 's' : ''}`}
        </button>
        </div>
      </div>
    </NFTProvider>
  )
}

