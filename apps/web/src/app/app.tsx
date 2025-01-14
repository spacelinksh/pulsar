import { ThemeProvider } from '@/shared/providers/theme-provider'
import { RootProvider } from '@/shared/providers/root-provider'
import { AppRoutes } from './routes'

export const App = () => {
  return (
    <RootProvider>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <AppRoutes />
      </ThemeProvider>
    </RootProvider>
  )
}
