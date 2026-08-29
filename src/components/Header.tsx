import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '@/data/navigation'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-header backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="rounded text-lg font-semibold text-ink transition duration-200 hover:text-primary-400 focus-visible:text-primary-400 focus-visible:outline-none"
        >
          Guilherme<span className="text-primary-400">.</span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink-muted md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded underline-offset-4 transition duration-200 hover:text-chip-ink hover:underline focus-visible:text-chip-ink focus-visible:underline focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="-mr-2 rounded-full p-2 text-ink-muted transition duration-200 hover:bg-chip hover:text-ink focus-visible:bg-chip focus-visible:text-ink focus-visible:outline-none md:hidden"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4 text-sm font-medium text-ink-muted">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded transition duration-200 hover:text-chip-ink focus-visible:text-chip-ink focus-visible:outline-none"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
