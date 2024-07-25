import React from 'react'
import GalleryCard from './galleryCard'
import getGalleries from '@/lib/(programs)/gallery/getGalleries'
import { GalleryModal } from './galleryModal'


async function Gallery() {

    const galleries = await getGalleries()

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                galleries.map((gallery: any) => (
                    <GalleryModal
                        key={gallery.id}
                        title={gallery.title}
                        description={gallery.description}
                        src={gallery.image}
                    />
                ))
            }
        </div>
    )
}

export default Gallery