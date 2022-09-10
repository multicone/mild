import { useState } from "react"
import { BsCheck, BsCheck2 } from "react-icons/bs"
import { classNames, QueryPusher } from "utils"

function toggle(type: string, types: string[], selected: string[], setSelected: any) {
    if (selected.includes(type)) {
        if (type === 'All') { setSelected([]) }
        else setSelected(selected.filter(item => item !== type))
    } else {
        if (type === 'All') { setSelected([...types]) }
        else setSelected([...selected, type])
    }
}
export const PriceRange = ({ closeModal }: { closeModal?: any }) => {
    const [min, setMin] = useState<string>('0')
    const [max, setMax] = useState<string>('200')
    const { setQuery } = QueryPusher()

    function apply() {
        closeModal()
        setQuery({ title: 'price', value: `${min + ',' + max}` })
    }

    return <span className="flex flex-col gap-4">
        <h1 className="text-white font-medium text-2xl">Price range</h1>
        <div className="flex text-white gap-3">
            <span className="">
                <input
                    value={min}
                    onChange={e => setMin((e.target.value))}
                    placeholder="Min"
                    className="w-full bg-white text-dark capitalize font-medium px-4 py-2.5 rounded-2xl transition-all duration-300 outline-none ring-none text-shallow-dark"
                    type="number" id="from" />
            </span>
            <span className="">
                <input
                    value={max}
                    onChange={e => setMax(e.target.value)}
                    placeholder="Max"
                    className="w-full bg-white text-dark capitalize font-medium px-4 py-2.5 rounded-2xl transition-all duration-300 outline-none ring-none text-shallow-dark"
                    type="number" id="to" />
            </span>
        </div>
        <div className="flex gap-2 border-t border-t-gray-800 pt-4">
            <div onClick={closeModal} className="bg-white text-dark capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300">
                Cancel
            </div>
            <div
                className="bg-shallow-sky text-white capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300"
                onClick={apply}
            >
                Apply
            </div>
        </div>
    </span>
}
export const SaleType = ({ closeModal }: { closeModal?: any }) => {
    const types = ['All', 'Auction', 'Fixed price']
    const [selected, setSelected] = useState<string[]>([...types])
    const { setQuery } = QueryPusher()

    function apply() {
        closeModal()
        setQuery({ title: 'saleType', value: selected.join('+') })
    }

    return <span className="flex flex-col gap-4">
        <h1 className="text-white font-medium text-2xl">Sale Type</h1>
        <div className="flex text-white gap-2 text-center">
            {types.map((type, index) => (
                <span
                    onClick={() => toggle(type, types, selected, setSelected)}
                    className={classNames(selected.includes(type) ? 'bg-shallow-sky text-white' : 'bg-white text-shallow-dark',
                        `flex items-center gap-0.5 cursor-pointer capitalize font-medium px-4 py-2 rounded-2xl transition-all duration-300 outline-none ring-none`)}
                >
                    {selected.includes(type) && <BsCheck className="text-xl" />} {type}
                </span>
            ))}
        </div>
        <div className="flex gap-2 border-t border-t-gray-800 pt-4">
            <div onClick={closeModal} className="bg-white text-dark capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300">
                Cancel
            </div>
            <div
                className="bg-shallow-sky text-white capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300"
                onClick={apply}
            >
                Apply
            </div>
        </div>
    </span>
}
export const FileType = ({ closeModal }: { closeModal?: any }) => {
    const types = ['All', 'Image', 'Video', 'Audio']
    const [selected, setSelected] = useState<string[]>([types[0]])
    const { setQuery } = QueryPusher()

    function apply() {
        closeModal()
        setQuery({ title: 'saleType', value: selected.join('+') })
    }

    return <span className="flex flex-col gap-4">
        <h1 className="text-white font-medium text-2xl">File Type</h1>
        <div className="flex text-white gap-2 text-center">
            {types.map((type, index) => (
                <span
                    onClick={() => toggle(type, types, selected, setSelected)}
                    className={classNames(selected.includes(type) ? 'bg-shallow-sky text-white' : 'bg-white text-shallow-dark',
                        `flex items-center gap-0.5 cursor-pointer capitalize font-medium px-4 py-2 rounded-2xl transition-all duration-300 outline-none ring-none`)}
                >
                    {selected.includes(type) && <BsCheck className="text-xl" />} {type}
                </span>
            ))}
        </div>
        <div className="flex gap-2 border-t border-t-gray-800 pt-4">
            <div onClick={closeModal} className="bg-white text-dark capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300">
                Cancel
            </div>
            <div onClick={apply} className="bg-shallow-sky text-white capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300">
                Apply
            </div>
        </div>
    </span>
}
export const Verified = ({ closeModal }: { closeModal?: any }) => {
    const types = ['All', 'Verified', 'Unverified']
    const [selected, setSelected] = useState<string[]>([types[1]])

    const { setQuery } = QueryPusher()

    function apply() {
        closeModal()
        setQuery({ title: 'saleType', value: selected.join('+') })
    }

    return <span className="flex flex-col gap-4">
        <h1 className="text-white font-medium text-2xl">Verified</h1>
        <div className="flex text-white gap-2 text-center">
            {types.map((type, index) => (
                <span
                    onClick={() => toggle(type, types, selected, setSelected)}
                    className={classNames(selected.includes(type) ? 'bg-shallow-sky text-white' : 'bg-white text-shallow-dark',
                        `flex items-center gap-0.5 cursor-pointer capitalize font-medium px-4 py-2 rounded-2xl transition-all duration-300 outline-none ring-none`)}
                >
                    {selected.includes(type) && <BsCheck className="text-xl" />} {type}
                </span>
            ))}
        </div>
        <div className="flex gap-2 border-t border-t-gray-800 pt-4">
            <div onClick={closeModal} className="bg-white text-dark capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300">
                Cancel
            </div>
            <div onClick={apply} className="bg-shallow-sky text-white capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300">
                Apply
            </div>
        </div>
    </span>
}