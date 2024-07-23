import React from 'react'
import BackButton from '@/components/backButton'
import EditMain from '../../_components/EditMain'
import getSection from '@/lib/(home)/section/getSection'

//@ts-ignore
async function ProgramEdit({ params: { id } }) {
    const section = await getSection(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditMain section={section} />
        </div>
    )
}

export default ProgramEdit