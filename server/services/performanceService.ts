import type { PerformanceSeries } from '../../src/types/portfolio.js'
import { getPerformanceRecord } from '../data/dataStore.js'

export function getPerformanceSeries(clientId: string): PerformanceSeries | undefined {
  const record = getPerformanceRecord(clientId)
  if (!record) return undefined

  return {
    clientId,
    benchmarkLabel: record.benchmarkLabel,
    points: record.points,
  }
}
