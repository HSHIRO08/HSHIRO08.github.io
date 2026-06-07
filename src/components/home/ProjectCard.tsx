import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { type Project } from '../../data/projects'
import { useCursor } from '../cursor/CustomCursor'
import { useParallax } from '../../hooks/useScrollAnimation'

interface ProjectCardProps {
  project: Project
  index?: number
  large?: boolean
}

export default function ProjectCard({ project, index = 0, large = false }: ProjectCardProps) {
  const imgRef = useRef<HTMLDivElement>(null)
  const { setCursorState } = useCursor()

  useParallax(imgRef as React.RefObject<Element>, large ? 60 : 40, [project.id])

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
    >
      <Link
        to={`/work/${project.id}`}
        className="group block"
        onMouseEnter={() => setCursorState('view')}
        onMouseLeave={() => setCursorState('default')}
        aria-label={`View ${project.title} project`}
      >
        {/* Image container */}
        <div
          className="img-cover relative mb-5"
          style={{ aspectRatio: large ? '4/3' : '3/4' }}
        >
          <div ref={imgRef} className="absolute inset-0">
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              width={large ? 800 : 600}
              height={large ? 600 : 800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/30 transition-colors duration-500" />

          {/* CTA arrow */}
          <motion.div
            className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-[#c8f63e] flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            style={{ scale: 0, opacity: 0 }}
          >
            <span className="text-[#080808] text-lg font-bold" aria-hidden="true">→</span>
          </motion.div>
          <motion.div
            className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-[#c8f63e] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"
          >
            <span className="text-[#080808] text-lg font-bold" aria-hidden="true">→</span>
          </motion.div>

          {/* Year badge */}
          <span className="absolute top-4 left-4 text-xs text-[rgba(240,237,230,0.6)] tracking-[0.15em]">
            {project.year}
          </span>
        </div>

        {/* Meta */}
        <div className="flex items-start justify-between gap-4">
          <div>
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-2">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-[10px] tracking-[0.15em] uppercase text-[rgba(240,237,230,0.4)] border border-[rgba(240,237,230,0.15)] px-2 py-0.5"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h3
              className="text-[#f0ede6] font-medium text-lg group-hover:text-[#c8f63e] transition-colors duration-300"
            >
              {project.title}
            </h3>
            <p className="text-[rgba(240,237,230,0.4)] text-sm mt-1">{project.client}</p>
          </div>
          <span
            className="shrink-0 mt-1 text-[rgba(240,237,230,0.3)] group-hover:text-[#c8f63e] transition-colors text-xl"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
