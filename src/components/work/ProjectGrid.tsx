import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../../data/projects'
import ProjectCard from '../home/ProjectCard'
import FilterBar from './FilterBar'

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter))

  return (
    <div>
      {/* Filters */}
      <div className="mb-12">
        <FilterBar active={activeFilter} onChange={setActiveFilter} />
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-[rgba(240,237,230,0.4)] py-20 text-sm tracking-widest uppercase">
          No projects in this category yet.
        </p>
      )}
    </div>
  )
}
