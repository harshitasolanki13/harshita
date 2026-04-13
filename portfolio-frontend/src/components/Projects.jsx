import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    name: 'Portfolio CMS',
    description:
      'A content-managed portfolio experience with a lightweight admin workflow, responsive editorial layouts, and reusable sections for showcasing work clearly.',
    tags: ['React', 'Django', 'PostgreSQL'],
  },
  {
    name: 'TaskFlow API',
    description:
      'A RESTful backend for planning and collaboration with authentication, structured task pipelines, and dashboard-ready endpoints for real-time status views.',
    tags: ['Django REST', 'SQLite', 'Docker'],
  },
  {
    name: 'Design-to-Code Portfolio',
    description:
      'A design-faithful single-page portfolio translating minimal wireframes into a polished frontend with theme persistence, motion, and a fast contact flow.',
    tags: ['Vite', 'Tailwind', 'AOS'],
  },
]

export default function Projects() {
  const jumpToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="projects" className="section-shell bg-white dark:bg-[#0F172A]">
      <div className="section-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Selected work built with product clarity and clean systems.</h2>
          <p className="section-copy mt-5">
            Each project balances interface detail with dependable engineering, from frontend
            interactions to backend delivery.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-card transition-all duration-220 hover:-translate-y-1 hover:border-[#6366F1] hover:shadow-card-hover dark:border-[#334155] dark:bg-[#1E293B] dark:hover:border-[#818CF8]"
            >
              <span className="absolute inset-y-0 left-0 w-1 bg-transparent transition-colors duration-220 group-hover:bg-[#6366F1] dark:group-hover:bg-[#818CF8]" />

              <div className="pl-3">
                <h3 className="text-[20px] font-semibold leading-[1.2] text-[#111827] dark:text-[#F1F5F9]">
                  {project.name}
                </h3>

                <p className="mt-3 max-w-[58ch] text-[14px] leading-[1.7] text-[#6B7280] dark:text-[#94A3B8]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#C7D2FE] bg-[#EEF2FF] px-3 py-1 font-mono text-[11px] font-medium text-[#4338CA] transition-colors duration-300 hover:bg-[#C7D2FE] dark:border-[#312E81] dark:bg-[#1E1B4B] dark:text-[#A5B4FC] dark:hover:bg-[#312E81]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <button
                    type="button"
                    aria-label={`Ask for ${project.name} repository access`}
                    title="Repository details available on request"
                    onClick={jumpToContact}
                    className="text-[#9CA3AF] transition-colors duration-300 hover:text-[#6366F1] dark:text-[#64748B] dark:hover:text-[#818CF8]"
                  >
                    <Github size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label={`Request a ${project.name} walkthrough`}
                    title="Live walkthrough available on request"
                    onClick={jumpToContact}
                    className="text-[#9CA3AF] transition-colors duration-300 hover:text-[#6366F1] dark:text-[#64748B] dark:hover:text-[#818CF8]"
                  >
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
