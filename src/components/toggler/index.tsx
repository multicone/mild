import { useState } from 'react'
import { Switch } from '@headlessui/react'

interface TogglerProps {
    scale?: number
    enabled: boolean
    setEnabled: (value: boolean) => void
}

export function Toggler({ scale = 1, enabled = false, setEnabled }: TogglerProps) {

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-blue-500 border-inherit' : 'bg-inherit border-gray-700'
                } relative border inline-flex h-6 w-11 items-center rounded-full`}
        >
            <span className="sr-only">Enable notifications</span>
            <span
                className={`${enabled ? 'translate-x-[1.45rem]' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
        </Switch>
    )
}