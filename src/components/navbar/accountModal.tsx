import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { BiPowerOff } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
import { FiCopy } from 'react-icons/fi'
import { IoCopyOutline, IoSettingsOutline } from 'react-icons/io5'
import { VscAccount } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'
import { motion } from 'framer-motion'
import { artifacts } from 'utils'
import { connectors } from 'assets/connectorIcons'
import { BsDot } from 'react-icons/bs'
import CopyToClipboard from 'react-copy-to-clipboard'

export const AccountModal = () => {
    const { disconnect } = useDisconnect()
    const { address, connector } = useAccount()
    const { data, isSuccess } = useBalance({ addressOrName: address })
    return (
        <Popover as='div' className="relative m-0 p-0 mt-1">
            <Popover.Button>
                <img className='h-11 w-11 rounded-2xl' src={artifacts[7]} />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-2"
            >
                <Popover.Panel as={Fragment}>
                    <div className="absolute w-[22rem] right-0 top-20 max-w-md overflow-hidden rounded-3xl bg-shallow-deep/95 filter backdrop-invert text-white border border-gray-700 p-4">
                        <div className='flex items-center border border-gray-700 border-opacity-30 rounded-xl p-2 gap-2'>
                            <img className='h-12 w-auto' src={connectors['metaMask']} alt="" />
                            <div className='flex flex-col'>
                                <div className='text-sm text-gray-600 font-bold relative flex'>Ethereum <BsDot className='text-2xl text-green-400 -translate-y-0.5' /></div>
                                <div className='truncate pre text-sm font-mono'>{address?.substring(0, 5) + '...' + address?.substring(address.length - 3)}</div>
                            </div>
                            <button className='ml-auto mr-1 text-2xl text-gray-500 cursor-pointer focus:text-gray-700 focus:scale-95'>
                                <CopyToClipboard text={`${address}`}>
                                    <IoCopyOutline />
                                </CopyToClipboard>
                            </button>
                        </div>
                        <div className='flex flex-col text-xl font-medium text-white text-left my-4'>
                            <Link to='/user/me' className='cursor-pointer hover:text-gray-600 transition-all duration-150'>My Profile</Link>
                            <Link to='/user/me/owned' className='cursor-pointer hover:text-gray-600 transition-all duration-150'>My Collections</Link>
                        </div>
                        <button onClick={() => { close(); disconnect() }} className="cursor-pointer focus:text-gray-500 text-sm border border-gray-700 border-opacity-50 px-3 p-1 rounded-xl">Sign out</button>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}