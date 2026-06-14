import type { Holding } from '@/types'
import type { TableColumn } from '@/components/Table'
import {
  formatGainLossText,
  formatInr,
  formatWeight,
  getGainLossClass,
} from '@/utils/portfolioFormatters'
import styles from './holdingsColumns.module.css'

export const holdingsColumns: TableColumn<Holding>[] = [
  {
    id: 'instrument',
    header: 'Instrument',
    cell: (row) => row.instrument,
  },
  {
    id: 'assetClass',
    header: 'Asset Class',
    cell: (row) => row.assetClass,
  },
  {
    id: 'currentValue',
    header: 'Current Value',
    align: 'right',
    cell: (row) => formatInr(row.currentValue),
  },
  {
    id: 'gainLoss',
    header: 'Gain / Loss',
    align: 'right',
    cell: (row) => (
      <span className={styles[getGainLossClass(row.gainLoss.pct)]}>
        {formatGainLossText(row.gainLoss)}
      </span>
    ),
  },
  {
    id: 'weightPct',
    header: 'Weight',
    align: 'right',
    cell: (row) => formatWeight(row.weightPct),
  },
]
