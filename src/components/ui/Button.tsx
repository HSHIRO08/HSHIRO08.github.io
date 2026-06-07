import { forwardRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button' }, ref) => {
    const base =
      'inline-flex items-center gap-2 font-medium tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-offset-4'

    const sizes: Record<string, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const variants: Record<string, string> = {
      primary: 'bg-[#c8f63e] text-[#080808] hover:bg-white',
      ghost: 'text-[#f0ede6] hover:text-[#c8f63e]',
      outline: 'border border-[rgba(240,237,230,0.3)] text-[#f0ede6] hover:border-[#c8f63e] hover:text-[#c8f63e]',
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
export default Button
