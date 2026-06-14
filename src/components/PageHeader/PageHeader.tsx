import type { ReactNode } from 'react'
import styles from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
  titleId?: string
  subtitle?: string
  action?: ReactNode
}

export function PageHeader({ title, titleId, subtitle, action }: PageHeaderProps) {
  return (
    <div className={styles.header}>
      <div>
        <h1 id={titleId} className={styles.title}>{title}</h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  )
}
