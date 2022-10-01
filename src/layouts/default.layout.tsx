import { Footer, Navbar } from 'components'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
}
