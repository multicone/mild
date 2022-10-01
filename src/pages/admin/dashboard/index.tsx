import { Select, Swap } from "components"
import { useState } from "react"
import { HiOutlineArrowNarrowUp } from "react-icons/hi"
import { artifacts, classNames } from "utils"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Nfts } from "../nfts"
import { Infocard } from "../cmp"

export const Dashboard = () => {
    console.log(datos)
    const [selected, setSelected] = useState(days[0])
    return (
        <div>
            {/* Cards */}
            <div className="grid grid-cols-4 gap-4">
                {cardInfo.map(({ rate, title, value }, index) => (
                    <Infocard title={title} value={value} rate={rate} />
                ))}
            </div>
            {/* Chart */}
            <div className="flex gap-4 my-4">
                <div className="w-4/6 card p-5 space-y-4">
                    <div className="text-lg text text-gray-400 pb-4">Sales report</div>
                    {Chart()}
                </div>
                <div className="w-2/6 card p-5 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="text-lg text-gray-400">Top creator</div>
                        <Select items={days} selected={selected} setSelected={setSelected} controlClassName="text-xs text-gray-400" />
                    </div>
                    <Creator />
                    <Creator />
                    <Creator active />
                    <Creator />
                </div>
            </div>
            {/* Table */}
            <div className="flex gap-4 my-4">
                <div className="w-4/6 card p-5">
                    <div className="text-lg text text-gray-400 pb-4">Latest NFTs</div>
                    <div className="overflow-auto">
                        <Nfts.Table />
                    </div>

                </div>
                <div className="w-2/6 card p-5">
                    <div className="text-lg text text-gray-400 pb-4">Recent activity</div>
                </div>
            </div>
        </div >
    )



    function Creator({ active }: { active?: boolean }) {
        return <div className="flex py-1.5 items-center gap-3">
            <img className="h-12 w-12 rounded-full" src={artifacts[5]} alt="" />
            <div className="space-y-1">
                <div className="text-sm text-gray-300">Afrad Mohammad</div>
                <div className="text-xs text-gray-500">61 items</div>
            </div>
            {active ? (
                <button className="text-shallow-sky border-shallow-sky border-opacity-50 text-sm ml-auto card py-1.5 px-4 w-24">Follow</button>
            ) : (
                <button className="text-sm ml-auto card py-1.5 px-4 w-24 bg-shallow-sky">Following</button>
            )}
        </div>
    }

    function Chart() {
        return <ResponsiveContainer width={'98%'} height={250}>
            <AreaChart height={250} data={datos}
                margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#A3BEFF" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#A3BEFF" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#475467" strokeWidth={0.1} tick={{ fontSize: 11 }} />
                <YAxis stroke="#475467" strokeWidth={0.1} tick={{ fontSize: 11 }} />
                <Tooltip
                    wrapperStyle={{ outline: "none" }}
                    content={<CustomTooltip />}
                />
                <Area activeDot={{ radius: 2 }} type="monotone" dataKey="uv" stroke="#A3BEFF" strokeWidth={2.5} fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>
    }
}

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
    {
        title: 'Total Users',
        value: 100,
        rate: 45
    },
    {
        title: 'Total Users',
        value: 100,
        rate: 45
    },
    {
        title: 'Total Users',
        value: 100,
        rate: 45
    },
    {
        title: 'Total Users',
        value: 100,
        rate: 45
    },
    {
        title: 'Total Users',
        value: 100,
        rate: 45
    }
]
const days = ['Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'Last 90 days', 'Last 180 days', 'Last 365 days']


export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    }
};
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const data = {
    labels,
    datasets: [
        {
            fill: true,
            data: labels.map(() => Math.random() * 10),
            borderColor: '#818CF8',
            backgroundColor: '#374157',
        },
    ],
};

const datos = labels.map(x => ({ name: x, uv: Math.random() * 100 }))
// const datos
// [
//     {
//         "name": "Jan",
//         "uv": 4.359903416097664
//     },
//     {
//         "name": "Feb",
//         "uv": 2.3601877088011447
//     },
//     {
//         "name": "Mar",
//         "uv": 2.989241031187506
//     },
//     {
//         "name": "Apr",
//         "uv": 8.166378298245077
//     },
//     {
//         "name": "May",
//         "uv": 2.8614828958264216
//     },
//     {
//         "name": "Jun",
//         "uv": 2.755809867560073
//     },
//     {
//         "name": "Jul",
//         "uv": 6.554219313052747
//     },
//     {
//         "name": "Aug",
//         "uv": 3.5575493906699096
//     },
//     {
//         "name": "Sep",
//         "uv": 9.096030090017454
//     },
//     {
//         "name": "Oct",
//         "uv": 8.906245605155485
//     },
//     {
//         "name": "Nov",
//         "uv": 4.254847056160138
//     },
//     {
//         "name": "Dec",
//         "uv": 1.9128510352152617
//     }
// ]


const CustomTooltip = ({ active, payload, label }: { active?: boolean, payload?: any, label?: string }) => {
    if (active) {
        return (
            <div className="card rounded-lg bg-[#1D2331] w-24 ring-0 outline-0 text-sm text-gray-400">
                <p className="text-gray-600">{label}</p>
                <p className="label truncate text-white">{payload[0].value}</p>
            </div>
        );
    }
    return null;
};