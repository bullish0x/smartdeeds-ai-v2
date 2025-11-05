export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Get Invited',
      description: 'Receive an exclusive invitation to join SmartDeeds. Limited pre-sale vouchers available.',
    },
    {
      number: '02',
      title: 'Choose Your Tier',
      description: 'Select from Founder, Diamond, Platinum, or Gold pre-sale vouchers. Each tier offers unique benefits and access levels.',
    },
    {
      number: '03',
      title: 'Complete KYC',
      description: 'Verify your identity through our secure KYC process. All information is encrypted and protected.',
    },
    {
      number: '04',
      title: 'Purchase & Receive',
      description: 'Purchase your pre-sale voucher on the Base network. Funds are held in a multi-signature wallet for security.',
    },
    {
      number: '05',
      title: 'Access Benefits',
      description: 'Gain exclusive access to Project Malibu, events, education, and real estate investment opportunities.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-yellowish">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join SmartDeeds in five simple steps and start your journey into blockchain-secured real estate ownership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-yellowish/30 -z-10" style={{ width: 'calc(100% - 2rem)' }} />
              )}

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellowish transition-all h-full">
                <div className="text-yellowish text-4xl font-bold mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

