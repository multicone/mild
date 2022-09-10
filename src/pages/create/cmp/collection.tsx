import { Img, Label, Modal, Swap, TextInput } from "components";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { SwiperSlide } from "swiper/react";
import { artifacts, classNames } from "utils";

export let collections = ['NFT', 'ERC20', 'ERC721']
export interface CollectionProps {
    collection: string
    setCollection: (collection: string) => void
}

export function Collection({ collection, setCollection }: CollectionProps): JSX.Element {
    return <>
        <div>
            <Label>Choose collection</Label>
            <div className="flex gap-4">
                {/* Choose collection box */}
                <Modal outsideClickClose={false}>
                    <CreateCollectionButton />
                    <CreateCollectionPanel />
                </Modal>
                {/* Collection row */}
                <Swap>
                    {collections?.map(title => (<SwiperSlide className="w-36">{collectionView(title, collection, setCollection)}</SwiperSlide>))}
                </Swap>
            </div>
        </div>
    </>
}

function collectionView(title: string, collection: string, setCollection: (collection: string) => void): JSX.Element {
    return <div
        key={title}
        className={classNames(collection === title ? 'bg-[#222A39] backdrop-sepia-0' : 'bg-inherit', 'flex flex-col cursor-pointer justify-center items-center gap-3 p-6 backdrop-sepia-0 border border-gray-700 w-36 rounded-2xl')}
        onClick={() => setCollection(title)}>
        <img className="rounded-2xl h-10 w-10" src={artifacts[Math.floor(Math.random() * 12)]} alt="" />
        <h6 className='text-md font-medium text-gray-400'>{title}</h6>
    </div>;
}

function CreateCollectionPanel({ closeModal }: { closeModal?: any }) {
    const [file, setFile] = useState<File>()
    const [state, setState] = useState({})
    return <>
        <div className="flex flex-col gap-2 text-white">
            {/* Title */}
            <h1 className="text-2xl">Create collection</h1>
            {/* Upload & preview */}
            <div className="flex gap-3">
                {/* Upload */}
                <UploadFile setFile={setFile} />
                {/* Preview */}
                <Preview file={file} />
            </div>

            {/* Display name */}
            <TextInput state={state} onChange={setState} label="Display name" placeholder="e.g. 'Macro room'" />
            {/* Symbol */}
            <TextInput state={state} onChange={setState} label="Symbol" placeholder="e.g. 'BTC'" />
            {/* Description */}
            <TextInput state={state} onChange={setState} label="Description" placeholder="e.g. This is a .." />
            {/* Short URL */}
            <TextInput state={state} onChange={setState} label="Short URL" placeholder="e.g. https://yyyy.com" />

            {/* Buttons */}
            <div className="flex gap-2 pt-4">
                {/* cancel */}
                <div onClick={closeModal} className="bg-white text-gray-900 capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300">Cancel </div>
                {/* Create */}
                <div className="bg-shallow-sky text-white capitalize font-medium px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300">Create</div>
            </div>
        </div>
    </>
}

function Preview({ file }: { file: File | undefined }) {
    return <div className="w-2/5">
        <Label>Preview</Label>
        <div className="flex items-center justify-center h-40 w-42 rounded-2xl border-2 border-dashed border-gray-700 overflow-hidden">
            <img className="h-40 w-42 w-full scale-105 object-cover transition-all duration-300" src={file && URL.createObjectURL(file)} alt="" />
        </div>
    </div>;
}

function UploadFile({ setFile }: { setFile: (file: File) => void }) {
    return <div className="w-3/5">
        <Label>Upload file</Label>
        <Img className="h-40" onChange={setFile} />
    </div>;
}

function CreateCollectionButton() {
    return <div className="flex flex-col cursor-pointer w-36 justify-center items-center gap-3 p-6 bg-inherit backdrop-sepia-0 border border-gray-700 rounded-2xl">
        <FiPlus className='text-4xl text-gray-800 bg-white rounded-2xl p-1' />
        <h6 className='text-md font-medium text-gray-400'>Create</h6>
    </div>
}

