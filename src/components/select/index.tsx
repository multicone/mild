import { Menu } from "@headlessui/react"
import { FaChevronDown } from "react-icons/fa"
import { classNames } from "utils"

interface ISelectProps {
    selected: string
    items: string[]
    controlClassName?: string
    boxClassName?: string
    setSelected: (value: string) => void
    icon?: JSX.Element
    showSelected?: boolean
}

export function Select({ items, selected = items[0], showSelected = true, setSelected, icon = <FaChevronDown className="text-sm" />, controlClassName, boxClassName }: ISelectProps) {
    return (
        <Menu as="div" className="relative md:inline-block text-left z-10 hidden">
            <Menu.Button className={classNames(`flex items-center gap-2 text-white border border-gray-700 capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300`, controlClassName)}>
                {showSelected && selected} {icon}
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-56 mt-1 origin-top-right divide-y divide-gray-500 divide-opacity-10  bg-dark bg-clip-padding backdrop-filter backdrop-blur-2xl rounded-2xl bg-opacity-60 border border-gray-700 p-0 text-left align-middle shadow-xl transition-all overflow-hidden">
                {items?.map(x => (
                    <Menu.Item onClick={() => setSelected(x)} as="div" className="cursor-pointer py-4 px-4 capitalize hover:bg-shallow-dark text-sm font-medium text-white">
                        <div>{x}</div>
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    )
}