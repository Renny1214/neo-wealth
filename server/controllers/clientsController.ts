import type { Request, Response } from 'express'
import type {
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

type ErrorBody = { message: string }

export function getClients(_req: Request, res: Response<ClientsResponse>) {
  res.json({ clients: listClientSummaries() })
}

export function getPortfolio(req: Request, res: Response<PortfolioResponse | ErrorBody>) {
  const clientId = getRouteParam(req.params.id)
  const portfolio = getPortfolioDetail(clientId)

  if (!portfolio) {
    res.status(404).json({ message: `Portfolio not found for client ${clientId}` })
    return
  }

  res.json(portfolio)
}

export function getPerformance(req: Request, res: Response<PerformanceResponse | ErrorBody>) {
  const clientId = getRouteParam(req.params.id)
  const performance = getPerformanceSeries(clientId)

  if (!performance) {
    res.status(404).json({ message: `Performance not found for client ${clientId}` })
    return
  }

  res.json(performance)
}

export function postRebalance(req: Request, res: Response<RebalanceResponse | ErrorBody>) {
  const clientId = getRouteParam(req.params.id)
  const body = req.body as RebalanceRequest

  if (body.action !== 'reviewed') {
    res.status(400).json({ message: 'Invalid rebalance action' })
    return
  }

  const result = reviewRebalance(clientId)
  if (!result) {
    res.status(404).json({ message: `Client not found: ${clientId}` })
    return
  }

  res.json(result)
}
