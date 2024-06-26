import { Button } from '@/components/ui/button';
import { Timer } from 'lucide-react';
import { FaBook } from "react-icons/fa";
import React from 'react'
import { IoCloudDownloadSharp } from "react-icons/io5";
import Link from 'next/link';

interface DownloadProps {
    title: string,
    date: string
    document: string
}

function DownloadCard({ title, date, document }: DownloadProps) {
    return (
        <div className='h-auto bg-green-500 w-full rounded p-6 flex flex-col md:flex-row items-center gap-4'>
            <div className="h-40 bg-white w-36 rounded flex items-center justify-center">
                <IoCloudDownloadSharp className='text-4xl text-green-800' />
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <div className="text-white flex items-center gap-2">
                    <Timer className='text-white' />
                    <p className="">{date}</p>
                </div>
                <div className="text-white flex items-center gap-2">
                    <FaBook className='text-white' />
                    <p className="text-sm uppercase">{title}</p>
                </div>
                <Link
                    href={document}
                    target='_blank'
                    className='bg-green-900 hover:bg-green-700 px-4 py-2 rounded w-full mt-4'>
                    <p className="text-white text-center">Download</p>
                </Link>
            </div>
        </div>
    )
}

export default DownloadCard