import type { Metadata } from 'next'
import { COMPANY_INFO } from './constants'

// Site configuration
export const siteConfig = {
  name: 'SmartDeeds',
  description: 'Exclusive NFT membership tiers for premium real estate access. Join the new era of real estate ownership with blockchain-secured membership passes on Base network.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://smartdeeds.ai',
  ogImage: '/images/gallery/ProjectMalibu.webp', // Using Project Malibu as default OG image
  twitterHandle: '@smartdeeds', // Update with actual Twitter handle
  creator: 'Bo Belmont',
}

// Default metadata for the site
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - NFT Membership Tiers`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'NFT',
    'membership',
    'real estate',
    'blockchain',
    'Base network',
    'SmartDeeds',
    'Project Malibu',
    'Tadao Ando',
    'real estate investment',
    'exclusive access',
    'Belwood Investments',
  ],
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Exclusive NFT Membership for Premium Real Estate Access`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'SmartDeeds - Project Malibu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Exclusive NFT Membership for Premium Real Estate Access`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

// Helper function to generate page-specific metadata
export function generateMetadata({
  title,
  description,
  path = '',
  ogImage,
  noindex = false,
}: {
  title: string
  description: string
  path?: string
  ogImage?: string
  noindex?: boolean
}): Metadata {
  const url = `${siteConfig.url}${path}`
  const image = ogImage || siteConfig.ogImage

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  }
}

// Structured data helpers
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/smartdeeds.png`,
    founder: {
      '@type': 'Person',
      name: siteConfig.creator,
    },
    sameAs: [
      // Add social media links when available
      // 'https://twitter.com/smartdeeds',
      // 'https://linkedin.com/company/smartdeeds',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

