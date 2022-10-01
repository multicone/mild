import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { classNames } from "utils";

export function Infocard({ title, rate, value }: { title: string, value: number, rate: number }): JSX.Element {
    return <div className="card space-y-2 p-6">
        <div className="text-xs text-gray-600 uppercase">{title}</div>
        <div className="flex justify-between items-baseline">
            <div className="text-2xl">{value}</div>
            <div className={classNames(rate > 0 ? " text-green-600" : "text-red-500", "text-xs flex items-center")}><HiOutlineArrowNarrowUp className={classNames(rate < 0 ? "rotate-180" : "")} /> {rate}%</div>
        </div>
    </div>
}