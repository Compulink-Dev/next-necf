import React from 'react'
import SectionCard from './sectionCard'
import { FaDotCircle } from "react-icons/fa";

const SectionPin = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center gap-2">
            <FaDotCircle className='w-10 text-green-900' />
            <p className="text-sm text-slate-700">{text}</p>
        </div>
    )
}

function AboutSection() {
    return (
        <div className='my-16'>
            <p className="text-2xl font-bold ">About NECF</p>
            <div className="flex gap-4">
                <div className="flex-1 mt-4 grid grid-cols-2 gap-4">
                    <SectionCard />
                    <SectionCard />
                    <SectionCard />
                    <SectionCard />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <SectionPin
                        text='Creating a smart partnership amongst key economic players, namely, government, private sector, labour, civil society, academia and other stakeholders in order to enhance the socio-economic development process of Zimbabwe'
                    />
                    <SectionPin
                        text='Providing a broad participatory framework in the formulation of national economic policy through an interchange of ideas and experiences among government, private sector, labour, academia and civil society'
                    />
                    <SectionPin
                        text='Providing a broad participatory framework in the formulation of national economic policy through an interchange of ideas and experiences among government, private sector, labour, academia and civil society'
                    />
                    <SectionPin
                        text='Facilitating the coordination, monitoring and evalution of national economic policy implementation'
                    />
                    <SectionPin
                        text='Providing a platform for forging national consensus on a shared vision for national economic development;'
                    />
                    <SectionPin
                        text='Inculcating a culture of consultation and consensus building in policy formulation through dialogue;'
                    />
                    <SectionPin
                        text='Providing a forum for national debate on topical economic issues and recommend well considered views and policy options to enhance the growth of the economy.'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutSection