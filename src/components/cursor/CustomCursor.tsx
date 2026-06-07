import { createContext, useContext, useState, useEffect, useRef, useCallback, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorState = 'default' | 'hover' | 'view'

interface CursorContextValue {
  setCursorState: (state: CursorState) => void
}

const CursorContext = createContext<CursorContextValue>({ setCursorState: () => {} })

export function useCursor() {
  return useContext(CursorContext)
}

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const [isVisible, setIsVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const followerX = useSpring(mouseX, { stiffness: 80, damping: 18, mass: 0.5 })
  const followerY = useSpring(mouseY, { stiffness: 80, damping: 18, mass: 0.5 })

  const rafRef = useRef<number | null>(null)
  const targetRef = useRef({ x: -100, y: -100 })

  const onMouseMove = useCallback((e: MouseEvent) => {
    targetRef.current = { x: e.clientX, y: e.clientY }
    if (!isVisible) setIsVisible(true)
  }, [isVisible])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', () => setIsVisible(() => false))
    window.addEventListener('mouseenter', () => setIsVisible(() => true))

    function animate() {
      mouseX.set(targetRef.current.x)
      mouseY.set(targetRef.current.y)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [mouseX, mouseY, onMouseMove])

  // Touch devices — don't show custom cursor
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) setIsTouch(true)
  }, [])

  const dotSize = cursorState === 'hover' || cursorState === 'view' ? 40 : 8
  const followerSize = cursorState === 'hover' || cursorState === 'view' ? 0 : 32

  if (isTouch) {
    return (
      <CursorContext.Provider value={{ setCursorState }}>
        {children}
      </CursorContext.Provider>
    )
  }

  return (
    <CursorContext.Provider value={{ setCursorState }}>
      {children}

      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ width: dotSize, height: dotSize }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="rounded-full bg-[#c8f63e] flex items-center justify-center"
          style={{ width: '100%', height: '100%' }}
          animate={{
            scale: cursorState === 'view' ? 1 : 1,
          }}
        >
          {cursorState === 'view' && (
            <span
              className="text-[#080808] font-sans font-medium"
              style={{ fontSize: '10px', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}
            >
              View
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Follower ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full border border-white/40"
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ width: followerSize, height: followerSize }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </CursorContext.Provider>
  )
}
