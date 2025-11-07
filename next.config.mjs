/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for client-side only deployment
  basePath: '/smartdeeds', // Base path for subdirectory deployment
  assetPrefix: '/smartdeeds', // Asset prefix for static files
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ipfs.io",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "gateway.pinata.cloud",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "ipfs.filebase.io",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "nftstorage.link",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

export default nextConfig
