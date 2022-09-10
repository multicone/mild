import { Img, Label } from "components";

export interface FileProps {
    file: File | undefined
    setFile: (value: File) => void
}
export function FileUpload({ file, setFile }: FileProps): JSX.Element {
    return <div className="flex gap-4">
        <div className="w-2/3">
            <Label>Upload file</Label>
            <Img className="h-40" onChange={setFile} />
        </div>
        <div className="w-1/3">
            <Label>Preview</Label>
            <div className="flex items-center justify-center h-40 w-42 rounded-2xl border-2 border-dashed border-gray-700 overflow-hidden">
                <img className="h-40 w-42 w-full scale-105 object-cover transition-all duration-300" src={file && URL.createObjectURL(file)} alt="" />
            </div>
        </div>
    </div>
}