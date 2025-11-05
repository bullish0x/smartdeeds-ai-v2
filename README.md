# SmartDeeds.ai v2 - Next.js Mockup

A Next.js application recreating the SmartDeeds.ai website with NFT membership tiers showcase.

## Features

- **4 NFT Tiers**: Founder ($1M), Diamond ($100K), Platinum ($10K), Gold ($1K)
- **Base Network**: All transactions processed on Base network
- **Multi-Signature Wallet**: Funds secured in multi-sig wallets
- **Legal Pages**: Terms of Service, Disclaimer, and KYC pages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Color Palette**: Yellowish (#EEFE93), Black, and White

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- React 18

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
smartdeeds.ai-v2/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx             # Home page
│   ├── terms/               # Terms of Service page
│   ├── disclaimer/          # Disclaimer page
│   └── kyc/                 # KYC page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── NFTTiers.tsx         # NFT tiers container
│   ├── NFTTierCard.tsx       # Individual tier card
│   ├── TrustSection.tsx      # Trust/validation section
│   ├── ConnectionSection.tsx # Booking/contact section
│   ├── PublicationsCarousel.tsx # Media mentions carousel
│   └── FloatingCTA.tsx       # Floating call-to-action
├── lib/
│   └── constants.ts         # NFT tier data and constants
├── public/
│   └── images/              # NFT tier images
└── styles/
    └── globals.css          # Global styles
```

## NFT Tiers

1. **Founder** - $1,000,000
2. **Diamond** - $100,000
3. **Platinum** - $10,000
4. **Gold** - $1,000

## Notes

- This is a **mockup only** - no blockchain integration
- All buttons and forms are UI-only (no actual transactions)
- Images are from the reference folder
- Multi-sig wallet information is displayed as text content

## Build

```bash
npm run build
npm start
```

## License

ISC

