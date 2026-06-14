import { useQuery } from '@tanstack/react-query'
import { clientApi } from '@/api/clientApi'

export function useClients() {
  return useQuery({
    queryKey: ['clients'],
    queryFn: clientApi.getClients,
  })
}
