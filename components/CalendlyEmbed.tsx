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
    <div className="w-full h-full p-4 md:p-6">
      <div className="calendly-inline-widget w-full h-full" data-url={url} style={{ minWidth: '320px', height }} />
    </div>
  )
}

