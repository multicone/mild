import { Disclosure } from "@headlessui/react";
import { BiChevronUp } from "react-icons/bi";

interface AccordionProps {
    description?: string;
    details?: {
        key: string
        value: string
    }[]

}
export default function AccordionInfo({ description, details }: AccordionProps) {
    return (
        <div className="w-full rounded-2xl text-white">
            <Disclosure defaultOpen>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left   rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                            <span>Descriptions</span>
                            <BiChevronUp
                                className={`${open ? "transform rotate-180" : ""
                                    } w-5 h-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel
                            className="px-4 pt-4 pb-2 text-gray-500 text-sm"
                            as="p"
                        >
                            {description || `Tattooed Kitty Gang (“TKG”) is a collection of 666 badass kitty
                            gangsters, with symbol of tattoos, living in the Proud Kitty Gang
                            (“PKG”) metaverse. Each TKG is an 1/1 ID as gangster member & all
                            the joint rights.`}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure defaultOpen as="div" className="mt-5 md:mt-8">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left  rounded-2xl  focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                            <span>Details</span>
                            <BiChevronUp
                                className={`${open ? "transform rotate-180" : ""
                                    } w-5 h-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 flex flex-col text-xs overflow-hidden">
                            {details?.map(({ key, value }) => (<>
                                <span className="text-gray-500">{key}</span>
                                <span className="text-base  text-gray-400 line-clamp-1">
                                    {value}
                                </span>
                            </>))}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}
