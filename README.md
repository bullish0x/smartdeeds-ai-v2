# SmartDeeds.ai V2 - Next.js Application

A modern, production-ready Next.js application for SmartDeeds™ NFT and Membership Pre-Launch program. Features a world-class UX/UI design system, blockchain integration, and comprehensive membership management.

## 🚀 Features

### Core Functionality
- **4 NFT Membership Tiers**: Founder ($300K), Diamond ($100K), Platinum ($10K), Gold ($1K)
- **Base Network Integration**: All transactions processed on Base network (Chain ID: 8453)
- **Blockchain Integration**: Full Thirdweb SDK integration for wallet connections and NFT interactions
- **ERC-1155 NFT Minting**: Pre-launch voucher NFTs with claim conditions and quantity limits
- **Token Swap Widget**: Integrated swap and buy widgets for USDC on Base
- **Multi-Signature Wallet**: Funds secured in multi-sig wallets for security and refund purposes

### Design & UX
- **Modern Design System**: Unified design language with shadcn/ui components
- **Glassmorphism Effects**: Subtle backdrop blur and transparency effects
- **Smooth Animations**: Framer Motion animations throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Alternating Section Backgrounds**: Visual rhythm with black/zinc-900 alternating pattern
- **Accessibility**: WCAG 2.2 compliant with proper focus states and keyboard navigation

### Pages & Sections
- **Hero Section**: Parallax background with countdown timer and CTAs. Features the `CountdownTimer` component that displays time remaining until a target date with automatic expiration handling.
- **Project Malibu**: Gallery showcase with image expansion modal
- **Trusted Infrastructure**: Trust badges and company information
- **Team Carousel**: Dynamic carousel showcasing founders and companies
- **Malibu Program**: Tabbed interface with Property Snapshot, Membership Tiers, and Disclosures
- **How It Works**: Step-by-step process explanation
- **Membership Tiers**: 4-column grid with NFT minting functionality
- **Publications Carousel**: Auto-scrolling media mentions
- **Benefits Section**: Value propositions with icons
- **Connection Section**: Calendly booking modal
- **Legal Pages**: Terms of Service, Membership Overview, KYC Verification

### KYC & Verification
- **Stripe Identity Integration**: Powered by Stripe for secure KYC verification
- **Optional KYC Flow**: Feature flag to enable/disable KYC requirements
- **Inline KYC Section**: When enabled, KYC section replaces NFT tiers on main page (no redirect)
- **Session Management**: Local storage for verification status with real-time updates
- **Smart Gating**: Users can view the site but must complete KYC to see membership tiers
- **Privacy-First**: SmartDeeds and SolsLot only receive pass/fail results, not personal data

## 🛠 Tech Stack

### Core Framework
- **Next.js 16.0.1** (App Router) - React framework with server-side rendering
- **React 19.2.0** - UI library
- **TypeScript 5.7.2** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library built on Radix UI
- **Radix UI** - Unstyled, accessible component primitives
- **Framer Motion 12.23.24** - Animation library
- **Lucide React** - Icon library
- **Geist Sans/Mono** - Typography fonts

### Blockchain & Web3
- **Thirdweb SDK 5.111.4** - Web3 infrastructure
- **Base Network** - Layer 2 blockchain (Chain ID: 8453)
- **ERC-1155** - Multi-token standard for vouchers

### Additional Libraries
- **Embla Carousel** - Carousel component for team and publications
- **next-themes** - Theme management (light/dark mode)
- **class-variance-authority** - Component variant management
- **tailwindcss-animate** - Animation utilities

## 📁 Project Structure

```
smartdeeds.ai-v2/
├── app/
│   ├── layout.tsx              # Root layout with providers and fonts
│   ├── page.tsx                # Home page with all sections
│   ├── robots.ts               # Robots.txt configuration
│   ├── sitemap.ts              # Sitemap.xml generation
│   ├── terms/
│   │   └── page.tsx            # Terms of Service page
│   ├── membership/
│   │   └── page.tsx            # Membership overview page
│   └── kyc/
│       ├── layout.tsx          # KYC layout wrapper
│       ├── page.tsx            # KYC redirect page
│       ├── start/
│       │   └── page.tsx        # KYC start page
│       └── return/
│           └── page.tsx        # KYC return/callback page
├── components/
│   ├── Header.tsx            # Navigation header with wallet connection
│   ├── Footer.tsx              # Footer with navigation links
│   ├── Hero.tsx                # Hero section with parallax
│   ├── CountdownTimer.tsx      # Countdown timer component for hero section
│   ├── ProjectMalibu.tsx       # Project gallery showcase
│   ├── TrustSection.tsx        # Trust badges section
│   ├── Team.tsx                # Team carousel (formerly BoBelmont)
│   ├── MalibuProgram.tsx      # Program tabs (Property, Tiers, Disclosures)
│   ├── HowItWorks.tsx          # Process explanation
│   ├── NFTTiers.tsx            # NFT tiers container
│   ├── NFTTierCard.tsx         # Individual tier card with minting
│   ├── TiersSection.tsx         # Conditional wrapper for NFTTiers/KycSection
│   ├── KycSection.tsx          # Inline KYC verification section
│   ├── PublicationsCarousel.tsx # Media mentions carousel
│   ├── VideoSection.tsx        # Benefits section
│   ├── ConnectionSection.tsx   # Calendly booking modal
│   ├── FloatingCTA.tsx         # Floating call-to-action button
│   ├── SwapWidget.tsx          # Token swap widget
│   ├── CalendlyEmbed.tsx      # Calendly integration
│   ├── KycPrompt.tsx           # KYC verification prompt modal
│   ├── KycGate.tsx             # KYC route protection (legacy, no redirect)
│   ├── KycRedirect.tsx         # KYC redirect component
│   ├── Providers.tsx           # App providers wrapper
│   ├── ThemeProvider.tsx       # Theme context provider
│   ├── ThirdwebProvider.tsx    # Thirdweb SDK provider
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── tabs.tsx
│       ├── accordion.tsx
│       ├── alert.tsx
│       ├── badge.tsx
│       └── ...
├── lib/
│   ├── constants.ts            # NFT tier data and contract config
│   ├── metadata.ts             # SEO metadata and structured data
│   ├── thirdweb-client.ts      # Thirdweb client configuration
│   ├── publications.ts         # Publication data
│   ├── companies.ts            # Company information
│   ├── kyc.ts                  # KYC API client
│   ├── utils.ts                # Utility functions
│   ├── ui.ts                   # UI utility functions
│   ├── motion.ts               # Framer Motion variants
│   └── theme.config.ts         # Theme configuration
├── hooks/
│   ├── use-toast.ts            # Toast notification hook
│   └── useReducedMotion.ts     # Reduced motion preference hook
├── public/
│   └── images/                 # Static images and assets
│       ├── smartdeeds.png
│       ├── gallery/
│       ├── companies/
│       └── publications/
├── styles/
│   └── globals.css              # Global styles and CSS variables
├── components.json               # shadcn/ui component configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.mjs               # Next.js configuration
├── vercel.json                   # Vercel deployment configuration
├── nginx.conf.example            # Nginx server configuration example
├── .htaccess.prod.example        # Apache server configuration example
└── .env.local.example            # Environment variables template
```

## 🚦 Getting Started

### Prerequisites

- **Node.js 18+** (recommended: 20+)
- **npm** or **yarn** package manager
- **Thirdweb Account** - Get a Client ID from [thirdweb.com](https://thirdweb.com)

### Installation

1. **Clone the repository**:
```bash
git clone <repository-url>
cd smartdeeds.ai-v2
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your configuration (see [Environment Variables](#environment-variables) section below).

4. **Run the development server**:
```bash
npm run dev
```

5. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Build & Deployment

### Development Build

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

The build generates a static site in the `out/` directory that can be deployed to any static hosting service:

- **Any static file server**
- **Vercel**
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

### Static Server Options

```bash
# Using http-server
npx http-server out

# Using Python
cd out && python -m http.server 3000

# Using Node.js serve
npx serve out
```

> **Note**: The `npm start` command won't work with static export since there's no Next.js server. Use one of the static server options above or deploy to a static hosting service.

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_BASE_PATH=

# Thirdweb Configuration
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
NEXT_PUBLIC_THIRDWEB_PROJECT_ID=your_thirdweb_project_id

# Contract Configuration (Base Network)
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
NEXT_PUBLIC_CHAIN_ID=8453

# Network Configuration
NEXT_PUBLIC_NETWORK_NAME=Base
NEXT_PUBLIC_MULTISIG_DESCRIPTION=All funds are held in a multi-signature wallet for security and refund purposes.

# Company Information
NEXT_PUBLIC_COMPANY_NAME=SmartDeeds
NEXT_PUBLIC_COMPANY_FOUNDED=Solslot.com, Bestia AI, Belwood Investments
NEXT_PUBLIC_COMPANY_ASSETS=$150M+ in assets under management
NEXT_PUBLIC_COMPANY_MENTIONS=The Wall Street Journal, The Real Deal

# Calendly Configuration
NEXT_PUBLIC_CALENDLY_LINK=https://calendly.com/contact-smartdeeds/smartdeeds-ai-private-membership

# KYC Configuration
NEXT_PUBLIC_KYC_ENABLED=false
NEXT_PUBLIC_KYC_API_BASE=http://leonard.mothsoft.com:8888
```

### Required Variables

- `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` - **Required**: Your Thirdweb Client ID. Get one from [thirdweb.com](https://thirdweb.com)
- `NEXT_PUBLIC_CONTRACT_ADDRESS` - **Required**: Your ERC-1155 smart contract address on Base
- `NEXT_PUBLIC_CHAIN_ID` - **Required**: Blockchain network ID (`8453` for Base mainnet)
- `NEXT_PUBLIC_CALENDLY_LINK` - **Required**: Your Calendly booking link
- `NEXT_PUBLIC_SITE_URL` - Site URL for SEO metadata

### Optional Variables

- `NEXT_PUBLIC_THIRDWEB_PROJECT_ID` - Your Thirdweb Project ID
- `NEXT_PUBLIC_NETWORK_NAME` - Network name (defaults to "Base")
- `NEXT_PUBLIC_MULTISIG_DESCRIPTION` - Description for multisig wallet info
- `NEXT_PUBLIC_COMPANY_NAME` - Company name (defaults to "SmartDeeds")
- `NEXT_PUBLIC_COMPANY_FOUNDED` - Company founding information
- `NEXT_PUBLIC_COMPANY_ASSETS` - Assets under management description
- `NEXT_PUBLIC_COMPANY_MENTIONS` - Comma-separated list of media mentions

### KYC Configuration

- `NEXT_PUBLIC_KYC_ENABLED` - **Feature Flag**: Set to `"true"` to enable the KYC verification flow. When enabled:
  - Users can view the entire site but see a KYC section where membership tiers would normally appear
  - The `TiersSection` component conditionally shows `KycSection` (inline) or `NFTTiers` based on verification status
  - Header shows "Verify to Connect" button instead of "Connect" when KYC is required
  - Users can create verification sessions and complete KYC through Stripe Identity
  - After verification, the KYC section automatically switches to show membership tiers
  - No redirects - everything happens inline on the main page
  - Default: `"false"` (membership tiers always visible)

- `NEXT_PUBLIC_KYC_API_BASE` - **Optional**: Base URL for the KYC API. Defaults to `http://leonard.mothsoft.com:8888` if not set.

**KYC Flow (when enabled):**
1. User visits home page and sees `KycSection` where tiers would be (if not verified)
2. User clicks "Start Verification" button in the KYC section
3. App creates a verification session via `POST /create-verification-session`
4. User is redirected to Stripe Identity hosted flow
5. After completion, user is redirected to `/kyc/return`
6. App polls `GET /check-verification-session/{session_id}` until verified
7. On verification, `localStorage.kycVerified` is set to `"true"`
8. `TiersSection` automatically detects the change and switches to show `NFTTiers`
9. Header button changes from "Verify to Connect" to normal "Connect" button

**KYC Components:**
- `TiersSection`: Wrapper component that conditionally renders `KycSection` or `NFTTiers` based on KYC status
- `KycSection`: Inline KYC verification section displayed on main page (replaces tiers when not verified)
- `KycPrompt`: Modal prompt for KYC verification (used in Header and NFT cards)
- `KycGate`: Legacy component (no longer redirects, kept for backward compatibility)

**Privacy Note**: KYC is powered by Stripe Identity. SmartDeeds and SolsLot only receive pass/fail results, not personal KYC information. Sessions are stored locally and re-verification may be triggered on new devices.

> **Note**: All `NEXT_PUBLIC_*` variables are exposed to the browser. Never put sensitive information in these variables.

## 🎨 Design System

### Color Palette

- **Primary**: Yellowish (`#EEFE93`) - Accent color for CTAs and highlights
- **Background**: Black (`#000000`) and Zinc-900 (`#18181b`) - Alternating section backgrounds
- **Text**: White, Gray-200, Gray-300, Gray-400 - Text hierarchy
- **Borders**: White/10, White/20 - Subtle borders with transparency

### Typography

- **Font Family**: Geist Sans (primary), Geist Mono (code)
- **Scale**: Responsive typography with optimal line heights and letter spacing
- **Headings**: Bold, large sizes (3xl to 6xl)
- **Body**: Regular weight, readable sizes (sm to lg)

### Components

All UI components are built with **shadcn/ui** and follow consistent patterns:

- **Glassmorphism**: `bg-white/5 backdrop-blur-md border border-white/10`
- **Hover States**: `hover:border-yellowish/50 transition-all`
- **Animations**: Framer Motion with `fadeInUp`, `staggerContainer`, `staggerItem`
- **Accessibility**: Proper ARIA labels, focus states, keyboard navigation

### Section Backgrounds

Sections alternate between `bg-black` and `bg-zinc-900` for visual rhythm:

1. Hero: `bg-black` (with image)
2. Project Malibu: `bg-black` (with image)
3. Trusted Infrastructure: `bg-zinc-900`
4. Team: `bg-zinc-900`
5. Malibu Program: `bg-black`
6. How It Works: `bg-zinc-900`
7. Membership Tiers: `bg-black`
8. Publications: `bg-zinc-900`
9. Benefits: `bg-black`
10. Connection: `bg-zinc-900`
11. Footer: `bg-zinc-950`

## 📱 Features in Detail

### Wallet Connection

- **Desktop**: 
  - When KYC disabled or verified: Normal "Connect" button with zinc-800 background and white text
  - When KYC enabled and not verified: "Verify to Connect" button with Shield icon (opens KYC flow)
  - When connected: Glassmorphism button with transparent background and white text
- **Mobile**: 
  - When KYC disabled or verified: Wallet icon button that opens connect modal
  - When KYC enabled and not verified: Shield icon button that opens KYC prompt
- **Modal**: Full-width connect button with zinc-800 styling
- **KYC Integration**: 
  - Header button clearly indicates when KYC is required ("Verify to Connect")
  - No hidden overlays - users know what action they need to take
  - KYC prompt modal available for protected actions (minting)

### NFT Minting

- **4-Column Grid**: All tiers displayed side-by-side on desktop
- **Equal Height Cards**: Consistent card heights with flexbox
- **Image Expansion**: Click NFT image to view full-size in modal
- **Quantity Selector**: Minus/plus buttons with input field
- **Connect Modal**: "Connect Wallet to Mint" button opens connect modal when not connected
- **Claim Conditions**: Real-time claim condition fetching with price and availability
- **Toast Notifications**: Success and error notifications for minting

### Carousels

- **Team Carousel**: Embla carousel with navigation buttons and dot indicators
- **Publications Carousel**: Auto-scrolling multi-item carousel with pause on hover
- **Responsive**: 1 item on mobile, 2 on tablet, 3 on desktop

### Countdown Timer

- **CountdownTimer Component**: Displays time remaining until a target date with days, hours, minutes, and seconds
- **Automatic Expiration**: Handles timer expiration with optional callback function
- **Real-time Updates**: Updates every second with smooth transitions
- **Used in Hero Section**: Integrated into the hero section to create urgency for pre-launch

### Modals & Dialogs

- **Image Expansion**: Full-size NFT preview in modal
- **Connect Wallet**: Modal for wallet connection on mobile and desktop
- **Calendly Booking**: Modal with Calendly embed for scheduling
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔍 SEO & Performance

### SEO Features

- **Automatic Sitemap**: Generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Structured Data**: JSON-LD schema for better search visibility
- **Meta Tags**: Comprehensive meta tags for social sharing
- **Open Graph**: Facebook and Twitter card support

### Performance Optimizations

- **Static Export**: Pre-rendered static pages for fast loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Dynamic imports for heavy components
- **Font Optimization**: Geist fonts with optimal loading
- **Reduced Motion**: Respects user's motion preferences

## ⚙️ Configuration Files

### Core Configuration

- **`components.json`** - shadcn/ui component configuration. Defines component paths, aliases, and styling preferences. Used by the shadcn CLI to install and manage UI components.
- **`tailwind.config.ts`** - Tailwind CSS configuration with custom colors, typography, spacing, and animation utilities. Includes brand colors (yellowish #EEFE93) and design tokens.
- **`postcss.config.js`** - PostCSS configuration for processing CSS with Tailwind and Autoprefixer.
- **`tsconfig.json`** - TypeScript compiler configuration with strict mode enabled and path aliases configured.
- **`next.config.mjs`** - Next.js configuration including static export settings, base path for subdirectory deployment, and image optimization settings.

### Deployment Configuration

- **`vercel.json`** - Vercel deployment configuration with rewrite rules for static export routing.
- **`nginx.conf.example`** - Example Nginx server configuration for deploying the static site. Includes proper routing for Next.js static export and subdirectory deployment.
- **`.htaccess.prod.example`** - Example Apache server configuration for deploying the static site. Includes rewrite rules for client-side routing.

### Environment Template

- **`.env.local.example`** - Template file for environment variables. Copy to `.env.local` and fill in your configuration values.

## 🧪 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Lint code
npm run lint

# Type checking
npx tsc --noEmit
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: Code formatting (if configured)
- **Component Structure**: Consistent component organization

## 📄 License

MIT

## 🤝 Contributing

This is a private project. For questions or issues, please contact the project maintainers.

---

Built with 🍊 using Next.js, React, and Thirdweb
