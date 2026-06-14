import type { AllocationItem, DriftItem, Holding, RebalanceRecommendation } from '../../src/types/portfolio.js'
import { calculateDrifts, hasRebalanceDrift } from './driftCalculator.js'
import { buildRecommendations } from './recommendationBuilder.js'

export interface RebalanceAnalysis {
  drifts: DriftItem[]
  recommendations: RebalanceRecommendation[]
  requiresRebalance: boolean
}

export function analyzePortfolio(
  allocation: AllocationItem[],
  holdings: Holding[],
): RebalanceAnalysis {
  const drifts = calculateDrifts(allocation)
  const recommendations = buildRecommendations(drifts, holdings)

  return {
    drifts,
    recommendations,
    requiresRebalance: hasRebalanceDrift(drifts),
  }
}
