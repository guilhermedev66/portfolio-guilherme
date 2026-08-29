import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)

    const color = theme === 'light' ? '#ffffff' : '#0a0a0a'
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((meta) => meta.setAttribute('content', color))
  }, [theme])

  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
      aria-label={isLight ? 'Ativar tema escuro' : 'Ativar tema claro'}
      className="rounded-full p-2 text-ink-muted transition duration-200 hover:bg-chip hover:text-chip-ink focus-visible:bg-chip focus-visible:text-chip-ink focus-visible:outline-none"
    >
      {isLight ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  )
}
