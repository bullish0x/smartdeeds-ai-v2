# Blockchain Integration Setup

This project uses thirdweb v5 SDK for blockchain functionality on Base network.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_client_id_here
NEXT_PUBLIC_CONTRACT_ADDRESS=0x12CE7BD130aaACc49e6b2C7d23e41e145D99BBB6
NEXT_PUBLIC_CHAIN_ID=8453
```

### Getting Your Client ID

1. Go to [thirdweb Dashboard](https://thirdweb.com/dashboard)
2. Create a new project or select an existing one
3. Navigate to API Keys section
4. Copy your Client ID
5. Add it to `.env.local`

## Contract Configuration

- **Contract Address**: `0x12CE7BD130aaACc49e6b2C7d23e41e145D99BBB6`
- **Network**: Base (Chain ID: 8453)
- **Current Token ID**: 0 (Founder tier)

## Token ID Mapping

Currently configured:
- **Founder**: Token ID 0 ✅ (Active)
- **Diamond**: Token ID 1 (Coming soon)
- **Platinum**: Token ID 2 (Coming soon)
- **Gold**: Token ID 3 (Coming soon)

## Contract Method

The minting function in `components/NFTTierCard.tsx` uses:
```typescript
method: 'function claim(uint256 tokenId)'
```

**Important**: You may need to adjust this method name to match your contract's ABI. Common alternatives:
- `function mint(uint256 tokenId)`
- `function mintTo(address to, uint256 tokenId)`
- `function safeMint(address to, uint256 tokenId)`
- `function claim(uint256 tokenId, uint256 quantity)`

Update the method signature in `components/NFTTierCard.tsx` line 45 if your contract uses a different method.

## Testing

1. Make sure your `.env.local` file is configured
2. Start the development server: `npm run dev`
3. Connect your wallet (MetaMask, WalletConnect, etc.)
4. Switch to Base network
5. Test minting the Founder tier (Token ID 0)

## Adding More Token IDs

Once you've confirmed Token ID 0 works:

1. Update `lib/constants.ts` - change the `canClaim` condition in `NFTTierCard.tsx`:
   ```typescript
   const canClaim = tier.tokenId === 0 || tier.tokenId === 1 // Add more as needed
   ```

2. Or remove the restriction entirely to enable all tiers:
   ```typescript
   const canClaim = true
   ```

## Troubleshooting

- **"Client ID not set" warning**: Make sure `.env.local` exists and contains `NEXT_PUBLIC_THIRDWEB_CLIENT_ID`
- **Transaction fails**: Check that the contract method name matches your contract's ABI
- **Wrong network**: Users must be on Base network (Chain ID: 8453)
- **Contract not found**: Verify the contract address is correct and deployed on Base

