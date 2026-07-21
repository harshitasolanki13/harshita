import { ExternalLink, Github } from 'lucide-react'
import artyleviiHomepage from '../assets/artylevii-homepage.png'

const projects = [
  {
    name: 'ArtyLevii Creations',
    description:
      'A studio site for a Mumbai-based art business, showcasing hand-crafted portraits, caricatures, resin art, and wall murals with a gallery-driven layout and an EmailJS-powered contact flow.',
    tags: ['React', 'Vite', 'EmailJS'],
    image: artyleviiHomepage,
    liveUrl: 'https://levis-eta.vercel.app/',
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

        <div className="mt-12 grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative mx-auto w-full max-w-[720px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-card transition-all duration-220 hover:-translate-y-1 hover:border-[#6366F1] hover:shadow-card-hover dark:border-[#334155] dark:bg-[#1E293B] dark:hover:border-[#818CF8]"
            >
              <span className="absolute inset-y-0 left-0 w-1 bg-transparent transition-colors duration-220 group-hover:bg-[#6366F1] dark:group-hover:bg-[#818CF8]" />

              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.name} homepage screenshot`}
                  className="h-56 w-full border-b border-[#E5E7EB] object-cover object-top dark:border-[#334155]"
                />
              )}

              <div className="p-6 pl-7">
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
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit the live ${project.name} site`}
                      title="View live site"
                      className="text-[#9CA3AF] transition-colors duration-300 hover:text-[#6366F1] dark:text-[#64748B] dark:hover:text-[#818CF8]"
                    >
                      <ExternalLink size={18} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      aria-label={`Request a ${project.name} walkthrough`}
                      title="Live walkthrough available on request"
                      onClick={jumpToContact}
                      className="text-[#9CA3AF] transition-colors duration-300 hover:text-[#6366F1] dark:text-[#64748B] dark:hover:text-[#818CF8]"
                    >
                      <ExternalLink size={18} />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
