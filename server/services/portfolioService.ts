import type { PortfolioDetail } from '../../src/types/portfolio.js'
import { getPortfolioRecord } from '../data/dataStore.js'
import { analyzePortfolio } from './rebalancingEngine.js'

export function getPortfolioDetail(clientId: string): PortfolioDetail | undefined {
  const portfolio = getPortfolioRecord(clientId)
  if (!portfolio) return undefined

  const analysis = analyzePortfolio(portfolio.allocation, portfolio.holdings)

  return {
    clientId,
    allocation: portfolio.allocation,
    holdings: portfolio.holdings,
    drifts: analysis.drifts,
    recommendations: analysis.recommendations,
    rebalanceReviewed: portfolio.rebalanceReviewed,
    requiresRebalance: analysis.requiresRebalance,
  }
}
