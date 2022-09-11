import { Container } from 'components'
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsLinkedin, BsYoutube } from 'react-icons/bs'
import { FaDribbble, FaFacebookSquare, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { SiEnvato } from 'react-icons/si'

export const Footer = () => {
    return (<div className='bg-gray-900 w-full mt-12'>
        <Container>
            <div className="w-full px-4 relative min-h-[200px]">
                <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-evenly max-w-3xl mx-auto py-10">
                    <div>
                        <div className="text-2xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-shallow-sky to-gray-900">
                            Mild
                        </div>
                        <div>
                            <h4 className="text-xl tracking-wide text-gray-700 dark:text-gray-300">
                                Get the updates
                            </h4>
                            <div className="mt-4 flex p-[0.05rem] border border-gray-700 rounded-2xl">
                                <input
                                    type="search"
                                    name="newsletter"
                                    id="newsletter"
                                    className="w-full px-3 py-0.5 bg-transparent rounded-2xl focus:outline-none text-gray-700 dark:text-gray-100"
                                />
                                <button className="flex w-24 text-sm justify-center items-center bg-shallow-sky focus:bg-blue-400 rounded-2xl text-white px-3 py-2">
                                    sign up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-16'>
                        <div>
                            <h3 className="text-lg uppercase tracking-wider text-gray-700 font-semibold">
                                Marketplace
                            </h3>
                            <ul className="mt-4 space-y-1 text-gray-700">
                                <li className="">
                                    <a href="#">Explore</a>
                                </li>
                                <li className="">
                                    <a href="#">Activity</a>
                                </li>
                                <li className="">
                                    <a href="#">How it works</a>
                                </li>
                                <li className="">
                                    <a href="#">Help center</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2 text-xl text-gray-700">
                                <li className="">
                                    <FaFacebookSquare />
                                </li>
                                <li className="">
                                    <AiOutlineTwitter />
                                </li>
                                <li className="">
                                    <FaLinkedinIn />
                                </li>
                                <li className="">
                                    <BsYoutube />
                                </li>
                                <li className="">
                                    <AiFillInstagram />
                                </li>
                                <li className="">
                                    <FaDribbble />
                                </li>
                                <li className="">
                                    <SiEnvato />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-xs text-gray-600 justify-center gap-1 py-3">
                    <p className="text-center">
                        &copy; 2022 Multicone inc. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-5">
                        <button className='hover:text-gray-700'>Terms</button>
                        <button className='hover:text-gray-700'>Policy</button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    )
}