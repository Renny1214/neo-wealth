import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/AppLayout'
import { ClientOverviewPage } from '@/pages/ClientOverviewPage'
import { PortfolioDetailPage } from '@/pages/PortfolioDetailPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<ClientOverviewPage />} />
        <Route path="clients/:id" element={<PortfolioDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
