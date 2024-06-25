import { galleries } from '@/constants/data'
import React from 'react'
import GalleryCard from './galleryCard'

function Gallery() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                galleries.map((gallery) => (
                    <GalleryCard
                        key={gallery.id}
                        title={gallery.title}
                        description={gallery.desc}
                        imageUrl={gallery.imageUrl}
                    />
                ))
            }
        </div>
    )
}

export default Gallery