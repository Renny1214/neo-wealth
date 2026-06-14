import type { Request, Response } from 'express'
import type {
  ApiErrorBody,
  ClientsResponse,
  PerformanceResponse,
  PortfolioResponse,
  RebalanceRequest,
  RebalanceResponse,
} from '../types/index.js'
import { listClientSummaries } from '../services/clientService.js'
import { getPerformanceSeries } from '../services/performanceService.js'
import { getPortfolioDetail } from '../services/portfolioService.js'
import { reviewRebalance } from '../services/rebalanceService.js'
import { getRouteParam } from '../utils/routeParams.js'

export function getClients(_req: Request, res: Response<ClientsResponse>) {
  res.json({ clients: listClientSummaries() })
}

export function getPortfolio(req: Request, res: Response<PortfolioResponse | ApiErrorBody>) {
  const clientId = getRouteParam(req.params.id)
  const portfolio = getPortfolioDetail(clientId)

  if (!portfolio) {
    res.status(404).json({ message: `Portfolio not found for client ${clientId}` })
    return
  }

  res.json(portfolio)
}

export function getPerformance(req: Request, res: Response<PerformanceResponse | ApiErrorBody>) {
  const clientId = getRouteParam(req.params.id)
  const performance = getPerformanceSeries(clientId)

  if (!performance) {
    res.status(404).json({ message: `Performance not found for client ${clientId}` })
    return
  }

  res.json(performance)
}

function isRebalanceRequest(body: unknown): body is RebalanceRequest {
  return (
    typeof body === 'object' &&
    body !== null &&
    'action' in body &&
    (body as RebalanceRequest).action === 'reviewed'
  )
}

export function postRebalance(req: Request, res: Response<RebalanceResponse | ApiErrorBody>) {
  const clientId = getRouteParam(req.params.id)

  if (!isRebalanceRequest(req.body)) {
    res.status(400).json({ message: 'Invalid rebalance action' })
    return
  }

  const result = reviewRebalance(clientId)
  if (!result.ok) {
    const message =
      result.reason === 'client_not_found'
        ? `Client not found: ${clientId}`
        : `Portfolio not found for client ${clientId}`
    res.status(404).json({ message })
    return
  }

  res.json(result.data)
}
