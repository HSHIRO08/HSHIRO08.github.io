import { useRef } from 'react'
import { type Project } from '../../data/projects'
import { useParallax } from '../../hooks/useScrollAnimation'

interface ProjectHeroProps {
  project: Project
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const imgRef = useRef<HTMLDivElement>(null)
  useParallax(imgRef as React.RefObject<Element>, 100)

  return (
    <section className="relative w-full min-h-[100svh] flex items-end overflow-hidden">
      {/* Full bleed image */}
      <div ref={imgRef} className="absolute inset-0 w-full h-full" style={{ willChange: 'transform' }}>
        <img
          src={project.heroImage}
          alt={`${project.title} hero`}
          width={1600}
          height={900}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[rgba(8,8,8,0.5)] to-transparent" />
      </div>

      {/* Project info overlay */}
      <div className="relative z-10 container-fluid pb-16 md:pb-24 w-full">
        <div className="flex flex-wrap gap-2 mb-5">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="text-[10px] tracking-[0.18em] uppercase text-[rgba(240,237,230,0.6)] border border-[rgba(240,237,230,0.2)] px-3 py-1"
            >
              {cat}
            </span>
          ))}
        </div>

        <h1
          className="text-[#f0ede6] mb-4 max-w-4xl"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            lineHeight: 0.9,
            textTransform: 'uppercase',
          }}
        >
          {project.title}
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-md">
            <p className="text-[rgba(240,237,230,0.6)] text-base leading-relaxed mb-4">
              {project.description}
            </p>
            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] tracking-[0.1em] uppercase text-[#c8f63e] border border-[rgba(200,246,62,0.3)] px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-8 items-end">
            <div>
              <p className="text-[rgba(240,237,230,0.3)] text-xs tracking-[0.15em] uppercase mb-1">Nam</p>
              <p className="text-[#f0ede6] text-sm">{project.year}</p>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#c8f63e] text-[#c8f63e] px-5 py-2 text-xs tracking-widest uppercase hover:bg-[#c8f63e] hover:text-[#080808] transition-all duration-300"
            >
              GitHub ?
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

