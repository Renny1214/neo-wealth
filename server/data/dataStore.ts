import clientsSeed from './clients.json'
import portfoliosSeed from './portfolios.json'
import performanceSeed from './performance.json'
import type {
  ClientRecord,
  PerformanceRecord,
  PerformanceStore,
  PortfolioRecord,
  PortfolioStore,
} from './types.js'

const portfolioSeed = portfoliosSeed as PortfolioStore
const performanceData = performanceSeed as PerformanceStore

const portfolios: PortfolioStore = structuredClone(portfolioSeed)

export function getClientRecords(): ClientRecord[] {
  return clientsSeed as ClientRecord[]
}

export function getClientRecord(clientId: string): ClientRecord | undefined {
  return getClientRecords().find((client) => client.id === clientId)
}

export function getPortfolioRecord(clientId: string): PortfolioRecord | undefined {
  return portfolios[clientId]
}

export function getPerformanceRecord(clientId: string): PerformanceRecord | undefined {
  return performanceData[clientId]
}

export function markRebalanceReviewed(clientId: string): boolean {
  const portfolio = portfolios[clientId]
  if (!portfolio) return false
  portfolio.rebalanceReviewed = true
  return true
}
