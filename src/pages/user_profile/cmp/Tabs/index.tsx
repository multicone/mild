import { Container, Modal } from "components"
import { Select } from "components/select"
import { useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { artifacts, classNames } from "utils"
import { Activity, Filters, Panel, Tags } from "./tabs"

const tabs = ['owned', 'created', 'collected', 'onsale', 'activity']
const items = ['Recent', '1 day', '7 days', '30 days', '90 days']


export const Tabs = () => {
    const { id, type } = useParams()
    const [selected, setSelected] = useState<string>(items[0])
    return (
        <Container>
            {/* Tab controls */}
            <div className="flex justify-between items-center border-b pb-4 border-b-gray-800">
                <div className="flex gap-1">
                    {tabs.map((tab, index) => (
                        <Link
                            to={`/user/${id}/${tab}`}
                            key={index}
                            className={classNames(type === tab ? ' bg-shallow-sky ' : '', `text-white capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300`)}>{tab}</Link>
                    ))}
                </div>
                <Select selected={selected} setSelected={setSelected} items={items} />
            </div>

            {/* Filters */}
            <Filters />
            <Tags />

            {/* Tabs */}
            <Panel />
            <Activity />

        </Container>
    )
}
