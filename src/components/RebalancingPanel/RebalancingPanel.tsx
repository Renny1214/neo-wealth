import type { DriftItem, RebalanceRecommendation } from '@/types'
import { AlertBadge } from '@/components/AlertBadge'
import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { SectionTitle } from '@/components/SectionTitle'
import { Table } from '@/components/Table'
import { recommendationColumns } from './recommendationColumns'
import styles from './RebalancingPanel.module.css'

interface RebalancingPanelProps {
  drifts: DriftItem[]
  recommendations: RebalanceRecommendation[]
  requiresRebalance: boolean
  rebalanceReviewed: boolean
  onMarkReviewed: () => void
  isPending: boolean
}

export function RebalancingPanel({
  drifts,
  recommendations,
  requiresRebalance,
  rebalanceReviewed,
  onMarkReviewed,
  isPending,
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
        <p className={styles.message}>No allocation drift beyond the 5pp threshold.</p>
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
        columns={recommendationColumns}
        rows={recommendations}
        getRowKey={(row) => `${row.action}-${row.instrument}`}
        emptyMessage="No rebalancing recommendations."
      />

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
