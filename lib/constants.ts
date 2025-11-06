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
    price: 1000000,
    priceFormatted: '$1,000,000',
    image: '/images/Founder.png',
    description: 'Exclusive Founder tier membership with premium access and benefits.',
    benefits: [
      'Lifetime access to all features',
      'Priority support',
      'Exclusive events',
      'Founder badge',
    ],
    tokenId: 0, // Token ID 0 for Founder (will add others later)
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: 100000,
    priceFormatted: '$100,000',
    image: '/images/Diamond.png',
    description: 'Premium Diamond tier membership with advanced features and perks.',
    benefits: [
      'Advanced feature access',
      'Priority support',
      'Exclusive events',
      'Diamond badge',
    ],
    tokenId: 1, // Placeholder - will be configured later
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 10000,
    priceFormatted: '$10,000',
    image: '/images/Platinum.png',
    description: 'Platinum tier membership with enhanced benefits and features.',
    benefits: [
      'Enhanced feature access',
      'Standard support',
      'Member events',
      'Platinum badge',
    ],
    tokenId: 2, // Placeholder - will be configured later
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 1000,
    priceFormatted: '$1,000',
    image: '/images/Gold.png',
    description: 'Gold tier membership with standard benefits and features.',
    benefits: [
      'Standard feature access',
      'Community support',
      'Public events',
      'Gold badge',
    ],
    tokenId: 3, // Placeholder - will be configured later
  },
];

// Contract configuration
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
  founded: 'Solslot.com, Bestia AI, Belwood Investments',
  assets: '$150M+ in assets under management',
  mentions: ['The Wall Street Journal', 'The Real Deal'],
};

export const CALENDLY_LINK = 'https://calendly.com/contact-smartdeeds/smartdeeds-ai-private-membership';

export const PROJECT_MALIBU = {
  name: 'Project Malibu',
  image: '/images/ProjectMalibu.webp',
  description: 'The iconic Malibu oceanfront property designed by Tadao Ando and once owned by Kanye West.',
};

