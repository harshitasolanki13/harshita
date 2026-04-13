import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // AUTO-IMPROVED: guard browser-only APIs so the app stays safe during builds and previews.
    if (typeof window === 'undefined') {
      return 'light'
    }

    const saved = window.localStorage.getItem('portfolio-theme')
    if (saved) {
      return saved
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    root.setAttribute('data-theme', theme)
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
