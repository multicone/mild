import { Info } from "./cmp/Info"
import { Tabs } from "./cmp/Tabs"

export const UserProfle = () => {
    return (
        <div className="flex flex-col gap-10">
            <Info />
            <Tabs />
        </div>
    )
}