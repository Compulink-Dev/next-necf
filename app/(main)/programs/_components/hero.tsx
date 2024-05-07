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

function Hero() {
  return (
    <div className="  bg-green-300 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <div className="w-full h-[50%]">
            <div
              className="bg-scroll bg-cover bg-center
   bg-no-repeat bg-[url('/program1.jpg')] w-full h-[40%] object-cover "
            >
              <div className="flex flex-col items-center justify-center bg-scroll bg-center bg-black w-full h-screen bg-opacity-25">
                <div className=" flex gap-3 text-center text-xl md:text-5xl  text-gray-300 py-4"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[50%]">
            <div
              className="bg-scroll bg-cover bg-center
   bg-no-repeat bg-[url('/program2.jpg')] w-full h-[40%] object-cover "
            >
              <div className="flex flex-col items-center justify-center bg-scroll bg-center bg-black w-full h-screen bg-opacity-25">
                <div className=" flex gap-3 text-center text-xl md:text-5xl  text-gray-300 py-4"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[50%]">
            <div
              className="bg-scroll bg-cover bg-center
   bg-no-repeat bg-[url('/program3.jpg')] w-full h-[40%] object-cover "
            >
              <div className="flex flex-col items-center justify-center bg-scroll bg-center bg-black w-full h-screen bg-opacity-25">
                <div className=" flex gap-3 text-center text-xl md:text-5xl  text-gray-300 py-4"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
      </Swiper>
    </div>
  );
}

export default Hero;
