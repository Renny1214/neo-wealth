import type { ClientSummary } from '@/types'
import { ClientCard } from '@/components/ClientCard'
import styles from './ClientList.module.css'

interface ClientListProps {
  clients: ClientSummary[]
}

export function ClientList({ clients }: ClientListProps) {
  return (
    <ul className={styles.list}>
      {clients.map((client) => (
        <li key={client.id}>
          <ClientCard client={client} />
        </li>
      ))}
    </ul>
  )
}
