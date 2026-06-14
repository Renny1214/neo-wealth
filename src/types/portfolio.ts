export type AssetClass =
  | 'Equities'
  | 'Debt'
  | 'Gold'
  | 'Real Estate'
  | 'Alternatives'

export type DriftStatus = 'overweight' | 'underweight'

export interface AllocationItem {
  assetClass: AssetClass
  currentPct: number
  targetPct: number
}

export interface GainLoss {
  inr: number
  pct: number
}

export interface Holding {
  instrument: string
  assetClass: AssetClass
  currentValue: number
  gainLoss: GainLoss
  weightPct: number
}

export interface DriftItem {
  assetClass: AssetClass
  target: number
  current: number
  drift: number
  status: DriftStatus
}

export interface RebalanceRecommendation {
  action: 'buy' | 'sell'
  instrument: string
  amountInr: number
  reason: string
}

export interface PortfolioDetail {
  clientId: string
  allocation: AllocationItem[]
  holdings: Holding[]
  drifts: DriftItem[]
  recommendations: RebalanceRecommendation[]
  rebalanceReviewed: boolean
  requiresRebalance: boolean
}

export interface PerformancePoint {
  date: string
  portfolioValue: number
  benchmarkValue: number
}

export interface PerformanceSeries {
  clientId: string
  benchmarkLabel: string
  points: PerformancePoint[]
}
