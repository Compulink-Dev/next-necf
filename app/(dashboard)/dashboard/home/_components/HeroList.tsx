import { connectToDB } from '@/lib/connectToDB'
import Hero from '@/models/(home)/hero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function loadHero() {
    await connectToDB()
    const heros = await Hero.find()
    return heros
}


async function HeroList() {
    const heros = await loadHero()

    console.log("Hero : ", heros);
    return (
        <div className='grid grid-col-3 gap-4'>
            {
                heros.map((hero: any) => (
                    <Link
                        className='w-auto'
                        key={hero.id}
                        href={`/dashboard/home/hero/${hero.id}`}>
                        <div className="border p-4 shadow rounded mb-4 w-auto">
                            <div className="flex items-start gap-4">
                                <Image
                                    src={hero.image}
                                    alt={hero.title}
                                    width={200} height={200}
                                    className='rounded border' />
                            </div>
                            <div className="">
                                <p className="">{hero.title}</p>
                                <p className="">{hero.description}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div >
    )
}

export default HeroList