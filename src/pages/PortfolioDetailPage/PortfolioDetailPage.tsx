import { useParams } from 'react-router-dom'
import { AllocationComparison } from '@/components/AllocationComparison'
import { AssetAllocationChart } from '@/components/AssetAllocationChart'
import { BackLink } from '@/components/BackLink'
import { Card } from '@/components/Card'
import { ErrorState } from '@/components/ErrorState'
import { HoldingsTable } from '@/components/HoldingsTable'
import { LoadingState } from '@/components/LoadingState'
import { PageHeader } from '@/components/PageHeader'
import { PerformanceChart } from '@/components/PerformanceChart'
import { RebalancingPanel } from '@/components/RebalancingPanel'
import { useClientById } from '@/hooks/useClientById'
import { usePerformance } from '@/hooks/usePerformance'
import { usePortfolio } from '@/hooks/usePortfolio'
import { useRebalanceReview } from '@/hooks/useRebalanceReview'
import styles from './PortfolioDetailPage.module.css'

export function PortfolioDetailPage() {
  const { id = '' } = useParams()
  const client = useClientById(id)
  const portfolioQuery = usePortfolio(id)
  const performanceQuery = usePerformance(id)
  const rebalanceReview = useRebalanceReview(id)

  const isLoading = portfolioQuery.isLoading || performanceQuery.isLoading
  const error = portfolioQuery.error ?? performanceQuery.error

  if (isLoading) {
    return <LoadingState message="Loading portfolio detail…" />
  }

  if (error) {
    return (
      <ErrorState
        message={error instanceof Error ? error.message : 'Failed to load portfolio'}
        onRetry={() => {
          void portfolioQuery.refetch()
          void performanceQuery.refetch()
        }}
      />
    )
  }

  const portfolio = portfolioQuery.data
  const performance = performanceQuery.data

  if (!portfolio || !performance) {
    return <ErrorState message={`Portfolio not found for client ${id}`} />
  }

  return (
    <section>
      <PageHeader
        title={client?.name ?? 'Portfolio Detail'}
        subtitle={id}
        action={<BackLink />}
      />

      <div className={styles.grid}>
        <Card>
          <AssetAllocationChart allocation={portfolio.allocation} />
        </Card>
        <Card>
          <AllocationComparison allocation={portfolio.allocation} />
        </Card>
        <Card className={styles.fullWidth}>
          <PerformanceChart series={performance} />
        </Card>
        <Card className={styles.fullWidth}>
          <HoldingsTable holdings={portfolio.holdings} />
        </Card>
        <Card className={styles.fullWidth}>
          <RebalancingPanel
            drifts={portfolio.drifts}
            recommendations={portfolio.recommendations}
            requiresRebalance={portfolio.requiresRebalance}
            rebalanceReviewed={portfolio.rebalanceReviewed}
            isPending={rebalanceReview.isPending}
            onMarkReviewed={() => rebalanceReview.mutate()}
          />
        </Card>
      </div>
    </section>
  )
}
