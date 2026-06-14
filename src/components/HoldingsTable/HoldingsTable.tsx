import type { Holding } from '@/types'
import { SectionTitle } from '@/components/SectionTitle'
import { Table } from '@/components/Table'
import { holdingsColumns } from './holdingsColumns'

interface HoldingsTableProps {
  holdings: Holding[]
}

export function HoldingsTable({ holdings }: HoldingsTableProps) {
  return (
    <div>
      <SectionTitle title="Holdings" subtitle="Instrument-level portfolio breakdown" />
      <Table
        caption="Portfolio holdings with values and weights"
        columns={holdingsColumns}
        rows={holdings}
        getRowKey={(row, index) => `${row.instrument}-${row.assetClass}-${index}`}
      />
    </div>
  )
}
