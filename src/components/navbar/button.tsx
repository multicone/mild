import { ConnectButton } from '@rainbow-me/rainbowkit'
import { IoIosArrowDown } from 'react-icons/io'
import { IoWallet } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { VscPlug } from 'react-icons/vsc'

export const CustomConnectButton = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                return (
                    <div
                        {...(!mounted && {
                            'aria-hidden': true,
                            style: {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!mounted || !account || !chain) {
                                return (
                                    <motion.button
                                        onClick={openConnectModal}
                                        type="button"
                                        className="bg-shallow-sky flex justify-center  gap-1 items-center font-semibold text-white px-3 py-2 rounded-xl box-content"
                                        initial={{ y: 0 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className='hidden lg:block'>Connect</span> <VscPlug />
                                    </motion.button>
                                )
                            }
                            if (chain.unsupported) {
                                return (
                                    <button
                                        onClick={openChainModal}
                                        type="button"
                                        className="text-red-400"
                                    >
                                        Wrong network
                                    </button>
                                )
                            }
                            return (
                                <button
                                    onClick={openChainModal}
                                    className="m-0 p-0"
                                    type="button"
                                >
                                    {chain.hasIcon && (
                                        <div className="flex justify-center items-center text-white text-2xl border focus:scale-95 border-gray-700 p-2 rounded-2xl">
                                            {chain.iconUrl && (
                                                <img
                                                    alt={chain.name ?? 'Chain icon'}
                                                    src={chain.iconUrl}
                                                    className="w-[25px] h-[25px]"
                                                />
                                            )}
                                        </div>
                                    )}
                                </button>
                            )
                        })()}
                    </div>
                )
            }}
        </ConnectButton.Custom>
    )
}