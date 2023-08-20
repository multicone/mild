import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BsCheck } from 'react-icons/bs'
import { BsChevronExpand } from 'react-icons/bs'

type Item = {
    name: string
    [key: string]: any
}

interface SelectProps {
    selected: Item
    setSelected: (item: Item) => void
    data: Item[]
}

export function Select({ selected, setSelected, data }: SelectProps) {
    return (
        <Listbox as={Fragment} value={selected} onChange={setSelected}>
            <div className="relative mt-1">
                <Listbox.Button className="text-left form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400  dark:border-navy-450 dark:hover:border-navy-400 ">
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <BsChevronExpand
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-100 dark:bg-navy-500 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {data?.map((item, itemIdx) => (
                            <Listbox.Option
                                key={itemIdx}
                                className={({ active }) =>
                                    `relative cursor-pointer select-none py-2 pl-10 pr-4 text-sm ${active ? 'bg-slate-200 dark:bg-slate-100 dark:text-slate-900' : 'dark:text-slate-200'
                                    }`
                                }
                                value={item}
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                        >
                                            {item.name}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-cyan-200">
                                                <BsCheck className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}
