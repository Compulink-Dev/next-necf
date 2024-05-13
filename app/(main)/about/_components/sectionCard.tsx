import { Colors } from '@/constants/colors'
import React from 'react'

function SectionCard() {
    return (
        <div
            style={{ backgroundColor: Colors.primary }}
            className='bg-green-700 h-40 rounded p-4 text-white'>
            <div className="">Section</div>
        </div>
    )
}

export default SectionCard