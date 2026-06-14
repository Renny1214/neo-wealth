import type { AssetClass } from '@/types'

const ASSET_CLASS_VARS: Record<AssetClass, string> = {
  Equities: '--chart-equities',
  Debt: '--chart-debt',
  Gold: '--chart-gold',
  'Real Estate': '--chart-real-estate',
  Alternatives: '--chart-alternatives',
}

const LINE_VARS = {
  portfolio: '--chart-line-portfolio',
  benchmark: '--chart-line-benchmark',
  grid: '--chart-grid',
} as const

function readThemeVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

export function getAssetClassColor(assetClass: AssetClass): string {
  return readThemeVar(ASSET_CLASS_VARS[assetClass])
}

export function getChartLineColor(key: keyof typeof LINE_VARS): string {
  return readThemeVar(LINE_VARS[key])
}
