import type { ReactNode } from 'react'
import styles from './Badge.module.css'

type BadgeTone = 'neutral' | 'warning' | 'success' | 'danger'

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
}

export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>
}
