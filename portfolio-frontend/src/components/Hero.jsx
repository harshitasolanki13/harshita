import { useEffect, useState } from 'react'
import heroIllustrationDesktop from '../assets/hero-illustration-desktop.png'
import heroIllustrationMobile from '../assets/hero-illustration-mobile.png'

const dots = [
  { className: 'left-[5%] top-[18%] h-16 w-16 bg-[#E0E7FF] opacity-60 dark:bg-[#1E1B4B]', delay: '0s', factor: 0.08 },
  { className: 'right-[8%] top-[16%] h-28 w-28 bg-[#C7D2FE] opacity-50 dark:bg-[#312E81]', delay: '0.6s', factor: 0.12 },
  { className: 'left-[14%] bottom-[16%] h-12 w-12 bg-[#C7D2FE] opacity-40 dark:bg-[#312E81]', delay: '1.2s', factor: 0.1 },
  { className: 'right-[18%] bottom-[12%] h-20 w-20 bg-[#E0E7FF] opacity-40 dark:bg-[#1E1B4B]', delay: '1.8s', factor: 0.14 },
  { className: 'left-1/2 top-[12%] h-10 w-10 -translate-x-1/2 bg-[#C7D2FE] opacity-50 dark:bg-[#312E81]', delay: '2.4s', factor: 0.09 },
  { className: 'left-[48%] bottom-[10%] h-24 w-24 bg-[#E0E7FF] opacity-30 dark:bg-[#1E1B4B]', delay: '3s', factor: 0.15 },
]

const subtitle = 'Full Stack Developer'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let frameId = 0

    const onScroll = () => {
      cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    let index = 0

    const interval = window.setInterval(() => {
      index += 1
      setTypedText(subtitle.slice(0, index))

      if (index >= subtitle.length) {
        window.clearInterval(interval)
      }
    }, 80)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#FAFAFA] px-6 pb-16 pt-[60px] text-center dark:bg-[#0F172A]"
    >
      {dots.map((dot, index) => (
        <div
          key={dot.delay}
          aria-hidden="true"
          className={`float-dot absolute rounded-full blur-[1px] ${dot.className}`}
          style={{
            animationDelay: dot.delay,
            transform: `translateY(${scrollY * dot.factor}px)`,
          }}
        />
      ))}

      <div className="section-container relative z-10 flex w-full flex-col items-center">
        <p
          data-aos="fade-up"
          className="mb-5 font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-[#6366F1] dark:text-[#818CF8]"
        >
          Full-stack portfolio
        </p>

        <h1
          data-aos="fade-up"
          className="max-w-5xl text-[40px] font-bold leading-[1.06] tracking-[-0.02em] text-[#111827] dark:text-[#F1F5F9] md:text-[72px] md:leading-[1.05]"
        >
          Harshita Rajesh Solanki
        </h1>

        <div
          data-aos="fade-up"
          data-aos-delay="80"
          className="mt-4 min-h-[40px] text-[24px] font-semibold text-[#6366F1] dark:text-[#818CF8] md:text-[30px]"
        >
          <span>{typedText}</span>
          <span className="cursor ml-0.5 inline-block">|</span>
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="160"
          className="mt-6 max-w-[640px] text-[18px] leading-[1.7] text-[#6B7280] dark:text-[#94A3B8]"
        >
          Building elegant digital experiences from frontend to backend.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="240"
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-xl bg-[#6366F1] px-6 py-3 text-[15px] font-semibold text-white shadow-none transition-all duration-180 hover:-translate-y-0.5 hover:bg-[#4F46E5] hover:shadow-button-hover dark:bg-[#818CF8] dark:hover:bg-[#6366F1]"
          >
            View My Work
          </button>

          <a
            href="/Harshita_Rajesh_Solanki_Resume.pdf"
            download
            className="rounded-xl border border-[#E5E7EB] bg-white px-6 py-3 text-[15px] font-semibold text-[#111827] transition-all duration-180 hover:-translate-y-0.5 hover:border-[#6366F1] hover:text-[#6366F1] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#F1F5F9] dark:hover:border-[#818CF8] dark:hover:text-[#818CF8]"
          >
            Download Resume
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="320"
          className="relative mt-14 hidden w-full max-w-[460px] md:block"
          style={{ transform: `translateY(${scrollY * 0.14}px)` }}
        >
          <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white p-3 shadow-card dark:border-[#334155] dark:bg-[#1E293B]">
            <img
              src={heroIllustrationDesktop}
              alt="Minimal illustration for Harshita's portfolio hero section"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="320"
          className="relative mt-12 block w-full max-w-[260px] md:hidden"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-2 shadow-card dark:border-[#334155] dark:bg-[#1E293B]">
            <img
              src={heroIllustrationMobile}
              alt="Minimal illustration for Harshita's portfolio hero section"
              className="w-full rounded-[18px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
