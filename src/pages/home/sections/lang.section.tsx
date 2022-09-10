import { Container, Headline } from "components";
import { Ethereum, Binance, Avalanche, Solana, Tron, Polygon } from "assets/icons/lang";


export const Lang = () => {
    return <div className="bg-inherit lg:bg-[#131824] lg:-mt-24 xl:-mt-48 z-10 relative">
        <Container>
            <div className="grid grid-flow-row grid-auto-cols-max lg:grid-cols-12 h-80 justify-center items-center py-14 lg:py-0">
                {/* @ Headline */}
                <Headline
                    title="Supported Languages"
                    subtitle="Ethereum based languages Ethereum based languages Ethereum based languages"
                />
                {/* @ Language cards */}
                <div className="lg:col-span-7 grid grid-cols-12 gap-3 lg:6 mt-8 lg:mt-16 lg:mr-20 mx-8">
                    {languages.map(({ name, image }, idx) =>
                        <div className="col-span-6 md:col-span-4 bg-[#222A39] flex flex-col gap-4 rounded-2xl px-8 py-6 justify-center">
                            <img src={image} alt="" className="h-12 w-12 overflow-hidden mx-auto" />
                            <div className="flex-1 text-gray-500 font-medium text-md sm:text-lg text-center">{name}</div>
                        </div>

                    )}

                </div>
            </div>
        </Container>
    </div>
};



const languages = [
    { name: "Ethereum", image: Ethereum },
    { name: "Binance", image: Binance },
    { name: "Polygon", image: Polygon },
    { name: "Avalance", image: Avalanche },
    { name: "Tron", image: Tron },
    { name: "Solana", image: Solana },
]