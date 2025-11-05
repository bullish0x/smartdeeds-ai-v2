import Image from 'next/image'

export default function BoBelmont() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-yellowish">Bo Belmont</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Bo Belmont is the visionary founder behind SmartDeeds, bringing together decades of experience in real estate investment and cutting-edge blockchain technology.
              </p>
              <p className="text-lg leading-relaxed">
                With a proven track record through Solslot.com, Bestia AI, and Belwood Investments, Bo has managed over $150M+ in assets and has been featured in leading publications including The Wall Street Journal and The Real Deal.
              </p>
              <p className="text-lg leading-relaxed">
                His vision for SmartDeeds is to democratize access to premium real estate investments through blockchain-secured membership tiers, starting with the iconic Project Malibu—the Tadao Ando-designed oceanfront property once owned by Kanye West.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#booking"
                className="inline-block bg-yellowish text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Book a Private Chat
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder for Bo Belmont image - replace with actual image path */}
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-32 h-32 mx-auto text-gray-600 mb-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-gray-500">Bo Belmont Image</p>
                <p className="text-sm text-gray-600 mt-2">Add image to public/images/</p>
              </div>
            </div>
            {/* Uncomment when image is available:
            <Image
              src="/images/BoBelmont.jpg"
              alt="Bo Belmont"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            */}
          </div>
        </div>
      </div>
    </section>
  )
}

