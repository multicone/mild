import { Navlink } from "components"
import { BiCollection, BiHome, BiLogOut } from "react-icons/bi"
import { FaChartBar } from "react-icons/fa"
import { FiLogOut, FiSettings, FiUsers } from "react-icons/fi"
import { Link } from "react-router-dom"

const links = [
    { title: "Dashboard", path: "/admin/dashboard", icon: <BiHome /> },
    { title: "NFTs", path: "/admin/nfts", icon: <FaChartBar /> },
    { title: "users", path: "/admin/users", icon: <FiUsers /> },
    { title: "collections", path: "/admin/collections", icon: <BiCollection /> },
    { title: "bids", path: "/admin/bids", icon: <BiCollection /> },
    { title: "market", path: "/admin/market", icon: <BiCollection /> },
    { title: "Settings", path: "/admin/settings", icon: <FiSettings /> },
    { title: "Logout", path: "/admin/", icon: <FiLogOut /> },
]

export const Sidebar = () => {
    return (
        <div className="h-full  overflow-y-auto overflow-x-hidden flex flex-col justify-between">
            <ul className="flex flex-col space-y-1 mx-6">
                <div className="text-center my-6">
                    <Link to="/" className="text-2xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-shallow-sky via-shallow-sky to-gray-900">Mild</Link>
                </div>
                {SideLink(links[0])}
                <div className="uppercase text-gray-600 text-xs py-3">Pages</div>
                {links.slice(1, 4).map((link) => SideLink(link))}
                <div className="uppercase text-gray-600 text-xs py-3">Shop</div>
                {links.slice(4, 6).map((link) => SideLink(link))}
            </ul>

            <ul className="flex flex-col py-4 space-y-1 mx-6">
                {links.slice(6).map((link) => SideLink(link))}
            </ul>

        </div>
    )

    function SideLink(link: { title: string; path: string; icon: JSX.Element }): JSX.Element {
        return <Navlink to={link.path} className="relative px-3 text-sm flex flex-row items-center h-11 focus:outline-none focus:ring-0 focus:border-0 hover:bg-[#333B4D] hover:px-4 rounded-xl text-gray-400 pr-6 transition-all duration-200" activeClassName="bg-[#333B4D] px-4">
            {link.icon} <span className="hidden md:block ml-3 text-sm tracking-wide truncate capitalize">{link.title}</span>
        </Navlink>
    }
}