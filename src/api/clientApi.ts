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
  getClients: () => requestJson<ClientsResponse>(endpoints.clients),

  getPortfolio: (clientId: string) =>
    requestJson<PortfolioResponse>(endpoints.portfolio(clientId)),

  getPerformance: (clientId: string) =>
    requestJson<PerformanceResponse>(endpoints.performance(clientId)),

  markRebalanceReviewed: (clientId: string, body: RebalanceRequest) =>
    requestJson<RebalanceResponse>(endpoints.rebalance(clientId), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
}
