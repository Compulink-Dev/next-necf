import React from 'react'
import { connectToDB } from '@/lib/connectToDB'
import Download from '@/models/(downloads)/download'
import Link from 'next/link'
import { MdTimer } from 'react-icons/md'

const ITEMS_PER_PAGE = 10

interface DownloadProps {
    title: String
    document: String
    imageUrl: String
    date: String
    link: String
}


export function DownloadCard({ title, document, imageUrl, date, link }: DownloadProps) {
    return (
        <Link href={`/dashboard/downloads/${link}`}>
            <div className="border p-4 shadow rounded flex items-center justify-between">
                <div className="flex flex-col gap-4 text-sm text-slate-600">
                    <p className="text-lg font-bold text-black">{title}</p>
                    <div className="flex gap-4">
                        <p className="">{document}</p>
                        <p className="">{imageUrl}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                    <MdTimer />
                    <p className="">{date}</p>
                </div>
            </div>
        </Link>
    )
}

export async function loadDownload(page: number = 1) {
    await connectToDB()
    const skip = (page - 1) * ITEMS_PER_PAGE
    const downloads = await Download.find().skip(skip).limit(ITEMS_PER_PAGE)
    return downloads
}

export async function getTotalPages() {
    await connectToDB()
    const total = await Download.countDocuments()
    return Math.ceil(total / ITEMS_PER_PAGE)
}

async function DownloadList({ page = 1 }: { page?: number }) {
    const downloads = await loadDownload(page)
    const totalPages = await getTotalPages()

    return (
        <div className='flex flex-col gap-4'>
            {
                downloads.map((download: any) => {
                    return (
                        <DownloadCard
                            key={download.id}
                            link={download.id}
                            title={download.title}
                            document={download.document}
                            imageUrl={download.imageUrl}
                            date={download.date}
                        />
                    )
                })
            }
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                    {page > 1 && (
                        <Link
                            href={`/dashboard/downloads?page=${page - 1}`}
                            className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-500"
                        >
                            Previous
                        </Link>
                    )}
                    <span className="text-sm text-slate-600">
                        Page {page} of {totalPages}
                    </span>
                    {page < totalPages && (
                        <Link
                            href={`/dashboard/downloads?page=${page + 1}`}
                            className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-500"
                        >
                            Next
                        </Link>
                    )}
                </div>
            )}
        </div>
    )
}

export default DownloadList
