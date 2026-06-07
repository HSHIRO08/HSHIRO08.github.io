import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'
import AnimatedText from '../ui/AnimatedText'

interface WorkGridProps {
  limit?: number
}

export default function WorkGrid({ limit }: WorkGridProps) {
  const displayed = limit ? projects.slice(0, limit) : projects

  return (
    <section className="py-24 md:py-36 bg-[#080808]">
      <div className="container-fluid">
        {/* Section header */}
        <div className="flex items-end justify-between mb-14 border-b border-[rgba(240,237,230,0.08)] pb-6">
          <AnimatedText
            text="Selected Work"
            as="h2"
            className="text-xl-display text-[#f0ede6]"
          />
          <span className="text-[rgba(240,237,230,0.3)] text-sm tracking-[0.1em] hidden md:block">
            {displayed.length}/{projects.length}
          </span>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {displayed.map((project, i) => {
            // Asymmetric layout pattern for desktop
            const spanClass =
              i % 5 === 0
                ? 'lg:col-span-7'
                : i % 5 === 1
                ? 'lg:col-span-5'
                : i % 5 === 2
                ? 'lg:col-span-5'
                : i % 5 === 3
                ? 'lg:col-span-7'
                : 'lg:col-span-6'

            const large = i % 5 === 0 || i % 5 === 3

            return (
              <div key={project.id} className={`md:col-span-1 ${spanClass}`}>
                <ProjectCard project={project} index={i} large={large} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
