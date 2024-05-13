import Image from 'next/image'
import React from 'react'

function AboutGallery() {
    return (
        <div className=''>
            <p className="text-2xl font-bold">About Gallery</p>


            <div className="grid gap-4">
                <div>
                    <Image width={300} height={300} className="h-auto max-w-full rounded-lg" src="/necf.png" alt="" />
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div>
                        <Image width={300} height={300} className="h-auto max-w-full rounded-lg" src="/necf.png" alt="" />
                    </div>
                    <div>
                        <Image width={300} height={300} className="h-auto max-w-full rounded-lg" src="/necf.png" alt="" />
                    </div>
                    <div>
                        <Image width={300} height={300} className="h-auto max-w-full rounded-lg" src="/necf.png" alt="" />
                    </div>
                    <div>
                        <Image width={300} height={300} className="h-auto max-w-full rounded-lg" src="/necf.png" alt="" />
                    </div>
                    <div>
                        <Image width={300} height={300} className="h-auto max-w-full rounded-lg" src="/necf.png" alt="" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutGallery