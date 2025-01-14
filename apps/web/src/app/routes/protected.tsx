import { Suspense } from 'react'
import { Outlet, useLocation, Navigate } from 'react-router'

import MainLayout from '@/shared/layouts/main'
import { DashboardRoutes } from '../pages/app/dashboard/routes'
import { CustomersRoutes } from '../pages/app/customers/routes'
import { TransactionRoutes } from '../pages/app/transactions/routes'

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  const location = useLocation()

  const isAppRoute = location.pathname.startsWith('/app')

  return (
    <MainLayout>
      <Suspense>
        {isAppRoute && <DashboardRoutes />}
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    exact: true,
    children: [
      { path: 'customers/*', element: <CustomersRoutes /> },
      { path: 'wallet/*', element: <TransactionRoutes /> },
      { path: '*', element: <Navigate to='/app' /> },
    ],
  },
  { path: '*', element: <Navigate to='/app' /> },
]
