import { COMPANY_INFO } from '@/lib/constants'

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Built by Proven{' '}
            <span className="text-yellowish">Real Estate</span> Innovators
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-gray-700">
            SmartDeeds is founded by the team behind{' '}
            <strong>{COMPANY_INFO.founded}</strong>—with over{' '}
            <strong>{COMPANY_INFO.assets}</strong> and features in{' '}
            <em>{COMPANY_INFO.mentions.join('</em> and <em>')}</em>.
          </p>

          <p className="text-lg text-gray-700">
            SmartDeeds is an economic interest in real estate property and membership
            passes recorded on a public blockchain, with rights secured on title and
            on-chain alongside Belwood. Full details shared privately by invite.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {['Solslot.com', 'Bestia AI', 'Belwood Investments', 'Base', 'Ethereum'].map(
              (company) => (
                <div
                  key={company}
                  className="px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200"
                >
                  <span className="text-black font-semibold">{company}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

