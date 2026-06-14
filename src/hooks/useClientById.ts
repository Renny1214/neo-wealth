import { useClients } from '@/hooks/useClients'

export function useClientById(clientId: string) {
  const { data } = useClients()
  return data?.clients.find((client) => client.id === clientId)
}
