'use client'

import { useEffect } from 'react'

interface CalendlyEmbedProps {
  url: string
  height?: string
}

export default function CalendlyEmbed({ url, height = '700px' }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly embed script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book a <span className="text-yellowish">Private Chat</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Schedule a private briefing with the founders to understand how SmartDeeds membership works
          </p>
        </div>

        <div className="calendly-inline-widget" data-url={url} style={{ minWidth: '320px', height }} />
      </div>
    </div>
  )
}

