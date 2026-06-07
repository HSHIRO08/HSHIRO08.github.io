import { Link } from 'react-router-dom'
import { type Project } from '../../data/projects'
import { useCursor } from '../cursor/CustomCursor'

interface ProjectNavProps {
  prev: Project | null
  next: Project | null
}

export default function ProjectNav({ prev, next }: ProjectNavProps) {
  const { setCursorState } = useCursor()

  return (
    <nav
      className="border-t border-[rgba(240,237,230,0.08)] bg-[#080808]"
      aria-label="Project navigation"
    >
      <div className="grid grid-cols-2">
        {/* Prev */}
        <div className="border-r border-[rgba(240,237,230,0.08)]">
          {prev ? (
            <Link
              to={`/work/${prev.id}`}
              className="group block p-10 md:p-14 hover:bg-[#0d0d0d] transition-colors"
              onMouseEnter={() => setCursorState('view')}
              onMouseLeave={() => setCursorState('default')}
            >
              <p className="text-[rgba(240,237,230,0.3)] text-xs tracking-[0.18em] uppercase mb-4 flex items-center gap-2">
                <span aria-hidden="true">←</span> Previous
              </p>
              <div className="img-cover mb-4" style={{ aspectRatio: '16/9', maxWidth: '280px' }}>
                <img
                  src={prev.thumbnail}
                  alt={prev.title}
                  loading="lazy"
                  width={280}
                  height={158}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-[#f0ede6] font-medium group-hover:text-[#c8f63e] transition-colors">
                {prev.title}
              </h3>
            </Link>
          ) : (
            <div className="p-10 md:p-14" />
          )}
        </div>

        {/* Next */}
        <div>
          {next ? (
            <Link
              to={`/work/${next.id}`}
              className="group block p-10 md:p-14 text-right hover:bg-[#0d0d0d] transition-colors"
              onMouseEnter={() => setCursorState('view')}
              onMouseLeave={() => setCursorState('default')}
            >
              <p className="text-[rgba(240,237,230,0.3)] text-xs tracking-[0.18em] uppercase mb-4 flex items-center justify-end gap-2">
                Next <span aria-hidden="true">→</span>
              </p>
              <div className="img-cover mb-4 ml-auto" style={{ aspectRatio: '16/9', maxWidth: '280px' }}>
                <img
                  src={next.thumbnail}
                  alt={next.title}
                  loading="lazy"
                  width={280}
                  height={158}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-[#f0ede6] font-medium group-hover:text-[#c8f63e] transition-colors">
                {next.title}
              </h3>
            </Link>
          ) : (
            <div className="p-10 md:p-14" />
          )}
        </div>
      </div>
    </nav>
  )
}
