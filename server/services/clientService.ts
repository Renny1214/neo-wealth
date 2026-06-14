import type { ClientSummary } from '../../src/types/client.js'
import { getClientRecords, getPortfolioRecord } from '../data/dataStore.js'
import { analyzePortfolio } from './rebalancingEngine.js'

function toClientSummary(client: Omit<ClientSummary, 'requiresRebalance'>): ClientSummary {
  const portfolio = getPortfolioRecord(client.id)
  const analysis = portfolio
    ? analyzePortfolio(portfolio.allocation, portfolio.holdings)
    : { requiresRebalance: false }

  return {
    ...client,
    requiresRebalance: analysis.requiresRebalance,
  }
}

export function listClientSummaries(): ClientSummary[] {
  return getClientRecords().map(toClientSummary)
}
