import { connectToDB } from '@/lib/connectToDB';
import Hero from '@/models/(home)/hero';
import React from 'react'
import { SwiperSlide } from "swiper/react";
import TopSection from './topsection';
import { cookies } from 'next/headers';

export async function loadHero() {
    await connectToDB()
    const heros = await Hero.find()
    return heros
}


export async function getHeros() {

    let heroCache: any = null

    const _ = cookies()

    if (heroCache !== null) {
        console.log('Hero from cache');
        return heroCache

    }

    await connectToDB()
    const hero = await Hero.find()

    heroCache = hero


    return hero;
}

async function MainImages() {


    const heros = await getHeros()
    console.log(heros);


    return (
        <div>
            {
                heros.map((hero: any) => (
                    <SwiperSlide
                        key={hero._id}
                    >
                        <div className="w-full h-[50%]">
                            <div
                                style={{ backgroundImage: `url(${hero.image})` }}
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
        </div>
    )
}

export default MainImages