import { Router } from 'express'
import {
  getClients,
  getPerformance,
  getPortfolio,
  postRebalance,
} from '../controllers/clientsController.js'

export const clientsRouter = Router()

clientsRouter.get('/', getClients)
clientsRouter.get('/:id/portfolio', getPortfolio)
clientsRouter.get('/:id/performance', getPerformance)
clientsRouter.post('/:id/rebalance', postRebalance)
