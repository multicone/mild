import { Modal } from "components"
import { Card } from "components/card"
import { useEffect } from "react"
import { AiOutlineVerified, AiTwotoneFile, AiTwotoneFire } from "react-icons/ai"
import { BiMoviePlay } from "react-icons/bi"
import { FaTags } from "react-icons/fa"
import { FiDollarSign } from "react-icons/fi"
import { IoIosFlash, IoMdCheckmark, IoMdFlash, IoMdSwap } from "react-icons/io"
import { ImHammer2 } from 'react-icons/im'
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom"
import { artifacts, classNames, QueryPusher } from "utils"
import { FileType, PriceRange, SaleType, Verified } from "./controls"

const items = Array.from({ length: 10 })
const filters = [
    { title: 'Price range', icon: <FiDollarSign />, comp: <PriceRange /> },
    { title: 'Sale type', icon: <IoIosFlash />, comp: <SaleType /> },
    { title: 'File type', icon: <BiMoviePlay />, comp: <FileType /> },
    { title: 'Verified', icon: <AiOutlineVerified />, comp: <Verified /> },
]
const tags = [
    { title: 'Listings', icon: <FaTags /> },
    { title: 'Sales', icon: <IoMdFlash /> },
    { title: 'Transfer', icon: <IoMdSwap /> },
    { title: 'Bids', icon: <ImHammer2 /> },
    { title: 'Followings', icon: <IoMdCheckmark /> },
    { title: 'Burns', icon: <AiTwotoneFire /> },
]
export const Panel = () => {
    const { type } = useParams()
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {items?.map((_, index) => (
                <Card
                    className="z-0 w-60 shadow-lg"
                    title="hello world"
                    collecation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, recusandae?"
                    img={artifacts[Math.floor(Math.random() * 12)]}
                    price="34"
                    leftTime="45:67:32" />
            ))}
        </div>
    )
}

export const Activity = () => {
    const { type } = useParams()
    if (type === 'activity') {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {tags.map(tag => <ActivityCard />)}
            </div>
        )
    }
    return (<></>)
}

export const Filters = () => {
    const { type } = useParams()
    return (
        <div className="flex items-start gap-2 flex-wrap my-5">
            {filters.map((filter, index) => (
                <Modal>
                    <div className="flex items-center gap-2 text-white border border-gray-700 capitalize font-medium px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300">
                        {filter.icon} {filter.title}
                    </div>
                    {filter.comp}
                </Modal>
            ))}
        </div>
    )
}

export const Tags = () => {
    const { search } = useLocation()
    const { id, type, tag } = useParams()
    const navigate = useNavigate()

    console.log(type, tag)

    if (type === 'activity') {
        return <div className="flex items-start my-5 gap-2 flex-wrap">
            {tags.map(({ title, icon }, index) => (
                <Link
                    to={`/user/${id}/${type}/${title}`}
                    className={classNames(tag === title ? 'bg-white text-shallow-deep' : 'text-white', `flex items-center gap-2 border border-gray-700 capitalize font-medium px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300`)}
                >
                    {icon} {title}
                </Link>
            ))}
        </div>
    }
    return (<></>)
}

export interface ActivityCardProps {
    title?: string
    event?: string
    byWhoom?: string
    timesago?: string
    activity?: string
}
export function ActivityCard({ title = 'RTFKT LOOT Pod', activity = 'Listings', event = 'Minted by', byWhoom = 'Social base university', timesago = Math.floor(Math.random() * 24).toString() }: ActivityCardProps) {
    return <div className="flex items-center justify-between gap-2 border border-gray-700 capitalize font-medium px-5 py-5 rounded-2xl cursor-pointer transition-all duration-300">
        <div className="flex gap-2.5">
            <img src={artifacts[Math.floor(Math.random() * 12)]} className="h-16 w-16 rounded-full" alt="" />
            <div className="text-white flex flex-col gap-1 justify-center">
                <p className="text-md text-bold">{title}</p>
                <p className="text-xs text-gray-200"><span className="text-xs text-gray-600 pr-1">{event} </span>{byWhoom}</p>
                <p className="text-xs text-gray-600 font-bold">{timesago} hours ago</p>
            </div>
        </div>
        <div className="bg-white p-1.5 rounded-full text-shallow-dark">
            {tags.find(tag => tag.title === activity)?.icon}
        </div>
    </div>
}

