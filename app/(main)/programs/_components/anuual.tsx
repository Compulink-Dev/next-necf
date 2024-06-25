import getAnnuals from "@/lib/(programs)/annual/getAnnuals";
import { ProgrammeCard } from "./programmeCard";
import React from 'react'
import { ProgramModal } from "./programModal";

async function AnnualList
    () {
    const annuals = await getAnnuals()
    return (
        <div className="col-span-1 gap-4 flex flex-wrap mt-8">
            {
                annuals.map((annual: any) => {
                    return (

                        <ProgramModal
                            key={annual.id}
                            title={annual.title}
                            description={annual.description}
                            image={annual.image}
                        />

                    )
                })
            }

        </div>
    )
}

export default AnnualList
