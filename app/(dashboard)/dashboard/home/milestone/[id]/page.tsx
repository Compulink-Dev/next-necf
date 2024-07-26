import React from 'react'
import BackButton from '@/components/backButton'
import EditMilestone from '../../_components/EditMilestone'
import getMilestone from '@/lib/(home)/milestone/getMilestone'

//@ts-ignore
async function ProgramEdit({ params: { id } }) {
    const section = await getMilestone(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditMilestone section={section} />
        </div>
    )
}

export default ProgramEdit