import express, { type Express } from 'express'
import cors from 'cors'
import { API_PREFIX } from './constants.js'
import { clientsRouter } from './routes/clients.js'

export function createApp(): Express {
  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(API_PREFIX, createApiRouter())

  return app
}

function createApiRouter(): express.Router {
  const router = express.Router()
  router.use('/clients', clientsRouter)
  return router
}
