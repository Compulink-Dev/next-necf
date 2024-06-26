import React from 'react'
import BackButton from '@/components/backButton'
import EditConference from '../../../_components/editConference'
import getConference from '@/lib/download/getConference'
import EditMonthly from '../../../_components/editMonthly'

//@ts-ignore
async function MonthlyEdit({ params: { id } }) {
    const download = await getConference(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditMonthly download={download} />
        </div>
    )
}

export default MonthlyEdit