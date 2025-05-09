import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface TeamProps {
    link: String
    title: String
    position: String,
    image: String
}


function TeamCard({ link, title, position, image }: TeamProps) {
    return (
        <Link href={`/dashboard/team/${link}`}>
            <div
                className='border p-4 shadow rounded'>
                <div className="flex gap-2">
                    <div className="">
                        <img src={`${image}`} alt='image' height={80} width={80} className='w-full h-32 border rounded' />
                    </div>
                    <div className="">
                        <p className="text-lg font-bold capitalize">{title}</p>
                        <p className="capitalize text-sm text-slate-600">{position}</p>
                        <div className="">
                            <p className="capitalize text-sm text-slate-600">{link}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TeamCard