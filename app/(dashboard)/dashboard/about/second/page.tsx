import React from 'react'
import BackButton from '@/components/backButton'
import getTop from '@/lib/(about)/aboutTop/getTop'
import EditMain from '../../home/_components/EditMain'
import getSecond from '@/lib/(about)/aboutSecond/getSecond'

//@ts-ignore
async function ProgramEdit({ params: { id } }) {
    const program = await getSecond(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditMain section={program} />
        </div>
    )
}

export default ProgramEdit