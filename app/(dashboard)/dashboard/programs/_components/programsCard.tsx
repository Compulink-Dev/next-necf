import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface VacancyProps {
    title: String
    description: String
    image: String
    link: String,
    route: String,
    subtitle: String
}


function ProgramsCard({ title, description, subtitle, image, link, route }: VacancyProps) {
    return (
        <Link
            href={`/dashboard/programs/${route}/${link}`}>
            <div className="border p-4 shadow rounded">
                <div className="flex items-start gap-2 text-sm text-slate-600">
                    <img
                        src={`${image}`}
                        alt={`${title}`}
                        width={100} height={100}
                        className='rounded border flex-1 w-[200px] h-[100px]' />
                    <div className="space-y-2">
                        <p className="text-lg font-bold">{title}</p>
                        <p className="">{subtitle}</p>
                        <p className="">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProgramsCard