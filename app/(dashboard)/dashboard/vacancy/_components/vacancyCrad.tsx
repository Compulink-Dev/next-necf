import DeleteButton from '@/components/deleteButton'
import EditButton from '@/components/editButton'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdEdit } from 'react-icons/md'

async function VacancyCard({ vacancy }: any) {
    console.log(vacancy.id);

    return (
        <div className='border shadow p-4'>
            <div className="flex items-start justify-between">
                <div className="flex items-center justify-between gap-4">

                    <p className="">{vacancy.title}</p>
                    <p className="">{vacancy.position}</p>
                    <p className="">{vacancy.link}</p>
                </div>
                <div className="flex gap-4">
                    <Link href={`/dashboard/team/edit/${vacancy.id}`}>
                        <EditButton />
                    </Link>
                    <DeleteButton id={vacancy.id} link={'vacancy'} />
                </div>
            </div>
        </div>
    )
}

export default VacancyCard