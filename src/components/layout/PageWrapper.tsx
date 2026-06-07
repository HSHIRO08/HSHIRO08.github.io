import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

interface PageWrapperProps {
  children: ReactNode
  withFooter?: boolean
}

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

export default function PageWrapper({ children, withFooter = true }: PageWrapperProps) {
  return (
    <>
      <Navbar />
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>
      {withFooter && <Footer />}
    </>
  )
}
