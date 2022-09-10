import { Label, Modal, Swap } from "components"
import { useState } from "react"
import { MdDelete } from "react-icons/md"
import { TbArrowRightCircle } from "react-icons/tb"
import { classNames } from "utils"
import { CollectionAttributeButton } from ".."

export interface PropertyProps {
    Type: string
    Name: string
}
export interface PropertiesProps {
    properties: PropertyProps[]
    setProperties: (value: PropertyProps[]) => void
}

export function Properties({ properties, setProperties }: PropertiesProps) {
    return <div>
        <Modal>
            <CollectionAttributeButton>Properties</CollectionAttributeButton>
            <PropertiesPanel setProperties={setProperties} />
        </Modal>
        {/* Viewing properties */}
        <Swap className="flex justify-center flex-wrap gap-2">{properties?.map((item, index) => <Property item={item} />)}</Swap>
    </div>
}

export function Property({ item }: { item: PropertyProps }): JSX.Element {
    return <div
        className={classNames('bg-inherit', `flex flex-col justify-center items-center gap-2 p-3 w-24 h-24 backdrop-sepia-0 border border-gray-700 rounded-2xl`)}>
        <h6 className="text-xs text-gray-700">{item.Type}</h6>
        <h6 className='text-sm font-medium text-gray-400 text-center'>{item.Name}</h6>
    </div>
}

function PropertiesPanel({ setProperties, closeModal }: { setProperties: any, closeModal?: any }) {
    const [type, setType] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [array, setArray] = useState<PropertyProps[]>([])

    function add() {
        if (type && name) {
            setArray([...array, { Type: type, Name: name }])
            setType('')
            setName('')
        }
    }

    function remove(index: number) {
        setArray(array.filter((_, i) => i !== index))
    }

    function save() {
        closeModal()
        setProperties([...array])
    }

    return <div className="flex flex-col gap-3 text-white">
        <h1 className="text-2xl">Add properties</h1>
        <div className="flex gap-2">
            <div>
                <Label>Type</Label>
                <input value={type} onChange={(e) => setType(e.target.value)} type="text" className="classtext-sm text-white placeholder-gray-500 bg-transparent backdrop-sepia-0 px-4 focus:outline-none w-full py-2.5 border border-gray-700 rounded-xl" />
            </div>
            <div>
                <Label>Name</Label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="classtext-sm text-white placeholder-gray-500 bg-transparent backdrop-sepia-0 px-4 focus:outline-none w-full py-2.5 border border-gray-700 rounded-xl" />
            </div>
        </div>
        <div onClick={add} className="w-fit bg-shallow-sky hover:bg-blue-300 text-white text-sm text-center capitalize font-medium px-3 py-2 rounded-2xl cursor-pointer transition-all duration-300">
            Add
        </div>
        <div className="flex gap-2 flex-wrap">
            {array?.map((item, index) => (
                <div className="group relative flex items-center w-fit gap-2 border border-gray-800 rounded-2xl py-2 px-4 overflow-hidden">
                    <p>{item.Type}</p>
                    <TbArrowRightCircle />
                    <p>{item.Name}</p>
                    <div onClick={() => remove(index)} className="cursor-pointer absolute -right-6 bg-gradient-to-r from-transparent via-gray-900 to-gray-900 group-hover:right-0 px-2 transition-all duration-300">
                        <MdDelete className="text-xl" />
                    </div>
                </div>
            ))}
        </div>
        <div onClick={save} className="bg-shallow-sky hover:bg-blue-300 text-white text-center capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-150">
            Save
        </div>
    </div>
}