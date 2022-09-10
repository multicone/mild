import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/free-mode";
import { FreeMode } from 'swiper'

interface SwapProps {
    className?: string
    children: React.ReactNode[]
}

export const Swap = ({ className, children }: SwapProps) => {

    return <>
        <Swiper
            spaceBetween={15}
            slidesPerView="auto"
            modules={[FreeMode]}
            className={className}
        >
            {children}
        </Swiper>
    </>
};
