import React from 'react'
import { connectToDB } from '@/lib/connectToDB'
import Link from 'next/link'
import Image from 'next/image'
import AboutSecond from '@/models/(about)/aboutSecond'
import { MdOutlineDocumentScanner } from 'react-icons/md'

type AboutSecondDoc = {
    id?: string
    _id?: unknown
    image?: string
    title?: string
    title2?: string
    title3?: string
    title4?: string
}

export async function loadAbout() {
    await connectToDB()
    const abouts = await AboutSecond.find()
    return abouts
}

export const TopCard = ({ about }: { about: AboutSecondDoc }) => {
    return (
        <div className='rounded-2xl bg-background/80 p-4 shadow-sm transition hover:shadow-md ring-1 ring-border/60'>
            <Link
                href={`/dashboard/about/second/${about.id}`}
                className="flex items-start gap-2 w-full">
                <div className="w-[400px]">
                    <Image
                        src={`${about.image}`}
                        alt={about.title ?? ""}
                        width={100}
                        height={100}
                        className='w-full rounded-xl ring-1 ring-border/50 object-cover'
                    />
                </div>
                <div className="text-sm text-slate-600 space-y-6">
                    <div className="space-y-4">
                        <div className="flex gao-2">
                            <MdOutlineDocumentScanner className='text-emerald-600 text-lg pr-2' />
                            <p className="text-foreground font-medium">{about.title}</p>
                        </div>
                        <div className="flex gao-2">
                            <MdOutlineDocumentScanner className='text-emerald-600 text-lg pr-2' />
                            <p className="text-muted-foreground">{about.title2}</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gao-2">
                            <MdOutlineDocumentScanner className='text-emerald-600 text-lg pr-2' />
                            <p className="text-muted-foreground">{about.title3}</p>
                        </div>
                        <div className="flex gao-2">
                            <MdOutlineDocumentScanner className='text-emerald-600 text-lg pr-2' />
                            <p className="text-muted-foreground">{about.title4}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}


async function SecondList() {
    const abouts = await loadAbout()
    return (
        <div className='flex flex-col gap-4'>
            {
                abouts.map((about: AboutSecondDoc) => {
                    return (
                        <TopCard
                            key={about.id}
                            about={about} />
                    )
                })
            }
        </div>
    )
}

export default SecondList