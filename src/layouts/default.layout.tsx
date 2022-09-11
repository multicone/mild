import { Footer, Navbar } from 'components'
import { Outlet } from 'react-router-dom'

export const Default = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
}
