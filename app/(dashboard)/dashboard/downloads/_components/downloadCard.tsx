import Link from 'next/link'
import React from 'react'
import { MdTimer } from 'react-icons/md'

interface DownloadProps {
    title: String
    document: String
    imageUrl: String
    date: String
    link: String
    route: String
}


function DownloadCard({ title, document, imageUrl, date, link, route }: DownloadProps) {
    return (
        <Link href={`/dashboard/downloads/${route}/${link}`}>
            <div className="rounded-2xl bg-background/80 p-4 shadow-sm transition hover:shadow-md ring-1 ring-border/60 flex items-center justify-between">
                <div className="flex flex-col gap-4 text-sm text-slate-600">
                    <p className="text-lg font-bold text-foreground">{title}</p>
                    <div className="flex gap-4">
                        <p className="text-muted-foreground">{document}</p>
                        <p className="text-muted-foreground">{imageUrl}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground text-right whitespace-nowrap">
                    <MdTimer />
                    <p className="">{date}</p>
                </div>
            </div>
        </Link>
    )
}

export default DownloadCard