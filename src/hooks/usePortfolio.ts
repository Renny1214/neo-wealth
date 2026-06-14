import { useQuery } from '@tanstack/react-query'
import { clientApi } from '@/api/clientApi'

export function usePortfolio(clientId: string) {
  return useQuery({
    queryKey: ['portfolio', clientId],
    queryFn: ({ signal }) => clientApi.getPortfolio(clientId, { signal }),
    enabled: Boolean(clientId),
  })
}
