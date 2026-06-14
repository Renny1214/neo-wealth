import type { RebalanceResponse } from '../../src/types/api.js'
import { getClientRecord, markRebalanceReviewed } from '../data/dataStore.js'

export function reviewRebalance(clientId: string): RebalanceResponse | undefined {
  const client = getClientRecord(clientId)
  if (!client) return undefined

  const updated = markRebalanceReviewed(clientId)
  if (!updated) return undefined

  return { clientId, rebalanceReviewed: true }
}
