import { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import {
    IoSearchOutline,
    IoMoonSharp,
    IoCloseOutline,
    IoSettingsOutline,
} from 'react-icons/io5'
import { FaEthereum, FaWpexplorer } from 'react-icons/fa'
import { IoMdSunny, IoIosArrowDown, IoMdNotifications } from 'react-icons/io'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscAccount } from 'react-icons/vsc'
import { FiCopy, FiPlus } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'
import { BiPowerOff } from 'react-icons/bi'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Container, Modal, Select } from 'components'
import { CustomConnectButton } from './button'
import { AccountModal } from './accountModal'
import { RiMenu5Line } from 'react-icons/ri'
import { ConnectedOnly, NotConnected } from './connected'
import { artifacts } from 'utils'
import { Transition } from '@headlessui/react'
import { Menu } from 'components/popover'
import { SearchBar } from 'pages/home/sections'
export interface INavLink {
    name: string
    url: string
}

export const navLinks: INavLink[] = [
    {
        name: 'Explore',
        url: '/',
    },
    {
        name: 'My Profile',
        url: '/profile',
    },
]

export const Navbar = () => {
    const [signedIn, setSignedIn] = useState(true)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const showMobileMenu = () => {
        setMobileMenuOpen(true)
    }
    const hideMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <div className="w-full bg-shallow-deep/50 sticky top-0 left-0 right-0 filter backdrop-blur-2xl z-30">
            <Container className="container-custom px-4 py-6 flex items-center justify-end">
                {/* <div className="">
                    <Link to="/" className="text-2xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-shallow-sky via-shallow-sky to-gray-900">Mild</Link>
                </div> */}

                <div className="nav-items flex gap-2 items-center">
                    <Link to="/explore" className="text-white text-2xl border focus:scale-95 border-gray-700 p-2 rounded-2xl">
                        <FaWpexplorer />
                    </Link>
                    <CustomConnectButton />
                    <ConnectedOnly>
                        <Link to="/create" className="text-white text-2xl border focus:scale-95 border-gray-700 p-2 rounded-2xl"><FiPlus /></Link>
                    </ConnectedOnly>

                    <button className="text-white text-2xl border focus:scale-95 border-gray-700 p-2 rounded-2xl" onClick={showMobileMenu}>
                        <RiMenu5Line />
                    </button>
                    {mobileMenuOpen && (
                        <>
                            <div className='fixed inset-0 h-screen top-0 right-0 left-0 bottom-0 bg-black opacity-60 backdrop-blur-2xl z-10'></div>
                            <div className="z-40 flex text-white px-3 flex-col w-96 h-[95vh] right-5 top-5 absolute bg-shallow-deep bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-3xl border border-gray-700 text-left align-middle shadow-xl transition-all overflow-hidden">
                                <div className="navbar-container flex items-center justify-between py-5">
                                    <Link to="/" className="text-3xl font-extrabold dark:text-gray-100 px-3"> Mild </Link>

                                    <button className="border p-1 rounded-full border-gray-700 border-opacity-50" onClick={hideMobileMenu}>
                                        <IoCloseOutline className="dark:text-gray-100" />
                                    </button>
                                </div>

                                <ul className="navbar-container px-3 space-y-2">
                                    {navLinks.map((link, id) => {
                                        return (
                                            <motion.li
                                                initial={{ x: -100 }}
                                                animate={{ x: 0 }}
                                                transition={{
                                                    duration: 0.2,
                                                    type: 'spring',
                                                    stiffness: 100,
                                                }}
                                                whileHover={{ scale: 1.01 }}
                                                key={id}
                                                className="cursor-pointer"
                                            >
                                                <NavLink
                                                    to={link.url}
                                                    className="text-gray-700 dark:text-gray-300 text-xl font-semibold"
                                                >
                                                    {link.name}
                                                </NavLink>
                                            </motion.li>
                                        )
                                    })}
                                </ul>

                                <div className="w-full flex justify-center absolute bottom-0 py-3">
                                    <div className='bg-gray-100 h-2'></div>
                                    <div className="flex gap-2 px-6 flex-1">
                                        <motion.button
                                            className="btn-mobile rounded-full text-white font-extrabold flex-1"
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Create
                                        </motion.button>
                                        <ConnectedOnly>
                                            <motion.button
                                                className="btn-mobile-secondary rounded-full box-content flex-1"
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                Sign out
                                            </motion.button>
                                        </ConnectedOnly>
                                        <NotConnected>
                                            <motion.button
                                                className="btn-mobile-secondary rounded-full box-content flex-1"
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                Sign out
                                            </motion.button>
                                        </NotConnected>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    <ConnectedOnly>
                        <AccountModal />
                    </ConnectedOnly>
                </div>

            </Container >

            {/* Menu for Tablet or Phones ----------------------- */}

            {/* mobile fullscreen menu --- */}
            {/* mobile fullscreen menu end--- */}
        </div >
    )
}

export default Navbar