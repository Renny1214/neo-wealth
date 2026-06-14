import type { AllocationItem } from '@/types'
import { Badge } from '@/components/Badge'
import type { TableColumn } from '@/components/Table'
import { formatWeight } from '@/utils/portfolioFormatters'

const DRIFT_THRESHOLD = 5

function renderDriftCell(item: AllocationItem) {
  const drift = Number((item.currentPct - item.targetPct).toFixed(1))
  if (Math.abs(drift) <= DRIFT_THRESHOLD) {
    return <span>{drift > 0 ? '+' : ''}{drift.toFixed(1)}pp</span>
  }

  const tone = drift > 0 ? 'warning' : 'danger'
  return (
    <Badge tone={tone}>
      {drift > 0 ? '+' : ''}
      {drift.toFixed(1)}pp
    </Badge>
  )
}

export const allocationColumns: TableColumn<AllocationItem>[] = [
  {
    id: 'assetClass',
    header: 'Asset Class',
    cell: (row) => row.assetClass,
  },
  {
    id: 'current',
    header: 'Current',
    align: 'right',
    cell: (row) => formatWeight(row.currentPct),
  },
  {
    id: 'target',
    header: 'Target',
    align: 'right',
    cell: (row) => formatWeight(row.targetPct),
  },
  {
    id: 'drift',
    header: 'Drift',
    align: 'right',
    cell: renderDriftCell,
  },
]
