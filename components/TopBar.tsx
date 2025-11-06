'use client'

export default function TopBar() {
  return (
    <div className="bg-black border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-4">
          {/* Collaboration Text */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-white">In collaboration with Belwood Investments</p>
          </div>
        </div>
      </div>
    </div>
  )
}

