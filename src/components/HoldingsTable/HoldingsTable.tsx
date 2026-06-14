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
        columns={holdingsColumns}
        rows={holdings}
        getRowKey={(row) => `${row.instrument}-${row.assetClass}`}
      />
    </div>
  )
}
