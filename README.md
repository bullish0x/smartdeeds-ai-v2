# SmartDeeds.ai V2 - Next.js Application

A Next.js application recreating the SmartDeeds.ai Version 1 website with NFT membership tiers showcase and blockchain integration.

## Features

- **4 NFT Tiers**: Founder ($1M), Diamond ($100K), Platinum ($10K), Gold ($1K)
- **Base Network**: All transactions processed on Base network
- **Blockchain Integration**: Thirdweb SDK for wallet connections and NFT interactions
- **Multi-Signature Wallet**: Funds secured in multi-sig wallets
- **Legal Pages**: Terms of Service, Disclaimer, and KYC pages
- **SEO Optimized**: Robots.txt, sitemap.xml, and structured data (JSON-LD)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Color Palette**: Yellowish (#EEFE93), Black, and White

## Tech Stack

- Next.js 16.0.1 (App Router)
- React 19.2.0
- TypeScript 5.7.2
- Tailwind CSS 3.4.17
- Thirdweb SDK 5.111.4
- shadcn/ui components
- Framer Motion for animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Thirdweb Client ID (see [Environment Variables](#environment-variables) section below).

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
smartdeeds.ai-v2/
├── app/
│   ├── layout.tsx            # Root layout with providers
│   ├── page.tsx              # Home page
│   ├── robots.ts             # Robots.txt configuration
│   ├── sitemap.ts            # Sitemap.xml generation
│   ├── terms/                 # Terms of Service page
│   ├── disclaimer/           # Disclaimer page
│   └── kyc/                  # KYC page
├── components/
│   ├── Header.tsx            # Navigation header with wallet connection
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section with countdown
│   ├── HowItWorks.tsx        # How it works section
│   ├── NFTTiers.tsx          # NFT tiers container
│   ├── NFTTierCard.tsx       # Individual tier card with blockchain integration
│   ├── ProjectMalibu.tsx     # Project Malibu showcase
│   ├── BoBelmont.tsx         # Founder section
│   ├── VideoSection.tsx      # Video showcase
│   ├── TrustSection.tsx      # Trust/validation section
│   ├── PublicationsCarousel.tsx # Media mentions carousel
│   ├── ConnectionSection.tsx # Booking/contact section with Calendly
│   ├── FloatingCTA.tsx       # Floating call-to-action
│   ├── SwapWidget.tsx        # Token swap widget
│   ├── Providers.tsx        # App providers wrapper
│   ├── ThemeProvider.tsx     # Theme context provider
│   ├── ThirdwebProvider.tsx  # Thirdweb SDK provider
│   └── ui/                   # shadcn/ui components
│       ├── button.tsx
│       ├── carousel.tsx
│       ├── toast.tsx
│       └── toaster.tsx
├── lib/
│   ├── constants.ts          # NFT tier data and constants
│   ├── metadata.ts           # SEO metadata and structured data
│   ├── thirdweb-client.ts    # Thirdweb client configuration
│   ├── publications.ts       # Publication data
│   ├── companies.ts          # Company information
│   └── utils.ts              # Utility functions
├── hooks/
│   └── use-toast.ts          # Toast notification hook
├── public/
│   └── images/               # Static images and assets
└── styles/
    └── globals.css           # Global styles
```

## NFT Tiers

1. **Founder** - $1,000,000
2. **Diamond** - $100,000
3. **Platinum** - $10,000
4. **Gold** - $1,000

## Key Features

- **Blockchain Integration**: Full Thirdweb SDK integration for wallet connections and NFT interactions on Base network
- **SEO Optimized**: Automatic sitemap generation, robots.txt, and structured data (JSON-LD) for better search engine visibility
- **Theme Support**: Dark mode with system preference detection and manual toggle
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation with strict mode
- **Component Library**: Uses shadcn/ui for accessible, customizable components

## Build

```bash
npm run build
npm start
```

## Development

```bash
npm run dev
npm run lint
```

## Environment Variables

Create a `.env.local` file in the root directory (you can copy from `.env.local.example`):

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://smartdeeds.ai

# Thirdweb Configuration
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
NEXT_PUBLIC_THIRDWEB_PROJECT_ID=your_thirdweb_project_id

# Contract Configuration (Base Network)
NEXT_PUBLIC_CONTRACT_ADDRESS=0x12CE7BD130aaACc49e6b2C7d23e41e145D99BBB6
NEXT_PUBLIC_CHAIN_ID=8453
```

### Required Variables

- `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` - **Required**: Your Thirdweb Client ID. Get one from [thirdweb.com](https://thirdweb.com)
- `NEXT_PUBLIC_SITE_URL` - Optional: Site URL for SEO metadata (defaults to `https://smartdeeds.ai`)

### Optional Variables

- `NEXT_PUBLIC_THIRDWEB_PROJECT_ID` - Optional: Your Thirdweb Project ID
- `NEXT_PUBLIC_CONTRACT_ADDRESS` - Optional: Smart contract address (defaults to the provided address)
- `NEXT_PUBLIC_CHAIN_ID` - Optional: Blockchain network ID (defaults to `8453` for Base mainnet)

> **Note**: All `NEXT_PUBLIC_*` variables are exposed to the browser. Never put sensitive information in these variables.

## License

ISC

