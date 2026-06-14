import { useMutation, useQueryClient } from '@tanstack/react-query'
import { clientApi } from '@/api/clientApi'

export function useRebalanceReview(clientId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () =>
      clientApi.markRebalanceReviewed(clientId, { action: 'reviewed' }),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['portfolio', clientId] })
      void queryClient.invalidateQueries({ queryKey: ['clients'] })
    },
  })
}
