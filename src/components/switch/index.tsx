interface SwitchProps {
    checked: boolean
    onChange: (status: boolean) => void
}

export const Switch = ({ checked, onChange }: SwitchProps): JSX.Element => {
    return (
        <label className="flex items-center cursor-pointer relative">
            <input checked={checked} onChange={() => onChange(!checked)} type="checkbox" id="toggle-example" className="sr-only" />
            <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-5 w-10 rounded-full"></div>
        </label>
    )
}