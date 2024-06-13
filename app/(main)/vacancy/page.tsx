import MainLayout from '@/components/layout'
import React from 'react'
import Category from './_components/category'
import JobTable from './_components/jobTable'
import VacancyTable from './_components/vacancyTable'
import Image from 'next/image'



function Vacancy() {

    const image2 = '/mutize.jpeg'
    const image = 'https://res.cloudinary.com/dxkna0tuc/image/upload/v1716906145/necf/i9efes1xwl2hlhsgppzd.jpg'
    return (
        <MainLayout>
            <div className='px-12 pb-12'>
                <div className="">
                    <Category />
                </div>
                <div className="my-8">
                    <p className="text-lg font-bold">Top Jobs (Available)</p>
                    <p className="text-sm">Listing released just when you visited our website.</p>
                </div>
                <div className="my-12">
                    <VacancyTable />
                </div>
                <img
                    alt=''
                    width={200}
                    height={200}
                    src={`${image}`} />
            </div>
        </MainLayout>
    )
}

export default Vacancy