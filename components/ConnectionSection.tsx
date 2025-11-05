'use client'

export default function ConnectionSection() {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Before You Join, Let&apos;s Talk
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get a private briefing with the founders. Understand how SmartDeeds
            membership works—recorded on a public blockchain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://calendly.com/contact-smartdeeds/smartdeeds-ai-private-membership"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Book a Private Chat
            </a>
            <button
              className="bg-yellowish text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              onClick={() => {
                // Mockup - no actual action
                alert('Join invite list functionality would be implemented here.')
              }}
            >
              Join the Private Invite List
            </button>
          </div>

          <p className="text-sm text-gray-600">
            Private calls available by invitation only.
          </p>
        </div>
      </div>
    </section>
  )
}

