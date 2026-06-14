import { Badge } from '@/components/Badge'

interface AlertBadgeProps {
  active: boolean
}

export function AlertBadge({ active }: AlertBadgeProps) {
  if (!active) return null
  return <Badge tone="warning">Rebalance Required</Badge>
}
