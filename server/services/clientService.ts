import type { ClientSummary } from '../../src/types/client.js'
import {
  getClientRecord,
  getClientRecords,
  getPortfolioRecord,
} from '../data/dataStore.js'
import { analyzePortfolio } from './rebalancingEngine.js'

export function listClientSummaries(): ClientSummary[] {
  return getClientRecords().map((client) => {
    const portfolio = getPortfolioRecord(client.id)
    const analysis = portfolio
      ? analyzePortfolio(portfolio.allocation, portfolio.holdings)
      : { requiresRebalance: false }

    return {
      ...client,
      requiresRebalance: analysis.requiresRebalance,
    }
  })
}

export function getClientSummary(clientId: string): ClientSummary | undefined {
  const client = getClientRecord(clientId)
  if (!client) return undefined

  const portfolio = getPortfolioRecord(clientId)
  const analysis = portfolio
    ? analyzePortfolio(portfolio.allocation, portfolio.holdings)
    : { requiresRebalance: false }

  return { ...client, requiresRebalance: analysis.requiresRebalance }
}
