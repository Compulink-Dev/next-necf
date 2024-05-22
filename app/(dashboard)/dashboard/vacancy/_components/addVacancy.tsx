import React from 'react'
import VacancyForm from './vacancyForm'

const getVacancy = async () => {
    try {
        const res = await fetch("api/vacancy", {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error("Failed to fetch vacancy")
        }

        return res.json()
    } catch (error) {
        console.log("Error loading vacancy", error);

    }
}

async function AddVacancy() {
    const { vacancy } = await getVacancy()
    console.log(vacancy._id);

    return (
        <div className='p-8'>

        </div>
    )
}

export default AddVacancy