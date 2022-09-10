import cover from 'assets/cover2.png'
import { BiSearch } from 'react-icons/bi'
import { FaWpexplorer } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import { FC, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'components';

export interface HeroProps {
    className?: string;
}

export const Hero: FC<HeroProps> = ({ className = "" }) => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const [isActive, setIsActive] = useState(searchRef.current === document.activeElement)

    useEffect(() => {
        window.addEventListener('keypress', (e) => {
            if (e.key === '/' && searchRef.current !== document.activeElement) {
                e.preventDefault();
                searchRef?.current?.focus();
            }
        })

    }, [searchRef])

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            navigate(search && `/search?q=${e.currentTarget.value}`)
        }
    }


    return (
        <Container>
            <div
                className={`nc-SectionHero2 flex flex-col-reverse lg:flex-col relative ${className} overflow-hidden`}
            >
                <div className="flex flex-col-reverse lg:flex-row lg:items-center">
                    <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-36 xl:pb-60 xl:pr-0 lg:mr-10 xl:mr-0  z-10">
                        {/* @ Title */}
                        <Title />
                        <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400"></span>
                        <div className='flex flex-col gap-6 w-full max-w-[29rem] mx-auto lg:ml-0'>
                            {/* @ Search bar */}
                            <SearchBar setIsActive={setIsActive} search={search} searchRef={searchRef} setSearch={setSearch} handleKeyPress={handleKeyPress} />
                            {/* @ Button group */}
                            <ButtonGroup />
                        </div>
                    </div>
                    <div className="flex-grow max-h-fit -z-0 overflow-hidden">
                        <img className="mx-auto absolute md:-top-32 lg:-top-6 blur-md md:blur-md lg:blur-0 lg:relative lg:-translate-y-10 scale-[1.1] -z-0" src={cover} alt="hero" />
                    </div>
                </div>
            </div>
        </Container>
    )
}




const Title = () => {
    return (
        <h2 className="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%] text-white w-full text-center lg:text-left">
            The only <span className="pre font-bold text-[#FDB6B5]">NFT</span> site you are looking for
        </h2>
    )
}


interface SearchProps {
    search: string;
    searchRef: React.MutableRefObject<HTMLInputElement>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    handleKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
}
const SearchBar: FC<SearchProps> = ({ search, searchRef, setSearch, setIsActive, handleKeyPress }) => {
    return (
        <div className="flex items-center justify-start bg-[#222A39] rounded-2xl p-3 gap-1 w-full">
            <Link to={search && `/search?q=${search}`}><BiSearch className='text-gray-400 text-xl' /></Link>
            <p className=''></p>
            <input type="text"
                id="search"
                ref={searchRef}
                className='text-sm md:text-lg text-gray-400 placeholder-gray-500 bg-inherit focus:outline-none w-full py-1'
                placeholder='Search the marketplace'
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={search && `/search?q=${search}`} className="text-xs font-black text-gray-500 bg-gray-700 px-2 py-1 rounded-md">{searchRef.current === document.activeElement ? 'Enter' : '/'}</Link>
        </div>
    )
}

const ButtonGroup = () => {
    return (
        <div className="flex gap-4 justify-start w-full z-10">
            <Link to="/explore" className="flex flex-col justify-center items-center gap-3 p-5 py-8 bg-[#8FB1FF] w-full rounded-2xl">
                <FaWpexplorer className='text-4xl text-white' />
                <h6 className='text-md font-medium text-white'>Explore</h6>
            </Link>
            <Link to="/create" className="flex flex-col justify-center items-center gap-3 p-5 bg-[#222A39] w-full rounded-2xl">
                <FiPlus className='text-4xl text-gray-400' />
                <h6 className='text-md font-medium text-gray-400'>Create</h6>
            </Link>
        </div>
    )
}
    // < div className = "grid grid-cols-2 gap-4 items-center" >
    //         <div className="flex flex-col justify-between gap-16">
    //             {/* @Page Title */}
    //             <div className="text-6xl font-bold text-white flex-wrap">
    //                 The only <span className="pre font-bold text-[#ff7c79]">NFT</span> site you are looking for
    //             </div>

                // <div className='flex flex-col gap-6 w-[29rem]'>
                //     {/* @ Search bar */}
                //     <div className="flex items-center justify-start bg-[#222A39] rounded-2xl p-3 gap-1 w-full">
                //         <BiSearch className='text-gray-400 text-md' />
                //         <p className=''></p>
                //         <input type="text" className='text-md text-gray-400 placeholder-gray-500 bg-inherit focus:outline-none w-full py-1' placeholder='Search the marketplace' />
                //     </div>

                //     {/* @ Button group */}
                //     <div className="flex gap-4 justify-start w-full">
                //         <div className="flex flex-col justify-center items-center gap-3 p-5 bg-[#A3BEFF] w-full rounded-2xl">
                //             <FaWpexplorer className='text-4xl text-white' />
                //             <h6 className='text-md font-medium text-white'>Explore</h6>
                //         </div>
                //         <div className="flex flex-col justify-center items-center gap-3 p-5 bg-[#222A39] w-full rounded-2xl">
                //             <FiPlus className='text-4xl text-gray-400' />
                //             <h6 className='text-md font-medium text-gray-400'>Create</h6>
                //         </div>
                //     </div>
                // </div>

    //         </div>
    //         <div className="w-full">
    //             <img src={cover} alt="" />
    //         </div>
    //     </div >