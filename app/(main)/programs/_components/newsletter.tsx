import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewsLetter() {
    return (
        <div className='my-12 px-8'>
            <div className="flex gap-4 items-center">
                <Link
                    target='_blank'
                    href={'https://www.herald.co.zw/'} className=''>
                    <Image src={'/logo.webp'} alt='' className='' width={200} height={200} />
                </Link>
                <Link
                    target='_blank'
                    href={'https://x.com/nickmangwana'}
                    className='p-2 rounded border'>
                    <p className="text-lg font-bold">Nick Munagagwa</p>
                </Link>
            </div>
        </div>
    )
}

export default NewsLetter