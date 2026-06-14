import { endpoints } from './endpoints'
import { requestJson } from './httpClient'
import type {
  ClientsResponse,
  PerformanceResponse,
  PortfolioResponse,
  RebalanceRequest,
  RebalanceResponse,
} from '@/types'

export const clientApi = {
  getClients: (init?: RequestInit) => requestJson<ClientsResponse>(endpoints.clients, init),

  getPortfolio: (clientId: string, init?: RequestInit) =>
    requestJson<PortfolioResponse>(endpoints.portfolio(clientId), init),

  getPerformance: (clientId: string, init?: RequestInit) =>
    requestJson<PerformanceResponse>(endpoints.performance(clientId), init),

  markRebalanceReviewed: (clientId: string, body: RebalanceRequest) =>
    requestJson<RebalanceResponse>(endpoints.rebalance(clientId), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
}
