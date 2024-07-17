import React from 'react'
import BackButton from '@/components/backButton'
import EditDownload from '../_components/editDownload'
import getDownload from '@/lib/download/getDownload'
import DeleteButton from '../../_components/DeleteButton'



//@ts-ignore
async function DownloadEdit({ params: { id } }) {
    const download = await getDownload(id)

    async function handleDelete() {
        try {

            const res = await fetch(`/api/downloads/${id}`, {
                method: 'DELETE'
            })
            const data = await res.json()
            console.log("Button id", id);
            return data
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <div className='p-4'>
            <div className="flex items-center justify-end gap-2">
                <BackButton />

            </div>
            <EditDownload download={download} />
        </div>
    )
}

export default DownloadEdit