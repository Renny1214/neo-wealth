import { createApp } from './createApp.js'
import { SERVER_PORT } from './constants.js'

const app = createApp()

app.listen(SERVER_PORT, () => {
  console.log(`Portfolio Pulse API running at http://localhost:${SERVER_PORT}`)
})
