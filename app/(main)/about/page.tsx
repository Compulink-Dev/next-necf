import MainLayout from '@/components/layout'
import React from 'react'
import Carousel from './_components/carousel'
import { Colors } from '@/constants/colors'
import { AiOutlineRise } from "react-icons/ai";
import { ImTarget } from "react-icons/im";
import AboutInfo from './_components/aboutInfo';
import AboutSection from './_components/aboutSection';
import AboutGallery from './_components/aboutGallery';


const images = [
    { image: '/nec.gif' },
    { image: '/necf3.jpg' },
    { image: '/delegates.jpg' }
]

function About() {
    return (
        <MainLayout>
            <div className="px-10 mb-6">
                <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center gap-4">
                        <div
                            style={{ backgroundColor: Colors.primary }}
                            className="h-16 w-20 bg-green-700 rounded flex items-center justify-center">
                            <AiOutlineRise className='text-4xl font-bold text-white' />
                        </div>
                        <div className="h-20 w-full bg-green-500 rounded p-4">
                            <p className="text-sm text-white">
                                A leading socio-economic research institution and dialogue convener for equitable, sustainable and inclusive development by 2030.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div
                            style={{ backgroundColor: Colors.primary }}
                            className="h-16 w-20 bg-green-700 rounded flex items-center justify-center">
                            <ImTarget className='text-4xl font-bold text-white' />
                        </div>
                        <div className="h-20 w-full bg-green-500 rounded p-4">
                            <p className="text-sm text-white">
                                {"To contribute to the country's socio-economic development through research as well as consultative and inclusive smart partnership dialogue."}
                            </p>
                        </div>
                    </div>
                </div>
                <AboutInfo />
                <AboutSection />
                <AboutGallery />
            </div>
        </MainLayout>
    )
}

export default About