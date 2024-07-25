import React from 'react'
import SectionCard from './sectionCard'
import { FaDotCircle } from "react-icons/fa";
import Image from 'next/image';
import getSections from '@/lib/(about)/aboutSection/getSections';

const SectionPin = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center gap-2">
            <FaDotCircle className='w-10 text-green-900' />
            <p className="text-sm text-slate-700">{text}</p>
        </div>
    )
}

async function AboutSection() {

    const sections = await getSections()

    const image = sections[0].image
    const title = sections[0].title
    const title2 = sections[0].title2
    const title3 = sections[0].title3
    const title4 = sections[0].title4
    const title5 = sections[0].title5
    const title6 = sections[0].title6


    return (
        <div className='my-16'>
            <p className="text-2xl font-bold ">About NECF</p>
            <div className="flex gap-4">
                <div className="flex-1 mt-4 gap-4">
                    <Image
                        src={image}
                        alt=''
                        width={200}
                        height={200}
                        className='rounded w-full'
                    />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <SectionPin
                        text={`${title}`}
                    />
                    <SectionPin
                        text={`${title2}`}
                    />
                    <SectionPin
                        text={title3}
                    />
                    <SectionPin
                        text={title4}
                    />
                    <SectionPin
                        text={title5}
                    />
                    <SectionPin
                        text={title6}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutSection