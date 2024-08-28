import { Navigate, Outlet } from "react-router-dom"
import { CalendarPage } from ".."

export const CalendarRouter = () => {
  return <Outlet/>
}

export const calendarRouter = [
    {
        path: '/',
        element: <CalendarPage/>
    },
    {
        path: '/*',
        element: <Navigate to={'/'}/>
    }
]
