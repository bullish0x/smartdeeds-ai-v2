'use client'

import { ThemeProvider } from './ThemeProvider'
import { ThirdwebProvider } from './ThirdwebProvider'
import { Toaster } from './ui/toaster'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      <ThemeProvider>
        {children}
        <Toaster />
      </ThemeProvider>
    </ThirdwebProvider>
  )
}




