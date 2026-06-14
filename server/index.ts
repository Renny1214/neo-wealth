import { createApp } from './createApp.js'
import { SERVER_PORT } from './constants.js'

const app = createApp()
const server = app.listen(SERVER_PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Portfolio Pulse API running at http://localhost:${SERVER_PORT}`)
  }
})

server.on('error', (error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})

function shutdown(): void {
  server.close(() => process.exit(0))
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
