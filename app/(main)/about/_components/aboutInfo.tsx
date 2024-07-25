import getSeconds from '@/lib/(about)/aboutSecond/getSeconds'
import Image from 'next/image'
import React from 'react'

async function AboutInfo() {

    const data = await getSeconds()

    const title = data[0].title
    const title2 = data[0].title2
    const title3 = data[0].title3
    const title4 = data[0].title4
    const image = data[0].image

    return (
        <div className='my-12 flex items-center gap-6'>
            <div className="">
                <Image
                    src={`${image}`}
                    alt=''
                    width={300}
                    height={300}
                    className='w-full rounded'
                />
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <div className="h-20 w-full rounded bg-green-500 p-4 text-sm text-white">
                    {title}
                </div>
                <div className="h-20 w-full rounded bg-green-500 p-4 text-sm text-white">
                    {title2}
                </div>
                <div className="h-20 w-full rounded bg-green-500 p-4 text-sm text-white">
                    {title3}
                </div>
                <div className="h-20 w-full rounded bg-green-500 p-4 text-sm text-white">
                    {title4}
                </div>
            </div>
        </div>
    )
}

export default AboutInfo