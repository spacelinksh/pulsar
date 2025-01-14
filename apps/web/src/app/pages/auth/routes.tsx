import { Route, Routes } from 'react-router'

import { LoginRoutes } from './login/routes'

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path='login' element={<LoginRoutes />} />
    </Routes>
  )
}
