import React from 'react'
import BackButton from '@/components/backButton'
import EditService from '../../_components/EditService'
import getService from '@/lib/(home)/service/getService'

//@ts-ignore
async function ServiceEdit({ params: { id } }) {
    const service = await getService(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditService service={service} />
        </div>
    )
}

export default ServiceEdit