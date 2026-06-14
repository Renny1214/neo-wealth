import type { Currency } from '@/types'

export function formatAum(amount: number, currency: Currency): string {
  if (currency === 'INR') {
    if (amount >= 1e7) return `₹${(amount / 1e7).toFixed(2)} Cr`
    if (amount >= 1e5) return `₹${(amount / 1e5).toFixed(2)} L`
    return `₹${amount.toLocaleString('en-IN')}`
  }

  if (amount >= 1e6) return `$${(amount / 1e6).toFixed(2)}M`
  return `$${amount.toLocaleString('en-US')}`
}

export function formatPercent(value: number): string {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(1)}%`
}
