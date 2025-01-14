import { Route } from 'react-router'

import { Routes } from 'react-router'
import { Board } from './pages/board'

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Board />} />
    </Routes>
  )
}
