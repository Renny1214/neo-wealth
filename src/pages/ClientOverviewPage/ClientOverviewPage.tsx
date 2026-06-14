import { Link } from 'react-router-dom'
import { Card } from '@/components/Card'
import { ErrorState } from '@/components/ErrorState'
import { LoadingState } from '@/components/LoadingState'
import { PageHeader } from '@/components/PageHeader'
import { useClients } from '@/hooks/useClients'
import styles from './ClientOverviewPage.module.css'

export function ClientOverviewPage() {
  const { data, error, isLoading, refetch } = useClients()

  if (isLoading) {
    return <LoadingState message="Loading client portfolios…" />
  }

  if (error) {
    return (
      <ErrorState
        message={error instanceof Error ? error.message : 'Failed to load clients'}
        onRetry={() => void refetch()}
      />
    )
  }

  const clients = data?.clients ?? []

  return (
    <section>
      <PageHeader
        title="Client Portfolio Overview"
        subtitle="Morning snapshot of assigned HNI client portfolios"
      />
      {clients.length === 0 ? (
        <Card>
          <p className={styles.empty}>No clients loaded yet. Mock data arrives in Phase 2.</p>
        </Card>
      ) : (
        <ul className={styles.list}>
          {clients.map((client) => (
            <li key={client.id}>
              <Link to={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
