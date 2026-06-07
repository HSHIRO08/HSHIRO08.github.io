import { Link } from 'react-router-dom'
import { useCursor } from '../cursor/CustomCursor'
import { getLenis } from '../../hooks/useLenis'

const socials = [
  { label: 'GitHub',    href: 'https://github.com/HSHIRO08' },
  { label: 'Facebook',  href: 'https://www.facebook.com/hshiro08' },
  { label: 'YouTube',   href: 'https://www.youtube.com/@nhathoang434' },
]

const cols = [
  {
    title: 'Điều hướng',
    links: [
      { label: 'Trang chủ', to: '/' },
      { label: 'Projects',  to: '/work' },
      { label: 'About',     to: '/about' },
    ],
  },
  {
    title: 'Tech Stack',
    links: [
      { label: 'React + TypeScript', to: '/work' },
      { label: 'C# ASP.NET Core',   to: '/work' },
      { label: 'Python ML',         to: '/work' },
      { label: 'React Native',      to: '/work' },
    ],
  },
]

export default function Footer() {
  const { setCursorState } = useCursor()

  function scrollTop() {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { duration: 1.8 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#080808] border-t border-[rgba(240,237,230,0.08)] pt-20 pb-10">
      <div className="container-fluid">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <Link
              to="/"
              className="block mb-6 text-[#f0ede6] hover:text-[#c8f63e] transition-colors"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2.2rem', letterSpacing: '0.08em' }}
              onMouseEnter={() => setCursorState('hover')}
              onMouseLeave={() => setCursorState('default')}
            >
              HSHIRO08
            </Link>
            <p className="text-[rgba(240,237,230,0.5)] text-sm leading-relaxed mb-6">
              Nhật Hoàng - Full-Stack Developer đang tập code và xây dựng những thứ mới.
              <br />Vietnam 
            </p>
            <a
              href="mailto:mainhathoangevil@gmail.com"
              className="text-[#f0ede6] text-sm tracking-wide hover:text-[#c8f63e] transition-colors"
              onMouseEnter={() => setCursorState('hover')}
              onMouseLeave={() => setCursorState('default')}
            >
              mainhathoangevil@gmail.com
            </a>
          </div>

          {/* Nav columns */}
          <div className="flex gap-16">
            {cols.map((col) => (
              <div key={col.title}>
                <p className="text-[rgba(240,237,230,0.35)] text-xs tracking-[0.2em] uppercase mb-5">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-3 list-none">
                  {col.links.map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="text-[rgba(240,237,230,0.65)] text-sm hover:text-[#f0ede6] transition-colors"
                        onMouseEnter={() => setCursorState('hover')}
                        onMouseLeave={() => setCursorState('default')}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div>
            <p className="text-[rgba(240,237,230,0.35)] text-xs tracking-[0.2em] uppercase mb-5">
              K?t n?i
            </p>
            <ul className="flex flex-col gap-3 list-none">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgba(240,237,230,0.65)] text-sm hover:text-[#f0ede6] transition-colors"
                    onMouseEnter={() => setCursorState('hover')}
                    onMouseLeave={() => setCursorState('default')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[rgba(240,237,230,0.08)] pt-8">
          <p className="text-[rgba(240,237,230,0.3)] text-xs">
            - {new Date().getFullYear()} Nhật Hoàng - HSHIRO08 - Built with React + Vite + Framer Motion
          </p>
          <button
            onClick={scrollTop}
            className="text-[rgba(240,237,230,0.5)] text-xs tracking-[0.15em] uppercase hover:text-[#c8f63e] transition-colors flex items-center gap-2"
            onMouseEnter={() => setCursorState('hover')}
            onMouseLeave={() => setCursorState('default')}
          >
            Về đầu trang
            <span aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </footer>
  )
}
