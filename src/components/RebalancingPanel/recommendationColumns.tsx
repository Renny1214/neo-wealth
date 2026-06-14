import type { RebalanceRecommendation } from '@/types'
import type { TableColumn } from '@/components/Table'
import { formatInr } from '@/utils/portfolioFormatters'
import { Badge } from '@/components/Badge'

export const recommendationColumns: TableColumn<RebalanceRecommendation>[] = [
  {
    id: 'action',
    header: 'Action',
    cell: (row) => (
      <Badge tone={row.action === 'buy' ? 'success' : 'danger'}>
        {row.action.toUpperCase()}
      </Badge>
    ),
  },
  {
    id: 'instrument',
    header: 'Instrument',
    cell: (row) => row.instrument,
  },
  {
    id: 'amountInr',
    header: 'Amount (INR)',
    align: 'right',
    cell: (row) => formatInr(row.amountInr),
  },
  {
    id: 'reason',
    header: 'Reason',
    cell: (row) => row.reason,
  },
]
