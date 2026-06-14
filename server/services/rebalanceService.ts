import type { RebalanceResponse } from '../../src/types/api.js'
import {
  getClientRecord,
  getPortfolioRecord,
  markRebalanceReviewed,
} from '../data/dataStore.js'

export type ReviewRebalanceResult =
  | { ok: true; data: RebalanceResponse }
  | { ok: false; reason: 'client_not_found' | 'portfolio_not_found' }

export function reviewRebalance(clientId: string): ReviewRebalanceResult {
  if (!getClientRecord(clientId)) {
    return { ok: false, reason: 'client_not_found' }
  }

  if (!getPortfolioRecord(clientId)) {
    return { ok: false, reason: 'portfolio_not_found' }
  }

  markRebalanceReviewed(clientId)
  return { ok: true, data: { clientId, rebalanceReviewed: true } }
}
