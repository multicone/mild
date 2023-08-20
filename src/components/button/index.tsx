import { Component, ReactNode } from "react"

type IButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export class Button extends Component<IButtonProps> {
    render(): ReactNode {
        return (
            <button {...this.props} className={`btn cursor-pointer text-xs bg-slate-200 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 ${this.props.className}`}>
                {this.props.children}
            </button>)
    }
}