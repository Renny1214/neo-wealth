export const API_BASE = import.meta.env.VITE_API_BASE ?? '/api'

export const endpoints = {
  clients: `${API_BASE}/clients`,
  portfolio: (clientId: string) => `${API_BASE}/clients/${clientId}/portfolio`,
  performance: (clientId: string) => `${API_BASE}/clients/${clientId}/performance`,
  rebalance: (clientId: string) => `${API_BASE}/clients/${clientId}/rebalance`,
} as const
