import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/metadata'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/kyc'], // Disallow KYC page for privacy
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

