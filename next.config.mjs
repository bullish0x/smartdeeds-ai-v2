/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for client-side only deployment
  basePath: '/smartdeeds', // Configure for subdirectory deployment
  assetPrefix: '/smartdeeds', // Ensure all assets are prefixed correctly
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.io',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: 'gateway.pinata.cloud',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.filebase.io',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: 'nftstorage.link',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig

