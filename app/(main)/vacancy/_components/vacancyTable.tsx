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

async function VacancyTable() {

    const vacancies = await loadVacancy()

    return (
        <div className='shadow p-4 border'>
            {
                vacancies.map((vacancy) => (
                    <div
                        key={vacancy.name}
                        className="">{vacancy.name}</div>
                ))
            }
        </div>
    )
}

export default VacancyTable
