import cxc from 'assets/linear-sky.png'
import { Container } from 'components'
import { Link } from 'react-router-dom'
import { MdVerified } from 'react-icons/md'
import { BiCopy } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
import { FiEdit3, FiUser } from 'react-icons/fi'

const info = [
    { title: 'Floor price', value: '72.34 ETH' },
    { title: 'Volume', value: '34 ETH' },
    { title: 'Owners', value: '5.6k' },
    { title: 'Items', value: '10k' },
]

interface InfoProps {
    className?: string
}

export const Info = ({ className }: InfoProps) => (
    <Container>
        <div className={`relative flex flex-col overflow-hidden rounded-3xl transition-shadow ${className}`}>
            <div className="relative flex-shrink-0 lg:h-60">
                <img className="flex h-full w-full flex-shrink-0 rounded-3xl overflow-hidden" src={cxc} alt="" />
            </div>

            <div className="pb-5 px-4 pt-1.5">
                <div className="text-center relative flex-col items-center justify-center ">
                    <div className="relative">
                        <svg
                            className="scale-[1.6] mx-auto h-14 -mt-[40px] -z-0 text-shallow-deep"
                            width="134"
                            height="54"
                            viewBox="0 0 134 54"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M101.734 19.8581C99.2658 17.4194 96.9737 14.8065 94.5052 12.1935C94.1526 11.671 93.6237 11.3226 93.0947 10.8C92.7421 10.4516 92.5658 10.2774 92.2131 9.92903C85.6895 3.83226 76.6974 0 67 0C57.3026 0 48.3105 3.83226 41.6105 9.92903C41.2579 10.2774 41.0816 10.4516 40.7289 10.8C40.2 11.3226 39.8474 11.671 39.3184 12.1935C36.85 14.8065 34.5579 17.4194 32.0895 19.8581C23.2737 28.7419 11.4605 30.4839 -0.176331 30.8323V54H16.3974H32.0895H101.558H110.197H134V30.6581C122.363 30.3097 110.55 28.7419 101.734 19.8581Z"
                                fill="currentColor" />
                        </svg>

                        <div className='-mt-1 relative text-white max-w-[34rem] mx-auto flex flex-col z-10 rounded-2xl'>

                            <div className="-mt-14 z-10">
                                <img src='https://avatars.githubusercontent.com/u/46004116?v=4' className="w-24 h-24 text-2xl rounded-full border-white border-2 mx-auto" alt="" />
                            </div>

                            <div className="w-contain mx-auto flex flex-col items-center justify-center gap-2.5">
                                <h2 className={`text-2xl font-medium flex items-center gap-1 text-white`}>
                                    <span className="">
                                        Crypto dick butt
                                    </span>
                                    <MdVerified className='text-blue-400 text-3xl' />
                                </h2>
                                <span className={`flex text-sm gap-3`}>
                                    <div className="flex items-center gap-0.5">
                                        <span className="flex gap-2 items-center justify-center bg-shallow-dark border border-gray-700 px-3 py-2 rounded-2xl">
                                            <span className='pre text-gray-400'>0xefg...gjDe</span>
                                            <span className='text-shallow-sky'><BiCopy /></span>
                                        </span>
                                    </div>
                                </span>
                                <p className='text-sm text-white'> <span className='text-gray-600 pr-1'>By</span>Andromeda</p>
                                <p className='text-gray-400 my-3 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta, expedita doloremque quia minus quae blanditiis nisi. Laboriosam, odit ipsa.</p>
                                <div className="flex gap-3">
                                    {info?.map((item, index) => (
                                        <InfoCard key={index} title={item.title} value={item.value} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <svg className='scale-90 mx-auto -mt-[26rem] text-gray-700 text-opacity-50' width="621" height="469" viewBox="0 0 621 469" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M365.471 32.2581L365.826 31.9058L365.822 31.9024L365.471 32.2581ZM358.02 24.4235L358.388 24.0847L358.388 24.0847L358.02 24.4235ZM410.317 49L410.288 49.4991L410.302 49.5H410.317V49ZM214.554 49V49.5H214.576L214.597 49.4981L214.554 49ZM255.807 32.2581L255.455 31.9024L255.452 31.9059L255.807 32.2581ZM263.26 24.4204L263.628 24.7593L263.628 24.7593L263.26 24.4204ZM267.189 20.1935L266.838 19.8377L266.832 19.8438L266.826 19.8501L267.189 20.1935ZM269.41 18L269.059 17.6442L269.059 17.6443L269.41 18ZM270.799 16.629L270.462 16.2592L270.455 16.2661L270.447 16.2733L270.799 16.629ZM350.479 16.629L350.83 16.2731L350.82 16.2637L350.479 16.629ZM351.867 18L351.516 18.3558L351.516 18.3558L351.867 18ZM355.437 21.6319L355.803 21.291L355.437 21.6319ZM365.822 31.9024C363.281 29.3928 360.858 26.7641 358.388 24.0847L357.653 24.7624C360.12 27.4389 362.559 30.085 365.119 32.6139L365.822 31.9024ZM410.347 48.5009C394.044 47.5427 378.071 44.2407 365.826 31.9059L365.116 32.6104C377.626 45.2123 393.911 48.5366 410.288 49.4991L410.347 48.5009ZM410.317 49.5H590V48.5H410.317V49.5ZM619.5 79V438H620.5V79H619.5ZM590 467.5H31V468.5H590V467.5ZM1.5 438V79H0.5V438H1.5ZM31 49.5H214.554V48.5H31V49.5ZM255.452 31.9059C244.104 43.3373 229.553 47.1973 214.511 48.5019L214.597 49.4981C229.742 48.1847 244.572 44.2851 256.161 32.6104L255.452 31.9059ZM262.893 24.0815C260.422 26.7621 257.997 29.3918 255.455 31.9024L256.158 32.6139C258.72 30.084 261.16 27.4369 263.628 24.7593L262.893 24.0815ZM266.826 19.8501C265.489 21.2654 264.184 22.6803 262.893 24.0815L263.628 24.7593C264.92 23.3574 266.22 21.947 267.553 20.5369L266.826 19.8501ZM269.059 17.6443C268.226 18.4669 267.671 19.0153 266.838 19.8377L267.541 20.5493C268.374 19.7268 268.929 19.1783 269.762 18.3557L269.059 17.6443ZM270.447 16.2733L269.059 17.6442L269.762 18.3558L271.15 16.9848L270.447 16.2733ZM310.778 0.5C295.375 0.5 281.098 6.5843 270.462 16.2592L271.135 16.9989C281.599 7.48023 295.64 1.5 310.778 1.5V0.5ZM350.82 16.2637C340.459 6.58368 326.179 0.5 310.778 0.5V1.5C325.916 1.5 339.954 7.48085 350.138 16.9944L350.82 16.2637ZM352.218 17.6442L350.83 16.2733L350.128 16.9848L351.516 18.3558L352.218 17.6442ZM353.051 18.4029C352.772 18.1597 352.495 17.9171 352.218 17.6442L351.516 18.3558C351.817 18.6533 352.117 18.9151 352.393 19.156L353.051 18.4029ZM358.388 24.0847C357.534 23.1581 356.674 22.2254 355.803 21.291L355.072 21.9728C355.94 22.9049 356.798 23.8355 357.653 24.7624L358.388 24.0847ZM352.393 19.156C353.356 19.9974 354.144 20.9777 355.072 21.9728L355.803 21.291C354.941 20.3656 354.065 19.2886 353.051 18.4029L352.393 19.156ZM1.5 79C1.5 62.7076 14.7076 49.5 31 49.5V48.5C14.1553 48.5 0.5 62.1553 0.5 79H1.5ZM31 467.5C14.7076 467.5 1.5 454.292 1.5 438H0.5C0.5 454.845 14.1553 468.5 31 468.5V467.5ZM619.5 438C619.5 454.292 606.292 467.5 590 467.5V468.5C606.845 468.5 620.5 454.845 620.5 438H619.5ZM590 49.5C606.292 49.5 619.5 62.7076 619.5 79H620.5C620.5 62.1553 606.845 48.5 590 48.5V49.5Z" fill="currentColor" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    </Container>
)

interface IInfoCard {
    title: string
    value: string
}

function InfoCard({ title, value }: IInfoCard) {
    return <div className="flex w-28 flex-col items-center gap-2 border border-gray-700 capitalize font-medium p-4 rounded-2xl cursor-pointer transition-all duration-300">
        <p className='text-xs text-gray-700'>{title}</p>
        <p className='text-white text-sm'>{value}</p>
    </div>
}
