import { Link } from 'react-router-dom'
import type { ClientSummary } from '@/types'
import { AlertBadge } from '@/components/AlertBadge'
import { Card } from '@/components/Card'
import { RiskProfileBadge } from '@/components/RiskProfileBadge'
import { formatAum, formatPercent } from '@/utils/formatters'
import styles from './ClientCard.module.css'

interface ClientCardProps {
  client: ClientSummary
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <Link to={`/clients/${client.id}`} className={styles.link}>
      <Card className={styles.card}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.name}>{client.name}</h2>
            <p className={styles.id}>{client.id}</p>
          </div>
          <AlertBadge active={client.requiresRebalance} />
        </div>

        <dl className={styles.metrics}>
          <div className={styles.metric}>
            <dt>AUM</dt>
            <dd>{formatAum(client.aum.amount, client.aum.currency)}</dd>
          </div>
          <div className={styles.metric}>
            <dt>1M Return</dt>
            <dd className={styles.positive}>{formatPercent(client.returns.oneMonth)}</dd>
          </div>
          <div className={styles.metric}>
            <dt>YTD Return</dt>
            <dd className={styles.positive}>{formatPercent(client.returns.ytd)}</dd>
          </div>
          <div className={styles.metric}>
            <dt>Risk Profile</dt>
            <dd>
              <RiskProfileBadge profile={client.riskProfile} />
            </dd>
          </div>
        </dl>
      </Card>
    </Link>
  )
}
