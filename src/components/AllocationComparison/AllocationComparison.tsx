import type { AllocationItem } from '@/types'
import { SectionTitle } from '@/components/SectionTitle'
import { Table } from '@/components/Table'
import { allocationColumns } from './allocationColumns'

interface AllocationComparisonProps {
  allocation: AllocationItem[]
}

export function AllocationComparison({ allocation }: AllocationComparisonProps) {
  return (
    <div>
      <SectionTitle
        title="Target vs Current"
        subtitle="Allocation drift by asset class"
      />
      <Table
        columns={allocationColumns}
        rows={allocation}
        getRowKey={(row) => row.assetClass}
      />
    </div>
  )
}
