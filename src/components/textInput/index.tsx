import { classNames } from "utils"

interface ITextInput {
    label: string
    placeholder?: string
    value?: string
    state: any
    type?: string
    onChange: (value: string) => void
    className?: string

}

export const TextInput = ({ label, placeholder, value, className, state, onChange, type = 'Text' }: ITextInput) => {
    return (
        <>
            <div className="w-full">
                <label htmlFor={label} className="block text-sm font-medium my-2">
                    {label}
                </label>
                <input
                    type={type}
                    name={label}
                    id={label}
                    value={value}
                    onChange={(e) => onChange({ ...state, [label]: e.target.value })}
                    placeholder={placeholder}
                    autoComplete="given-name"
                    className={classNames(className, `text-sm text-white placeholder-gray-500 bg-transparent backdrop-sepia-0 px-4 focus:outline-none w-full py-2.5 border border-gray-700 rounded-xl`)}
                />
            </div>
        </>
    )
}
