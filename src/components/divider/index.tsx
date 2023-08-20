export const Divider = () => {
    return (
        <div className=" bg-red-500 x-4 flex flex-col items-center space-y-3">
            <div className="w-2 h-full flex-1 bg-slate-50 dark:bg-navy-500"></div>
            <p>OR</p>
            <div className="w-2 flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
    )
}