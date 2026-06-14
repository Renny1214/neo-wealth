import type { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ')
  return <article className={classes}>{children}</article>
}
