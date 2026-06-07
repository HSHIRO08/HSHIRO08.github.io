import { motion } from 'framer-motion'
import { type Project } from '../../data/projects'

interface CaseStudyProps {
  project: Project
}

const sections = [
  { key: 'challenge' as const, label: 'The Challenge' },
  { key: 'approach' as const, label: 'Our Approach' },
  { key: 'result' as const, label: 'The Result' },
]

export default function CaseStudy({ project }: CaseStudyProps) {
  return (
    <article className="py-24 md:py-36 bg-[#080808]">
      <div className="container-fluid">
        {sections.map(({ key, label }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-14 border-b border-[rgba(240,237,230,0.08)] last:border-b-0"
          >
            <div className="md:col-span-3">
              <span className="text-[rgba(240,237,230,0.3)] text-xs tracking-[0.2em] uppercase">
                0{i + 1} / {label}
              </span>
            </div>
            <p className="md:col-span-9 text-[rgba(240,237,230,0.75)] leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              {project.caseStudy[key]}
            </p>
          </motion.div>
        ))}
      </div>
    </article>
  )
}
