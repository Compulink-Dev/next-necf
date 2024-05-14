import MainLayout from '@/components/layout'
import React from 'react'
import DownloadCard from './_components/downloadCard'
import { Quarters } from './_components/quarters'
import { DownloadAccordion } from './_components/downloadAccordion'
import { IoIosCloudDownload } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";


function Downloads() {
    return (
        <MainLayout>
            <div className='px-12 py-6'>
                <div className="flex gap-2 items-center mb-8 text-green-500">
                    <IoIosCloudDownload className='text-5xl ' />
                    <p className="text-2xl font-bold">Downloads</p>
                </div>
                <div className="my-4 flex flex-col md:flex-row items-center gap-4">
                    <DownloadCard />
                    <DownloadCard />
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