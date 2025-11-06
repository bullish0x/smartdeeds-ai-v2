'use client'

import { useState } from 'react'
import { Globe } from 'lucide-react'

type Language = {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
]

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language)
    setIsOpen(false)
    // TODO: Implement language change logic
    // This will be connected to your i18n solution (e.g., next-intl, react-i18next)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm hidden sm:inline">{currentLanguage.flag}</span>
        <span className="text-sm hidden md:inline">{currentLanguage.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-20 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className={`w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-700 transition-colors flex items-center gap-3 ${
                  currentLanguage.code === language.code ? 'bg-gray-700' : ''
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {currentLanguage.code === language.code && (
                  <span className="ml-auto text-yellowish">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

