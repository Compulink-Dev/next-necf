import React from 'react'
import BackButton from '@/components/backButton'
import getDownload from '@/lib/download/getDownload'
import EditQuarterly from '../../../_components/editQuarterly'
import getQuarter from '@/lib/download/getQaurter'


//@ts-ignore
async function DownloadEdit({ params: { id } }) {
    const download = await getQuarter(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditQuarterly download={download} />
        </div>
    )
}

export default DownloadEdit