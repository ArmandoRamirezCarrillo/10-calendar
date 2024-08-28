import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from '../auth'
import { CalendarPage } from '../calendar';

const routerLogin = {
    path: '/auth/*',
    element: <LoginPage/>,
};

const routerCalendar = {
    path: '/',
    element: <CalendarPage/>,
}

export const AppRouter = () => {
    const authStatus = 'not-authenticated';

    const router = createBrowserRouter([
        authStatus === 'not-authenticated' ? routerLogin : routerCalendar
    ]);

    return (
    <>
        <RouterProvider router={router}/>
    </>
    )
}
