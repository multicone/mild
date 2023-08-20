import { classNames } from "utils"

export enum Variant {
    primary = 0,
    secondary = 1,
    info = 2,
    success = 3,
    warning = 4,
    error = 5
}

interface BadgeProps {
    className?: string
    variant?: Variant
    children: string
}
export const Badge = ({ className = '', children, variant }: BadgeProps): JSX.Element => {

    return (
        <div className={classNames(`badge dark: bg-accent-light/15 dark: text-accent-light font-['Inter']`, getVariantTheme(variant), className)}>
            {children}
        </div>
    )
}


const getVariantTheme = (variant?: Variant): string => {
    switch (variant) {
        case Variant.primary:
            return 'text-primary bg-primary/10'
        case Variant.secondary:
            return 'text-secondary bg-secondary/10'
        case Variant.info:
            return 'text-info bg-info/10'
        case Variant.warning:
            return 'text-warning bg-warning/10'
        case Variant.success:
            return 'text-success bg-success/10'
        case Variant.error:
            return 'text-error bg-error/10'
        default:
            return 'text-primary bg-primary/10'
    }
}