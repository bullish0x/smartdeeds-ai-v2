export interface NFTTier {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  description: string;
  benefits: string[];
  tokenId: number; // Token ID for minting
}

// Pre-sale Vouchers (NFT Tiers)
export const NFT_TIERS: NFTTier[] = [
  {
    id: 'founder',
    name: 'Founder',
    price: 300000,
    priceFormatted: '$300,000',
    image: '/images/Founder.png',
    description: 'Exclusive Founder tier membership with premium access and benefits.',
    benefits: [
      "All Diamond benefits",
      "Exclusive Founders Summit",
      "Name recognition at the property",
      "Special co-branding privileges",
    ],
    tokenId: 0, // Token ID 0 for Founder (will add others later)
  },
  {
    id: "diamond",
    name: "Diamond",
    price: 100000,
    priceFormatted: "$100,000",
    image: "/images/Diamond.png",
    description:
      "Premium Diamond tier membership with advanced features and perks.",
    benefits: [
      "All Platinum benefits",
      "4 Private Estate Sessions annually (half-day hosted experiences for dinners, creative gatherings, or brand showcases up to 12 guests)",
      "1 chef dinner",
      "Concierge scheduling included",
    ],
    tokenId: 1, // Placeholder - will be configured later
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 10000,
    priceFormatted: "$10,000",
    image: "/images/Platinum.png",
    description:
      "Platinum tier membership with enhanced benefits and features.",
    benefits: [
      "All Gold benefits",
      "2 annual Malibu Member Days (sunset receptions, curated talks, private guest access)",
    ],
    tokenId: 2, // Placeholder - will be configured later
  },
  {
    id: "gold",
    name: "Gold",
    price: 1000,
    priceFormatted: "$1,000",
    image: "/images/Gold.png",
    description: "Gold tier membership with standard benefits and features.",
    benefits: [
      "One private guided day at the Malibu Estate",
      "Property tour and architecture briefing",
      "Private networking mixer",
    ],
    tokenId: 3, // Placeholder - will be configured later
  },
];

// Contract configuration with fallback values
export const CONTRACT_CONFIG = {
  address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x12CE7BD130aaACc49e6b2C7d23e41e145D99BBB6',
  chainId: process.env.NEXT_PUBLIC_CHAIN_ID ? parseInt(process.env.NEXT_PUBLIC_CHAIN_ID) : 8453, // Base mainnet
};

export const MULTISIG_INFO = {
  network: 'Base',
  description: 'All funds are held in a multi-signature wallet for security and refund purposes.',
};

export const COMPANY_INFO = {
  name: 'SmartDeeds',
  founded: 'Sols Lot, Bestia AI, Belwood Investments',
  assets: '$150M+ in assets under management',
  mentions: ['The Wall Street Journal', 'The Real Deal'],
};

export const CALENDLY_LINK = 'https://calendly.com/contact-smartdeeds/smartdeeds-ai-private-membership';

export const PROJECT_MALIBU = {
  name: "Project Malibu",
  image: "/images/ProjectMalibu.webp",
  description:
    "The iconic Malibu oceanfront property designed by Tadao Ando and once owned by Kanye West.",
};

export interface MalibuTier {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  exchangeRateMultiplier: string;
  benefits: string[];
}

export const MALIBU_TIERS: MalibuTier[] = [
  {
    id: 'gold',
    name: 'GOLD — Insider Tier',
    price: 1000,
    priceFormatted: '$1,000',
    exchangeRateMultiplier: '1.2×',
    benefits: [
      'Exchange Rate Multiplier: 1.2×',
      'One private guided day at the Malibu Estate',
      'Property tour, architecture briefing',
      'Private networking mixer',
    ],
  },
  {
    id: 'platinum',
    name: 'PLATINUM — Social Tier',
    price: 10000,
    priceFormatted: '$10,000',
    exchangeRateMultiplier: '1.25×',
    benefits: [
      'Exchange Rate Multiplier: 1.25×',
      'All Gold benefits',
      '2 annual Malibu Member Days (sunset receptions, curated talks, private guest access)',
    ],
  },
  {
    id: 'diamond',
    name: 'DIAMOND — Estate Tier',
    price: 100000,
    priceFormatted: '$100,000',
    exchangeRateMultiplier: '1.3×',
    benefits: [
      'Exchange Rate Multiplier: 1.3×',
      'All Platinum benefits',
      '4 Private Estate Sessions annually (half-day hosted experiences for dinners, creative gatherings, or brand showcases up to 12 guests)',
      '1 chef dinner',
      'Concierge scheduling included',
    ],
  },
  {
    id: 'founders-circle',
    name: 'FOUNDERS CIRCLE — Legacy Tier (Invitation Only)',
    price: 300000,
    priceFormatted: '$300,000',
    exchangeRateMultiplier: '1.33×',
    benefits: [
      'Exchange Rate Multiplier: 1.33×',
      'All Diamond benefits',
      'Exclusive Founders Summit',
      'Name recognition at the property',
      'Special co-branding privileges',
      'Voucher & Go‑Live; DAC Issuance',
    ],
  },
];
