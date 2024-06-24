import React from 'react'
import { ProgrammeCard } from './programmeCard'
import { connectToDB } from '@/lib/connectToDB';
import Program from "@/models/(programs)/program";
import getPrograms from '@/lib/(programs)/program/getPrograms';

// export async function loadProgram() {
//     await connectToDB()
//     const programs = await Program.find()
//     return programs
// }


async function ProgrammeList() {

    const programs = await getPrograms()

    return (
        <div className=''>
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