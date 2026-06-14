import type { AssetClass } from '@/types'

export const ASSET_CLASS_COLORS: Record<AssetClass, string> = {
  Equities: '#1d4ed8',
  Debt: '#059669',
  Gold: '#d97706',
  'Real Estate': '#7c3aed',
  Alternatives: '#db2777',
}

export const CHART_LINE_COLORS = {
  portfolio: '#1d4ed8',
  benchmark: '#94a3b8',
} as const
