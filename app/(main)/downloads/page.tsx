import MainLayout from '@/components/layout'
import React from 'react'
import DownloadCard from './_components/downloadCard'
import { Quarters } from './_components/quarters'
import { DownloadAccordion } from './_components/downloadAccordion'
import { IoIosCloudDownload } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";
import { connectToDB } from '@/lib/connectToDB'
import Download from '@/models/(downloads)/download'

async function getDownloads() {
    await connectToDB()
    const downloads = await Download.find()
    return downloads;
}


async function Downloads() {

    const downloads = await getDownloads()
    return (
        <MainLayout>
            <div className='px-12 py-6'>
                <div className="flex gap-2 items-center mb-8 text-green-500">
                    <IoIosCloudDownload className='text-5xl ' />
                    <p className="text-2xl font-bold">Downloads</p>
                </div>
                <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 items-center gap-4">
                    {
                        downloads.map((download: any) => (
                            <DownloadCard
                                title={download.title}
                                date={download.date}
                                document={download.document}
                                key={download.document}
                            />
                        ))
                    }
                </div>
                <div className="">
                    <div className="flex gap-2 items-center  text-green-500">
                        <BiSolidReport className='text-5xl' />
                        <p className="text-2xl font-bold my-8">Reports</p>
                    </div>
                    <Quarters />
                </div>
            </div>
        </MainLayout>
    )
}

export default Downloads