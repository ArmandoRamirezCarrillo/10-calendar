import { Navigate, Outlet } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages/'

export const AuthRoutes = () => {
  return <Outlet/>
}

export const authRoutes = [
    {
        path: '/auth/login',
        element: <LoginPage/>
    },
    {
        path: '/auth/register',
        element: <RegisterPage/>
    },
    {
        path: 'auth/*',
        element: <Navigate to={'/auth/login'}/>
    }
]