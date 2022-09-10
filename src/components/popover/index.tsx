import { Popover } from "@headlessui/react"
import { cloneElement } from "react"
import { FiMoreVertical } from "react-icons/fi"
import { classNames } from "utils"


interface PopoverProps {
    iconClass?: string
    className?: string
    children: JSX.Element[]
}

export const Menu = ({ iconClass, className, children }: PopoverProps) => {
    return (
        <Popover className="relative z-10">
            <Popover.Button className="focus:ring-0 focus:border-none">
                <FiMoreVertical className={`text-gray-50 text-md ${iconClass}`} />
            </Popover.Button>
            <Popover.Panel className={`flex flex-col absolute mt-1 divide-y divide-gray-500 divide-opacity-10  bg-shallow-deep bg-clip-padding backdrop-filter backdrop-blur-2xl rounded-2xl bg-opacity-80 border border-gray-700 p-0 text-left align-middle shadow-xl transition-all overflow-hidden ${className}`}>
                {children?.map(child => cloneElement(child, { className: "text-left cursor-pointer py-4 px-4 capitalize hover:bg-shallow-dark text-sm font-medium text-white" }))}
            </Popover.Panel>

            {/* <Popover.Panel className="absolute right-6 bottom-0 z-30 bg-shallow-dark px-4 py-3 rounded-xl w-[150px] shadow-2xl shadow-gray-900">
              <div className="flex flex-col  divide-y divide-zinc-700">
                  <button className="text-left text-gray-100 text-sm py-2">
                      Buy now
                  </button>
                  <button className="text-left text-gray-100 text-sm py-2">
                      Place a bid
                  </button>
              </div>

              <img src="/solutions.jpg" alt="" />
          </Popover.Panel> */}
        </Popover>
    )
}