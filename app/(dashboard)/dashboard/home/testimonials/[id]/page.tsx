import React from 'react'
import EditHero from '../../_components/EditHero'
import BackButton from '@/components/backButton'
import getHero from '@/lib/(home)/hero/getHero'

//@ts-ignore
async function ProgramEdit({ params: { id } }) {
    const hero = await getHero(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditHero hero={hero} />
        </div>
    )
}

export default ProgramEdit