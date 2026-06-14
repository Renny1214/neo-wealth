import { useMemo, useState } from 'react'
import type { ClientFilterValue, ClientSortField, ClientSummary } from '@/types'
import {
  DEFAULT_CLIENT_FILTER,
  DEFAULT_CLIENT_SORT,
} from '@/constants/clientOverview'
import { applyClientOverviewQuery } from '@/utils/sortClients'

export function useClientOverview(clients: ClientSummary[]) {
  const [sortBy, setSortBy] = useState<ClientSortField>(DEFAULT_CLIENT_SORT)
  const [filter, setFilter] = useState<ClientFilterValue>(DEFAULT_CLIENT_FILTER)

  const visibleClients = useMemo(
    () => applyClientOverviewQuery(clients, filter, sortBy),
    [clients, filter, sortBy],
  )

  return {
    sortBy,
    setSortBy,
    filter,
    setFilter,
    visibleClients,
  }
}
