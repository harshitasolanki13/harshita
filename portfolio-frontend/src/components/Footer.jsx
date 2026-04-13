import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const [showTopButton, setShowTopButton] = useState(false)
  const year = new Date().getFullYear()

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 400)

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="border-t border-[#E5E7EB] bg-[#FAFAFA] py-10 text-center dark:border-[#334155] dark:bg-[#0F172A]">
        <p className="text-[14px] text-[#9CA3AF] dark:text-[#64748B]">
          Designed &amp; built by Harshita Rajesh Solanki · {year}
        </p>
      </footer>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#6366F1] text-white shadow-md transition-all duration-300 hover:bg-[#4F46E5] dark:bg-[#818CF8] dark:hover:bg-[#6366F1] ${
          showTopButton ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </>
  )
}
