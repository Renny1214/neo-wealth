import type { ClientSummary } from './client'
import type { PerformanceSeries, PortfolioDetail } from './portfolio'

export interface ClientsResponse {
  clients: ClientSummary[]
}

export interface ApiErrorBody {
  message: string
}

export type RebalanceAction = 'reviewed'

export interface RebalanceRequest {
  action: RebalanceAction
}

export interface RebalanceResponse {
  clientId: string
  rebalanceReviewed: boolean
}

export type PortfolioResponse = PortfolioDetail

export type PerformanceResponse = PerformanceSeries
