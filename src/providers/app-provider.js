'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function AppProvider({ children }) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}
