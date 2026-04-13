const skillGroups = {
  Frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Python', 'Django', 'Django REST Framework', 'REST APIs'],
  Database: ['PostgreSQL', 'SQLite', 'SQL'],
  Tools: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'Figma'],
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-[#FAFAFA] dark:bg-[#0F172A]">
      <div className="section-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">A practical toolkit for polished product delivery.</h2>
          <p className="section-copy mt-5">
            I work across the full stack, choosing tools that keep the experience fast for users
            and maintainable for teams.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {Object.entries(skillGroups).map(([group, items], index) => (
            <div
              key={group}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="grid grid-cols-1 gap-6 border-b border-[#E5E7EB] pb-10 last:border-b-0 last:pb-0 dark:border-[#334155] md:grid-cols-[180px_1fr]"
            >
              <div>
                <p className="font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-[#9CA3AF] dark:text-[#64748B]">
                  {group}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#C7D2FE] bg-[#EEF2FF] px-4 py-2 font-mono text-[13px] font-medium text-[#4338CA] transition-colors duration-300 hover:bg-[#C7D2FE] dark:border-[#312E81] dark:bg-[#1E1B4B] dark:text-[#A5B4FC] dark:hover:bg-[#312E81]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
