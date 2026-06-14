import { useQuery } from '@tanstack/react-query'
import { clientApi } from '@/api/clientApi'

export function usePerformance(clientId: string) {
  return useQuery({
    queryKey: ['performance', clientId],
    queryFn: () => clientApi.getPerformance(clientId),
    enabled: Boolean(clientId),
  })
}
