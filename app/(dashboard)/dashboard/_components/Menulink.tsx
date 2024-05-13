'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


function MenuLink({ data }: any) {

    const pathName = usePathname()
    return (
        <Link href={data.path} className={`flex gap-2 items-center ${pathName === data.path && 'bg-green-600 text-white'}  p-2 mb-2 w-full md:w-[180px] rounded `}>
            {data.icon}
            {data.title}
        </Link>
    )
}

export default MenuLink