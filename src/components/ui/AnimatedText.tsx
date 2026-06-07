import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
  once?: boolean
}

export default function AnimatedText({
  text,
  className = '',
  as: Tag = 'h2',
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-10% 0px' })
  const controls = useAnimation()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      controls.set({ opacity: 1, y: 0 })
      return
    }
    if (inView) controls.start('visible')
  }, [inView, controls])

  const lines = text.split('\n')

  return (
    <div ref={ref} aria-label={text}>
      {lines.map((line, li) => (
        <div key={li} style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '110%', opacity: 0 }}
            animate={controls}
            variants={{
              visible: { y: 0, opacity: 1 },
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + li * 0.12,
            }}
          >
            <Tag className={className} style={{ margin: 0 }}>
              {line}
            </Tag>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
