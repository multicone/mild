import { Tab } from '@headlessui/react'
import { Swap } from 'components'
import { ActivityCard } from 'pages/collection_profile/cmp/Tabs/tabs'
import { Attribute, LevelProps, Property, PropertyProps } from 'pages/create/cmp'
import { Activity } from 'pages/user_profile/cmp/Tabs/tabs'
import { Fragment } from 'react'
import { classNames } from 'utils'

const properties: PropertyProps[] = [{ Type: 'sdsd', Name: "sdsd" }, { Type: 'sdsd', Name: "sdsd" }, { Type: 'sdsd', Name: "sdsd" }, { Type: 'sdsd', Name: "sdsd" }, { Type: 'sdsd', Name: "sdsd" }, { Type: 'sdsd', Name: "sdsd" }, { Type: 'sdsd', Name: "sdsd" }, { Type: 'sdsd', Name: "sdsd" },]
const tabs = ['Properties', 'Levels', 'Stats', 'History']
const levels: LevelProps[] = [{ Type: 'sds', Value: 3, Max: 5 }, { Type: 'sds', Value: 3, Max: 6 }]

export function Tabs() {
    return (
        <Tab.Group>
            <Tab.List as={Fragment}>
                <Swap className='border-b pb-3 border-gray-700 border-opacity-25'>
                    {tabs.map((tab, index) => (
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={classNames(selected ? ' bg-shallow-sky ' : '', `text-white capitalize font-medium px-4 py-1.5 focus:ring-0 outline-none focus:outline-none rounded-2xl cursor-pointer transition-all duration-300`)}>
                                    {tab}
                                </button>
                            )}
                        </Tab>
                    ))}
                </Swap>
            </Tab.List>
            <Tab.Panels className="">
                <Tab.Panel><Properties /></Tab.Panel>
                <Tab.Panel><Levels /></Tab.Panel>
                <Tab.Panel><Stats /></Tab.Panel>
                <Tab.Panel><History /></Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

const Properties = () => {
    return <Swap className="flex justify-center flex-wrap gap-2">{properties?.map((item, index) => <Property item={item} />)}</Swap>
}
const Levels = () => {
    return <Swap className="flex flex-col gap-2">{levels?.map((item, index) => <Attribute title="levels" index={index} item={item} inn={false} />)}</Swap>
}
const Stats = () => {
    return <Swap className="flex flex-col gap-2">{levels?.map((item, index) => <Attribute title="Stats" index={index} item={item} inn={false} />)}</Swap>
}
const History = () => {
    return <Swap className="flex flex-col gap-2">{levels?.map((item, index) => <ActivityCard />)}</Swap>
}