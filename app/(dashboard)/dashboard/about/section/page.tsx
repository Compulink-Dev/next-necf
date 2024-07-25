import React from 'react'
import BackButton from '@/components/backButton'
import getTop from '@/lib/(about)/aboutTop/getTop'
import EditMain from '../../home/_components/EditMain'
import getSecond from '@/lib/(about)/aboutSecond/getSecond'
import EditSection from '../_components/EditSection'
import getSection from '@/lib/(home)/section/getSection'

//@ts-ignore
async function ProgramEdit({ params: { id } }) {
    const program = await getSection(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditSection gallery={program} />
        </div>
    )
}

export default ProgramEdit