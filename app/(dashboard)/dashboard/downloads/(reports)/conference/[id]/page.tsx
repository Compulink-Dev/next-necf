import React from 'react'
import BackButton from '@/components/backButton'
import EditConference from '../../../_components/editConference'
import getConference from '@/lib/download/getConference'

//@ts-ignore
async function ConferenceEdit({ params: { id } }) {
    const download = await getConference(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditConference download={download} />
        </div>
    )
}

export default ConferenceEdit