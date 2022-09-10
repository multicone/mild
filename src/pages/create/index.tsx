import { Container, Select, TextInput } from "components"
import { useState } from "react"
import { FiPlus } from "react-icons/fi"
import { Collection, collections, Content, FileUpload, LevelProps, Levels, Properties, PropertyProps } from "./cmp"

const items = ['ETH', 'BTC', 'USDT']

export const Create = () => {
    const [file, setFile] = useState<File>()
    const [state, setState] = useState({})
    const [chain, setChain] = useState<string>(items[0])
    const [collection, setCollection] = useState<string>(collections[0])
    const [properties, setProperties] = useState<PropertyProps[]>([])
    const [levels, setLevels] = useState<LevelProps[]>([])
    const [stats, setStats] = useState<LevelProps[]>([])
    const [unlockableContent, setUnlockableContent] = useState(false)

    return (
        <Container>
            <div className="max-w-xl mx-auto text-white space-y-5">
                <h1 className="text-3xl">Create new item</h1>
                {/* File Upload */}
                <FileUpload file={file} setFile={setFile} />
                {/* Name */}
                <TextInput state={state} onChange={setState} label="Name" placeholder="e.g. Alexandar" />
                {/* Description */}
                <TextInput state={state} onChange={setState} label="Description" placeholder="e.g. This is a ..." />
                {/* External link */}
                <TextInput state={state} onChange={setState} label="External" placeholder="e.g. https://yyyy.com" />
                {/* Price */}
                <div className="flex items-end pb-4 gap-2 border border-gray-700 capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300">
                    <TextInput state={state} onChange={setState} label="Price" placeholder="e.g. 0.1" type="Number" />
                    <Select items={items} selected={chain} setSelected={setChain} controlClassName="text-xs py-[0.8rem] rounded-2xl" />
                </div>
                {/* Collection */}
                <Collection collection={collection} setCollection={setCollection} />
                {/* Properties */}
                <Properties properties={properties} setProperties={setProperties} />
                {/* Levels */}
                <Levels title="levels" levels={levels} setLevels={setLevels} />
                {/* Stats */}
                <Levels title="stats" levels={stats} setLevels={setStats} />
                {/* Rroyalities */}
                <TextInput state={state} onChange={setState} label="Royalities" placeholder="e.g. 10" />
                {/* Unlockable content */}
                <Content unlockableContent={unlockableContent} setUnlockableContent={setUnlockableContent} />

                {/* Create button */}
                <button className="w-full py-3 bg-[#222A39] focus:bg-[#1e2533] focus:text-gray-500 rounded-2xl text-white font-medium border border-gray-700 transition-all duration-300">Create</button>
            </div>
        </Container >
    )
}



export function CollectionAttributeButton({ children }: { children?: string }) {
    return <div className="flex cursor-pointer w-full justify-between items-center gap-3 p-6 bg-inherit backdrop-sepia-0 border border-gray-700 rounded-2xl">
        <h6 className='text-md font-medium text-white'>{children}</h6>
        <FiPlus className='text-4xl text-gray-800 bg-gray-400 rounded-2xl p-1' />
    </div>
}

