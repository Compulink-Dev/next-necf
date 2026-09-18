import React from 'react'
import { connectToDB } from '@/lib/connectToDB'
import AboutTop from '@/models/(about)/aboutTop'
import Link from 'next/link'
import { MdEditDocument } from 'react-icons/md'

type AboutTopDoc = {
    id?: string
    _id?: unknown
    title?: string
    title2?: string
}

export async function loadAbout() {
    await connectToDB()
    const abouts = await AboutTop.find()
    return abouts
}

export const TopCard = ({ about }: { about: AboutTopDoc }) => {
    return (
        <div className='rounded-2xl bg-background/80 p-4 shadow-sm transition hover:shadow-md ring-1 ring-border/60'>
            <Link
                href={`/dashboard/about/top/${about.id}`}
                className="flex items-center justify-between w-full">
                <div className="text-sm text-slate-600 space-y-6">
                    <div className="flex items-center gap-2">
                        <MdEditDocument className={'text-2xl text-emerald-500'} />
                        <p className="text-foreground font-medium">{about.title}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdEditDocument className={'text-2xl text-emerald-500'} />
                        <p className="text-muted-foreground">{about.title2}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}


async function TopList() {
    const abouts = await loadAbout()
    return (
        <div className='flex flex-col gap-4'>
            {
                abouts.map((about: AboutTopDoc, index) => {
                    return (
                        <TopCard
                            key={index}
                            about={about} />
                    )
                })
            }
        </div>
    )
}

export default TopList