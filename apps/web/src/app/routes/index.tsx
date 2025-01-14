import { useRoutes } from 'react-router'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'
import { useAuth } from '@/shared/hooks/use-auth'

export const AppRoutes = () => {
  const { user } = useAuth()

  const routes = user ? protectedRoutes : publicRoutes
  const element = useRoutes([...routes])

  return <>{element}</>
}
