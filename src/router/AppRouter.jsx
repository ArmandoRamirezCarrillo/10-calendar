import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { authRoutes, AuthRoutes } from '../auth/routes/AuthRoutes';
import { calendarRouter, CalendarRouter } from '../calendar/routes/CalendarRouter';

const AppRouters = [
    {
        path: '/auth',
        element: <AuthRoutes/>,
        children: authRoutes
    },
    {
        path: '/',
        element: <CalendarRouter/>,
        children: calendarRouter
    }
]

export const AppRouter = () => {
    // const authStatus = 'not-authenticated';

    // const router = createBrowserRouter([
    //     authStatus === 'not-authenticated' ? routersLogin : routersCalendar
    // ]);

    const router = createBrowserRouter(AppRouters);

    return (
    <>
        <RouterProvider router={router}/>
    </>
    )
}