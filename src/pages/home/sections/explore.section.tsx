import { slide1, slide2 } from "assets"
import { Container, Headline } from "components"
import { Card } from "components/card"
import { BiChevronRight } from "react-icons/bi"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Explore = () => {
    return (
        <Container className="flex flex-col gap-5 bg-[#131824] px-10 py-10 rounded-3xl">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex justify-center items-center min-w-[350px] w-1/3 mx-auto">
                    <Headline title="Explore something new" subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, magnam." />
                </div>
                <div className="flex flex-row gap-5">
                    <Card className="flex-auto" title="hello world" collecation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, recusandae?" img={slide1} price="34" leftTime="45:67:32" />
                    <Card className="flex-auto" title="hello world" collecation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, recusandae?" img={slide2} price="34" leftTime="45:67:32" />
                </div>
            </div>
            <div className="lg:grid grid-cols-1 lg:grid-cols-4 gap-5 hidden">
                <Card className="z-0" title="hello world" collecation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, recusandae?" img={slide1} price="34" leftTime="45:67:32" />
                <Card title="hello world" collecation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, recusandae?" img={slide2} price="34" leftTime="45:67:32" />
                <Card className="z-10" title="hello world" collecation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, recusandae?" img={slide1} price="34" leftTime="45:67:32" />
                <Card className="" title="hello world" collecation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, recusandae?" img={slide2} price="34" leftTime="45:67:32" />
            </div>

            <Link to='/explore' className="text-gray-500 flex mx-auto items-center bg-[#222A39] px-6 py-2 rounded-lg">
                <span>More</span>
                <BiChevronRight className="text-2xl" />
            </Link>

        </Container>
    )
}
