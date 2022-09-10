import { classNames } from "utils";

interface ImgProps {
    className?: string
    onChange: (value: File) => void;
}

export const Img = ({ className, onChange }: ImgProps) => {
    const id = Math.random().toString(36).substring(7);
    return (
        <div className={classNames(`flex flex-col justify-around items-center py-5 px-4 rounded-2xl border-2 border-dashed border-gray-700`, className)}>
            <div className="text-center">
                <p className="text-xs text-gray-500">JPG, PNG, GIF, SVG, MP4, MP3, WAV, OGG, GLB, GLTF</p>
                <p className="text-xs text-gray-500">Max 100 MB</p>
            </div>
            <div className="flex text-sm text-gray-600">
                <label htmlFor={id} className="text-gray-400 cursor-pointer backdrop-sepia-0 border border-gray-700 rounded-2xl px-4 py-2 bg-[#222A39]">
                    <span>Choose a file</span>
                    <input onChange={(e) => e.target.files instanceof FileList && onChange(e.target.files[0])} id={id} name={id} type="file" className="sr-only" />
                </label>
            </div>

        </div>
    )
}