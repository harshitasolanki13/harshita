import aboutPortraitDesktop from '../assets/about-portrait-desktop.png'
import aboutPortraitMobile from '../assets/about-portrait-mobile.png'

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '5+', label: 'Technologies' },
  { value: '2+', label: 'Years Coding' },
]

export default function About() {
  return (
    <section id="about" className="section-shell bg-white dark:bg-[#0F172A]">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5 md:gap-16">
          <div data-aos="fade-right" className="md:col-span-3">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Crafting calm, scalable products with thoughtful code.</h2>
            <div className="mt-6 max-w-[640px] space-y-4">
              <p className="section-copy">
                I&apos;m Harshita, a full-stack developer who enjoys translating product ideas
                into clean interfaces, reliable APIs, and systems that feel effortless to use.
              </p>
              <p className="section-copy">
                My work sits at the intersection of frontend polish and backend structure, with
                a focus on clarity, maintainability, and user-first thinking from the first screen
                to the final deployment.
              </p>
            </div>
          </div>

          <div data-aos="fade-left" className="md:col-span-2">
            <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border-4 border-[#C7D2FE] bg-[#EEF2FF] p-3 dark:border-[#312E81] dark:bg-[#1E1B4B]">
              <div className="h-full w-full overflow-hidden rounded-full border border-[#E5E7EB] bg-white dark:border-[#334155] dark:bg-[#1E293B]">
                <img
                  src={aboutPortraitDesktop}
                  alt="Portrait illustration for Harshita Rajesh Solanki"
                  className="hidden h-full w-full object-cover md:block"
                />
                <img
                  src={aboutPortraitMobile}
                  alt="Portrait illustration for Harshita Rajesh Solanki"
                  className="h-full w-full object-cover md:hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-6 text-center shadow-card transition-all duration-220 hover:-translate-y-1 hover:border-[#C7D2FE] hover:shadow-card-hover dark:border-[#334155] dark:bg-[#1E293B] dark:hover:border-[#6366F1]"
            >
              <div className="text-[36px] font-bold leading-none text-[#6366F1] dark:text-[#818CF8]">
                {stat.value}
              </div>
              <p className="mt-2 text-[14px] font-medium text-[#6B7280] dark:text-[#94A3B8]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
