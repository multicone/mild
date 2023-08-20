import { useEffect, useLayoutEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

interface TooltipProps {
    children: string | JSX.Element
    content: string
    contentClassName?: string
    direction?: Directions | string
}

export enum Directions {
    top = 'top',
    left = 'left',
    right = 'right',
    bottom = 'bottom'
}

export function Tooltip({ children, content, contentClassName, direction = Directions.top }: TooltipProps) {
    const [isOpen, setOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)
    const triRef = useRef<HTMLDivElement>(null)

    const [width, setWidth] = useState<number>(0)
    const [pos, setPos] = useState<DOMRect>()
    const [dir, setDir] = useState<string>(direction)

    const [x, setX] = useState(window.innerWidth);
    const [y, setY] = useState(window.innerHeight);
    const updateDimensions = () => {
        setX(window.innerWidth);
        setY(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // useEffect(() => {
    //     if(pos?.x)
    // }, [])

    useEffect(() => {
        setPos(ref.current?.getBoundingClientRect())
        console.log(pos)
    }, [ref.current, isOpen])

    useEffect(() => {
        setWidth(ref.current ? ref.current?.offsetWidth : 0)
    }, [ref.current])

    const resolveStyle = (direction: string) => {
        switch (direction) {
            case Directions.top:
                return { top: isOpen ? -30 : 0 }
            case Directions.right:
                return { right: isOpen ? -width - 8 : 0 }
            case Directions.left:
                return { left: isOpen ? -width - 8 : 0 }
            case Directions.bottom:
                return { bottom: isOpen ? -30 : 0 }
            default:
                return { top: isOpen ? -30 : 0 }
        }
    }
    const resolveTriangle = (direction: string) => {
        switch (direction) {
            case Directions.top: return (<div className="absolute left-[50%] -translate-x-1/2 -bottom-1.5 border-solid border-t-slate-200 dark:border-t-navy-500 border-t-8 border-x-transparent border-x-8 border-b-0"></div>)
            case Directions.right: return (<div className="absolute top-[50%] -translate-y-1/2 -left-1.5 border-solid border-r-slate-200 dark:border-r-navy-500 border-r-8 border-y-transparent border-y-8 border-l-0"></div>)
            case Directions.bottom: return (<div className="absolute left-[50%] -translate-x-1/2 -top-1.5 border-solid border-b-slate-200 dark:border-b-navy-500 border-b-8 border-x-transparent border-x-8 border-t-0"></div>)
            case Directions.left: return (<div className="absolute top-[50%] -translate-y-1/2 -right-1.5 border-solid border-l-slate-200 dark:border-l-navy-500 border-l-8 border-y-transparent border-y-8 border-r-0"></div>)
            default: return (<div className="absolute left-[50%] -translate-x-1/2 -bottom-1.5 border-solid border-t-slate-200 border-t-8 border-x-transparent border-x-8 border-b-0"></div>)
        }
    }

    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative w-fit bg-red-400">
            <div ref={ref} style={resolveStyle(dir)} className={`${isOpen ? `opcity-100` : 'opacity-0'} absolute p-1 px-2 rounded-md inline-flex text-xs bg-slate-200 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 transition-all duration-300 z-10 ${contentClassName}`}>
                {content}
                <>{resolveTriangle(dir)}</>
            </div>
            {children}
        </div>
    )

}

