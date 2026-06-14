import type { AllocationItem } from '@/types'
import { Badge } from '@/components/Badge'
import type { TableColumn } from '@/components/Table'
import { DRIFT_THRESHOLD_PP } from '@/constants/rebalancing'
import { formatWeight } from '@/utils/portfolioFormatters'

function renderDriftCell(item: AllocationItem) {
  const drift = Number((item.currentPct - item.targetPct).toFixed(1))
  if (Math.abs(drift) <= DRIFT_THRESHOLD_PP) {
    return (
      <span>
        {drift > 0 ? '+' : ''}
        {drift.toFixed(1)}pp
      </span>
    )
  }

  const tone = drift > 0 ? 'warning' : 'danger'
  return (
    <Badge tone={tone}>
      {drift > 0 ? '+' : ''}
      {drift.toFixed(1)}pp
    </Badge>
  )
}

const allocationColumns: TableColumn<AllocationItem>[] = [
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

export { allocationColumns }
