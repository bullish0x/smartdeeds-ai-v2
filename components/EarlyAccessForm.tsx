'use client'

import { useState } from 'react'

export default function EarlyAccessForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mockup - no actual submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellowish transition-colors"
        required
      />
      <input
        type="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellowish transition-colors"
        required
      />
      <button
        type="submit"
        className="bg-yellowish text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
      >
        {submitted ? 'Submitted!' : 'Get Early Access'}
      </button>
    </form>
  )
}

