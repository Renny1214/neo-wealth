export const SERVER_PORT = Number(process.env.PORT) || 3001

export const API_PREFIX = '/api'

export const ALLOWED_ORIGINS =
  process.env.ALLOWED_ORIGINS?.split(',').map((origin) => origin.trim()) ??
  ['http://localhost:5173']
