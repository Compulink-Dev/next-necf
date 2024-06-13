// 'use client'
// import * as React from 'react';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { Button } from '@/components/ui/button';
import { connectToDB } from '@/lib/connectToDB';
import Vacancy from '@/models/vacancy';

export async function loadVacancy() {
    await connectToDB()
    const vacancies = await Vacancy.find()
    return vacancies
}

import React from 'react'
import { JobModal } from './jobModal';

async function VacancyTable() {

    const vacancies = await loadVacancy()

    return (
        <div className='shadow p-4 border'>
            {
                vacancies.map((vacancy) => (
                    <div
                        key={vacancy.name}
                        className="flex items-center justify-between  border-b mb-4">
                        <div className="space-y-1 mb-4">
                            <p className="text-lg font-bold">{vacancy.name}</p>
                            <p className="text-sm text-slate-600">{vacancy.jobType}</p>
                            <p className="text-sm text-slate-600">{vacancy.dueDate}</p>
                        </div>
                        <div className="">
                            <JobModal />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default VacancyTable
