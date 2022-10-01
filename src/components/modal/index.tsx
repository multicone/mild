import { Dialog, Transition } from '@headlessui/react'
import React, { Children, cloneElement, Fragment, useState } from 'react'
import { classNames } from 'utils'


interface IModalProps {
    outsideClickClose?: boolean
    className?: string
    children: React.ReactNode[] | JSX.Element[]

}

export function Modal({ outsideClickClose = true, children, className }: IModalProps): JSX.Element {
    let [isOpen, setIsOpen] = useState<boolean>(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div onClick={openModal} className="m-0 p-0">
                {children[0]}
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={outsideClickClose === true ? closeModal : () => { }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed top-0 left-0 right-0 bottom-0 inset-0 bg-black bg-opacity-50 backdrop-blur-md" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={classNames("w-full max-w-md transform overflow-hidden rounded-2xl bg-dark bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 border border-gray-700 p-6 text-left align-middle shadow-xl transition-all", className)}>
                                    {cloneElement(children[1] as JSX.Element, { closeModal })}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
