import React from 'react'
import getTeam from '@/lib/team/getTeam'
import BackButton from '@/components/backButton'
import EditCore from '../../_components/EditCore';
import getCore from '@/lib/team/getCore';


//@ts-ignore
async function TeamCore({ params: { id } }) {
    const team = await getCore(id)
    console.log(team);

    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditCore team={team} />
        </div>
    )
}

export default TeamCore