import { Outlet } from 'react-router-dom'
import styles from './AppLayout.module.css'

export function AppLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.topBar}>
        <span className={styles.brand}>Portfolio Pulse</span>
        <span className={styles.tagline}>Wealth Management Dashboard</span>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
