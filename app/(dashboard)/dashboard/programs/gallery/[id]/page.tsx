import React from 'react'
import BackButton from '@/components/backButton'
import EditGallery from '../../_components/EditGallery'
import getGallery from '@/lib/(programs)/gallery/getGallery'


//@ts-ignore
async function GalleryEdit({ params: { id } }) {
    const gallery = await getGallery(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditGallery gallery={gallery} />
        </div>
    )
}

export default GalleryEdit