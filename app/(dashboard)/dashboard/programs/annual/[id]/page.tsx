import React from 'react'
import BackButton from '@/components/backButton'
import EditAnnual from '../../_components/EditAnnual'
import getAnnual from '@/lib/download/getAnnual'

//@ts-ignore
async function ProgramEdit({ params: { id } }) {
    const program = await getAnnual(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditAnnual program={program} />
        </div>
    )
}

export default ProgramEdit