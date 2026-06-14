import { BrowserRouter } from 'react-router-dom'
import type { ReactNode } from 'react'
import { QueryProvider } from './QueryProvider'

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryProvider>
  )
}
