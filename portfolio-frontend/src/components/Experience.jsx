const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Independent Projects',
    date: '2024 - Present',
    bullets: [
      'Built responsive portfolio and dashboard experiences with React, Tailwind CSS, and strong attention to interface rhythm.',
      'Designed backend APIs in Django REST Framework to support forms, data flows, and maintainable content structures.',
      'Translated early concepts into polished, mobile-friendly interfaces with a design-first implementation process.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Academic & Freelance Work',
    date: '2023 - 2024',
    bullets: [
      'Created reusable UI sections and interaction patterns with emphasis on whitespace, legibility, and clear hierarchy.',
      'Integrated REST APIs, form validation, and state-driven views to keep applications consistent across devices.',
    ],
  },
  {
    role: 'Developer-in-Training',
    company: 'Personal Learning Track',
    date: '2022 - 2023',
    bullets: [
      'Strengthened core skills in JavaScript, Python, databases, and Git through hands-on projects and iterative builds.',
      'Focused on full-stack fundamentals, from semantic frontend structure to backend logic and deployment basics.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-shell bg-[#FAFAFA] dark:bg-[#0F172A]">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="section-label">Experience</p>
          <h2 className="section-title">A growing journey shaped by shipping, learning, and refining.</h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-[5px] top-0 h-full w-[2px] bg-[#C7D2FE] dark:bg-[#312E81] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-1">
            {experiences.map((item, index) => (
              <article key={`${item.role}-${item.company}`} className="relative pb-12 last:pb-0">
                <span className="absolute left-0 top-1 h-3 w-3 rounded-full border-2 border-white bg-[#6366F1] dark:border-[#0F172A] dark:bg-[#818CF8] md:left-1/2 md:-translate-x-1/2" />

                <div className="md:grid md:grid-cols-2 md:gap-12">
                  <div
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className={`ml-10 md:ml-0 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                    }`}
                  >
                    <h3 className="text-[20px] font-semibold leading-[1.2] text-[#111827] dark:text-[#F1F5F9]">
                      {item.role}
                    </h3>

                    <p
                      className={`mt-1 flex flex-wrap gap-2 text-[14px] font-medium text-[#6366F1] dark:text-[#818CF8] ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <span>{item.company}</span>
                      <span className="text-[12px] text-[#9CA3AF] dark:text-[#64748B]">
                        {item.date}
                      </span>
                    </p>

                    <div className="mt-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className={`flex items-start gap-3 ${
                            index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                          }`}
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C7D2FE] dark:bg-[#312E81]" />
                          <p className="text-[14px] leading-[1.7] text-[#6B7280] dark:text-[#94A3B8]">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
