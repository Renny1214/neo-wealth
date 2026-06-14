import { Link, useParams } from 'react-router-dom'
import { Card } from '@/components/Card'
import { PageHeader } from '@/components/PageHeader'

export function PortfolioDetailPage() {
  const { id = '' } = useParams()

  return (
    <section>
      <PageHeader
        title="Portfolio Detail"
        subtitle={`Client ID: ${id}`}
        action={<Link to="/">Back to overview</Link>}
      />
      <Card>
        <p>Portfolio charts and holdings will be implemented in Phase 4.</p>
      </Card>
    </section>
  )
}
