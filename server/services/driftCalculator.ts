import type { AllocationItem, DriftItem, DriftStatus } from '../../src/types/portfolio.js'
import { DRIFT_THRESHOLD_PP } from '../../src/constants/rebalancing.js'

function toDriftStatus(drift: number): DriftStatus {
  return drift > 0 ? 'overweight' : 'underweight'
}

export function calculateDrifts(allocation: AllocationItem[]): DriftItem[] {
  return allocation.flatMap((item) => {
    const drift = Number((item.currentPct - item.targetPct).toFixed(1))
    if (Math.abs(drift) <= DRIFT_THRESHOLD_PP) return []

    return [{
      assetClass: item.assetClass,
      target: item.targetPct,
      current: item.currentPct,
      drift,
      status: toDriftStatus(drift),
    }]
  })
}

export function hasRebalanceDrift(drifts: DriftItem[]): boolean {
  return drifts.length > 0
}
