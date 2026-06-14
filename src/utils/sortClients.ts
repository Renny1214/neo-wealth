import type { ClientFilterValue, ClientSortField, ClientSummary, RiskProfile } from '@/types'

const RISK_ORDER: Record<RiskProfile, number> = {
  Conservative: 0,
  Moderate: 1,
  Aggressive: 2,
}

export function filterClients(
  clients: ClientSummary[],
  filter: ClientFilterValue,
): ClientSummary[] {
  if (filter === 'all') return clients
  return clients.filter((client) => client.riskProfile === filter)
}

export function sortClients(
  clients: ClientSummary[],
  sortBy: ClientSortField,
): ClientSummary[] {
  const sorted = [...clients]

  sorted.sort((left, right) => {
    switch (sortBy) {
      case 'aum':
        return right.aum.amount - left.aum.amount
      case 'return1m':
        return right.returns.oneMonth - left.returns.oneMonth
      case 'returnYtd':
        return right.returns.ytd - left.returns.ytd
      case 'riskProfile':
        return RISK_ORDER[right.riskProfile] - RISK_ORDER[left.riskProfile]
      default:
        return 0
    }
  })

  return sorted
}

export function applyClientOverviewQuery(
  clients: ClientSummary[],
  filter: ClientFilterValue,
  sortBy: ClientSortField,
): ClientSummary[] {
  return sortClients(filterClients(clients, filter), sortBy)
}
