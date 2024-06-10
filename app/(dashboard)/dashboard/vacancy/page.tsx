import React from 'react'
import CreateButton from '@/components/createButton'
import VacancyList from './_components/vacancyList';



async function Vacancy() {
    return (
        <div className='p-4'>
            <div className="pb-4 flex justify-end">
                <CreateButton link={'vacancy'} />
            </div>
            <div>
                <VacancyList />
            </div>
        </div>
    )
}

export default Vacancy