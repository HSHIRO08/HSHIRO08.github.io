import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function CountUp({
  end,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const hasStarted = useRef(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!inView || hasStarted.current) return
    hasStarted.current = true

    if (prefersReduced) {
      if (ref.current) ref.current.textContent = `${prefix}${end}${suffix}`
      return
    }

    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * end)
      if (ref.current) ref.current.textContent = `${prefix}${current}${suffix}`
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
