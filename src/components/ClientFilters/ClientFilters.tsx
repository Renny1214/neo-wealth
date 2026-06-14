import type { ClientFilterValue } from '@/types'
import { Select } from '@/components/Select'
import { CLIENT_FILTER_OPTIONS } from '@/constants/clientOverview'

interface ClientFiltersProps {
  value: ClientFilterValue
  onChange: (value: ClientFilterValue) => void
}

export function ClientFilters({ value, onChange }: ClientFiltersProps) {
  return (
    <Select
      id="client-risk-filter"
      label="Risk Profile"
      value={value}
      options={CLIENT_FILTER_OPTIONS}
      onChange={onChange}
    />
  )
}
