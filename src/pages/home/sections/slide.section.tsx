import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/effect-coverflow";
import SwiperCore, { Navigation, EffectCoverflow } from 'swiper'
SwiperCore.use([Navigation])
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from 'react';
import { Container, Headline } from 'components';
import { slide1, slide2 } from 'assets';
import { Card } from 'components/card';

export const Slide = () => {
    return (
        <Container>
            <div className="flex flex-col-reverse  items-center gap-8 lg:justify-between relative mt-96 md:mt-64 my-24 lg:my-36">
                <div className='mx-auto lg:mx-0 lg:w-8/12 md:w-10/12 w-11/12'>
                    <Slider />
                </div>
                <div className="flex flex-col gap-4 items-center justify-center">
                    <Headline title='You may like' subtitle='ed languages Ethereum based languages' centered />
                    <ButtonGroup />
                </div>
            </div>
        </Container>
    )
}











const slides = [slide1, slide2, slide1, slide2, slide1, slide2]

const Slider = () => {
    const [swiper, setSwiper] = useState<SwiperCore>();
    const [slide, setSlide] = useState(0);

    const slideTo = (index: number) => swiper?.slideTo(index);

    return <>
        <Swiper
            spaceBetween={0}
            slidesPerView={3}
            onSwiper={setSwiper}
            effect="coverflow"
            loop={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 80,
                modifier: 4,
            }}
            modules={[EffectCoverflow]}
            navigation={{
                prevEl: '.prev',
                nextEl: '.next',
            }}
            breakpoints={{
                // when window width is >= 640px
                300: {
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 1,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 3,
                },

            }}
        >
            {slides?.map(i => {
                return <SwiperSlide className="mx-auto`">
                    <Card title="hello world" collecation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, recusandae?" img={slide1} price="34" leftTime="45:67:32" />
                </SwiperSlide>
            })}
        </Swiper>
    </>
};


const ButtonGroup = () => {
    return (
        <div className="flex gap-6">
            <div className="prev border border-gray-500 p-2 w-fit rounded-full cursor-pointer">
                <BsArrowLeft className="text-gray-500 text-xl font-black" />
            </div>
            <div className="next border border-gray-500 p-2 w-fit rounded-full cursor-pointer">
                <BsArrowRight className='text-gray-500 text-xl font-black' />
            </div>
        </div>
    )
}