import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SmartDeeds</h3>
            <p className="text-gray-400 text-sm">
              NFT membership tiers on Base network.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#tiers" className="text-gray-400 hover:text-yellowish transition-colors">
                  NFT Tiers
                </Link>
              </li>
              <li>
                <Link href="/#trust" className="text-gray-400 hover:text-yellowish transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-yellowish transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-yellowish transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/kyc" className="text-gray-400 hover:text-yellowish transition-colors">
                  KYC
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Network</h4>
            <p className="text-gray-400 text-sm">Base Network</p>
            <p className="text-gray-400 text-sm mt-2">
              Multi-sig wallet for fund security
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SmartDeeds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

