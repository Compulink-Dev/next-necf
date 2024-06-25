import React from 'react'
import BackButton from '@/components/backButton'
import EditEvent from '../../_components/EventEdit';
import getEvent from '@/lib/home/getMainEvent';



//@ts-ignore
async function EventEdit({ params: { id } }) {
    const event = await getEvent(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditEvent event={event} />
        </div>
    )
}

export default EventEdit