import { useEffect, useRef } from 'react'
import { useMotionValue } from 'framer-motion'

export function useMousePosition() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    function onMove(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return { x, y }
}

export function useRawMousePosition() {
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function onMove(e: MouseEvent) {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return pos
}
