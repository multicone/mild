import * as React from 'react';
import { CgSoftwareUpload } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';

const useFileInput = () => {
    const [files, setFiles] = React.useState<FileList | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const files = e.target.files;
        setFiles(files)
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // do something with the file
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setFiles(e.dataTransfer.files)
    };

    return {
        handleSubmit,
        handleImageChange,
        handleDragOver,
        handleDrop,
        files
    };
};

export const FileInput: React.FC = () => {
    const {
        handleImageChange,
        handleDragOver,
        handleDrop,
        files: filesObj
    } = useFileInput();
    const id = Math.random().toString(36).substring(7);
    const [files, setFiles] = React.useState<File[]>()
    React.useEffect(() => {
        if (filesObj) setFiles(Object.values(filesObj))
    }, [])
    const _filter = (name: string) => {
        const newFiles = files?.filter(x => x.name !== name)
        setFiles(newFiles)
    }

    return (
        <div className='border-2 border-dashed border-slate-300 dark:border-navy-450 p-5 rounded-lg'>
            <div
                className="fileInput center gap-2 py-2 pb-4"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <div className="text-center">
                    <p className="text-md font-medium text-slate-500">Drop a file or</p>
                </div>
                <label htmlFor={id} className="text-gray-800 dark:text-gray-400 text-sm cursor-pointer backdrop-sepia-0 border border-gray-400/50 dark:border-gray-700 rounded-2xl px-3 py-1.5 bg-slate-300 dark:bg-navy-700">
                    <span>Choose a file</span>
                </label>
                <input
                    id={id}
                    type="file"
                    onChange={handleImageChange}
                    className="sr-only"
                    multiple
                />
            </div>
            <div className="apart gap-2">
                {files && files.map(file => (
                    <div className="">
                        <div className="flex relative items-center justify-center h-40 w-42 rounded-2xl  border-gray-700 overflow-hidden">
                            <div className="absolute left-2 top-2 z-10 bg-slate-200 text-slate-600 p-1 font-medium cursor-pointer rounded-full"><CgSoftwareUpload /></div>
                            <div className="absolute right-2 top-2 z-10 bg-slate-200 text-slate-600 p-1 font-medium cursor-pointer rounded-full" onClick={() => _filter(file.name)}><FaTimes /></div>
                            <img className="h-40 w-42 w-full scale-105 object-cover transition-all duration-300" src={file && URL.createObjectURL(file)} alt="" />
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};
