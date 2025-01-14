import LoginForm from './pages/login-form'

import AuthLayout from '@/shared/layouts/auth'

export const LoginRoutes = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}
