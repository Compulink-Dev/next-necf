import React from 'react'
import BackButton from '@/components/backButton'
import EditTaskForce from '../../../_components/editTaskForce'
import getTask from '@/lib/download/getTask'


//@ts-ignore
async function DownloadEdit({ params: { id } }) {
    const download = await getTask(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditTaskForce download={download} />
        </div>
    )
}

export default DownloadEdit