"use client";
import React from "react";
import { MdPerson } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";
import TopSection from "./topsection";

function MainSlider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className=" ">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 5000 }}
                >
                    {children}
                </Swiper>
            </div>
        </>
    );
}

export default MainSlider;