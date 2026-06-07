import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { useCursor } from '../cursor/CustomCursor'

type Cubic = [number, number, number, number]
const E1: Cubic = [0.76, 0, 0.24, 1]   // easeInOutCubic
const E2: Cubic = [0.16, 1, 0.3, 1]    // easeOutExpo

const menuLinks = [
  { to: '/',       label: 'Home',     num: '01' },
  { to: '/work',   label: 'Projects', num: '02' },
  { to: '/about',  label: 'About',    num: '03' },
]

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/HSHIRO08' },
  { label: 'Facebook', href: 'https://www.facebook.com/hshiro08' },
  { label: 'YouTube',  href: 'https://www.youtube.com/@nhathoang434' },
]

// ─── Animation variants ─────────────────────────────────────────

// Layer 1: accent sweep — slides UP through the screen and exits top
const accentCurtainVariants: Variants = {
  initial: { y: '100%' },
  animate: {
    y: '-100%',
    transition: { duration: 0.75, ease: E1 },
  },
  exit: { y: '-100%', transition: { duration: 0 } },
}

// Layer 2: dark menu bg — follows behind the sweep, stays open
const menuBgVariants: Variants = {
  initial: { y: '100%' },
  animate: {
    y: '0%',
    transition: { duration: 0.65, delay: 0.08, ease: E1 },
  },
  exit: {
    y: '100%',
    transition: { duration: 0.65, ease: E1 },
  },
}

// Layer 1 on close: accent sweeps DOWN through screen
const accentCurtainCloseVariants: Variants = {
  initial: { y: '-100%' },
  animate: {
    y: '100%',
    transition: { duration: 0.75, delay: 0.05, ease: E1 },
  },
}

// Nav links: clip-path reveal from below, staggered
const linkContainerVariants: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
  exit:    { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}

const linkVariants: Variants = {
  initial: { y: '115%', opacity: 0 },
  animate: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.75, ease: E2 },
  },
  exit: {
    y: '80%',
    opacity: 0,
    transition: { duration: 0.35, ease: E1 },
  },
}

const metaVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: 0.55, ease: E2 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

// ─── Hamburger icon ────────────────────────────────────────────

function HamburgerIcon({ open, color = '#f0ede6' }: { open: boolean; color?: string }) {
  return (
    <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true">
      <motion.line
        x1="0" y1="2" x2="28" y2="2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={open
          ? { x1: 2, y1: 2, x2: 26, y2: 14, strokeWidth: 1.5 }
          : { x1: 0, y1: 2, x2: 28, y2: 2, strokeWidth: 1.5 }}
        transition={{ duration: 0.4, ease: E1 }}
      />
      <motion.line
        x1="0" y1="14" x2="20" y2="14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={open
          ? { x1: 2, y1: 14, x2: 26, y2: 2, strokeWidth: 1.5 }
          : { x1: 0, y1: 14, x2: 20, y2: 14, strokeWidth: 1.5 }}
        transition={{ duration: 0.4, ease: E1 }}
      />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const location = useLocation()
  const { setCursorState } = useCursor()

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 80) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on route change
  useEffect(() => { handleClose() }, [location.pathname])   // eslint-disable-line

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function handleClose() {
    if (!menuOpen) return
    setIsClosing(true)
    // Wait for exit animation then actually close
    setTimeout(() => {
      setMenuOpen(false)
      setIsClosing(false)
    }, 700)
  }

  function toggleMenu() {
    if (menuOpen) handleClose()
    else setMenuOpen(true)
  }

  const iconColor = menuOpen ? '#080808' : '#f0ede6'

  return (
    <>
      {/* ── Fixed Nav Bar ───────────────────────────── */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-8 md:px-14 h-16 md:h-20"
        animate={{
          backgroundColor: menuOpen
            ? 'rgba(8,8,8,0)'
            : scrolled
            ? 'rgba(8,8,8,0.92)'
            : 'rgba(8,8,8,0)',
          backdropFilter: (!menuOpen && scrolled) ? 'blur(14px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="relative z-10 transition-colors duration-300"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1.6rem',
            letterSpacing: '0.08em',
            color: menuOpen ? '#c8f63e' : '#f0ede6',
          }}
          onMouseEnter={() => setCursorState('hover')}
          onMouseLeave={() => setCursorState('default')}
        >
          HSHIRO08
        </Link>

        {/* Desktop quick links */}
        <ul className="hidden md:flex items-center gap-10 list-none absolute left-1/2 -translate-x-1/2">
          {menuLinks.slice(1).map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                    menuOpen ? 'opacity-0 pointer-events-none' :
                    isActive ? 'text-[#c8f63e]' : 'text-[rgba(240,237,230,0.7)] hover:text-[#f0ede6]'
                  }`
                }
                onMouseEnter={() => setCursorState('hover')}
                onMouseLeave={() => setCursorState('default')}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-[#c8f63e]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger — right side */}
        <button
          onClick={toggleMenu}
          className="relative z-10 flex items-center gap-3 group"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onMouseEnter={() => setCursorState('hover')}
          onMouseLeave={() => setCursorState('default')}
        >
          <motion.span
            className="hidden md:block text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300"
            animate={{ color: menuOpen ? '#080808' : '#f0ede6' }}
          >
            {menuOpen && !isClosing ? 'Close' : 'Menu'}
          </motion.span>
          <motion.div animate={{ color: iconColor }} transition={{ duration: 0.3 }}>
            <HamburgerIcon open={menuOpen && !isClosing} color={iconColor} />
          </motion.div>
        </button>
      </motion.nav>

      {/* ── Fullscreen Menu Overlay ─────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Layer 1: Accent sweep (passes through) */}
            {!isClosing ? (
              <motion.div
                key="accent-open"
                className="fixed inset-0 z-[55] pointer-events-none"
                style={{ backgroundColor: '#c8f63e' }}
                variants={accentCurtainVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            ) : (
              <motion.div
                key="accent-close"
                className="fixed inset-0 z-[56] pointer-events-none"
                style={{ backgroundColor: '#c8f63e' }}
                variants={accentCurtainCloseVariants}
                initial="initial"
                animate="animate"
              />
            )}

            {/* Layer 2: Dark menu background */}
            {!isClosing && (
              <motion.div
                key="menu-bg"
                className="fixed inset-0 z-[54] bg-[#080808] flex flex-col"
                variants={menuBgVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Menu content */}
                <div className="flex-1 container-fluid flex flex-col justify-center pt-20 pb-10">

                  {/* Nav links */}
                  <motion.ul
                    className="list-none mb-auto"
                    variants={linkContainerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {menuLinks.map(({ to, label, num }) => (
                      <li
                        key={to}
                        className="border-b border-[rgba(240,237,230,0.08)] overflow-hidden"
                      >
                        <motion.div variants={linkVariants}>
                          <Link
                            to={to}
                            onClick={handleClose}
                            className="group flex items-center justify-between py-5 md:py-6"
                            onMouseEnter={() => setCursorState('hover')}
                            onMouseLeave={() => setCursorState('default')}
                          >
                            {/* Number */}
                            <span className="text-[rgba(240,237,230,0.25)] text-xs tracking-[0.2em] w-10 shrink-0">
                              {num}
                            </span>

                            {/* Label */}
                            <span
                              className="flex-1 text-[#f0ede6] group-hover:text-[#c8f63e] transition-colors duration-300"
                              style={{
                                fontFamily: 'Bebas Neue, sans-serif',
                                fontSize: 'clamp(2.8rem, 9vw, 7rem)',
                                lineHeight: 1,
                                letterSpacing: '0.02em',
                                textTransform: 'uppercase',
                              }}
                            >
                              {label}
                            </span>

                            {/* Arrow */}
                            <motion.span
                              className="text-[rgba(240,237,230,0.2)] group-hover:text-[#c8f63e] text-2xl shrink-0 transition-colors duration-300"
                              animate={{}}
                              whileHover={{ x: 6 }}
                              aria-hidden="true"
                            >
                              ↗
                            </motion.span>
                          </Link>
                        </motion.div>
                      </li>
                    ))}
                  </motion.ul>

                  {/* Footer meta row */}
                  <motion.div
                    variants={metaVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12 pt-8 border-t border-[rgba(240,237,230,0.08)]"
                  >
                    {/* Contact */}
                    <div>
                      <p className="text-[rgba(240,237,230,0.3)] text-xs tracking-[0.18em] uppercase mb-3">
                        Contact
                      </p>
                      <a
                        href="mailto:mainhathoangevil@gmail.com"
                        className="text-[#f0ede6] text-sm hover:text-[#c8f63e] transition-colors"
                        onMouseEnter={() => setCursorState('hover')}
                        onMouseLeave={() => setCursorState('default')}
                      >
                        mainhathoangevil@gmail.com
                      </a>
                    </div>

                    {/* Social */}
                    <div className="flex gap-6">
                      {socialLinks.map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          className="text-[rgba(240,237,230,0.4)] text-xs tracking-[0.15em] uppercase hover:text-[#f0ede6] transition-colors"
                          onMouseEnter={() => setCursorState('hover')}
                          onMouseLeave={() => setCursorState('default')}
                        >
                          {label}
                        </a>
                      ))}
                    </div>

                    {/* Location */}
                    <p className="text-[rgba(240,237,230,0.25)] text-xs tracking-[0.12em]">
                      Based everywhere
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </>
  )
}

