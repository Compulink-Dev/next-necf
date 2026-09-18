import React from 'react'
import { connectToDB } from '@/lib/connectToDB'
import AboutGallery from '@/models/(about)/aboutGallery'
import { PaginatedImageGrid, type GridItem } from '@/components/gallery/paginatedGrid'

type AboutDoc = {
    id?: string
    _id?: unknown
    title?: string
    image?: string
}

export async function loadAbout(): Promise<GridItem[]> {
    await connectToDB()
    const abouts = await AboutGallery.find()
    return abouts.map((about: AboutDoc) => ({
        id: String(about.id ?? about._id),
        title: about.title ?? "",
        image: about.image ?? "",
    }))
}

async function GalleryList() {
    const abouts = await loadAbout()
    return (
        <PaginatedImageGrid
            items={abouts}
            basePath="/dashboard/about/gallery"
        />
    )
}

export default GalleryList