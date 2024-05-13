import Image from 'next/image'
import React from 'react'

function AboutInfo() {
    return (
        <div className='my-12 flex items-center gap-6'>
            <div className="">
                <Image
                    src={'/about.jpg'}
                    alt=''
                    width={300}
                    height={300}
                    className='w-full rounded'
                />
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <div className="h-20 w-full rounded bg-green-500 p-4 text-sm text-white">
                    The NECF is continuously undergoing re-organisation with a view to strengthening its dialogue convening mandate. Its ultimate goal is to be the premier dialogue think tank forum in Zimbabwe which enjoys leadership in economic dialogue solution generation.
                </div>
                <div className="h-20 w-full rounded bg-green-500 p-4 text-sm text-white">
                    The NECF has been playing and shall continue to play a crucial role in the implementation of National Development Plans such as the current Transitional Stabilisation Programme with a view to fulfilling the key objective of achieving economic growth and development.
                </div>
                <div className="h-20 w-full rounded bg-green-500 p-4 text-sm text-white">
                    The NECF endeavours to resuscitate the Annual National Dialogue in the country. These national dialogues provide stakeholders an opportunity to discuss socioeconomic issues with the President of Zimbabwe. In the national dialogue, the President is subjected to questions from members of the public on a specific discussion topic/area.
                </div>
                <div className="h-20 w-full rounded bg-green-500 p-4 text-sm text-white">

                    The NECF seeks to continue to preserve and strengthen the role of business as the engine of economic growth, strengthening the platform for tripartite negotiations and initiatives and the generation of new ideas. The organization intends to continue with its dialogue convening mandate with an ultimate target of causing for widely accepted policy reforms.
                </div>
            </div>
        </div>
    )
}

export default AboutInfo