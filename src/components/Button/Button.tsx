import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
