import type { DriftItem, Holding, RebalanceRecommendation } from '../../src/types/portfolio.js'

function getClassHoldings(holdings: Holding[], assetClass: DriftItem['assetClass']) {
  return holdings.filter((holding) => holding.assetClass === assetClass)
}

function getClassTotal(holdings: Holding[]): number {
  return holdings.reduce((sum, holding) => sum + holding.currentValue, 0)
}

function getPortfolioTotal(holdings: Holding[]): number {
  return getClassTotal(holdings)
}

export function buildRecommendations(
  drifts: DriftItem[],
  holdings: Holding[],
): RebalanceRecommendation[] {
  const portfolioTotal = getPortfolioTotal(holdings)
  if (portfolioTotal === 0) return []

  return drifts.flatMap((drift) => {
    const classHoldings = getClassHoldings(holdings, drift.assetClass)
    const classTotal = getClassTotal(classHoldings)
    if (classTotal === 0) return []

    const adjustmentAmount = portfolioTotal * (Math.abs(drift.drift) / 100)
    const action: RebalanceRecommendation['action'] =
      drift.status === 'overweight' ? 'sell' : 'buy'

    return classHoldings.map((holding) => {
      const share = holding.currentValue / classTotal
      const amountInr = Math.round(adjustmentAmount * share)
      return {
        action,
        instrument: holding.instrument,
        amountInr,
        reason: `${drift.assetClass} is ${drift.status} by ${Math.abs(drift.drift)}pp`,
      }
    })
  })
}
