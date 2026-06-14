import { Card } from '@/components/Card'
import { ClientFilters } from '@/components/ClientFilters'
import { ClientList } from '@/components/ClientList'
import { ClientSortControls } from '@/components/ClientSortControls'
import { ErrorState } from '@/components/ErrorState'
import { LoadingState } from '@/components/LoadingState'
import { PageHeader } from '@/components/PageHeader'
import { useClientOverview } from '@/hooks/useClientOverview'
import { useClients } from '@/hooks/useClients'
import { getErrorMessage } from '@/utils/getErrorMessage'
import styles from './ClientOverviewPage.module.css'

export function ClientOverviewPage() {
  const { data, error, isLoading, refetch } = useClients()
  const clients = data?.clients ?? []
  const { sortBy, setSortBy, filter, setFilter, visibleClients } = useClientOverview(clients)

  if (isLoading) {
    return <LoadingState message="Loading client portfolios…" />
  }

  if (error) {
    return (
      <ErrorState
        message={getErrorMessage(error, 'Failed to load clients')}
        onRetry={() => void refetch()}
      />
    )
  }

  return (
    <section>
      <PageHeader
        title="Client Portfolio Overview"
        subtitle="Morning snapshot of assigned HNI client portfolios"
      />

      <div className={styles.toolbar}>
        <ClientFilters value={filter} onChange={setFilter} />
        <ClientSortControls value={sortBy} onChange={setSortBy} />
      </div>

      {visibleClients.length === 0 ? (
        <Card>
          <p className={styles.empty}>No clients match the selected filter.</p>
        </Card>
      ) : (
        <ClientList clients={visibleClients} />
      )}
    </section>
  )
}
