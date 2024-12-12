'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import TopSection from './topsection'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRouter } from 'next/navigation';

function ImageSlider({ slides }: { slides: { image: string, title: string, description: string }[] }) {
    console.log("Image data :", { slides });
    const router = useRouter()

    const navigateToNews = (slide: {
        image: string;
        title: string;
        description: string;
        content?: string; // Optional field
        author?: string;  // Optional field
        date?: string;    // Optional field
    }) => {
        const { image, title, description, content = '', author = '', date = '' } = slide;

        router.push(`/news/${encodeURIComponent(title)}?image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&content=${encodeURIComponent(content)}&author=${encodeURIComponent(author)}&date=${encodeURIComponent(date)}`);
    };


    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
        >
            {
                slides?.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-screen">
                            {/* Image Background */}
                            <div
                                style={{ backgroundImage: `url(${slide.image})` }}
                                className="bg-scroll bg-cover bg-center bg-no-repeat w-full h-full object-cover"
                            >
                                {/* Overlay with Unique Content */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                    {/* Title positioned at the middle far right */}
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-6 text-right cursor-pointer"
                                        onClick={() =>
                                            navigateToNews({
                                                image: slide.image,
                                                title: slide.title,
                                                description: slide.description,
                                                // content: slide.content, // Ensure this field is included
                                                // author: slide.author,   // Ensure this field is included
                                                // date: slide.date,       // Ensure this field is included
                                            })
                                        }
                                    >
                                        <h2 className="text-3xl font-bold">{slide.title}</h2>
                                        <p className="mt-2 text-lg">{slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Optional: TopSection can be placed here */}
                        <TopSection />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default ImageSlider