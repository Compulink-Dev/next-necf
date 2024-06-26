import React from 'react'
import BackButton from '@/components/backButton'
import EditDownload from '../_components/editDownload'
import getDownload from '@/lib/download/getDownload'


//@ts-ignore
async function DownloadEdit({ params: { id } }) {
    const download = await getDownload(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditDownload download={download} />
        </div>
    )
}

export default DownloadEdit