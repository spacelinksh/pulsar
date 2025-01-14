import { Route, Routes } from 'react-router'
import CustomersList from './pages/customers-list'

export const CustomersRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CustomersList />} />
    </Routes>
  )
}
