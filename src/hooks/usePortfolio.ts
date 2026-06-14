import { useQuery } from '@tanstack/react-query'
import { clientApi } from '@/api/clientApi'

export function usePortfolio(clientId: string) {
  return useQuery({
    queryKey: ['portfolio', clientId],
    queryFn: () => clientApi.getPortfolio(clientId),
    enabled: Boolean(clientId),
  })
}
