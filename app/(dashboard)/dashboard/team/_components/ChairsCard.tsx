import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface TeamProps {
    link: String
    title: String
    position: String,
    image: String,
    id: String
}


function ChairsCard({ link, title, position, image, id }: TeamProps) {
    return (
        <Link href={`/dashboard/team/chair/${id}`}>
            <div
                className='rounded-2xl bg-background/80 p-4 shadow-sm transition hover:shadow-md ring-1 ring-border/60'>
                <div className="flex gap-2">
                    <div className="">
                        <Image src={`/${image}`} alt='' height={80} width={80} className='w-full h-32 rounded-xl ring-1 ring-border/50 object-cover' />
                    </div>
                    <div className="">
                        <p className="text-lg font-bold capitalize text-foreground">{title}</p>
                        <p className="capitalize text-sm text-emerald-700">{position}</p>
                        <div className="">
                            <p className="capitalize text-sm text-muted-foreground">{link}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ChairsCard