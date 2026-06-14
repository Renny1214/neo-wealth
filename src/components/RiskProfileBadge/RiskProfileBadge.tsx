import type { RiskProfile } from '@/types'
import { Badge } from '@/components/Badge'

const RISK_TONE: Record<RiskProfile, 'neutral' | 'success' | 'danger'> = {
  Conservative: 'success',
  Moderate: 'neutral',
  Aggressive: 'danger',
}

interface RiskProfileBadgeProps {
  profile: RiskProfile
}

export function RiskProfileBadge({ profile }: RiskProfileBadgeProps) {
  return <Badge tone={RISK_TONE[profile]}>{profile}</Badge>
}
