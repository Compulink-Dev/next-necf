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
            <div className="rounded-2xl bg-background/80 p-4 shadow-sm transition hover:shadow-md ring-1 ring-border/60">
                <div className="flex items-start gap-2 text-sm text-slate-600">
                    <img
                        src={`${image}`}
                        alt={`${title}`}
                        width={100} height={100}
                        className='rounded-xl ring-1 ring-border/50 object-cover flex-1 w-[200px] h-[100px]' />
                    <div className="space-y-2">
                        <p className="text-lg font-bold text-foreground">{title}</p>
                        <p className="text-emerald-800">{subtitle}</p>
                        <p className="text-muted-foreground">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProgramsCard