import { motion } from 'framer-motion'
import { categories } from '../../data/projects'
import { useCursor } from '../cursor/CustomCursor'

interface FilterBarProps {
  active: string
  onChange: (cat: string) => void
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  const { setCursorState } = useCursor()

  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories.map((cat) => {
        const isActive = cat === active
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`relative px-5 py-2 text-sm tracking-widest uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#c8f63e] ${
              isActive
                ? 'text-[#080808]'
                : 'text-[rgba(240,237,230,0.55)] hover:text-[#f0ede6] border border-[rgba(240,237,230,0.15)] hover:border-[rgba(240,237,230,0.4)]'
            }`}
            onMouseEnter={() => setCursorState('hover')}
            onMouseLeave={() => setCursorState('default')}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 bg-[#c8f63e]"
                style={{ zIndex: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
            {cat}
          </button>
        )
      })}
    </div>
  )
}
