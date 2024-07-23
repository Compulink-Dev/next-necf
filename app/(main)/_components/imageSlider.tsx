"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import TopSection from './topsection'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ImageSlider({ images }: any) {
    console.log("Image data :", { images });


    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
        >
            {
                images?.map((image: any, index: any) => (
                    <SwiperSlide

                        key={index}
                    >
                        <div className="w-full h-[50%]">
                            <div
                                style={{ backgroundImage: `url(${image})` }}
                                className="bg-scroll bg-cover bg-center bg-no-repeat w-full h-[40%] object-cover">
                                <div className="flex flex-col items-center justify-center bg-scroll bg-center bg-black w-full h-screen bg-opacity-25">
                                    <div className=" flex gap-3 text-center text-xl md:text-5xl  text-gray-300 py-4"></div>
                                </div>
                            </div>
                        </div>
                        <TopSection />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default ImageSlider