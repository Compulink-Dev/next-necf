'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import React from 'react'
import Image from "next/image";


function HeroDetails({ image, title, title2 }: any) {
    return (
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0, x: -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            >
                <Image
                    className="object-cover object-center rounded w-full"
                    alt="hero"
                    src={image}
                    width={300}
                    height={300}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0, x: 100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            >
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    BACKGROUND
                    <br className="hidden lg:inline-block" />
                </h1>
                <p className="leading-relaxed">
                    {title}
                </p>
                <p className="my-4 leading-relaxed">
                    {title2}
                </p>
                <div className="flex justify-center">
                    {/* button */}
                    <Link href={'/contact'}>
                        <Button className="bg-green-600 hover:bg-green-500">Contact Us</Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroDetails