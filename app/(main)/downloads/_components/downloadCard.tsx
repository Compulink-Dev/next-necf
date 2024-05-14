import { Button } from '@/components/ui/button';
import { Timer } from 'lucide-react';
import { FaBook } from "react-icons/fa";
import React from 'react'

interface DownloadProps {
    imageUrl: string,
    title: string,
    year: number;
    month: number;
    day: number;
}

function DownloadCard() {
    return (
        <div className='h-auto bg-green-500 w-full rounded p-6 flex flex-col md:flex-row items-center gap-4'>
            <div className="h-40 bg-white w-36 rounded"></div>
            <div className="flex flex-col gap-2">
                <div className="text-white flex items-center gap-2">
                    <Timer className='text-white' />
                    <p className="">23-07-2024</p>
                </div>
                <div className="text-white flex items-center gap-2">
                    <FaBook className='text-white' />
                    <p className="text-sm">MINISTRY OF FINANCE-HIGH LEVEL DIALOGUE PRESENTATION</p>
                </div>
                <Button className='bg-green-900 hover:bg-green-700'>Download</Button>
            </div>
        </div>
    )
}

export default DownloadCard