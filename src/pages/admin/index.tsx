import { useRoutes } from "react-router-dom"
import { Dashboard } from "./dashboard"
import { Nfts } from "./nfts"
import { Users } from "./users"
import { Collections } from "./collections"
import { Sidebar } from "./sidebar"
import { Container, Navbar } from "components"

const routes = [
    {
        path: 'dashboard',
        element: <Dashboard />
    },
    {
        path: 'users',
        element: <Users />
    },
    {
        path: 'nfts',
        element: <Nfts />
    },
    {
        path: 'collections',
        element: <Collections />
    }]


export const Admin = () => {
    const subRoutes = useRoutes(routes)
    return (
        <div className="flex h-screen fixed w-screen">
            <div className="h-full w-64">
                <Sidebar />
            </div>
            <div className="flex-1 overflow-auto">
                <Navbar />
                <Container>
                    {subRoutes}
                </Container>
            </div>
        </div>
    )
}
