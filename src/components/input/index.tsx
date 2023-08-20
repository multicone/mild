interface LocalInputProps {
    error?: string
}
type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & LocalInputProps

export const Input = ({ placeholder, type, error, ...InputProps }: InputProps) => {
    return (
        <>
            <label className="block">
                <input
                    {...InputProps}
                    className="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder={placeholder}
                    type={type}
                />
            </label>
            <span className="text-[0.65rem] text-red-400 dark:text-red-400">{error}</span>
        </>
    )
}