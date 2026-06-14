import type { DriftItem, RebalanceRecommendation } from '@/types'
import { AlertBadge } from '@/components/AlertBadge'
import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { SectionTitle } from '@/components/SectionTitle'
import { Table } from '@/components/Table'
import { DRIFT_THRESHOLD_PP } from '@/constants/rebalancing'
import { recommendationColumns } from './recommendationColumns'
import styles from './RebalancingPanel.module.css'

interface RebalancingPanelProps {
  drifts: DriftItem[]
  recommendations: RebalanceRecommendation[]
  requiresRebalance: boolean
  rebalanceReviewed: boolean
  onMarkReviewed: () => void
  isPending: boolean
  errorMessage?: string
}

export function RebalancingPanel({
  drifts,
  recommendations,
  requiresRebalance,
  rebalanceReviewed,
  onMarkReviewed,
  isPending,
  errorMessage,
}: RebalancingPanelProps) {
  const showAlert = requiresRebalance && !rebalanceReviewed

  return (
    <div>
      <div className={styles.header}>
        <SectionTitle
          title="Rebalancing"
          subtitle="Suggested actions based on allocation drift"
        />
        <AlertBadge active={showAlert} />
      </div>

      {drifts.length === 0 ? (
        <p className={styles.message}>
          No allocation drift beyond the {DRIFT_THRESHOLD_PP}pp threshold.
        </p>
      ) : (
        <ul className={styles.driftList}>
          {drifts.map((drift) => (
            <li key={drift.assetClass}>
              <Badge tone={drift.status === 'overweight' ? 'warning' : 'danger'}>
                {drift.assetClass} {drift.status}
              </Badge>
              <span>
                {drift.current}% current vs {drift.target}% target
              </span>
            </li>
          ))}
        </ul>
      )}

      <Table
        caption="Suggested buy and sell actions by instrument"
        columns={recommendationColumns}
        rows={recommendations}
        getRowKey={(row, index) => `${row.action}-${row.instrument}-${index}`}
        emptyMessage="No rebalancing recommendations."
      />

      {errorMessage ? (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className={styles.actions}>
        {rebalanceReviewed ? (
          <Badge tone="success">Reviewed</Badge>
        ) : (
          <Button
            onClick={onMarkReviewed}
            disabled={!requiresRebalance || isPending}
          >
            {isPending ? 'Saving…' : 'Mark as Reviewed'}
          </Button>
        )}
      </div>
    </div>
  )
}
