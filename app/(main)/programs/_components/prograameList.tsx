import React from 'react'
import { ProgrammeCard } from './programmeCard'
import { connectToDB } from '@/lib/connectToDB';
import Program from "@/models/(programs)/program";


export async function getPrograms() {
    await connectToDB()
    const program = await Program.find()
    return program;
}


async function ProgrammeList() {

    const programs = await getPrograms()

    return (
        <div className='w-full'>
            {
                programs.map((program: any) => {
                    return (
                        <ProgrammeCard
                            key={program.title}
                            image={program.image}
                            title={program.title}
                            desc={program.description}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProgrammeList