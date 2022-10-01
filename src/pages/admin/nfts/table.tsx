import { Swap } from "components"
import { Link } from "react-router-dom"
import { artifacts } from "utils"

export interface INFTProps {
    title: string
    collection: {
        img: string
        title: string
    }
    owner: {
        img: string
        title: string
    }
    creator: {
        img: string
        title: string
    }
    price: number

}

const nfts: INFTProps[] = [
    { title: 'NFT 1', collection: { img: artifacts[0], title: 'Collection 1' }, owner: { img: artifacts[1], title: 'Owner 1' }, creator: { img: artifacts[2], title: 'Creator 1' }, price: 100 },
    { title: 'NFT 2', collection: { img: artifacts[3], title: 'Collection 2' }, owner: { img: artifacts[4], title: 'Owner 2' }, creator: { img: artifacts[5], title: 'Creator 2' }, price: 200 },
    { title: 'NFT 3', collection: { img: artifacts[6], title: 'Collection 3' }, owner: { img: artifacts[7], title: 'Owner 3' }, creator: { img: artifacts[8], title: 'Creator 3' }, price: 300 },
]

export function Table() {
    return (
        <table className="w-full card rounded-2xl overflow-hidden">
            <thead className="w-full">
                <tr className="bg-shallow-deep">
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Title
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Collection
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Owner
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Creator
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Price
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Details
                    </th>
                </tr>
            </thead>
            <tbody className="bg-inherent divide-y divide-gray-700 divide-opacity-30">
                {nfts.map((nft, idx) => (
                    <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{nft.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={nft.collection.img} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-400">{nft.collection.title}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={nft.owner.img} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-400">{nft.owner.title}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={nft.collection.img} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-400">{nft.collection.title}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{nft.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <Link to={`/assets/ethereum/${nft.title}`} className={` px-2 text-shallow-sky uppercase inline-flex text-[0.55rem] leading-5 font-semibold rounded-full`}>
                                View
                            </Link>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>

    )
}
