import { Route, Routes } from 'react-router'
import TransactionsList from './pages/transactions-list'

export const TransactionRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<TransactionsList />} />
    </Routes>
  )
}
