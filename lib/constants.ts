export interface NFTTier {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  description: string;
  benefits: string[];
}

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
  },
];

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

