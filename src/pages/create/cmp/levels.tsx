import { Label, Modal, Swap } from "components"
import { useState } from "react"
import { MdDelete } from "react-icons/md"
import { CollectionAttributeButton } from ".."

export interface LevelProps {
    Type: string
    Value: number
    Max: number
}

export interface LevelsProps {
    title: string
    levels: LevelProps[]
    setLevels: (value: LevelProps[]) => void
}

export function Levels({ title, levels, setLevels }: LevelsProps) {
    return <div>
        <Modal>
            <CollectionAttributeButton>{title}</CollectionAttributeButton>
            <CollectionAttributePanel title={title} setLevels={setLevels} />
        </Modal>
        <Swap className="flex justify-center flex-wrap gap-2">{levels?.map((item, index) => <Attribute title={title} index={index} item={item} inn={false} />)}</Swap>
    </div>
}


function CollectionAttributePanel({ title, setLevels, closeModal }: { title: string, setLevels: any, closeModal?: any }) {
    const [type, setType] = useState<string>('')
    const [value, setValue] = useState<number>(0)
    const [max, setMax] = useState<number>(5)
    const [array, setArray] = useState<LevelProps[]>([])

    function add() {
        console.log(array)
        if (type && value !== 0 && max !== 0) {
            setArray([...array, { Type: type, Value: value, Max: max }])
            setType('')
            setValue(0)
            setMax(0)
        }
    }

    function remove(index: number) {
        setArray(array.filter((_, i) => i !== index))
    }

    function save() {
        closeModal()
        setLevels([...array])
    }

    return <div className="flex flex-col gap-3 text-white">
        <h1 className="text-2xl">Add {title}</h1>
        <div className="flex gap-2">
            <div className="w-1/2">
                <Label>Type</Label>
                <input value={type} onChange={(e) => setType(e.target.value)} type="text" className="classtext-sm text-white placeholder-gray-500 bg-transparent backdrop-sepia-0 px-4 focus:outline-none w-full py-2.5 border border-gray-700 rounded-xl" />
            </div>
            <div className="w-1/2">
                <Label>Value</Label>
                <span className="flex items-center gap-2">
                    <input value={value} onChange={(e) => setValue(Number(e.target.value))} type="number" className=" text-white placeholder-gray-500 bg-transparent backdrop-sepia-0 px-4 focus:outline-none w-full py-2.5 border border-gray-700 rounded-xl" />
                    <p>of</p>
                    <input value={max} onChange={(e) => setMax(Number(e.target.value))} type="number" className="classtext-sm text-white placeholder-gray-500 bg-transparent backdrop-sepia-0 px-4 focus:outline-none w-full py-2.5 border border-gray-700 rounded-xl" />
                </span>
            </div>
        </div>

        {/* Add properties */}
        <div onClick={add} className="w-fit bg-shallow-sky hover:bg-blue-300 text-white text-sm text-center capitalize font-medium px-3 py-2 rounded-2xl cursor-pointer transition-all duration-300">
            Add
        </div>
        {array?.map((item, index) => <Attribute index={index} inn item={item} remove={remove} title={title} />)}

        {/* Save */}
        <div onClick={save} className="bg-shallow-sky hover:bg-blue-300 text-white text-center capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-150">
            Save
        </div>
    </div>
}

export interface AttributeProps {
    item: LevelProps
    title: string
    remove?: (index: number) => void
    index: number
    inn?: boolean
}

export function Attribute({ index, inn, item, remove, title, }: AttributeProps): JSX.Element {
    return <div className="group relative flex flex-col items-center w-full gap-2 border border-gray-700 rounded-2xl py-2 px-4 overflow-hidden">
        <div className="flex justify-between w-full">
            <p>{item.Type}</p>
            <p>{item.Value}/{item.Max}</p>
        </div>
        {title === 'levels' && (
            <div className="bg-white h-3 w-full rounded-full overflow-hidden">
                <div style={{ width: `${Math.floor((item.Value / item.Max) * 100)}%` }} className={`bg-cyan-500 h-3`}></div>
            </div>
        )}
        {inn && (
            <div onClick={() => remove ? remove(index) : ''} className="cursor-pointer absolute -right-6 bg-gradient-to-r from-transparent via-gray-900 to-gray-900 group-hover:right-0 px-2 transition-all duration-300">
                <MdDelete className="text-xl" />
            </div>
        )}
    </div>
}
