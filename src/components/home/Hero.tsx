import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import MarqueeText from '../ui/MarqueeText'

const headlineLines = ['Nhật', 'Hoàng', 'DEV']

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let animId: number
    let w = 0, h = 0

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COUNT = 80
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 246, 62, ${p.alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }

  const lineVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  }

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#080808]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,246,62,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Main headline */}
      <div className="relative flex-1 flex items-center container-fluid pt-32 pb-12">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-[#c8f63e]" aria-hidden="true" />
            <span className="text-[#c8f63e] text-xs tracking-[0.3em] uppercase font-medium">
              Full-Stack Developer ? Vietnam
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
          >
            {headlineLines.map((line, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <motion.h1
                  variants={lineVariants}
                  className="text-hero text-[#f0ede6] block"
                  style={{ lineHeight: 0.88 }}
                >
                  {i === 2 ? (
                    <span className="text-[#c8f63e]">{line}</span>
                  ) : (
                    line
                  )}
                </motion.h1>
              </div>
            ))}
          </motion.div>

          {/* Sub copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8 max-w-xl"
          >
            <p className="text-[rgba(240,237,230,0.55)] text-base leading-relaxed max-w-xs">
              Đang tập code, dang xây dựng. Từ AI đến Web đến Mobile ? <em>Dev mang lại niềm vui.</em>
            </p>
            <a
              href="#/work"
              className="shrink-0 border border-[#c8f63e] text-[#c8f63e] px-7 py-3 text-sm tracking-widest uppercase hover:bg-[#c8f63e] hover:text-[#080808] transition-all duration-300"
            >
              Xem Projects
            </a>
          </motion.div>

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {['React', 'TypeScript', 'C#', 'Python', 'Java', 'ASP.NET Core'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-[rgba(240,237,230,0.4)] border border-[rgba(240,237,230,0.12)] hover:border-[#c8f63e] hover:text-[#c8f63e] transition-colors"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* GitHub handle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-12 right-0 flex flex-col items-end gap-1 pr-8"
        >
          <span className="text-[rgba(240,237,230,0.3)] text-xs tracking-[0.2em] uppercase">GitHub</span>
          <a
            href="https://github.com/HSHIRO08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(240,237,230,0.15)] hover:text-[#c8f63e] transition-colors font-display"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3.5rem', lineHeight: 1 }}
          >
            HSHIRO08
          </a>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="relative border-t border-[rgba(240,237,230,0.08)] py-4">
        <MarqueeText
          text="React ? TypeScript ? C# ? ASP.NET Core ? Python ? Java ? Machine Learning ? React Native ? SQL Server"
          className="text-[rgba(240,237,230,0.2)] text-sm tracking-[0.1em] uppercase"
        />
      </div>
    </section>
  )
}


