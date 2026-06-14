import type { GainLoss } from '@/types'

export function formatInr(value: number): string {
  return `₹${value.toLocaleString('en-IN')}`
}

export function formatCompactInr(value: number): string {
  if (value >= 1e7) return `₹${(value / 1e7).toFixed(1)} Cr`
  if (value >= 1e5) return `₹${(value / 1e5).toFixed(1)} L`
  return formatInr(value)
}

export function formatWeight(value: number): string {
  return `${value.toFixed(1)}%`
}

export function formatGainLossText(gainLoss: GainLoss): string {
  const sign = gainLoss.pct >= 0 ? '+' : ''
  return `${formatInr(gainLoss.inr)} (${sign}${gainLoss.pct.toFixed(1)}%)`
}

export function formatChartDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-IN', {
    month: 'short',
    year: '2-digit',
  })
}

export function getGainLossClass(value: number): 'positive' | 'negative' {
  return value >= 0 ? 'positive' : 'negative'
}
