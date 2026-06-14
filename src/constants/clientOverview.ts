import type { ClientFilterValue, ClientSortField } from '@/types'
import type { SelectOption } from '@/components/Select'

export const CLIENT_SORT_OPTIONS: SelectOption<ClientSortField>[] = [
  { value: 'aum', label: 'AUM (High to Low)' },
  { value: 'return1m', label: '1-Month Return' },
  { value: 'returnYtd', label: 'YTD Return' },
  { value: 'riskProfile', label: 'Risk Profile' },
]

export const CLIENT_FILTER_OPTIONS: SelectOption<ClientFilterValue>[] = [
  { value: 'all', label: 'All Profiles' },
  { value: 'Conservative', label: 'Conservative' },
  { value: 'Moderate', label: 'Moderate' },
  { value: 'Aggressive', label: 'Aggressive' },
]

export const DEFAULT_CLIENT_SORT: ClientSortField = 'aum'
export const DEFAULT_CLIENT_FILTER: ClientFilterValue = 'all'
