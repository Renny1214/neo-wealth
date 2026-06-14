import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express, { type Express } from 'express'

const distPath = path.join(fileURLToPath(new URL('.', import.meta.url)), '../../dist')

export function registerStaticRoutes(app: Express): void {
  app.use(express.static(distPath, { index: false }))

  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}
