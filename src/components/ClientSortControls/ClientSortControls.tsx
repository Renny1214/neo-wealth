import type { ClientSortField } from '@/types'
import { Select } from '@/components/Select'
import { CLIENT_SORT_OPTIONS } from '@/constants/clientOverview'

interface ClientSortControlsProps {
  value: ClientSortField
  onChange: (value: ClientSortField) => void
}

export function ClientSortControls({ value, onChange }: ClientSortControlsProps) {
  return (
    <Select
      id="client-sort"
      label="Sort By"
      value={value}
      options={CLIENT_SORT_OPTIONS}
      onChange={onChange}
    />
  )
}
