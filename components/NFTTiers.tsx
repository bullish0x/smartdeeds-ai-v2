import { NFT_TIERS } from '@/lib/constants'
import NFTTierCard from './NFTTierCard'

export default function NFTTiers() {
  return (
    <section id="tiers" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pre-Sale <span className="text-yellowish">Vouchers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your pre-sale voucher tier. All funds are held in a multi-signature wallet
            on the Base network for security and refund purposes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {NFT_TIERS.map((tier) => (
            <NFTTierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            * All purchases are subject to KYC verification and terms of service.
            Payments are processed on the Base network.
          </p>
        </div>
      </div>
    </section>
  )
}

