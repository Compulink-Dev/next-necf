import React from 'react'
import TeamCard from './TeamsCard'

//@ts-ignore
function TeamList({ teams }) {
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