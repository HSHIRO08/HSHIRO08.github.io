import { Suspense, lazy } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { CursorProvider } from './components/cursor/CustomCursor'
import { useLenis } from './hooks/useLenis'
import './App.css'

const Home    = lazy(() => import('./pages/Home'))
const Work    = lazy(() => import('./pages/Work'))
const Project = lazy(() => import('./pages/Project'))
const About   = lazy(() => import('./pages/About'))

function PageFallback() {
  return (
    <div className="min-h-[100svh] bg-[#080808] flex items-center justify-center">
      <div className="w-6 h-6 border border-[#c8f63e] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  useLenis()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/"          element={<Suspense fallback={<PageFallback />}><Home /></Suspense>} />
        <Route path="/work"      element={<Suspense fallback={<PageFallback />}><Work /></Suspense>} />
        <Route path="/work/:id"  element={<Suspense fallback={<PageFallback />}><Project /></Suspense>} />
        <Route path="/about"     element={<Suspense fallback={<PageFallback />}><About /></Suspense>} />
        <Route path="*"          element={<Suspense fallback={<PageFallback />}><Home /></Suspense>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HashRouter>
      <CursorProvider>
        <AnimatedRoutes />
      </CursorProvider>
    </HashRouter>
  )
}
