import React from 'react'
import VacanciesCard from './vacanciesCard'

//@ts-ignore
function VacancyList({ vacancies }) {
    return (
        <div className='flex flex-col gap-4'>
            {
                vacancies.map((vacancy: any) => {
                    return (
                        <VacanciesCard
                            key={vacancy.id}
                            link={vacancy.id}
                            name={vacancy.name}
                            jobType={vacancy.jobType}
                            dueDate={vacancy.dueDate}
                        />
                    )
                })
            }
        </div>
    )
}

export default VacancyList