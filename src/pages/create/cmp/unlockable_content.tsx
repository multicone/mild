import { Label } from "components"
import { Toggler } from "components/toggler"
import { classNames } from "utils"

export interface ContentProps {
    unlockableContent: boolean
    setUnlockableContent: (value: boolean) => void
}
export function Content({ unlockableContent, setUnlockableContent }: ContentProps): JSX.Element {
    return <div>
        <Label>Unlockable Content</Label>
        <div
            className={classNames('bg-inherit', `flex flex-col cursor-pointer justify-center items-center gap-3 p-6 backdrop-sepia-0 border border-gray-700 w-36 rounded-2xl`)}
        >
            <Toggler enabled={unlockableContent} setEnabled={setUnlockableContent} />
            <h6 className='text-sm font-medium text-gray-400 text-center'>Unlockable content</h6>
        </div>
    </div>
}