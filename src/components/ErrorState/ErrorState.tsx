import { Button } from '@/components/Button'
import styles from './ErrorState.module.css'

interface ErrorStateProps {
  message: string
  onRetry?: () => void
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className={styles.wrapper} role="alert">
      <p className={styles.message}>{message}</p>
      {onRetry ? (
        <Button variant="secondary" onClick={onRetry}>
          Retry
        </Button>
      ) : null}
    </div>
  )
}
