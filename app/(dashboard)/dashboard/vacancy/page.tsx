import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import VacancyForm from './_components/vacancyForm'
import AddVacancy from './_components/addVacancy'

function Vacancy() {
    return (
        <div className='p-8'>
            {/* <AddVacancy /> */}
            <VacancyForm />
        </div>
    )
}

export default Vacancy