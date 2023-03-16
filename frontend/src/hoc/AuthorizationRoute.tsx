// ** React
import { ReactNode, useEffect } from 'react'

// ** Next
import Router from 'next/router'

// ** App
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from 'src/configs/routes_config'
import { useUser } from '@/context/UserContext'

export default function AuthorizationRoute({ children }: { children: ReactNode }) {
  // ** Context
  const { authenticated, user } = useUser()

  const handleAuthRoutes = () => {
    const currentRoute = Router.pathname
    if (PRIVATE_ROUTES.find(privateRoute => privateRoute.startsWith('/*'))) {
      // all routes are private
      if (!PUBLIC_ROUTES.find(pRoute => pRoute === currentRoute) && authenticated === false) {
        window.location.assign('/login')
      }
    }
  }

  Router.events.on('routeChangeComplete', () => {
    handleAuthRoutes()
  })

  useEffect(() => {
    const currentRoute = Router.pathname

    if (authenticated === true && currentRoute.startsWith('/login')) {
      window.location.assign('/dashboard')
    }
    handleAuthRoutes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, user])

  return <>{children}</>
}
