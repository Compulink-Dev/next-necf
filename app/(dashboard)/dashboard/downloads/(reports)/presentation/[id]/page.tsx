import React from 'react'
import BackButton from '@/components/backButton'
import getDownload from '@/lib/download/getDownload'
import EditPresentation from '../../../_components/editPresntation'
import getPresentation from '@/lib/download/getPresentations'


//@ts-ignore
async function DownloadEdit({ params: { id } }) {
    const download = await getPresentation(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditPresentation download={download} />
        </div>
    )
}

export default DownloadEdit