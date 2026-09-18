import { connectToDB } from '@/lib/connectToDB'
import TaskForce from '@/models/(programs)/taskforce'
import React from 'react'
import ProgramsCard from './programsCard'
import Annual from '@/models/(programs)/annual'
import Link from 'next/link'
import Image from 'next/image'

export async function loadTasks() {
    await connectToDB()
    const tasks = await Annual.find()
    return tasks
}


async function AnnualList() {
    const tasks = await loadTasks()
    return (
        <div className=''>
            {
                tasks.map((task) => (
                    <Link
                        className=''
                        key={task.id}
                        href={`/dashboard/programs/annual/${task.id}`}>
                        <div className="rounded-2xl bg-background/80 p-4 shadow-sm transition hover:shadow-md ring-1 ring-border/60 mb-4">
                            <div className="flex items-start gap-2 text-sm text-slate-600">
                                <Image
                                    src={task.image}
                                    alt={task.title}
                                    width={200} height={200}
                                    className='rounded-xl ring-1 ring-border/50 object-cover' />
                                <div className="space-y-2">
                                    <p className="text-lg font-bold text-foreground">{task.title}</p>
                                    <p className="font-medium text-emerald-800">{task.subtitle}</p>
                                    <p className="text-muted-foreground">{task.description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default AnnualList