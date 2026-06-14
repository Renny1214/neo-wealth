import type { AllocationItem, Holding, PerformancePoint } from '../../src/types/portfolio.js'
import type { AumAmount, ClientReturns, RiskProfile } from '../../src/types/client.js'

export interface ClientRecord {
  id: string
  name: string
  aum: AumAmount
  returns: ClientReturns
  riskProfile: RiskProfile
}

export interface PortfolioRecord {
  allocation: AllocationItem[]
  holdings: Holding[]
  rebalanceReviewed: boolean
}

export interface PerformanceRecord {
  benchmarkLabel: string
  points: PerformancePoint[]
}

export type PortfolioStore = Record<string, PortfolioRecord>
export type PerformanceStore = Record<string, PerformanceRecord>
