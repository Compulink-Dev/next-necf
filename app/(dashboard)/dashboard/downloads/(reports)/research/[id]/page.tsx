import React from 'react'
import BackButton from '@/components/backButton'
import getResearch from '@/lib/download/getResearch'
import EditResearch from '../../../_components/editResearch'


//@ts-ignore
async function DownloadEdit({ params: { id } }) {
    const download = await getResearch(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditResearch download={download} />
        </div>
    )
}

export default DownloadEdit