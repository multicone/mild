interface ListProps<T> {
    items: T[]
    renderItem: (item: T) => JSX.Element
    className?: string
}

export const List = <T extends unknown>({ items, renderItem, className }: ListProps<T>): JSX.Element => {
    return (
        <div className={`m-0 p-0 ${className}`}>
            {items.map(item => renderItem(item))}
        </div>
    )
}