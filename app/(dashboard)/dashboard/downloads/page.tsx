import React from 'react'
import { DownloadTab } from './_components/downloadTab'

async function Downloads({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page } = await searchParams
    return (
        <div className='p-8'>
            <DownloadTab currentPage={page ? parseInt(page) : 1} />
        </div>
    )
}

export default Downloads
