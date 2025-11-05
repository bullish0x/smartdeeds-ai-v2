'use client'

import { CALENDLY_LINK } from '@/lib/constants'
import CalendlyEmbed from './CalendlyEmbed'

export default function ConnectionSection() {
  return (
    <section id="booking" className="bg-black">
      <CalendlyEmbed url={CALENDLY_LINK} height="700px" />
    </section>
  )
}

