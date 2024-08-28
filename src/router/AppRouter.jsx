import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { LoginPage } from '../auth'
// import { CalendarPage } from '../calendar';
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

// const routersLogin = [
//     {
//         path: '/auth',
//         element: <AuthRoutes/>,
//         children: authRoutes
//     }
// ]

// const routerLogin = {
//     path: '/auth/*',
//     element: <LoginPage/>,
// };

// const routersCalendar = [
//     {
//         path: '/',
//         element: <CalendarRouter/>,
//         children: calendarRouter
//     }
// ]

// const routerCalendar = {
//     path: '/',
//     element: <CalendarPage/>,
// }

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