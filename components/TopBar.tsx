'use client'

import CountdownTimer from './CountdownTimer'

export default function TopBar() {
  // Set target date for countdown (adjust as needed)
  const launchDate = '2025-02-15T00:00:00Z' // Example: February 15, 2025

  return (
    <div className="bg-black border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-4">
          {/* Collaboration Text */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-white">In collaboration with Belwood Investments</p>
          </div>

          {/* Countdown Section */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-white">Global Launch in</span>
            <CountdownTimer targetDate={launchDate} />
            <a
              href="#tiers"
              className="bg-yellowish text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-sm whitespace-nowrap"
            >
              Pre Sale Vouchers
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

