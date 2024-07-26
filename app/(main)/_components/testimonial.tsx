import React from 'react'
import Slider from './slider'
import getTestimonials from '@/lib/(home)/testimonial/getTestimonials'

async function Testimonial() {

    const data = await getTestimonials()

    console.log("Testimonials", data);


    return (
        <div className="">
            <Slider
                data={data}
            />
        </div>
    )
}

export default Testimonial