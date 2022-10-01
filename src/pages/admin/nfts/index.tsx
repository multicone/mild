import { BiSearch } from "react-icons/bi"
import { Infocard } from "../cmp"
import { Table } from "./table"
const Nfts = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 items-center">
                {cardInfo.map(({ rate, title, value }, index) => (
                    <Infocard title={title} value={value} rate={rate} />
                ))}
            </div>
            <div className="my-4 card">
                <div className="flex p-5 justify-between items-center">
                    <div className="text-lg text text-gray-400">Latest NFTs</div>
                    <div className="flex card px-4 items-center justify-start bg-[#222A39] rounded-xl gap-1">
                        <input type="text"
                            id="search"
                            className='text-sm text-gray-400 placeholder-gray-500 bg-inherit focus:outline-none w-full'
                            placeholder='e.g. NFT 1'
                        // onFocus={() => setIsActive(true)}
                        // onBlur={() => setIsActive(false)}
                        // onKeyPress={handleKeyPress}
                        // onChange={(e) => setSearch(e.target.value)}
                        />
                        <BiSearch className="text-2xl text-gray-600" />
                    </div>
                </div>
                <Table />
            </div>
        </div>
    )
}

Nfts.Table = Table
export { Nfts }


const cardInfo = [
    {
        title: 'Total Users',
        value: 100,
        rate: 45
    },
    {
        title: 'Total Users',
        value: 100,
        rate: -45
    },
    {
        title: 'Total Users',
        value: 100,
        rate: 45
    },
]