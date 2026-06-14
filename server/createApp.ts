import express, { type Express } from 'express'
import cors from 'cors'
import { ALLOWED_ORIGINS, API_PREFIX } from './constants.js'
import { errorHandler } from './middleware/errorHandler.js'
import { clientsRouter } from './routes/clients.js'
import { healthRouter } from './routes/health.js'
import { registerStaticRoutes } from './staticRoutes.js'

export function createApp(): Express {
  const app = express()

  app.use(cors({ origin: ALLOWED_ORIGINS }))
  app.use(express.json())
  app.use(API_PREFIX, createApiRouter())

  if (process.env.NODE_ENV === 'production') {
    registerStaticRoutes(app)
  }

  app.use(errorHandler)

  return app
}

function createApiRouter(): express.Router {
  const router = express.Router()

  router.use(healthRouter)
  router.use('/clients', clientsRouter)
  router.use((_req, res) => {
    res.status(404).json({ message: 'API route not found' })
  })

  return router
}
