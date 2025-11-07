'use client'

import { MALIBU_TIERS } from '@/lib/constants'

export default function MalibuProgram() {
  return (
    <section id="malibu-program" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Malibu <span className="text-yellowish">Program</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            Welcome to SmartDeeds—invite-only access to the multi-million-dollar residential market, secured on blockchain. Get exclusive education, events, and behind-the-scenes access to the Malibu oceanfront estate by Tadao Ando (formerly owned by Kanye West). If approved, you'll follow Belwood Investments through the rehab and sale, with private renovation updates and real-time learning as we prepare the property for market. Details shared privately by invite.
          </p>
        </div>

        {/* Property Snapshot */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Property <span className="text-yellowish">Snapshot</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Property</p>
              <p className="text-lg font-semibold text-white">Malibu oceanfront estate</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Architect</p>
              <p className="text-lg font-semibold text-white">Tadao Ando</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Provenance</p>
              <p className="text-lg font-semibold text-white">Formerly owned by Kanye West</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Access</p>
              <p className="text-lg font-semibold text-white">Invite-only program with private renovation updates and educational content</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Program Rail</p>
              <p className="text-lg font-semibold text-white">Base blockchain (USDC for on-chain rails)</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Operator</p>
              <p className="text-lg font-semibold text-white">SmartDeeds, in collaboration with Belwood Investments</p>
            </div>
          </div>
        </div>

        {/* Tier Cards */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Membership <span className="text-yellowish">Tiers</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MALIBU_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-yellowish transition-all hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <h4 className="text-xl font-bold text-black dark:text-white mb-4">
                    {tier.name}
                  </h4>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-black dark:text-white">
                      {tier.priceFormatted}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {tier.exchangeRateMultiplier} Exchange Rate Multiplier
                    </p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="text-yellowish mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Disclosures Section */}
        <div className="bg-gray-900 rounded-lg p-8 md:p-12 border border-gray-800">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Important <span className="text-yellowish">Disclosures</span>
          </h3>

          <div className="space-y-8 text-gray-300">
            {/* Voucher & Go-Live */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Voucher & Go‑Live</h4>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                This presale Voucher evidences only a paid reservation. No present rights are granted. At go‑live, your SmartDeed DAC is issued at the applicable Exchange Rate and your Global Digital Membership activates. Membership is consumptive and non‑financial.
              </p>
              <ul className="text-sm md:text-base space-y-2 ml-4 list-disc">
                <li>
                  <strong className="text-white">Voucher:</strong> presale instrument only; no membership privileges or economic/property interest until go‑live and DAC issuance.
                </li>
                <li>
                  <strong className="text-white">Exchange at Go‑Live:</strong> Presale Amount × Exchange Rate determines your DAC interest; recorded on the Base network. The Canonical Registry controls.
                </li>
                <li>
                  <strong className="text-white">Membership:</strong> consumptive access benefits; no dividends, profit‑sharing, voting, or control rights.
                </li>
              </ul>
            </div>

            {/* Duration & Transition */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Duration & Transition</h4>
              <ul className="text-sm md:text-base space-y-2 ml-4 list-disc">
                <li>
                  All Malibu memberships grant lifetime privileges for the active life of the property under SmartDeeds' management.
                </li>
                <li>
                  If the Malibu Estate is sold, recapitalized, or transferred, member access and privileges will conclude with the transition.
                </li>
                <li>
                  Post‑settlement, SmartDeed may issue a non‑transferable digital Membership credential to preserve gated access (non‑financial; subject to program terms).
                </li>
              </ul>
            </div>

            {/* Settlement & Redemption */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Settlement & Redemption (High‑Level)</h4>
              <p className="text-sm md:text-base leading-relaxed">
                If and when a Settlement Event occurs, and after legal review and compliance clearance, SmartDeed may initiate an exchange process under the DAC. Payments, if any, are intended to be delivered in USDC on Base to your whitelisted wallet; alternate rails may be offered at the Company's discretion with applicable fees/withholding. No automatic conversion is promised; timing and mechanics are governed by program terms and notices.
              </p>
            </div>

            {/* Important Disclosures */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Important Disclosures</h4>
              <ul className="text-sm md:text-base space-y-2 ml-4 list-disc">
                <li>
                  No present property interest; prior to go‑live, Vouchers confer no membership privileges, no economic or property interest, and no settlement rights.
                </li>
                <li>
                  No dividends, profit-sharing, voting, or governance rights are conveyed by membership.
                </li>
                <li>
                  Participation is subject to eligibility, KYC/AML, and sanctions screening.
                </li>
                <li>
                  On-chain operations and any distributions (if applicable) are intended to use USDC on the Base network unless otherwise stated in official notices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

