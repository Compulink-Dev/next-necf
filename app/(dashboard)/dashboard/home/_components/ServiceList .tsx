import { connectToDB } from '@/lib/connectToDB'
import Service from '@/models/(home)/service'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function loadSection() {
    await connectToDB()
    const services = await Service.find()
    return services
}


async function ServiceList() {
    const services = await loadSection()
    return (
        <div className='grid grid-col-3 gap-4'>
            {
                services.map((service: any) => (
                    <Link
                        className='w-auto'
                        key={service.id}
                        href={`/dashboard/home/service/${service.id}`}>
                        <div className="border p-4 shadow rounded mb-4 w-auto">
                            <div className="flex items-start gap-4">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={200} height={200}
                                    className='rounded border' />
                                <div className="space-y-2">
                                    <p className="text-lg font-bold">{service.title}</p>
                                    <p className="">{service.description}</p>
                                    <p className="font-bold">{service.title2}</p>
                                    <p className="">{service.description2}</p>
                                    <p className="font-bold">{service.title3}</p>
                                    <p className="">{service.description3}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div >
    )
}

export default ServiceList