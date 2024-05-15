import { miniGallery } from '@/constants/data'
import Image from 'next/image'
import React from 'react'
import { AboutModal } from './aboutModal'



function AboutGallery() {
    return (
        <div className=''>
            <p className="text-2xl font-bold">About Gallery</p>


            <div className="grid gap-4">
                <div className=''>
                    <Image width={300} height={200} className="h-auto max-w-full rounded-lg hover:opacity-70 cursor-pointer" src="/ibc2.JPG" alt="" />
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {
                        miniGallery.map((data) => (
                            <AboutModal key={data.id} src={data.imageUrl} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default AboutGallery