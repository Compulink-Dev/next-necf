import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'

interface CardProps {
    image: string
    name: string
    email: string
    contact: string
    link: string
}

function ContactCard({ image, name, email, contact, link }: CardProps) {
    return (
        <Link className='border w-full h-24 p-2 rounded' href={`/contact/${link}`}>
            <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <Image src={image} alt='' width={50} height={50} className='rounded-full w-20 h-20 object-cover' />
                    <div className="">
                        <p className="font-bold text-slate-700">{name}</p>
                        <p className="text-sm text-slate-500">{email}</p>
                        <p className="text-sm text-slate-500">{contact}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant={'outline'} className='flex items-center gap-2'>
                        <MdEdit />
                        <p className="">Edit</p>
                    </Button>
                    <Button className='bg-red-500 hover:bg-red-800 flex items-center gap-2'>
                        <MdDelete />
                        <p className="">Delete</p>
                    </Button>
                </div>
            </div>
        </Link>
    )
}

export default ContactCard