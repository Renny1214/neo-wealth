import type { AllocationItem, DriftItem, DriftStatus } from '../../src/types/portfolio.js'

export const DRIFT_THRESHOLD = 5

function toDriftStatus(drift: number): DriftStatus {
  return drift > 0 ? 'overweight' : 'underweight'
}

export function calculateDrifts(allocation: AllocationItem[]): DriftItem[] {
  return allocation.flatMap((item) => {
    const drift = Number((item.currentPct - item.targetPct).toFixed(1))
    if (Math.abs(drift) <= DRIFT_THRESHOLD) return []

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
