import { Container, Select } from "components"
import { Menu } from "components/popover";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BiCopy } from "react-icons/bi";
import { FiDollarSign } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { artifacts, classNames } from "utils"
import Countdown from 'react-countdown'
import AccordionInfo from "./cmp/accordionInfo";
import { Tabs } from "./cmp/tabs";
const description = `Tattooed Kitty Gang (“TKG”) is a collection of 666 badass kitty gangsters, with symbol of tattoos, living in the Proud Kitty Gang (“PKG”) metaverse. Each TKG is an 1/1 ID as gangster member & all the joint rights.`
const details = [{ key: "ContactAddress", value: "0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a" }]

export const AssetDetails = () => {
    return (
        <Container>
            {/* MAIn */}
            <main className="container mt-11 flex text-white">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
                    {/* CONTENT */}
                    <div className="space-y-8 lg:space-y-10">
                        {/* HEADING */}
                        <div className="relative">
                            <img
                                src={artifacts[0]}
                                className="aspect-w-11 aspect-h-12 rounded-3xl overflow-hidden"
                            />
                        </div>

                        <AccordionInfo description={description} details={details} />
                    </div>

                    {/* SIDEBAR */}
                    {Sidebar()}
                </div>
            </main>
        </Container>
    );

    function Sidebar() {
        const items = ['Bid', 'Buy now', 'Report']
        const [selected, setSelected] = useState('');


        return <div className="pt-10 lg:pt-0 xl:pl-10 border-t-2 border-neutral-200 dark:border-neutral-700 lg:border-t-0">
            <div>
                {/* -----------1----------------- */}
                <div className="pb-9 space-y-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <img className="h-5 w-5 rounded-full mr-2" src={artifacts[0]} alt="" />
                            <p>Hello world</p>
                            <MdVerified className="text-shallow-sky" />
                        </div>
                        <Menu className="w-48 right-5" iconClass="text-2xl">
                            <button>Bid</button>
                            <button>Buy</button>
                            <button>Report</button>
                        </Menu>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                        BearX #3636
                    </h2>
                </div>

                {/* -------------3------------------ */}
                <div className="grid grid-cols-2 grid-rows-2 gap-3 my-4">
                    <div
                        className={classNames('bg-inherit', `flex flex-col justify-center items-start gap-1 p-3 w-full backdrop-sepia-0 border border-gray-700 rounded-2xl`)}>
                        <h6 className="text-xs lg:text-sm text-gray-600">Price</h6>
                        <h6 className='text-md lg:text-lg font-medium text-gray-200 text-center'>34.45 ETH</h6>
                        <h6 className='flex items-center text-md font-medium text-gray-600 text-center'><span><FiDollarSign className="text-gray-500" /></span> 34.45</h6>
                    </div>
                    <div
                        className={classNames('bg-inherit', `flex flex-col justify-center items-start gap-1 p-3 w-full backdrop-sepia-0 border border-gray-700 rounded-2xl`)}>
                        <h6 className="text-xs lg:text-sm text-gray-600">Highest bid</h6>
                        <h6 className='text-md lg:text-lg font-medium text-gray-200 text-center'>34.45 ETH</h6>
                        <h6 className='flex items-center text-md font-medium text-gray-600 text-center'><span><FiDollarSign className="text-gray-500" /></span> 34.45</h6>
                    </div>
                    <div
                        className={classNames('bg-inherit', `flex flex-col justify-center items-start gap-2 p-3 w-full backdrop-sepia-0 border border-gray-700 rounded-2xl`)}>
                        <h6 className="text-xs lg:text-sm text-gray-600">Creator</h6>
                        <div className="flex gap-2">
                            <img className="h-6 w-6 rounded-full" src={artifacts[3]} alt="" />
                            <CopyToClipboard text="0xefg...gjDe">
                                <button className="group focus:scale-95 focus:opacity-75 flex gap-2 items-center justify-center cursor-pointer">
                                    <span className='pre text-sm text-gray-400 cursor-pointer'>0xefg...gjDe</span>
                                    <span className='text-shallow-sky'><BiCopy /></span>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div
                        className={classNames('bg-inherit', `flex flex-col justify-center items-start gap-2 p-3 w-full backdrop-sepia-0 border border-gray-700 rounded-2xl`)}>
                        <h6 className="text-xs lg:text-sm text-gray-600">Auction</h6>
                        <Countdown date={Date.now() + 200000}
                            renderer={({ days, hours, minutes, seconds }) => (
                                <div className="flex gap-3">
                                    <div>
                                        <p>{days}</p>
                                        <p className="text-xs text-gray-500">Days</p>
                                    </div>
                                    <div>
                                        <p>{hours}</p>
                                        <p className="text-xs text-gray-500">Hours</p>
                                    </div>
                                    <div>
                                        <p>{minutes}</p>
                                        <p className="text-xs text-gray-500">Minutes</p>
                                    </div>
                                    <div>
                                        <p>{seconds}</p>
                                        <p className="text-xs text-gray-500">Seconds</p>
                                    </div>

                                </div>

                            )} />
                    </div>

                </div>

                {/* -------------2------------------ */}
                <div className="flex gap-5 text-sm md:text-md my-10 mb-12">
                    <div className="w-full bg-shallow-sky hover:bg-blue-300 text-white text-center capitalize font-medium px-4 py-2.5 rounded-2xl cursor-pointer transition-all duration-150">
                        Place a bid
                    </div>
                    <div className="w-full bg-shallow-sky hover:bg-blue-300 text-white text-center capitalize font-medium px-4 py-2.5 rounded-2xl cursor-pointer transition-all duration-150">
                        Buy now at 45 ETH
                    </div>
                </div>
            </div>
            <Tabs />

        </div>;
    }
}