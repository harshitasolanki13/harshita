import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-[60px] transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#E5E7EB]/90 bg-white/88 backdrop-blur-md dark:border-[#334155]/90 dark:bg-[#0F172A]/88'
            : 'border-b border-transparent bg-white/72 backdrop-blur-sm dark:bg-[#0F172A]/72'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
          <button
            type="button"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-[18px] font-semibold tracking-[0.16em] text-[#6366F1] transition-colors duration-300 dark:text-[#818CF8]"
          >
            HS
          </button>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-6">
              {links.map((link) => (
                <button
                  key={link}
                  type="button"
                  onClick={() => scrollTo(link)}
                  className="text-[15px] font-medium text-[#6B7280] transition-colors duration-300 hover:text-[#111827] dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]"
                >
                  {link}
                </button>
              ))}
            </nav>

            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] transition-all duration-300 hover:border-[#6366F1] hover:text-[#6366F1] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#94A3B8] dark:hover:border-[#818CF8] dark:hover:text-[#818CF8]"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] transition-all duration-300 hover:border-[#6366F1] hover:text-[#6366F1] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#94A3B8] dark:hover:border-[#818CF8] dark:hover:text-[#818CF8]"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] transition-all duration-300 hover:border-[#6366F1] hover:text-[#6366F1] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#94A3B8] dark:hover:border-[#818CF8] dark:hover:text-[#818CF8]"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#111827]/20 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[280px] border-l border-[#E5E7EB] bg-white px-6 pb-8 pt-[88px] shadow-card transition-transform duration-300 dark:border-[#334155] dark:bg-[#0F172A] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col gap-5">
          {links.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => scrollTo(link)}
              className="text-left text-[15px] font-medium text-[#6B7280] transition-colors duration-300 hover:text-[#111827] dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]"
            >
              {link}
            </button>
          ))}
        </div>
      </aside>
    </>
  )
}
