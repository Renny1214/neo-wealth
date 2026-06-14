import type { NextFunction, Request, Response } from 'express'
import type { ApiErrorBody } from '../types/index.js'

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response<ApiErrorBody>,
  _next: NextFunction,
): void {
  if (error instanceof SyntaxError) {
    res.status(400).json({ message: 'Invalid JSON body' })
    return
  }

  res.status(500).json({ message: 'Internal server error' })
}
