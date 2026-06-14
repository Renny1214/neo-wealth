import type { Request, Response } from 'express'
import { Router } from 'express'
import type {
  ClientsResponse,
  PerformanceResponse,
  PortfolioResponse,
  RebalanceRequest,
  RebalanceResponse,
} from '../types/index.js'
import { getRouteParam } from '../utils/routeParams.js'

export const clientsRouter = Router()

clientsRouter.get('/', (_req: Request, res: Response<ClientsResponse>) => {
  res.json({ clients: [] })
})

clientsRouter.get('/:id/portfolio', (req: Request, res: Response<PortfolioResponse | { message: string }>) => {
  const clientId = getRouteParam(req.params.id)
  res.status(404).json({ message: `Portfolio not found for client ${clientId}` })
})

clientsRouter.get('/:id/performance', (req: Request, res: Response<PerformanceResponse | { message: string }>) => {
  const clientId = getRouteParam(req.params.id)
  res.status(404).json({ message: `Performance not found for client ${clientId}` })
})

clientsRouter.post('/:id/rebalance', (req: Request, res: Response<RebalanceResponse | { message: string }>) => {
  const clientId = getRouteParam(req.params.id)
  const body = req.body as RebalanceRequest

  if (body.action !== 'reviewed') {
    res.status(400).json({ message: 'Invalid rebalance action' })
    return
  }

  res.json({ clientId, rebalanceReviewed: true })
})
