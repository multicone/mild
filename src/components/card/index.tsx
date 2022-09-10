import { Popover } from "@headlessui/react";
import { Menu } from "components/popover";
import { FaEthereum } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";
import { classNames } from "utils";

interface ICardProps {
  title: string;
  collecation: string;
  price: string;
  leftTime: string;
  img: string
  fill?: string
  className?: string
}

export const Card = ({ collecation, img, leftTime, price, title, fill = '#222A39', className }: ICardProps) => {
  return <>
    <Link to={`/assets/etherum/s`}>
      <div className={classNames(className, `group flex flex-col ${`bg-[${fill}]`} rounded-2xl mx-auto shadow-xl overflow-hidden`)}>
        {/* Image */}
        <div className="block h-64 max-h-80 w-full rounded-xl will-change-transform overflow-hidden" data-nc-id="NcImage">
          <img src={img} className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform rounded-xl" alt="nc-imgs" />
        </div>
        {/* Floating card */}
        <div className={`flex flex-col py-4 px-6 gap-3 w-full backdrop-blur-xl bg-[${fill}]`}>
          <div className="flex justify-between items-center">
            <div className="max-w-[110px]">
              <h4 className="font-semibold text-[14px] text-gray-50">{title}</h4>
              <p className="text-[12px] text-gray-300 truncate">{collecation}</p>
            </div>

            <Menu className="w-[150px] bottom-0 right-5">
              <button>Bid</button>
              <button>Buy</button>
            </Menu>

          </div>
          <div className="flex text-white text-[12px] justify-between items-center">
            <div className="flex items-baseline border-2 border-shallow-sky rounded-lg relative py-1.5 px-2 sm:px-3 text-xs sm:text-sm font-semibold ">
              <span className={`absolute font-normal bottom-full translate-y-[1.49rem] py-1 -mx-[1.15rem] text-md text-zinc-500 dark:text-neutral-400 dark:bg-neutral-800 bg-[${fill}]`}>
                <FaEthereum className="text-shallow-sky" />
              </span>
              <span className=" text-shallow-sky !leading-none">{price} ETH</span>
            </div>
            <div className="flex items-baseline border-2 border-zinc-500 rounded-lg relative py-1.5 px-2 sm:px-3 text-xs sm:text-sm font-semibold ">
              <span className={`absolute font-normal bottom-full translate-y-[1.49rem] py-1 -mx-[1.15rem] text-md  dark:text-neutral-400 dark:bg-neutral-800 bg-[${fill}]`}>
                <MdTimer className="text-zinc-500" />
              </span>
              <span className="text-zinc-500 border-zinc-500 !leading-none">{leftTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </>;
};
