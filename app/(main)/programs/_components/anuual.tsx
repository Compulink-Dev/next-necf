import getAnnuals from "@/lib/(programs)/annual/getAnnuals";
import { ProgrammeCard } from "./programmeCard";
import React from 'react'

async function AnnualList
    () {
    const annuals = await getAnnuals()
    return (
        <div className="col-span-1 gap-10 flex flex-wrap mt-8">
            {
                annuals.map((annual: any) => {
                    return (

                        <ProgrammeCard
                            key={annual.id}
                            title={annual.title}
                            desc={annual.description}
                            image={annual.image}
                        />

                    )
                })
            }

        </div>
    )
}

export default AnnualList
