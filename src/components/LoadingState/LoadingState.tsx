import styles from './LoadingState.module.css'

interface LoadingStateProps {
  message?: string
}

export function LoadingState({ message = 'Loading data…' }: LoadingStateProps) {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite" aria-busy="true">
      <span className={styles.spinner} aria-hidden="true" />
      <p>{message}</p>
    </div>
  )
}
