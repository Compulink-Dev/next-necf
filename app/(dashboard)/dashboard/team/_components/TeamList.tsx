import React from 'react'
import TeamCard from './TeamsCard'
import { connectToDB } from '@/lib/connectToDB'
import Team from '@/models/teams/team'


export async function loadTeam() {
    await connectToDB()
    const teams = await Team.find()
    return teams
}


//@ts-ignore
async function TeamList() {

    const teams = await loadTeam()

    return (
        <div className='flex flex-col gap-4' >
            {
                teams.map((team: any) => {
                    return (
                        <TeamCard
                            key={team.id}
                            link={team.id}
                            title={team.title}
                            position={team.position}
                            image={team.image}
                        />
                    )
                })
            }
        </div>
    )
}

export default TeamList