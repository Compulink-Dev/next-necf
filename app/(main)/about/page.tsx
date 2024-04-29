import MainLayout from '@/components/layout'
import React from 'react'
import Carousel from './_components/carousel'
import { Colors } from '@/constants/colors'


const images = [
    { image: '/nec.gif' },
    { image: '/necf3.jpg' },
    { image: '/delegates.jpg' }
]

function About() {
    return (
        <MainLayout>
            <div className=" bg-green-900 flex items-center justify-center py-8" style={{ backgroundColor: Colors.primary }}>
                <Carousel data={images} />
            </div>
        </MainLayout>
    )
}

export default About