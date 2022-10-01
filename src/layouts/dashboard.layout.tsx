import { Footer, Navbar } from 'components'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
    return <>
        <Navbar />
        <Outlet />
    </>
}
