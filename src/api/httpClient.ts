import type { ApiErrorBody } from '@/types'

export class ApiError extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export async function requestJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init)

  if (!response.ok) {
    const errorBody = (await response.json().catch(() => null)) as ApiErrorBody | null
    throw new ApiError(response.status, errorBody?.message ?? response.statusText)
  }

  return response.json() as Promise<T>
}
