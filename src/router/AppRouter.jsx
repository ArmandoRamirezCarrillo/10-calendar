import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { authRoutes, AuthRoutes } from '../auth/routes/AuthRoutes';
import { calendarRouter, CalendarRouter } from '../calendar/routes/CalendarRouter';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';

const AppRouterAuth = [
    {
        path: '/auth',
        element: <AuthRoutes/>,
        children: authRoutes
    },
    {
      path: '/',
      element: <Navigate to={'/auth/login'}/>
    },
]

const AppRouterCalendar = [
    {
        path: '/',
        element: <CalendarRouter/>,
        children: calendarRouter
    }
]

export const AppRouter = () => {
    const {status,checkAuthToken} = useAuthStore();
    // const authStatus = 'not-authenticated';
    
    useEffect(() => {
        checkAuthToken()
      }, [])
    
    if(status === 'cheking'){
        return (<h3>Cargando...</h3>)
    }

    const router = createBrowserRouter(
        status === 'not-authenticated' ? AppRouterAuth : AppRouterCalendar
    );

    return (
    <>
        <RouterProvider router={router}/>
    </>
    )
}